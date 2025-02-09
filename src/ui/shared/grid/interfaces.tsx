import { PropsWithChildren, ReactElement } from "react";

export interface IGridStyle {
  $use_highlight?: boolean;
}

export interface IRoot extends PropsWithChildren {
  use_highlight?: IGridStyle['$use_highlight']
}

export interface IGridComponents {
  Root(props: IRoot): ReactElement;
}

export default interface IGrid {
  DashboardGrid(props: PropsWithChildren): ReactElement;
}