import styled from "styled-components";

const Style = styled.p`
  font:
    1.7rem "Chawp",
    "Ubuntu Mono",
    monospace;
  letter-spacing: 0.5rem;
  line-height: 3rem;
  max-width: 100%;
  overflow: auto;
  padding-top: 0.3rem;
  text-align: center;
  text-transform: uppercase;
  user-select: none;
`;

export default function Word(props: any) {
  return <Style {...props} />;
}
