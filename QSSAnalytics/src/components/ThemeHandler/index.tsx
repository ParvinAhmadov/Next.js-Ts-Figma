"use client";

import { useTheme } from "@/context";
import { useEffect } from "react";

interface ThemeHandlerProps {
  children: React.ReactNode;
}

const ThemeHandler = ({ children }: ThemeHandlerProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return <>{children}</>;
};

export default ThemeHandler;
