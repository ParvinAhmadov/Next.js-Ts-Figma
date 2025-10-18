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
    <section className="w-full bg-white dark:bg-[#0F1C2E] text-gray-900 dark:text-white transition-colors duration-500 relative">
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition z-20"
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
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <h2
              className="font-bold"
              style={{ fontSize: generateClamp(20, 36) }}
            >
              {slides[index].title}
            </h2>

            <p
              className="text-gray-700 dark:text-gray-300"
              style={{
                fontSize: generateClamp(14, 20),
                lineHeight: "1.6",
                maxWidth: "60ch",
                margin: "0 auto",
              }}
            >
              {slides[index].text}
            </p>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-3xl h-[400px] mx-auto rounded-xl overflow-hidden shadow-lg mt-10"
            >
              <Image
                src={slides[index].image}
                alt={slides[index].title}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6 flex justify-end"
            >
              <button className="flex items-center gap-2 text-[#FF3C00] font-semibold hover:underline transition">
                More
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition z-20"
      >
        →
      </button>
    </section>
  );
};

export default MotionSlider;
