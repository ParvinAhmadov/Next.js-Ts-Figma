"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context";

const DashboardShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
  aria-label="Dashboard showcase"
  className={`relative w-full min-h-screen flex items-center justify-center px-4 overflow-hidden transition-colors duration-500 ${
    isDark ? "bg-[#070B12]" : "bg-[#F9FAFB]"
  }`}
>
  {/* decorative maps */}
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div
      className="absolute top-0 left-0 opacity-50"
      style={{ width: "clamp(280px,36vw,560px)" }}
    >
      <Image
        src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
        alt="map-deco-1"
        width={1200}
        height={1200}
        style={{
          objectFit: "contain",
          filter: isDark ? "brightness(0.0)" : "brightness(0.95)",
        }}
        priority
      />
    </div>
    <div
      className="absolute bottom-0 right-0 opacity-50 rotate-180"
      style={{ width: "clamp(280px,36vw,480px)" }}
    >
      <Image
        src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
        alt="map-deco-2"
        width={1000}
        height={1000}
        style={{
          objectFit: "contain",
          filter: isDark ? "brightness(0.6)" : "brightness(0.10)",
        }}
        priority
      />
    </div>
  </div>

  {/* overlay */}
  <div
    className="absolute inset-0 z-10 pointer-events-none transition-all duration-700"
    style={{
      background: isDark
        ? "linear-gradient(0deg, rgba(7,11,18,1) 0%, rgba(7,11,18,0.95) 12%, rgba(7,11,18,0.75) 30%, rgba(7,11,18,0.45) 55%, rgba(7,11,18,0.15) 80%, rgba(7,11,18,0.0) 100%)"
        : "linear-gradient(0deg, rgba(249,250,251,1) 0%, rgba(249,250,251,0.9) 25%, rgba(249,250,251,0.6) 55%, rgba(249,250,251,0.0) 100%)",
    }}
  />
</section>

  );
};

export default DashboardShowcase;
