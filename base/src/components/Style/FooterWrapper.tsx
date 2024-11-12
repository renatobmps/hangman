import styled from "styled-components";
import FlexColumn from "./FlexColumn";

const Style = styled(FlexColumn)`
  padding: 1rem;
`;

export default function FooterWrapper(props: any) {
  return <Style {...props} />;
}
