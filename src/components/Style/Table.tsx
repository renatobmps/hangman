import styled from "styled-components";

const Style = styled.table`
  table-layout: fixed;
  width: 100%;
`;

export default function Table(props: any) {
  return <Style {...props} />;
}
