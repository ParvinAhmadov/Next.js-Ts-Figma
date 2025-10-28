"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context";
import { FaArrowRight } from "react-icons/fa";

interface ChartBlockProps {
  title: string;
  text: string;
  imgLight: string;
  imgDark: string;
  reverse?: boolean;
  hasButton?: boolean;
  buttonText?: string;
  buttonSubtitle?: string;
}

const ChartBlock: React.FC<ChartBlockProps> = ({
  title,
  text,
  imgLight,
  imgDark,
  reverse = false,
  hasButton = false,
  buttonText,
  buttonSubtitle,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const imgSrc = isDark ? imgDark : imgLight;

  const textColor = isDark ? "text-gray-300" : "text-gray-700";
  const titleColor = isDark ? "text-white" : "text-gray-900";
  const buttonClasses = isDark
    ? "bg-[#284068] hover:bg-blue-700 text-white"
    : "bg-[#030712] hover:bg-blue-600 text-white";

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {imgSrc ? (
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={300}
          className="mx-auto lg:mx-0 rounded-xl"
        />
      ) : (
        <div className="w-[400px] h-[300px] bg-gray-300 dark:bg-gray-700 rounded-xl" />
      )}

      <div className="flex flex-col h-full text-center lg:text-left max-w-[800px]">
        <h3 className={`text-xl lg:text-2xl font-bold mb-4 ${titleColor}`}>
          {title}
        </h3>
        <p className={`text-sm lg:text-base leading-relaxed ${textColor}`}>
          {text}
        </p>

        {hasButton && (
          <div className="mt-6 flex flex-col items-center lg:items-end">
            <div>
              <button
                className={`px-10 py-3 flex items-center gap-2 rounded text-sm font-semibold transition-all duration-300 ${buttonClasses}`}
              >
                {buttonText || "Learn More"}
                <FaArrowRight />
              </button>
            </div>

            {buttonSubtitle && (
              <span className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                {buttonSubtitle}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const AboutComparisonBlock: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const charts: ChartBlockProps[] = [
    {
      title: "Our Journey",
      text: "Searchart began as a dream to make complex data accessible and actionable for everyone. Our team of dedicated professionals from diverse backgrounds came together to create a user-friendly platform that visualizes vast amounts of data in an intuitive manner. We understood the importance of KPIs in evaluating the progress and growth of countries over time. Hence, we embarked on a journey to gather, organize, and present this valuable information in two dynamic dashboards: the Comparison Dashboard and the Overview Dashboard.",
      imgLight: "/images/aboutComp.png",
      imgDark: "/images/aboutComp.png",
      reverse: true,
    },
    {
      title: "Comparison Dashboard",
      text: "Our Comparison Dashboard is a hub for cross-country analysis. With four insightful charts - the bar chart, line chart, bump chart, and change in rank chart - users can delve into specific indicators and compare countries' performance effortlessly. Whether it's tracking indicators for a particular year or understanding trends over the years, our Comparison Dashboard simplifies the process of data exploration and facilitates informed decision-making.",
      imgLight: "/images/Comprasionlight.png",
      imgDark: "/images/Comprasiondark.png",
      hasButton: true,
      buttonText: "Dashboard",
      buttonSubtitle: "Go to  Comparsion Dashboard",
    },
    {
      title: "Overview Dashboard",
      text: "Our Overview Dashboard offers a holistic view of a selected country's performance. With nine charts, users can assess overall percentile changes, sector-wise scores, and indicator-level details. From the overall score speedometer chart to the sector score by years line chart, this dashboard enables users to grasp key insights and identify areas for improvement or celebration.",
      imgLight: "/images/DashboardCountry1.png",
      imgDark: "/images/DashboardCountry.png",
      reverse: true,
      hasButton: true,
      buttonText: "Dashboard",
      buttonSubtitle: "Go to Overview  Dashboard",
    },
  ];

  return (
    <section
      className={`w-full py-20 transition-colors duration-700 ${
        isDark ? "bg-[#09101B] text-white" : "bg-[#F9FAFB] text-gray-900"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col gap-24">
        {charts.map((chart, i) => (
          <ChartBlock key={i} {...chart} />
        ))}
      </div>
    </section>
  );
};

export default AboutComparisonBlock;
