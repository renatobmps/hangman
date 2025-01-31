import styled from "styled-components";

const Style = styled.table`
  letter-spacing: 0.03rem;
  table-layout: fixed;
  width: 100%;
  tr.highlight {
    background: #f2f2f29e;
    color: var(--color-1);
    font-weight: bold;
  }
`;

export default function Table(props: any) {
  return <Style {...props} />;
}
