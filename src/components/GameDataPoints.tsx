import { IGameDataProps } from "../adapters/interfaces";
import Points from "./Style/Points";

export default function GameDataPoints(props: IGameDataProps) {
  return (
    <p>
      Tentativas: <Points>{props.gameData.lives}</Points>
    </p>
  );
}
