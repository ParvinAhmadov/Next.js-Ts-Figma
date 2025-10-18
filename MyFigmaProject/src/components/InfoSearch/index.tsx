"use client";

import { generateClamp } from "@/utils/clamp";
import React from "react";

const InfoSearch: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden transition-colors duration-500 bg-[#111F35] dark:bg-[#111F35] bg-white">
      <picture>
        <img
          src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
          alt="World Map"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80 dark:opacity-70"
          style={{
            width: "1200px",
            maxWidth: "90%",
            top: "60%",
            filter: "brightness(0.8)",
          }}
        />
      </picture>

      <div className="absolute inset-0 z-0 transition-all duration-700 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(245,245,245,0.8),rgba(255,255,255,0.9))] dark:bg-[linear-gradient(180deg,rgba(17,31,53,0.95),rgba(12,21,36,0.9),rgba(4,7,11,0.95))]" />

      <div className="relative z-10 max-w-3xl text-center space-y-6 transition-colors duration-500 text-gray-900 dark:text-white">
        <h1 className="font-bold" style={{ fontSize: generateClamp(16, 30) }}>
          Welcome to{" "}
          <span
            className="text-[#FF3C00]"
            style={{ fontSize: generateClamp(16, 30) }}
          >
            SEARCHART
          </span>
          !
        </h1>

        <p
          className="text-gray-700 dark:text-gray-200 transition-colors duration-500"
          style={{ fontSize: generateClamp(14, 18), lineHeight: "1.6" }}
        >
          The ultimate data analytics platform designed for managers in
          business, education, economics, health, and army, as well as
          government officials and researchers. Our dashboards are specifically
          designed to help you make critical strategic decisions, whether youre
          looking to benchmark your performance against industry standards,
          evaluate different countries performances, or conduct further
          research.
        </p>

        <div
          className="text-gray-500 dark:text-gray-400 text-sm animate-bounce"
          style={{ fontSize: generateClamp(12, 18) }}
        >
          Scroll to ↓
        </div>
      </div>
    </section>
  );
};

export default InfoSearch;
