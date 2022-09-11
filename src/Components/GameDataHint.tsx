import { IGameDataProps } from "../adapters/interfaces";

export default function GameDataHint(props: IGameDataProps) {
  return <p>Dica: {props.gameData.hint}</p>;
}
