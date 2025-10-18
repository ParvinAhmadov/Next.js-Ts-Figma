"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

const generateClamp = (minPx: number, maxPx: number): string => {
  const min = minPx / 16;
  const max = maxPx / 16;
  return `clamp(${min}rem, ${min * 0.5}rem + 2vw, ${max}rem)`;
};

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
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section className="mx-auto bg-white dark:bg-[#0F1C2E] text-gray-900 dark:text-white transition-colors duration-500">
      <div className="max-w-[1440px] mx-auto text-center space-y-6 py-16 px-4">
        <h2 className="font-bold" style={{ fontSize: generateClamp(20, 36) }}>
          Explore Key Sectors
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

                <div className="absolute inset-0 rounded-full border-[3px] border-transparent group-hover:border-white transition-all duration-500 group-hover:scale-[1.15]  origin-center"></div>
              </div>

              <span
                className="font-semibold text-center text-white"
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
