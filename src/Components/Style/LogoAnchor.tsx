import styled from "styled-components";
import A from "./A";

const Style = styled(A)`
  display: block;
  height: 3rem;
  max-height: 5vh;
  max-width: 5vw;
`;

export default function LogoAnchor(props: any) {
  return <Style {...props} />;
}
