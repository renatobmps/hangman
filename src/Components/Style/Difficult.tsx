import styled from "styled-components";

const Style = styled.strong`
  color: ${(props: { color?: string }) => props.color || "blue"};
  font-weight: bold;
`;

export default function TotalPoints(props: any) {
  return <Style {...props} />;
}
