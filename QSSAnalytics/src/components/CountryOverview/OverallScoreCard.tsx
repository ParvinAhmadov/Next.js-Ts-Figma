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

const OverallScoreAnalysis: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const charts = [
    {
      text: "The Overall Score Speedometer Chart presents a visual representation of the selected country's overall percentile change over the years. This dynamic chart allows you to quickly grasp the country's overall performance trend and identify periods of improvement or decline.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-1-4eea8d48.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-1-dark-997fa332.svg",
      reverse: false,
    },
    {
      text: "The Overall Percentile by Years Chart offers a comprehensive view of the selected country's performance progression over time. By plotting the overall percentile across different years, you can easily track the country's relative standing and see how its performance has evolved over the entire dataset's duration. This chart provides a clear visual representation of the country's long-term trends, enabling users to identify periods of growth or challenges in its overall performance.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-2-b2fa75d3.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-2-dark-3955d9b4.svg",
      reverse: true,
    },
    {
      text: "The Overall Score Change Chart enables users to compare the overall percentile of the selected country between two chosen years. By displaying the difference in percentile, you can easily assess the country's progress or regression over the specified time frame.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-3-be901f88.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-3-dark-b429a1a8.svg",
      reverse: false,
    },
  ];

  return (
    <section
      className={`w-full py-16 transition-colors duration-500 ${
        isDark ? "bg-transparent text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <h2
        className={`text-center font-bold mb-16 ${
          isDark ? "text-[#BB2E02]" : "text-[#BB2E02]"
        }`}
        style={{ fontSize: "clamp(20px, 1vw, 1rem)" }}
      >
        Overall Score Analysis
      </h2>

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

export default OverallScoreAnalysis;
