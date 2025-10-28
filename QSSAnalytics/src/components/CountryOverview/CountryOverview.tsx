"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@/context";
import OverallScoreAnalysis from "./OverallScoreCard";
import SectorAnalysis from "./SectorAnalysis";
import IndicatorAnalysis from "./IndicatorAnalysis";
import Image from "next/image";

const CountryOverview: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden transition-colors duration-500 flex items-center justify-center ${
        isDark ? "bg-[#0B0F1A] text-white" : "bg-[#F9FAFB] text-gray-900"
      }`}
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <Image
          src={"https://searchartfront-production.up.railway.app/assets/vector-2-3dfa1800.svg"}
          className="absolute bottom-0 left-0 w-full object-contain opacity-30"
          style={{ filter: isDark ? "brightness(0.2)" : "brightness(0.9)" }}
          alt="bg-left-bottom"
          width={"100"}
          height={"100"}
        />
        <Image
          src="https://searchartfront-production.up.railway.app/assets/vector-1-0010a756.svg"
          alt="bg-right-top"
          className="absolute -top-16 right-0 w-[1200px] object-contain opacity-20"
          style={{ filter: isDark ? "brightness(0.2)" : "brightness(0.9)" }}
          width={"100"}
          height={"100"}
        />
      
      </div>

      <div
        className="relative z-10 w-full max-w-[1440px] px-4"
        data-aos="fade-up"
      >
        <OverallScoreAnalysis />
        <SectorAnalysis />
        <IndicatorAnalysis />
      </div>
    </section>
  );
};

export default CountryOverview;
