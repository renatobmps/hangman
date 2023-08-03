import { IGameDataRanking } from "../adapters/interfaces";
import GameRankingLoading from "./GameRankingLoading";
import { GameRankingTable } from "./GameRankingTable";

interface GameRankingProps {
  rankingData: IGameDataRanking[] | null;
  tableLabel?: string,
}

export function GameRanking({ rankingData, tableLabel = 'Ranking' }: GameRankingProps) {
  if (!rankingData) {
    return <GameRankingLoading />;
  }

  return <GameRankingTable gameRanking={rankingData} tableLabel={tableLabel} />;
}
