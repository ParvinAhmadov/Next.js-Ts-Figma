"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context";

interface ChartBlockProps {
  text: string;
  imgLight: string;
  imgDark: string;
  isDark: boolean;
  reverse?: boolean;
}

const ChartBlock: React.FC<ChartBlockProps> = ({
  text,
  imgLight,
  imgDark,
  isDark,
  reverse = false,
}) => {
  const imgSrc = isDark ? imgDark : imgLight;

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div
        className="flex-shrink-0 mx-auto lg:mx-0"
        style={{
          width: "clamp(220px, 35vw, 380px)",
          height: "auto",
        }}
      >
        <Image
          src={imgSrc}
          alt="Chart image"
          width={380}
          height={260}
          className="w-full h-auto   transition-transform duration-500 hover:scale-[1.04]"
        />
      </div>

      <p
        className="opacity-85 leading-relaxed flex-1 max-w-[800px] text-center lg:text-left px-2 sm:px-4"
        style={{
          fontSize: "clamp(0.85rem, 1.1vw, 1.05rem)",
          lineHeight: "clamp(1.4rem, 1.8vw, 1.9rem)",
        }}
      >
        {text}
      </p>
    </motion.div>
  );
};

const SectorAnalysis: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const charts = [
    {
      text: "The Average Percentiles by Sectors Bar Chart provides a comprehensive view of the country's performance across different sectors. With a color gradient indicating scores from lowest to highest, you can identify the strongest and weakest sectors in terms of KPIs.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-4-9bc8b2a9.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-4-dark-be8ec22e.svg",
      reverse: true,
    },
    {
      text: "The Sector Score by Years Line Chart displays the performance trend of a specific sector in the selected country over time. You can track sectoral progress and fluctuations to gain insights into how each sector contributes to the country's overall performance.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-5-784d829c.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-5-dark-9f8ec857.svg",
      reverse: false,
    },
    {
      text: "The Sectors Average Score Change Chart reveals the average change in indicator scores for a selected sector between two specified years. This chart aids you in understanding the sector's overall improvement or decline, based on the aggregated performance changes of its indicators.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-6-3b9c7984.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-6-dark-eb687411.svg",
      reverse: true,
    },
  ];

  return (
    <section
      className={`w-full py-16 md:py-24 transition-colors duration-500 ${
        isDark ? "bg-transparent text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <h2
        className={`text-center font-bold mb-16 ${
          isDark ? "text-[#71B45A]" : "text-[#1C5622]"
        }`}
        style={{ fontSize: "clamp(20px, 1vw, 1rem)" }}
      >
        Sector Analysis
      </h2>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col gap-20 sm:gap-28">
        {charts.map((chart, index) => (
          <ChartBlock
            key={index}
            text={chart.text}
            imgLight={chart.imgLight}
            imgDark={chart.imgDark}
            isDark={isDark}
            reverse={chart.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default SectorAnalysis;
