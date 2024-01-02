import axios from "axios";
import checkLogin from "../../helpers/checkLogin";
import { GameState } from "..";
import { IGameDataRanking, IGameState } from "../../adapters/interfaces";

interface HandleStarting {
  setModalOpen(open: boolean): void;
  setUserName(userName: string): void;
  setGameState(state: GameState): void;
  setModalMessage(message: string): void;
  setGameData(gameData: IGameState): void;
  setRankingData(data: IGameDataRanking[]): void;
  setRankingTopTenData(data: IGameDataRanking[]): void;
}

export default async function handleStarting({
  setGameData,
  setUserName,
  setModalOpen,
  setGameState,
  setRankingData,
  setModalMessage,
  setRankingTopTenData,
}: HandleStarting) {
  try {
    checkLogin();
    const gameRequest = axios.get<IGameState>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://0.0.0.0:8080'}/games/start`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );
    const responseRanking = axios.get<IGameDataRanking[]>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://0.0.0.0:8080'}/users/`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );
    const responseRankingTopTen = axios.get<IGameDataRanking[]>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT ?? 'http://0.0.0.0:8080'}/ranking`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );

    const [
      gameResponse,
      rankingTopTenResponse,
      rankingResponse,
    ] = await Promise.all([
      gameRequest,
      responseRankingTopTen,
      responseRanking,
    ]);

    if (gameResponse.status !== 200 || rankingResponse.status !== 200 || rankingTopTenResponse.status !== 200) throw new Error('Serviço fora do ar no momento');

    const userInRanking = rankingResponse.data.find(user => user.name === gameResponse.data.user);
    setGameData({
      ...gameResponse.data,
      ...userInRanking,
    });

    setUserName(gameResponse.data.user);
    setRankingData(rankingResponse.data);
    setRankingTopTenData(rankingTopTenResponse.data);

    setGameState('waiting');
  } catch (error: any) {
    setModalMessage(error.message || 'Problema para iniciar a aplicação. Volte mais tarde!');
    setModalOpen(true);
  }
}
