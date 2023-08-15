import styled from "styled-components";

const Style = styled.h1`
  padding: 0.4rem;
  text-align: center;
  width: 100%;
`;

export default function MainTitle(props: any) {
  return <Style {...props} />;
}
