import styled from "styled-components";

const Style = styled.strong`
  color: red;
  font-weight: bold;
`;

export default function Points(props: any) {
  return <Style {...props} />;
}
