import Keyboard from "./Style/Keyboard";
import Key from "./Style/Key";
import { IGameKeyboardProps } from "../adapters/interfaces";

export default function GameKeyboard(props: IGameKeyboardProps) {
  const allKeys = Array.from(
    new Set("qwertyuiopasdfghjklzxcvbnm".toLowerCase().split(""))
  ).sort();

  return (
    <Keyboard>
      {allKeys.map((k) => (
        <Key
          key={`keyboard-${k}`}
          data-keyboard={`${k}`}
          onClick={props.handleKeyboardButton}
          disabled={!!props.alreadyTried.includes(k)}
        >
          {k}
        </Key>
      ))}
    </Keyboard>
  );
}
