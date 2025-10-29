"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "@/context";

const DataJourneySection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "bg-[#0B1120]" : "bg-white";
  const titleColor = isDark ? "text-gray-300" : "text-[#030712]";
  const textColor = isDark ? "text-gray-400" : "text-[#030712]";

  return (
    <section className={`w-full py-12 sm:py-16 md:py-20 ${bgColor}`}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[4%]">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-full min-h-[350px] lg:min-h-[500px] overflow-hidden max-w-full">
              <Image
                src="https://searchartfront-production.up.railway.app/assets/join-us-7a08187d.png"
                alt="Data Analysis Journey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 700px"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center text-center lg:text-left h-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 md:mb-8 justify-center lg:justify-between">
              <div>
                <h2
                  className={`text-3xl text-[20px] lg:text-[84px] font-bold ${titleColor} leading-tight`}
                >
                  Join Us on This Data Journey
                </h2>
              </div>
              <div>
                <span className="hidden lg:block w-[20px] h-64 bg-gradient-to-b from-[#9EA5AD] to-[#030712] rounded-full mt-2" />
              </div>
            </div>

            <p
              className={`text-base sm:text-lg lg:text-xl mb-6 ${titleColor} font-medium leading-relaxed`}
            >
              At Searhcart, we are driven by a passion for data and its
              potential to transform the world.
            </p>

            <p
              className={`text-sm sm:text-base lg:text-lg ${textColor} leading-relaxed text-justify`}
            >
              We invite you to embark on this data journey with us, exploring
              the past, understanding the present, and envisioning the future.
              Whether you are an economist, a policymaker, a researcher, or a
              curious mind, Searhcart is here to provide you with the tools and
              knowledge you need to make a positive impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataJourneySection;
