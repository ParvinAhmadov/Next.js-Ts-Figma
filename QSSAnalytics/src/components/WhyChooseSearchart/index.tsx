"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context";

interface Reason {
  number: number;
  title: string;
}

const WhyChooseSearchart: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const reasons: Reason[] = [
    {
      number: 1,
      title:
        "Comprehensive and Timely Data: Our dataset spans over six decades, providing historical context and allowing users to track long-term trends. With up-to-date information, we ensure that users have access to the latest developments and can make informed decisions based on real-time data",
    },
    {
      number: 2,
      title:
        "User-Friendly Interface: We believe data analysis should be accessible to everyone. That's why we've designed our dashboards with a user-friendly interface, making it easy for novices and experts alike to explore and interpret data effortlessly.",
    },
    {
      number: 3,
      title:
        "Powerful Visualizations: Our charts and graphs are carefully crafted to enhance data comprehension. By presenting data in a visually engaging manner, we help users identify patterns, correlations, and outliers at a glance.",
    },
    {
      number: 4,
      title:
        "Customizable Analysis: Tailor your exploration to suit your needs. With our interactive tools, users can select specific indicators, years, countries, and sectors for personalized analyses.",
    },
    {
      number: 5,
      title:
        "Unparalleled Insights: Gain valuable insights into country performance, sector strengths, and indicator trends. Our dashboards are a treasure trove of information that can guide strategic decisions, academic research, and policy formulation.",
    },
  ];

  const bgColor = isDark ? "bg-[#0F1622]" : "bg-[#FBFBFB]";
  const titleColor = isDark ? "text-white" : "text-[#030712]";
  const subtitleColor = isDark ? "text-gray-300" : "text-gray-700";
  const numberColor = isDark ? "text-white" : "text-[#B3B7BE]";

  return (
    <section className={`w-full py-12 md:py-16 lg:py-20 ${bgColor}`}>
      <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 md:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-2xl sm:text-3xl lg:text-[30px] font-bold mb-3 md:mb-4 ${titleColor}`}
          >
            Why Choose Searchart?
          </h2>
          <p
            className={`text-sm sm:text-base lg:text-[16px] max-w-4xl mx-auto ${subtitleColor}`}
          >
            We take pride in being at the forefront of data-driven solutions.
            Here are some reasons why Searchart stands out:
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.number}
                className="flex gap-4 md:gap-6 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`text-3xl sm:text-4xl lg:text-[26px] font-bold ${numberColor} flex-shrink-0 leading-none pt-1`}
                >
                  {reason.number}
                </div>

                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm sm:text-base lg:text-lg leading-relaxed ${titleColor}`}
                  >
                    {reason.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[800px] aspect-[4/4] mx-auto">
              <Image
                src="https://searchartfront-production.up.railway.app/assets/why-choose-e0ca898b.png"
                alt="Dashboard Analytics"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSearchart;
