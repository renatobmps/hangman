import axios from "axios";
import { IGameState } from "./interfaces";

export async function submitStartGame(
  handleState: (state: IGameState) => void,
  currentState: IGameState,
  handleLoading: (isLoading: boolean) => void,
  handleModalText: (text: string) => void,
  handleModalOpened: (isOpened: boolean) => void
) {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/games/start`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );
    const responseRanking = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/users/`,
      { headers: { authorization: localStorage.getItem("token") || "" } }
    );
    const userInRanking = responseRanking.data.find(
      (user: { name: string }) => user.name === response.data.user
    );
    handleState({
      ...currentState,
      ...response.data,
      ...userInRanking,
      ranking: responseRanking.data,
    });
    handleLoading(false);
  } catch (error: any) {
    if (error.response.status === 403) {
      localStorage.removeItem("token");
      window.location.href = process.env.PUBLIC_URL + "/";
    }

    console.error(error);

    handleModalText("Em manutenção, por favor, volte mais tarde!");
    handleModalOpened(true);
  }
}
