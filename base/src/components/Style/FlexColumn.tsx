import styled from "styled-components";
import { IFlexColumnStyle } from "../../adapters/interfaces";

const Style = styled.div`
  align-items: ${(props: IFlexColumnStyle) => props.alignItems || 'stretch'};
  display: flex;
  flex: ${(props: IFlexColumnStyle) => props.flex || '0'};
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: ${(props: IFlexColumnStyle) => props.justifyContent || 'space-between'};
  overflow: hidden;
`;

export default function FlexColumn(
  props: any & { alignItems?: string; justifyContent?: string }
) {
  return (
    <Style
      {...props}
      alignItems={props.alignItems}
      justifyContent={props.justifyContent}
    />
  );
}
