import { useContext } from "react";
import { IGameDataRanking } from "../adapters/interfaces";
import { UserContext } from "../stores/UserContext";

function Lines(props: { gameRanking: IGameDataRanking[] }): JSX.Element {
  const { user } = useContext(UserContext);
  const { username = "no_name" } = user ?? {};

  const allThatHasPoints = props.gameRanking.filter(g => (
    !!g.performance.game.won.total
  ));
  const sortedByLetterPrecision = allThatHasPoints.sort(
    (a: IGameDataRanking, b: IGameDataRanking) => {
      return (
        (b.performance.letterPrecision.won.percentage ?? 0) -
        (a.performance.letterPrecision.won.percentage ?? 0)
      );
    }
  );
  const sortedByWordPrecision = sortedByLetterPrecision.sort(
    (a: IGameDataRanking, b: IGameDataRanking) => {
      return (
        (b.performance.game.won.percentage ?? 0) -
        (a.performance.game.won.percentage ?? 0)
      );
    }
  );
  const sortedByPoints = sortedByWordPrecision.sort(
    (a: IGameDataRanking, b: IGameDataRanking) => {
      return (
        (b.performance.game.won.total ?? 0) -
        (a.performance.game.won.total ?? 0)
      );
    }
  );

  return (
    <>
      {sortedByPoints.map((h: IGameDataRanking, i: number) => (
        <tr
          key={`ranking-${h.name}`}
          onClick={(event: any) =>
            event.currentTarget.classList.toggle("active")
          }
          className={h.name === username ? "highlight" : "normal"}
        >
          <td className="chawp">{(i || 0) + 1}</td>
          <td>{h.name || "-"}</td>
          <td className="chawp">{h.performance.game.won.total || 0}</td>
          <td className="chawp">
            {(h.performance.game.won.percentage || 100).toFixed(2)}%
          </td>
          <td className="chawp">
            {(h.performance.letterPrecision.won.percentage || 100).toFixed(2)}%
          </td>
        </tr>
      ))}
    </>
  );
}

export function GameRankingTableBody({
  gameRanking,
}: {
  gameRanking: IGameDataRanking[];
}) {
  return (
    <tbody>
      <Lines gameRanking={gameRanking} />
    </tbody>
  );
}
