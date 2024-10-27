import MenuItem from "./components/menu_item";
import Root from "./components/root";
import ILayout, { ILayoutComponents } from "./interfaces";

export const LayoutComponents: ILayoutComponents = {
  Root: Root,
  MenuItem: MenuItem,
}

const Layout: ILayout = {}

export default Layout;