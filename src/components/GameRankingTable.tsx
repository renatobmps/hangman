import { IGameDataRanking } from "../adapters/interfaces";
import { GameRankingTableBody } from "./GameRankingTableBody";
import { GameRankingTableHeader } from "./GameRankingTableHeader";
import GameWrap from "./Style/GameWrap";
import Table from "./Style/Table";

export function GameRankingTable(props: { gameRanking: IGameDataRanking[] }) {
  return (
    <GameWrap>
      <Table>
        <GameRankingTableHeader />
        <GameRankingTableBody gameRanking={props.gameRanking} />
      </Table>
    </GameWrap>
  );
}
