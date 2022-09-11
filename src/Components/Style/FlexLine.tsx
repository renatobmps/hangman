import styled from "styled-components";

const Style = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  ${(props: { alignItems: string; justifyContent: string }) => {
    const { alignItems, justifyContent } = props;
    return `align-items: ${alignItems}; justify-content: ${justifyContent};`;
  }}
`;

export default function FlexLine(
  props: any & { alignItems?: string; justifyContent?: string }
) {
  return (
    <Style
      {...props}
      alignItems={props.alignItems || "center"}
      justifyContent={props.justifyContent || "flex-start"}
    />
  );
}
