"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const generateClamp = (minPx: number, maxPx: number): string =>
  `clamp(${minPx / 16}rem, ${(minPx / 16) * 0.5}rem + 2vw, ${maxPx / 16}rem)`;

interface Slide {
  title: string;
  text: string;
  image: string;
  link: string;
}

const slides: Slide[] = [
  {
    title: "Country Overview Dashboard",
    text: "The Overview Dashboard offers a comprehensive overview of a country's performance in various sectors, subsectors and indicators throughout the years. Through nine intuitive charts, users can track overall percentile changes, sector scores, and indicator performances, empowering them to make data-driven decisions and gain valuable insights into the country's progress and areas for potential growth.",
    image:
      "https://searchartfront-production.up.railway.app/assets/overview-dashboard-12adfaf6.png",
    link: "/dashboard/overview",
  },
  {
    title: "Country Comprasion Dashboard",
    text: "The Comparison Dashboard provides a user-friendly interface to compare key performance indicators (KPIs) across countries and years. With easy-to-interpret charts, users can quickly assess and visualize the amount and rank changes of selected indicators over time, enabling them to identify trends and compare country performances effectively.",
    image:
      "https://searchartfront-production.up.railway.app/assets/comparsion-dashboard-dc36b553.png",
    link: "/dashboard/economy",
  },
];

const MotionSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full bg-white dark:bg-[#182235] text-gray-900 dark:text-white transition-colors duration-500 relative overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-400 text-gray-400 hover:text-white hover:border-white rounded-full bg-transparent transition z-20 hidden lg:flex"
      >
        ←
      </button>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center">
        <h2
          className="font-bold text-[#FF3C00] mb-6 sm:mb-10"
          style={{ fontSize: generateClamp(18, 32) }}
        >
          {slides[index].title}
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[800px] gap-8 mx-auto"
          >
            <div className="hidden lg:flex flex-1 flex-col text-left space-y-3 px-2">
              <p
                className="text-gray-500 dark:text-gray-300 leading-relaxed"
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
              className="relative w-full lg:w-[400px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] rounded-xl overflow-hidden shadow-md flex-shrink-0"
            >
              <Image
                src={slides[index].image}
                alt={slides[index].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <div className="lg:hidden w-full flex justify-center mt-4 gap-3">
              {slides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => setIndex(dotIndex)}
                  className={`w-3 h-3 rounded-full transition ${
                    dotIndex === index ? "bg-[#FF3C00]" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
          <div className="lg:hidden w-full flex items-center justify-end  px-2 gap-8">
            <Link href={slides[index].link}>
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1E2A3A] text-white rounded-full font-medium hover:bg-[#2A3C50] transition text-sm">
                More
                <span className="text-base">→</span>
              </button>
            </Link>
          </div>
        </AnimatePresence>
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center border border-gray-400 text-gray-400 hover:text-white hover:border-white rounded-full transition z-20 bg-transparent hidden lg:flex"
      >
        →
      </button>
    </section>
  );
};

export default MotionSlider;
