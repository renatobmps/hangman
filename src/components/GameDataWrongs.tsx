import { IGameDataProps } from "../adapters/interfaces";
import removeAccents from "../adapters/removeAccents";
import WrongLetter from "./Style/WrongLetter";

export default function GameDataWrongs(props: IGameDataProps) {
  return (
    <WrongLetter>
      {props.gameData.triedLetters
        .sort()
        .filter(
          (letter: string) =>
            !removeAccents(props.gameData.word).includes(letter),
        )
        .map((letter: string) => letter)
        .join(" - ")}
    </WrongLetter>
  );
}
