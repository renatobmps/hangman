import { IGameDataProps } from "../adapters/interfaces";
import Difficult from "./Style/Difficult";

export default function GameDataDifficult(props: IGameDataProps) {
  if (!props.gameData.difficult) return <></>;

  const color =
    props.gameData.difficult < 33
      ? "green"
      : props.gameData.difficult < 66
      ? "yellow"
      : "red";

  return (
    <p>
      Dificuldade:{" "}
      <Difficult color={color}>
        {props.gameData.difficult.toFixed(2)}%
      </Difficult>
    </p>
  );
}
