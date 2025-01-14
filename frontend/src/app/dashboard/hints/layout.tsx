import { PropsWithChildren } from "react";
import { Metadata } from "next";
import './components/style.css';
import Hints from "@/app/dashboard/hints/components";
import Logo from './components/media/logo_menu.svg';

export const metadata: Metadata = {
  title: 'Dashboard | Hints',
  icons: Logo.src,
}

const Layout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body>
      <Hints.Page>
        <Hints.Top />
        {children}
      </Hints.Page>
    </body>
  </html>
)

export default Layout;
