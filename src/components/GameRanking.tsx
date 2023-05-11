import { IGameDataRanking } from "../adapters/interfaces";
import GameRankingLoading from "./GameRankingLoading";
import { GameRankingTable } from "./GameRankingTable";

export function GameRanking(props: { rankingData: IGameDataRanking[] }) {
  if (!props.rankingData.length) {
    return <GameRankingLoading />;
  }

  return <GameRankingTable gameRanking={props.rankingData} />;
}
