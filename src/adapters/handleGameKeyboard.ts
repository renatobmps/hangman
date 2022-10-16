import axios from "axios";
import { IGameState } from "./interfaces";

export async function handleGameKeyboard(
  letter: string,
  triedLettersList: string[],
  buttonDom: HTMLButtonElement,
  gameDataState: IGameState,
  setModalMessage: (message: string) => void,
  setOpenedModal: (state: boolean) => void,
  setNewGame: (state: IGameState) => void
) {
  if (triedLettersList.includes(letter.toLowerCase())) {
    setModalMessage(`Letra ${letter.toUpperCase()} já foi.`);
    setOpenedModal(true);
    return;
  }

  buttonDom.classList.add("loading");

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/games/guess`,
      { letter },
      { headers: { Authorization: localStorage.getItem("token") || "" } }
    );
    if (response.status === 403) {
      localStorage.removeItem("token");
      window.location.href = "/login";
      throw Error("Forbidden");
    }
    if (response.data.state === "playing") {
      buttonDom.disabled = true;
    }
    if (response.data.state === "won") {
      const description = response.data.description
        ? `\nDescrição: ${response.data.description}`
        : "";
      setModalMessage(
        `Parabéns, ${response.data.user}!\nEncontrou: ${
          response.data.word
        }${description}\nSua pontuação atual é: ${response.data.points + 1}`
      );
      setOpenedModal(true);
    }
    if (response.data.state === "lost") {
      setModalMessage(
        "Oh não, você perdeu! Essa palavra poderá voltar novamente depois, então boa sorte na próxima!"
      );
      setOpenedModal(true);
    }
    // buttonDom.classList.remove("loading");
    const voidTriedLetters: string[] = [];
    setNewGame({
      ...gameDataState,
      ...response.data,
      triedLetters: voidTriedLetters,
    });
  } catch (error: any & { response?: { data?: { error?: string } } }) {
    buttonDom.classList.remove("loading");
    if (
      !!error.response.data.error &&
      !error.response.data.error.includes("already tried")
    ) {
      setModalMessage("Ocorreu um erro!");
      setOpenedModal(true);
    }
    console.error("Error:", error);
  }
}
