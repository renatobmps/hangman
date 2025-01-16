import { IClientLayout } from "../layout.interfaces";

const ClientLayout = ({ children }: IClientLayout) => (
  <html lang="en">
    <body>{children}</body>
  </html>
)

export default ClientLayout;