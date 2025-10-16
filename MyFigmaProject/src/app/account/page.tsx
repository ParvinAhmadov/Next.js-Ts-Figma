"use client";

import Image from "next/image";
import AuthCard from "../../components/AuthCard";
import { generateClamp } from "@/utils/clamp";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/earth.jpg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-[#001228BD] bg-opacity-[74%] z-10" />

      <header className="absolute top-0 left-0 w-full z-50 text-white">
        <div className="max-w-[960px] mx-auto py-4 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/Frame 1.png"
              alt="Search Icon"
              width={24}
              height={24}
              className="object-contain"
            />
            <span
              style={{ fontSize: generateClamp(16, 22) }}
              className="font-bold"
            >
              SEARCHART
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-5">
            <a
              href="#"
              className="hover:underline"
              style={{ fontSize: generateClamp(14, 16) }}
            >
              Policy area
            </a>
            <a
              href="#"
              className="hover:underline"
              style={{ fontSize: generateClamp(14, 16) }}
            >
              Dashboard
            </a>
            <a
              href="#"
              className="hover:underline"
              style={{ fontSize: generateClamp(14, 16) }}
            >
              Subscription
            </a>
            <a
              href="#"
              className="hover:underline"
              style={{ fontSize: generateClamp(14, 16) }}
            >
              About Us
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className="hover:underline"
              style={{ fontSize: generateClamp(14, 16) }}
            >
              Sign in
            </a>
            <a
              href="#"
              className="px-3 py-1.5 border border-white rounded-[6px] hover:bg-white hover:text-black transition"
              style={{ fontSize: generateClamp(14, 16) }}
            >
              Sign up
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)}>
              <FiMenu size={24} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-[#001228] z-50 shadow-lg flex flex-col py-8 px-5"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="self-end mb-8 text-white"
              >
                <FiX size={24} />
              </button>

              <nav className="flex flex-col gap-6">
                <a
                  href="#"
                  className="text-white hover:underline"
                  style={{ fontSize: generateClamp(14, 16) }}
                  onClick={() => setIsOpen(false)}
                >
                  Policy area
                </a>
                <a
                  href="#"
                  className="text-white hover:underline"
                  style={{ fontSize: generateClamp(14, 16) }}
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="text-white hover:underline"
                  style={{ fontSize: generateClamp(14, 16) }}
                  onClick={() => setIsOpen(false)}
                >
                  Subscription
                </a>
                <a
                  href="#"
                  className="text-white hover:underline"
                  style={{ fontSize: generateClamp(14, 16) }}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 border border-[#001228] bg-white rounded-[6px] text-[#001228] hover:bg-white hover:text-black transition text-center"
                  style={{ fontSize: generateClamp(14, 16) }}
                  onClick={() => setIsOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="px-3 py-1.5 border border-[#001228] bg-white rounded-[6px] text-[#001228] hover:bg-white hover:text-black transition text-center"
                  style={{ fontSize: generateClamp(14, 16) }}
                  onClick={() => setIsOpen(false)}
                >
                  Sign up
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>

      <div className="relative z-20 flex items-center justify-center h-full px-4 mt-[3%]">
        <div className="max-w-[960px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
          <div className="text-[#B5BAC0] pt-2">
            <h1
              className="font-semibold font-inter mb-4"
              style={{
                fontSize: generateClamp(28, 58),
                lineHeight: generateClamp(34, 63),
                letterSpacing: "-0.02em",
              }}
            >
              Welcome to our Searchart system!
            </h1>

            <p
              className="leading-relaxed font-inter"
              style={{
                fontSize: generateClamp(16, 20),
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
