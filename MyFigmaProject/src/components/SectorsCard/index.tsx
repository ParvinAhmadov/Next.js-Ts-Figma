"use client";

import { generateClamp } from "@/utils/clamp";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";
import { useTheme } from "@/context";

interface Sector {
  title: string;
  imageSrc: string;
}

const sectorsCard: Sector[] = [
  {
    title: "Agriculture",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/agriculture-fa54a23d.png",
  },
  {
    title: "Economy",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/economy-1bc0f459.png",
  },
  {
    title: "Technology & Innovation",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/technology-b4ba0dc9.png",
  },
  {
    title: "Health",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/health-23a4d3eb.png",
  },
  {
    title: "Education",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/education-8b5c7e30.png",
  },
  {
    title: "Social",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/social-70bb3850.png",
  },
  {
    title: "Army",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/army-5989ccef.png",
  },
  {
    title: "Government",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/government-2c727951.png",
  },
  {
    title: "Transportation",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/transportation-c3084651.png",
  },
  {
    title: "Index",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/index-a30494eb.png",
  },
  {
    title: "Business",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/business-7657b362.png",
  },
  {
    title: "Other",
    imageSrc:
      "https://searchartfront-production.up.railway.app/assets/other-55283db6.png",
  },
];

const SectorGrid: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className={`mx-auto transition-colors duration-500 ${
        isDark ? "bg-[#09101B] text-white" : "bg-[#FBFBFB] text-gray-900"
      }`}
    >
      <div className="max-w-[1440px] mx-auto text-center space-y-6 py-16 px-4">
        <p
          className={`transition-colors duration-500 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
          style={{
            fontSize: generateClamp(14, 20),
            lineHeight: "1.6",
            maxWidth: "200ch",
            margin: "0 auto",
          }}
        >
          Discover a diverse range of sectors, each providing in-depth insights
          into subsectors and indicators within them.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-10">
          {sectorsCard.map(({ title, imageSrc }, index) => (
            <div
              key={title}
              className="group flex flex-col items-center space-y-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="relative w-[130px] h-[130px] rounded-full overflow-visible">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>

                <div
                  className={`absolute inset-0 rounded-full border-[3px] border-transparent group-hover:scale-[1.15] origin-center transition-all duration-500 ${
                    isDark
                      ? "group-hover:border-white"
                      : "group-hover:border-black"
                  }`}
                />
              </div>

              <span
                className="font-semibold text-center transition-colors duration-500"
                style={{ fontSize: generateClamp(12, 16) }}
              >
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorGrid;
