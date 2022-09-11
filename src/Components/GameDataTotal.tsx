import { IGameDataProps } from "../adapters/interfaces";
import TotalPoints from "./Style/TotalPoints";

export default function GameDataTotal(props: IGameDataProps) {
  return (
    <p>
      Total:{" "}
      <TotalPoints>
        {props.gameData.performance.game.won.total || 0}
      </TotalPoints>
    </p>
  );
}
