import { IGameDataRanking } from "../adapters/interfaces";

function Lines(props: { gameRanking: IGameDataRanking[] }): JSX.Element {
  const sortedLines = props.gameRanking.sort(
    (a: IGameDataRanking, b: IGameDataRanking) => {
      return a.performance.game.won.total < b.performance.game.won.total
        ? 1
        : b.performance.game.won.total < a.performance.game.won.total
        ? -1
        : 0;
    }
  );
  const firstTen = sortedLines.slice(0, 10);

  return (
    <>
      {firstTen.map((h: IGameDataRanking, i: number) => (
        <tr
          key={`ranking-${h.name}`}
          onClick={(event: any) =>
            event.currentTarget.classList.toggle("active")
          }
        >
          <td>{(i || 0) + 1}</td>
          <td>{h.name || "-"}</td>
          <td>{h.performance.game.won.total || 0}</td>
          <td>{(h.performance.game.won.percentage || 100).toFixed(2)}%</td>
          <td>
            {(h.performance.letterPrecision.won.percentage || 100).toFixed(2)}%
          </td>
        </tr>
      ))}
    </>
  );
}

export function GameRankingTableBody(props: {
  gameRanking: IGameDataRanking[];
}) {
  return (
    <tbody>
      <Lines gameRanking={props.gameRanking} />
    </tbody>
  );
}
