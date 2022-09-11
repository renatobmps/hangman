import styled from "styled-components";

const Style = styled.p`
  font: 2rem "Ubuntu Mono", monospace;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  user-select: none;
`;

export default function Word(props: any) {
  return <Style {...props} />;
}
