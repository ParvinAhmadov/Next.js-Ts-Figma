"use client";

import { generateClamp } from "@/utils/clamp";
import Image from "next/image";

export function MissionSection() {
  return (
    <div className="relative min-h-screen bg-[#0B1B2E] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://searchartfront-production.up.railway.app/assets/about-us-hero-a5dfcddd.png')",
        }}
      />

      <div className="absolute top-[35%] right-[0%] lg:right-[20%]">
        <Image
          src="https://searchartfront-production.up.railway.app/assets/ellipse-a39dd00f.svg"
          alt="Ellipse"
          width={344}
          height={344}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 md:px-20 flex flex-col items-center justify-center ">
        <div className="max-w-[1005px] w-full flex flex-col items-start justify-center">
          <h1
            className="font-bold mb-6 md:mb-8 tracking-tight  text-[#FFFFFF]/50"
            style={{
              fontSize: generateClamp(32, 64),
            }}
          >
            Our Mission
          </h1>

          <p
            className="hidden lg:block text-gray-300 leading-relaxed text-[#FFFFFF]/50"
            style={{
              fontSize: generateClamp(16, 20),
              lineHeight: "1.8",
            }}
          >
            At Searchart, we are passionate about data and its transformative
            power. Our mission is to provide comprehensive insights into global
            Key Performance Indicators (KPIs) by collecting and curating data
            from 1960 to 2022 for countries worldwide. Through our carefully
            structured dataset, we empower decision-makers, researchers, and
            curious minds to explore, compare, and understand trends across
            different sectors and subsectors.
          </p>

          <p
            className="block lg:hidden text-gray-300 leading-relaxed text-[#FFFFFF]/50"
            style={{
              fontSize: generateClamp(16, 20),
              lineHeight: "1.8",
            }}
          >
            Our mission is to provide comprehensive insights into global Key
            Performance Indicators (KPIs) by collecting and curating data from
            1960 to 2022 for countries worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
