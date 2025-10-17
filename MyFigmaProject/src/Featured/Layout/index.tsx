"use client";

import Header from "../Header";
import Footer from "../Footer";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isAccountPage = pathname === "/account";

  return (
    <div className="flex flex-col min-h-screen">
      <Header isTransparent={isAccountPage} />

      <main className={`flex-1 w-full ${isAccountPage ? "" : "pt-24"}`}>
        {children}
      </main>

      {!isAccountPage && <Footer />}
    </div>
  );
};

export default Layout;
