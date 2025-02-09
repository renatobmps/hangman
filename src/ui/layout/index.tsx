import Header from "./components/header";
import MenuItem from "./components/menu_item";
import Panel from "./components/panel";
import Root from "./components/root";
import Section from "./components/section";
import ILayout, { ILayoutComponents } from "./interfaces";
import Dashboard from "./modules/dashboard";

export const LayoutComponents: ILayoutComponents = {
  Root: Root,
  MenuItem: MenuItem,
  Header: Header,
  Panel: Panel,
  Section: Section
};

const Layout: ILayout = {
  Dashboard: Dashboard
};

export default Layout;
