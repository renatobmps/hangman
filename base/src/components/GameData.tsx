import { IGameDataProps } from "../adapters/interfaces";
import GameDataDifficult from "./GameDataDifficult";
import GameDataHint from "./GameDataHint";
import GameDataLoading from "./GameDataLoading";
import GameDataPoints from "./GameDataPoints";
import GameDataTotal from "./GameDataTotal";
import GameDataWord from "./GameDataWord";
import GameDataWrongs from "./GameDataWrongs";
import FlexColumn from "./Style/FlexColumn";

export default function GameData(props: IGameDataProps) {
  return (
    <FlexColumn alignItems="center" justifyContent="center" flex="1">
      {props.isLoading ? (
        <GameDataLoading />
      ) : (
        <>
          <GameDataTotal gameData={props.gameData} />
          <GameDataWord gameData={props.gameData} />
          <GameDataPoints gameData={props.gameData} />
          <GameDataHint gameData={props.gameData} />
          <GameDataDifficult gameData={props.gameData} />
          <GameDataWrongs gameData={props.gameData} />
        </>
      )}
    </FlexColumn>
  );
}
