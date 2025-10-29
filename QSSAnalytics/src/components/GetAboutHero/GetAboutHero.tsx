"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GetAboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden overflow-x-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/earth.jpg"
          alt="Earth from space at night"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-[1440px] mx-auto px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Get started today and unlock a world of insights!
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default GetAboutHero;
