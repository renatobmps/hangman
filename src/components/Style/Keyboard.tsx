import styled from "styled-components";

const Style = styled.div`
  display: grid;
  flex: 1;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, 2.3rem);
  justify-content: space-between;
  justify-items: center;
`;

export default function Keyboard(props: any) {
  return <Style {...props} />;
}
