import axios from "axios";
import { IGameState } from "./interfaces";
import { GameState } from "../pages";

export interface HandleGameKeyboard {
  letter: string;
  triedLettersList: string[];
  buttonDom: HTMLButtonElement;
  gameDataState: IGameState;
  setModalMessage: (message: string) => void;
  setOpenedModal: (state: boolean) => void;
  setGameData: (state: IGameState) => void;
  setGameState: (state: GameState) => void;
}

interface TryResponse {
  description?: string;
  difficult: number;
  hint: string;
  lives: number;
  points: number;
  state: "playing" | "won" | "lost";
  triedLetters: string[];
  user: string;
  word: string;
}

export async function handleGameKeyboard({
  buttonDom,
  gameDataState,
  letter,
  setGameState,
  setModalMessage,
  setGameData,
  setOpenedModal,
  triedLettersList,
}: HandleGameKeyboard) {
  if (triedLettersList.includes(letter.toLowerCase())) {
    setModalMessage(`Letra ${letter.toUpperCase()} já foi.`);
    setOpenedModal(true);
    return;
  }

  buttonDom.classList.add("loading");
  setGameState("checking");

  try {
    const response = await axios.post<TryResponse>(
      "/api/v1/games/guess",
      { letter },
      { headers: { Authorization: localStorage.getItem("token") || "" } },
    );
    if (response.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      throw Error("Forbidden");
    }

    setGameState("waiting");
    buttonDom.disabled = true;
    setGameData({
      ...gameDataState,
      ...response.data,
    });

    if (response.data.state === "won") setGameState("won");
    if (response.data.state === "lost") setGameState("lost");
  } catch (error: any & { response?: { data?: { error?: string } } }) {
    buttonDom.classList.remove("loading");
    setGameState("waiting");
    if (error.response.data.error.includes("already tried")) {
      setModalMessage(`Você já tentou ${letter.toUpperCase()}! 😅`);
      setOpenedModal(true);
    } else {
      if (
        !!error.response.data.error &&
        !error.response.data.error.includes("already tried")
      ) {
        setModalMessage("Ocorreu um erro!");
        setOpenedModal(true);
      }
      console.error("Error:", error);
    }
  } finally {
    buttonDom.classList.remove("loading");
  }
}
