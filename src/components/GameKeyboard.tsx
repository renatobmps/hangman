import Keyboard from "./Style/Keyboard";
import * as S from "./Style/Key";
import { IGameKeyboardProps } from "../adapters/interfaces";

export default function GameKeyboard({
  alreadyTried,
  handleKeyboardButton,
  isBlocked = false,
}: IGameKeyboardProps) {
  const allKeys = Array.from(
    new Set("qwertyuiopasdfghjklzxcvbnm".toLowerCase().split("")),
  ).sort();

  return (
    <Keyboard>
      {allKeys.map((k) => (
        <S.Key
          key={`keyboard-${k}`}
          data-keyboard={`${k}`}
          onClick={handleKeyboardButton}
          disabled={!!alreadyTried.includes(k) || isBlocked}
          state={alreadyTried.includes(k) ? "used" : "active"}
        >
          {k}
        </S.Key>
      ))}
    </Keyboard>
  );
}
