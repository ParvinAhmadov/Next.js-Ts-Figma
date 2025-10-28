"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "@/context";
import { FiArrowRight } from "react-icons/fi";

const RankChangeChart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const imgSrc = isDark
    ? "https://searchartfront-production.up.railway.app/assets/chart-4-dark-bc30053d.svg"
    : "https://searchartfront-production.up.railway.app/assets/chart-1-8a03ca43.svg";

  return (
    <section
      className={`w-full py-16 transition-colors duration-500 ${
        isDark ? "bg-transparent text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col items-center text-center gap-10">
        <p
          data-aos="fade-up"
          className="max-w-[900px] text-[14px] text-start sm:text-base opacity-80 leading-relaxed"
        >
          The Change in Rank Chart allows users to compare the rank differences
          between two selected years for a specific indicator across various
          countries. This chart helps users understand how countries rankings
          have changed over time, revealing the countries that improved or faced
          challenges in terms of the chosen KPI.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="w-full max-w-[1000px] mx-auto"
        >
          <Image
            src={imgSrc}
            alt="Rank changes chart"
            width={1000}
            height={293}
            className="w-full h-auto  object-contain"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-col items-center gap-2"
        >
          <Link href="">
            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-md cursor-pointer font-medium bg-[#CC3203] text-white hover:bg-orange-600 transition text-[clamp(0.875rem,2vw,1rem)] shadow-md">
              Dashboard <FiArrowRight className="text-lg" />
            </button>
          </Link>
          <Link href="">
            <p className="text-sm opacity-70 hover:opacity-100 transition text-[#9DA2AA]">
              Go to Comparison Dashboard
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RankChangeChart;
