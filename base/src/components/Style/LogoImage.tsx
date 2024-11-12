import styled from "styled-components";

const Style = styled.img`
  display: block;
  height: 100%;
`;

export default function LogoImage(props: any) {
  return <Style {...props} />;
}
