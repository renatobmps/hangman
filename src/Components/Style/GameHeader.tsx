import styled from "styled-components";

const Style = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  padding: 1rem;
  width: 100%;
`;

export default function GameHeader(props: any) {
  return <Style {...props} />;
}
