import { PropsWithChildren } from "react";
import './dashboard_page.css';

const DashboardPage = ({ children }: PropsWithChildren) => (
  <div className="layout__dashboard-page">{children}</div>
)

export default DashboardPage;