import Layout from "..";
import { PropsWithChildren } from "react";

const DashboardLayout = ({ children }: PropsWithChildren) => (
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