import styled from "styled-components";
import Link from "next/link";

const Style = styled(Link)`
  color: var(--color-1);
  cursor: pointer;
  text-decoration: none;
  &:active {
    font-weight: bold;
  }
  &:visited {
    color: black;
  }
`;

export default function A(props: any) {
  const correctTo = props.href;
  return <Style {...props} href={correctTo} />;
}
