import FlexColumn from "./Style/FlexColumn";
import Loading from "./Style/Loading";

export default function GameDataLoading() {
  return (
    <FlexColumn alignItems="center" justifyContent="center" flex="1">
      <>
        <Loading width="90%">Loading...</Loading>
        <Loading width="25%">Loading...</Loading>
        <Loading>Loading...</Loading>
        <Loading width="20%">Loading...</Loading>
        <Loading>Loading...</Loading>
      </>
    </FlexColumn>
  );
}
