import { IDashboardLayout } from "../layout.interfaces";
import Layout from "..";

const DashboardLayout = ({ children }: IDashboardLayout) => (
  <html lang="en">
    <body>
      <Layout.DashboardPage>
        <Layout.DashboardTop />
        {children}
      </Layout.DashboardPage>
    </body>
  </html>
)

export default DashboardLayout;