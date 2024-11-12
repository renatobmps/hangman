import styled from "styled-components";

const Style = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
`;

export default function TriggerMenu(props: any) {
  return <Style {...props} />;
}
