import styled from "styled-components";

const Style = styled.h3`
  box-shadow: 0px 1px 5px -1px lightgrey;
  padding: 1rem;
`;

export default function TitleMenu(props: any) {
  return <Style {...props} />;
}
