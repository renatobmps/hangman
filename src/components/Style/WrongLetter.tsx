import styled from "styled-components";

const Style = styled.p`
  background: gray;
  border-radius: 5px;
  color: red;
  font-weight: bold;
  padding: 0rem 1rem;
  text-transform: uppercase;
`;

export default function WrongLetter(props: any) {
  return <Style {...props} />;
}
