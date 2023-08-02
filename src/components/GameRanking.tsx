import { IGameDataRanking } from "../adapters/interfaces";
import GameRankingLoading from "./GameRankingLoading";
import { GameRankingTable } from "./GameRankingTable";

interface GameRankingProps {
  rankingData: IGameDataRanking[] | null;
}

export function GameRanking({ rankingData }: GameRankingProps) {
  if (!rankingData) {
    return <GameRankingLoading />;
  }

  return <GameRankingTable gameRanking={rankingData} />;
}
