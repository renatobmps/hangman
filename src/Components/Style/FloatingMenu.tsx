import styled from "styled-components";

const Style = styled.nav`
  background: white;
  border-radius: 10px 0 10px 10px;
  box-shadow: 11px 11px 19px -8px #000000c1;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 100%;
  transform-origin: 100% 0;
  transform: scale(0);
  transition: 0.3s;
  z-index: 15;
  &.active {
    transform: scale(1);
    transition: 0.3s;
  }
`;

export default function FloatingMenu(props: any) {
  return <Style {...props} />;
}
