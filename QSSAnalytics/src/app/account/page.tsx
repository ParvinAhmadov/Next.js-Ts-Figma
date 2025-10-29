"use client";

import Image from "next/image";
import AuthCard from "../../components/AuthCard";
import { generateClamp } from "@/utils/clamp";
import { useTheme } from "@/context";

export default function Account() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative w-full min-h-screen overflow-hidden transition-colors duration-500">
      <Image
        src="/images/earth.jpg"
        alt="Background"
        fill
        priority
        className="absolute inset-0 object-cover z-0"
      />

      <div
        className={`absolute inset-0 z-10 transition-colors duration-500 ${
          isDark ? "bg-[#001228]/80" : "bg-[#FFFFFF]/70 backdrop-blur-[2px]"
        }`}
      />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-[960px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">
          <div
            className={`pt-2 transition-colors duration-500 text-center lg:text-left ${
              isDark ? "text-[#B5BAC0]" : "text-[#1A1A1A]"
            }`}
          >
            <h1
              className="font-semibold font-inter mb-4"
              style={{
                fontSize: generateClamp(22, 48),
                lineHeight: generateClamp(30, 58),
                letterSpacing: "-0.02em",
              }}
            >
              Welcome to our Searchart system!
            </h1>

            <p
              className="leading-relaxed font-inter"
              style={{
                fontSize: generateClamp(14, 18),
              }}
            >
              Welcome back! Your data journey continues. Sign in to access your
              personalized insights and make informed decisions effortlessly.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <div className="w-full max-w-[400px]">
              <AuthCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
