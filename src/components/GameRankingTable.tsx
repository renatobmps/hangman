import { IGameDataRanking } from "../adapters/interfaces";
import { GameRankingTableBody } from "./GameRankingTableBody";
import { GameRankingTableHeader } from "./GameRankingTableHeader";
import GameWrap from "./Style/GameWrap";
import Table from "./Style/Table";

interface GameRankingTableProps {
  gameRanking: IGameDataRanking[];
  tableLabel: string;
}

export function GameRankingTable({
  gameRanking,
  tableLabel,
}: GameRankingTableProps) {
  return (
    <GameWrap flexDirection="column">
      <h2>{tableLabel}</h2>
      <Table>
        <GameRankingTableHeader />
        <GameRankingTableBody gameRanking={gameRanking} />
      </Table>
    </GameWrap>
  );
}
