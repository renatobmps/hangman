import GameWrap from "./Style/GameWrap";
import Loading from "./Style/Loading";

export default function GameRankingLoading() {
  return (
    <GameWrap flexDirection="column">
      <Loading width="100%" />
      <Loading width="100%" />
      <Loading width="100%" />
      <Loading width="100%" />
      <Loading width="100%" />
      <Loading width="100%" />
    </GameWrap>
  );
}
