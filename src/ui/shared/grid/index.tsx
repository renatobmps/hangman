import Root from "./components/root";
import IGrid, { IGridComponents } from "./interfaces";
import DashboardGrid from "./modules/dashboard_grid";

export const GridComponents: IGridComponents = {
  Root: Root
}

const Grid: IGrid = {
  DashboardGrid: DashboardGrid
}

export default Grid