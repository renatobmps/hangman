import styled from "styled-components";

const Style = styled.h1`
  text-align: center;
  width: 100%;
`;

export default function MainTitle(props: any) {
  return <Style {...props} />;
}
