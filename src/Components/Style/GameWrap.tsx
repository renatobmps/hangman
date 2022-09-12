import styled from "styled-components";

const Style = styled.div`
  background-color: white;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: ${(props: { flexDirection: string }) => props.flexDirection || 'row'};
  gap: 2rem 1rem;
  margin: auto;
  max-width: calc(1000px - 2rem);
  padding: 1rem;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export default function GameWrap(props: any) {
  return <Style {...props} />;
}
