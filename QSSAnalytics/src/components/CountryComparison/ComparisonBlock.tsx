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
      className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex-shrink-0">
        <Image
          src={imgSrc}
          alt="Chart image"
          width={360}
          height={250}
          className="mx-auto lg:mx-0"
        />
      </div>

      <p className="text-sm lg:text-base opacity-80 leading-relaxed flex-1 max-w-[800px] text-center lg:text-left">
        {text}
      </p>
    </motion.div>
  );
};

const ComparisonBlock: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const charts = [
    {
      text: "The Bar Chart allows users to compare the amount of a selected indicator for different countries and years. By selecting specific indicators and years, users can gain a clear visual understanding of how countries performed relative to each other in terms of the chosen KPI",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-4-aa151e12.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-1-dark-54258afa.svg",
      reverse: false,
    },
    {
      text: "The Line Chart displays the change in the amount of a selected indicator over time for various countries. Users can track trends and fluctuations in performance for the chosen indicator, making it easy to identify patterns and developments across the dataset's time range.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-2-2aae55c0.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-2-dark-bae868ea.svg",
      reverse: false,
    },
    {
      text: "The Bump Chart showcases the rank changes of a selected indicator for different countries over the years. Users can quickly observe how countries' positions evolved relative to each other, providing insights into the progress and competitiveness of each country for the chosen KPI.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-3-a838a7f3.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-3-dark-9420164a.svg",
      reverse: true,
    },
  ];

  return (
    <section
      className={`w-full py-16 transition-colors duration-500 ${
        isDark ? "bg-transparent text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-24">
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

export default ComparisonBlock;
