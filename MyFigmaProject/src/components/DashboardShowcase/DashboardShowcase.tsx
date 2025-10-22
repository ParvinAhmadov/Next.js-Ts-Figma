"use client";

import React from "react";
import { useTheme } from "@/context";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import DashboardCard from "../DashboardCard/DashboardCard";
import Image from "next/image";
import CountryOverview from "../CountryOverview/CountryOverview";
import CountryComparison from "../CountryComparison/CountryComparison";

interface DashboardData {
  key: "overview" | "comparison";
  title: string;
  imageLight: string;
  imageDark: string;
  buttonHref: string;
  caption: string;
}

const dashboards: DashboardData[] = [
  {
    key: "overview",
    title: "Country Overview Dashboard",
    imageLight: "/images/DashboardCountry1.png",
    imageDark: "/images/DashboardCountry.png",
    buttonHref: "/overview",
    caption: "Go to Overview Dashboard",
  },
  {
    key: "comparison",
    title: "Country Comparison Dashboard",
    imageLight: "/images/Comprasionlight.png",
    imageDark: "/images/Comprasiondark.png",
    buttonHref: "/comparison",
    caption: "Go to Comparison Dashboard",
  },
];

const DashboardShowcase: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev === dashboards.length - 1 ? 0 : prev + 1));
    } else if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev === 0 ? dashboards.length - 1 : prev - 1));
    }
  };

  const renderContent = () => {
    switch (dashboards[activeIndex].key) {
      case "overview":
        return <CountryOverview />;
      case "comparison":
        return <CountryComparison />;
      default:
        return null;
    }
  };

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-[#070B12]" : "bg-[#F9FAFB]"
      }`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 opacity-50"
          style={{ width: "clamp(280px,36vw,560px)" }}
        >
          <Image
            src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
            alt="map-deco-1"
            width={1200}
            height={1200}
            style={{
              objectFit: "contain",
              filter: isDark ? "brightness(0.0)" : "brightness(0.95)",
            }}
            priority
          />
        </div>
        <div
          className="absolute bottom-0 right-0 opacity-50 rotate-180"
          style={{ width: "clamp(280px,36vw,480px)" }}
        >
          <Image
            src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
            alt="map-deco-2"
            width={1000}
            height={1000}
            style={{
              objectFit: "contain",
              filter: isDark ? "brightness(0.6)" : "brightness(0.10)",
            }}
            priority
          />
        </div>
      </div>

      <div
        className="absolute inset-0 z-10 pointer-events-none transition-all duration-700"
        style={{
          background: isDark
            ? "linear-gradient(0deg, rgba(7,11,18,1) 0%, rgba(7,11,18,0.95) 12%, rgba(7,11,18,0.75) 30%, rgba(7,11,18,0.45) 55%, rgba(7,11,18,0.15) 80%, rgba(7,11,18,0.0) 100%)"
            : "linear-gradient(0deg, rgba(249,250,251,1) 0%, rgba(249,250,251,0.9) 25%, rgba(249,250,251,0.6) 55%, rgba(249,250,251,0.0) 100%)",
        }}
      />

      <div className="flex flex-col items-center mb-8 z-40">
        <div className="hidden lg:flex gap-[200px] justify-center w-full mb-4">
          {dashboards.map((dash, index) => (
            <p
              key={dash.key}
              className={`font-semibold text-lg md:text-xl ${
                activeIndex === index ? "text-orange-500" : "text-gray-500"
              }`}
              style={{ fontSize: "clamp(1.25rem, 2vw, 1.7rem)" }}
            >
              {dash.title}
            </p>
          ))}
        </div>

        <div className="lg:hidden">
          <p
            className="font-semibold text-center text-orange-500"
            style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.7rem)" }}
          >
            {dashboards[activeIndex].title}
          </p>
        </div>
      </div>

      <div className="w-full lg:hidden overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={dashboards[activeIndex].key}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex justify-center w-full cursor-grab"
          >
            <DashboardCard
              caption={dashboards[activeIndex].caption}
              imageSrcLight={dashboards[activeIndex].imageLight}
              imageSrcDark={dashboards[activeIndex].imageDark}
              isDark={isDark}
              active={true}
              onClick={() => {}}
              buttonLabel="Dashboard →"
              buttonHref={dashboards[activeIndex].buttonHref}
            />
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-3 mt-6">
          {dashboards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-orange-800 scale-110"
                  : isDark
                  ? "bg-gray-600"
                  : "bg-gray-800"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:flex flex-row items-center justify-center gap-[clamp(2rem,4vw,5rem)]">
        {dashboards.map((dash, index) => (
          <DashboardCard
            key={dash.key}
            caption={dash.caption}
            imageSrcLight={dash.imageLight}
            imageSrcDark={dash.imageDark}
            isDark={isDark}
            active={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            buttonLabel="Dashboard →"
            buttonHref={dash.buttonHref}
          />
        ))}
      </div>

      <div className="w-full mt-10 px-4">{renderContent()}</div>
    </section>
  );
};

export default DashboardShowcase;
