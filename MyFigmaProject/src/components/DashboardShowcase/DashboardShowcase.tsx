"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/context";
import AOS from "aos";
import "aos/dist/aos.css";
import DashboardCard from "../DashboardCard/DashboardCard";

const DashboardShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeDashboard, setActiveDashboard] = React.useState<
    "overview" | "comparison"
  >("overview");

  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      aria-label="Dashboard showcase"
      className={`relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#070B12]" : "bg-[#F9FAFB]"
      }`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 opacity-40"
          style={{ width: "clamp(300px,35vw,600px)" }}
        >
          <Image
            src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
            alt="map-left"
            width={1200}
            height={1200}
            className="object-contain"
            style={{ filter: isDark ? "brightness(0.4)" : "brightness(0.9)" }}
            priority
          />
        </div>
        <div
          className="absolute bottom-0 right-0 opacity-40 rotate-180"
          style={{ width: "clamp(300px,35vw,600px)" }}
        >
          <Image
            src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
            alt="map-right"
            width={1200}
            height={1200}
            className="object-contain"
            style={{ filter: isDark ? "brightness(0.6)" : "brightness(0.95)" }}
            priority
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-700"
        style={{
          background: isDark
            ? "linear-gradient(0deg, rgba(7,11,18,1) 0%, rgba(7,11,18,0.9) 20%, rgba(7,11,18,0.6) 50%, rgba(7,11,18,0) 100%)"
            : "linear-gradient(0deg, rgba(249,250,251,1) 0%, rgba(249,250,251,0.9) 20%, rgba(249,250,251,0.6) 50%, rgba(249,250,251,0) 100%)",
        }}
      />

      <div
        className="relative z-30 flex flex-col md:flex-row items-center justify-center gap-[clamp(2rem,4vw,5rem)]"
        data-aos="fade-up"
      >
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-[clamp(2rem,4vw,5rem)]"
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center gap-4">
            <p
              onClick={() => setActiveDashboard("overview")}
              className={`cursor-pointer transition-colors duration-300 mb-6 w-[376px] h-[40px] rounded-[6px] flex items-center justify-center ${
                activeDashboard === "overview"
                  ? "text-orange-500"
                  : "text-gray-500"
              }  font-medium leading-[150%] tracking-[0%] font-manrope text-justify`}
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.7rem)" }}
            >
              Country Overview Dashboard
            </p>
            <DashboardCard
              caption="Go to Overview Dashboard"
              imageSrcLight="/images/DashboardCountry1.png"
              imageSrcDark="/images/DashboardCountry.png"
              isDark={isDark}
              active={activeDashboard === "overview"}
              onClick={() => setActiveDashboard("overview")}
              buttonLabel="Dashboard →"
              buttonHref="/overview"
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <p
              onClick={() => setActiveDashboard("comparison")}
              className={`cursor-pointer transition-colors duration-300 mb-6 w-[476px] h-[40px] rounded-[6px] flex items-center justify-center ${
                activeDashboard === "comparison"
                  ? "text-orange-500"
                  : "text-gray-500"
              } text-[18px] font-semibold`}
              style={{ fontSize: "clamp(1.25rem,2.5vw,1.7rem)" }}
            >
              Country Comparison Dashboard
            </p>
            <DashboardCard
              caption="Go to Comparison Dashboard"
              imageSrcLight="/images/Comprasionlight.png"
              imageSrcDark="/images/Comprasiondark.png"
              isDark={isDark}
              active={activeDashboard === "comparison"}
              onClick={() => setActiveDashboard("comparison")}
              buttonLabel="Dashboard →"
              buttonHref="/comparison"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardShowcase;
