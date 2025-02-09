import { PropsWithChildren } from "react";
import { LayoutComponents } from "..";

const Dashboard = ({ children }: PropsWithChildren) => (
  <LayoutComponents.Root>
    <LayoutComponents.Header />
    {children}
  </LayoutComponents.Root>
)

export default Dashboard;