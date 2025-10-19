"use client";

import Footer from "../Footer";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../Header"), { ssr: true });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAccountPage = pathname === "/account";

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        isTransparent={isAccountPage}
        containerMaxWidth={isAccountPage ? 960 : 1440}
      />

      <main className="flex-1 w-full">{children}</main>

      {!isAccountPage && <Footer />}
    </div>
  );
};

export default Layout;
