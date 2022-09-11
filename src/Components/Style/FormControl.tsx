import styled from "styled-components";

const Style = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export default function FormControl(props: any) {
  return <Style {...props} />;
}
