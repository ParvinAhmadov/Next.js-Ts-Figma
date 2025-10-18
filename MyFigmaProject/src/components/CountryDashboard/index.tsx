"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const generateClamp = (minPx: number, maxPx: number): string =>
  `clamp(${minPx / 16}rem, ${(minPx / 16) * 0.5}rem + 2vw, ${maxPx / 16}rem)`;

interface Slide {
  title: string;
  text: string;
  image: string;
}

const slides: Slide[] = [
  {
    title: "Country Comparison Dashboard",
    text: "The Comparison Dashboard provides a user-friendly interface to compare key performance indicators (KPIs) across countries and years. With easy-to-interpret charts, users can quickly assess and visualize the amount and rank changes of selected indicators over time.",
    image:
      "https://searchartfront-production.up.railway.app/assets/comparsion-dashboard-dc36b553.png",
  },
  {
    title: "Country Performance Trends",
    text: "Visualize how countries evolve over time with dynamic charts and rankings. Track performance shifts, benchmark progress, and uncover insights across multiple indicators.",
    image:
      "https://searchartfront-production.up.railway.app/assets/overview-dashboard-12adfaf6.png",
  },
];

const MotionSlider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="w-full bg-white dark:bg-[#182235] text-gray-900 dark:text-white transition-colors duration-500 relative">
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gray-400 text-gray-300 hover:text-white hover:border-white rounded-full bg-transparent transition z-20"
      >
        ←
      </button>

      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10"
          >
            <div className="flex-1 text-left space-y-6">
              <h2
                className="font-bold text-[#FF3C00]"
                style={{ fontSize: generateClamp(20, 36) }}
              >
                {slides[index].title}
              </h2>

              <p
                className="text-gray-300"
                style={{
                  fontSize: generateClamp(14, 20),
                  lineHeight: "1.6",
                  maxWidth: "60ch",
                }}
              >
                {slides[index].text}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="pt-4"
              >
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1E2A3A] text-white rounded-full font-medium hover:bg-[#2A3C50] transition">
                  More
                  <span className="text-xl">→</span>
                </button>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative w-full max-w-[500px] h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={slides[index].image}
                alt={slides[index].title}
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-white transition z-20 bg-transparent"
      >
        →
      </button>
    </section>
  );
};

export default MotionSlider;
