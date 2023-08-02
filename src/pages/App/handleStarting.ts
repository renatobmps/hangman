import axios from "axios";
import checkLogin from "../../helpers/checkLogin";
import { GameState } from ".";
import { IGameDataRanking, IGameState } from "../../adapters/interfaces";

interface HandleStarting {
  setModalMessage(message: string): void;
  setModalOpen(open: boolean): void;
  setGameData(gameData: IGameState): void;
  setGameState(state: GameState): void;
  setRankingData(data: IGameDataRanking[]): void;
  setUserName(userName: string): void;
}

export default async function handleStarting({
  setModalMessage,
  setModalOpen,
  setGameData,
  setGameState,
  setRankingData,
  setUserName,
}: HandleStarting) {
  try {
    checkLogin();
    const gameRequest = axios.get<IGameState>(
      `${process.env.REACT_APP_API_ENDPOINT}/games/start`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );
    const responseRanking = axios.get<IGameDataRanking[]>(
      `${process.env.REACT_APP_API_ENDPOINT}/users/`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );

    const [gameResponse, rankingResponse] = await Promise.all([gameRequest, responseRanking]);

    if (gameResponse.status !== 200 || rankingResponse.status !== 200) throw new Error('Serviço fora do ar no momento');

    const userInRanking = rankingResponse.data.find(user => user.name === gameResponse.data.user);

    setGameData({
      ...gameResponse.data,
      ...userInRanking,
    });
    setRankingData(rankingResponse.data);
    setGameState('waiting');
    setUserName(gameResponse.data.user);
  } catch (error: any) {
    setModalMessage(error.message || 'Problema para iniciar a aplicação. Volte mais tarde!');
    setModalOpen(true);
  }
}