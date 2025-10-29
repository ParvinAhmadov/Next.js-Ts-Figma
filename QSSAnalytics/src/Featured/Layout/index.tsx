"use client";
import Footer from "../Footer";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { useTheme } from "@/context";
import UpButton from "@/components/UpButton";

const Header = dynamic(() => import("../Header"), { ssr: true });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  let headerProps = {
    containerMaxWidth: 1440,
    className: "",
    isTransparent: false,
    bgColor: "",
  };

  if (pathname === "/account") {
    headerProps = {
      ...headerProps,
      containerMaxWidth: 960,
      isTransparent: true,
    };
  } else if (pathname === "/dashboard") {
    headerProps = {
      ...headerProps,
      bgColor: isDark ? "bg-[#09101B]" : "bg-white",
    };
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header {...headerProps} />

      <main className="flex-1 w-full">{children}</main>

      {!pathname.includes("/account") && <Footer />}

      <UpButton />
    </div>
  );
};

export default Layout;
