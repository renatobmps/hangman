import { IGameDataProps } from "../adapters/interfaces";
import Word from "./Style/Word";

export default function GameDataWord(props: IGameDataProps) {
  return <Word>{props.gameData.word}</Word>;
}
