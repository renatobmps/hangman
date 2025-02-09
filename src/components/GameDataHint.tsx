import { IGameDataProps } from "../adapters/interfaces";

export default function GameDataHint(props: IGameDataProps) {
  return (
    <p>
      Dica: <strong>{props.gameData.hint}</strong>
    </p>
  );
}
