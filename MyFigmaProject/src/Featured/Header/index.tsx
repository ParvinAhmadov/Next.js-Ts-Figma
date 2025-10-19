"use client";
import Image from "next/image";
import { generateClamp } from "@/utils/clamp";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

interface HeaderProps {
  isTransparent?: boolean;
  className?: string;
  containerMaxWidth?: number;
}

const Header = ({ isTransparent = false, containerMaxWidth }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPolicyOpen, setPolicyOpen] = useState(false);

  const navItems = [
    {
      src: "https://searchartfront-production.up.railway.app/assets/army-21ca5922.svg",
      label: "Army",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/economy-dfafea10.svg",
      label: "Economy",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/agriculture-d628415c.svg",
      label: "Agriculture",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/government-b36df543.svg",
      label: "Government",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/health-774655ad.svg",
      label: "Health",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/social-7a0c420a.svg",
      label: "Social",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/index-70b5fb66.svg",
      label: "Index",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/business-968f7934.svg",
      label: "Business",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/technology-c006b058.svg",
      label: "Technology & Innovation",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/transportation-4254f6cb.svg",
      label: "Transportation",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/education-e2cf907b.svg",
      label: "Education",
    },
    {
      src: "https://searchartfront-production.up.railway.app/assets/others-8a424bbf.svg",
      label: "Other",
    },
  ];
  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full text-white transition-colors duration-300 ${
        isTransparent ? "bg-transparent" : "bg-[#101D31]"
      }`}
    >
      <div
        className="flex items-center justify-between py-4 px-4 mx-auto"
        style={{ maxWidth: `${containerMaxWidth}px` }}
      >
        <div className="flex items-center gap-2">
          <div className="p-2  bg-[linear-gradient(#111F35,#04070B)] rounded-full">
            <Image
              src="/images/Frame 1.png"
              alt="Search Icon"
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
          <span
            style={{ fontSize: generateClamp(16, 22) }}
            className="font-bold"
          >
            SEARCHART
          </span>
        </div>

        <nav className="hidden relative  lg:flex items-center gap-5">
          <a
            href="#"
            className="hover:underline"
            style={{ fontSize: generateClamp(14, 16) }}
            onClick={(e) => {
              e.preventDefault();
              setPolicyOpen((prev) => !prev);
            }}
          >
            Policy area
          </a>
          <AnimatePresence>
            {isPolicyOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-full left-0 mt-2 bg-[#001228] shadow-lg rounded-md py-2 z-40 w-64"
              >
                <nav className="flex flex-col w-[256px] h-[496px] gap-2 text-white p-2 overflow-hidden bg-[#001228] rounded-lg">
                  {navItems.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center w-[240px] h-[40px] px-2 gap-3 rounded hover:bg-gray-800 transition-colors duration-300"
                    >
                      <div className="w-6 h-6 relative invert">
                        <Image
                          src={item.src}
                          alt={item.label}
                          fill
                          sizes="24px"
                          className="object-contain"
                        />
                      </div>
                      <span className="text-white text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
