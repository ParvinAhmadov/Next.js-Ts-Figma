"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context";

const generateClamp = (minPx: number, maxPx: number): string =>
  `clamp(${minPx / 16}rem, ${(minPx / 16) * 0.5}rem + 2vw, ${maxPx / 16}rem)`;

interface Slide {
  title: string;
  text: string;
  images: string[];
  link: string;
}

const slides: Slide[] = [
  {
    title: "Country Overview Dashboard",
    text: "The Overview Dashboard offers a comprehensive overview of a country's performance in various sectors, subsectors and indicators throughout the years. Through nine intuitive charts, users can track overall percentile changes, sector scores, and indicator performances, empowering them to make data-driven decisions and gain valuable insights into the country's progress and areas for potential growth.",
    images: ["/images/DashboardCountry.png", "/images/DashboardCountry1.png"],
    link: "/dashboard/overview",
  },
  {
    title: "Country Comparison Dashboard",
    text: "The Comparison Dashboard provides a user-friendly interface to compare key performance indicators (KPIs) across countries and years. With easy-to-interpret charts, users can quickly assess and visualize the amount and rank changes of selected indicators over time, enabling them to identify trends and compare country performances effectively.",
    images: ["/images/Comprasiondark.png", "/images/Comprasionlight.png"],
    link: "/dashboard/economy",
  },
];

const MotionSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      className={`w-full transition-colors duration-500 relative overflow-hidden ${
        isDark ? "bg-[#0D1420] text-white" : "bg-[#F6F6F6] text-gray-900"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col items-center text-center relative">
        <h2
          className="font-bold mb-6 sm:mb-10 bg-clip-text text-transparent"
          style={{
            fontSize: generateClamp(18, 22),
            backgroundImage:
              index === 0
                ? "linear-gradient(90deg, #FF3C00, #CC3203)"
                : isDark
                ? "linear-gradient(90deg, #FF3C00, #CC3203)"
                : "linear-gradient(90deg, #FF3C00, #CC3203)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {slides[index].title}
        </h2>

        <div className="relative flex items-center justify-center w-full">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full z-20 hidden lg:flex transition-colors duration-300"
            style={{
              borderColor: isDark ? "#555" : "#ccc",
              color: isDark ? "#ccc" : "#555",
            }}
          >
            ←
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[850px] gap-8 mx-auto min-h-[380px]"
            >
              <div className="hidden lg:flex flex-1 flex-col text-left space-y-3 px-2">
                <p
                  className={`leading-relaxed transition-colors duration-500 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                  style={{
                    fontSize: generateClamp(13, 18),
                    maxWidth: "55ch",
                  }}
                >
                  {slides[index].text}
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="pt-3"
                >
                  <Link href={slides[index].link}>
                    <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1E2A3A] text-white rounded-full font-medium hover:bg-[#2A3C50] transition text-sm sm:text-base">
                      More
                      <span className="text-base">→</span>
                    </button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full lg:w-[350px] h-[230px] sm:h-[260px] md:h-[280px] lg:h-[300px] flex items-center justify-center"
              >
                <div className="absolute lg:-top-[15px]  right-[12px]  lg:left-[130px] w-[85%] h-[75%]  overflow-hidden shadow-md opacity-90">
                  <Image
                    src={slides[index].images[1]}
                    alt={`${slides[index].title} background`}
                    fill
                    className="object-cover "
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="absolute top-[85px] left-[12px] lg:top-[25px] lg:left-[-15px] w-[85%] h-[75%] overflow-hidden shadow-lg z-10">
                  <Image
                    src={slides[index].images[0]}
                    alt={slides[index].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
              <div className="lg:hidden w-full flex items-center justify-end px-2 gap-8 mt-4">
                <Link href={slides[index].link}>
                  <button
                    className={`flex items-center justify-center gap-2 px-4 py-2 mt-8 rounded-full font-medium text-sm transition ${
                      isDark
                        ? "bg-[#22314A] text-white hover:bg-[#334760]"
                        : "bg-[#1E2A3A] text-white hover:bg-[#2A3C50]"
                    }`}
                  >
                    More
                    <span className="text-base">→</span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-full transition-colors duration-300 z-20 hidden lg:flex"
            style={{
              borderColor: isDark ? "#555" : "#ccc",
              color: isDark ? "#ccc" : "#555",
            }}
          >
            →
          </button>
        </div>

        <div className="lg:hidden w-full flex items-center justify-center mt-4 gap-3">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setIndex(dotIndex)}
              className={`w-3 h-3 rounded-full transition ${
                dotIndex === index
                  ? "bg-[#FF3C00]"
                  : isDark
                  ? "bg-gray-500"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionSlider;
