import { IGameDataProps } from "../adapters/interfaces";
import Difficult from "./Style/Difficult";

export default function GameDataDifficult({ gameData }: IGameDataProps) {
  if (gameData.difficult === null || gameData.difficult === undefined)
    return <>Primeiro a jogar</>;

  const difficulty = {
    easy: { color: "green", text: "Fácil" },
    medium: { color: "gold", text: "Médio" },
    hard: { color: "red", text: "Difícil" },
  };

  const range =
    gameData.difficult <= 33
      ? "easy"
      : gameData.difficult <= 66
        ? "medium"
        : "hard";

  const selectedDifficulty = difficulty[range];

  return (
    <p>
      Dificuldade:{" "}
      <Difficult
        color={selectedDifficulty.color}
        title={`${gameData.difficult.toFixed(0)}%`}
      >
        {selectedDifficulty.text}
      </Difficult>
    </p>
  );
}
