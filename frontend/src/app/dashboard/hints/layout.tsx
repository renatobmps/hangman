import { PropsWithChildren } from "react";
import { Metadata } from "next";
import Logo from '@/common/media/logo_menu.svg';
import Layout from "@/common/components/layout";

export const metadata: Metadata = {
  title: 'Dashboard | Hints',
  icons: Logo.src,
}

const PageLayout = ({ children }: PropsWithChildren) => (
  <Layout.DashboardPage>
    <Layout.DashboardTop />
    {children}
  </Layout.DashboardPage>
)

export default PageLayout;
