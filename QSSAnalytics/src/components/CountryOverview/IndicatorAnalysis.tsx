"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
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

const IndicatorAnalysis: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const charts = [
    {
      text: "Our key value proposition lies in our ability to provide insights that drive better decision-making. With Searchart, you can easily access over 300 KPIs across different policy areas and compare the performances of different countries simultaneously. We offer a range of different dashboard types, each with a unique purpose to help you gain valuable insights into your organization's performance.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-7-e2e3d77d.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-7-dark-b9176213.svg",
      reverse: false,
    },
    {
      text: "Our key value proposition lies in our ability to provide insights that drive better decision-making. With Searchart, you can easily access over 300 KPIs across different policy areas and compare the performances of different countries simultaneously. We offer a range of different dashboard types, each with a unique purpose to help you gain valuable insights into your organization's performance.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-8-a8eab90e.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-8-dark-783e4902.svg",
      reverse: true,
    },
    {
      text: "Our key value proposition lies in our ability to provide insights that drive better decision-making. With Searchart, you can easily access over 300 KPIs across different policy areas and compare the performances of different countries simultaneously. We offer a range of different dashboard types, each with a unique purpose to help you gain valuable insights into your organization's performance.",
      imgLight:
        "https://searchartfront-production.up.railway.app/assets/chart-9-97a0d218.svg",
      imgDark:
        "https://searchartfront-production.up.railway.app/assets/chart-9-dark-7862a5f0.svg",
      reverse: false,
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
          isDark ? "text-[#8198BA]" : "text-[#0F1E35]"
        }`}
        style={{ fontSize: "clamp(20px, 1vw, 1rem)" }}
      >
        Indicator Analysis
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
        <div className="text-center">
          <Link href="">
            <button className="inline-flex items-center  gap-2 px-4 py-2 rounded-md font-medium bg-orange-500 text-white hover:bg-orange-600 transition text-[clamp(0.875rem,2vw,1rem)]">
              Dashboard
              <FiArrowRight className="text-lg" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndicatorAnalysis;
