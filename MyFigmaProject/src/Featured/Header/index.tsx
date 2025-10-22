"use client";
import Image from "next/image";
import { generateClamp } from "@/utils/clamp";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { CiDark, CiLight } from "react-icons/ci";
import { useTheme } from "@/context";
import Link from "next/link";

interface HeaderProps {
  isTransparent?: boolean;
  className?: string;
  containerMaxWidth?: number;
  bgColor?: string;
}

const Header = ({
  isTransparent = false,
  containerMaxWidth,
  bgColor,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPolicyOpen, setPolicyOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

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
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        isTransparent
          ? "bg-transparent text-white"
          : bgColor
          ? `${bgColor} ${isDark ? "text-white" : "text-black"}`
          : isDark
          ? "bg-[#101D31] text-white"
          : "bg-white text-black"
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
          <Link href="/">
            <span
              style={{ fontSize: generateClamp(16, 22) }}
              className="font-bold"
            >
              SEARCHART
            </span>
          </Link>
        </div>

        <nav className="hidden relative  lg:flex items-center gap-5">
          <a
            href="#"
            className={`hover:underline ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
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
                className={`absolute top-full left-0 mt-2 shadow-lg rounded-md py-2 z-40 w-64 ${
                  theme === "dark" ? "bg-[#111F35]" : "bg-white"
                }`}
              >
                <nav
                  className={`flex flex-col w-[256px] h-[496px] gap-2 p-2 overflow-hidden rounded-lg  ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {navItems.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`flex items-center w-[240px] h-[40px] px-2 gap-3 rounded transition-colors duration-300 ${
                        theme === "dark"
                          ? "hover:bg-gray-700 text-white"
                          : "hover:bg-gray-200 text-black"
                      }`}
                    >
                      <div className="w-6 h-6 relative">
                        <Image
                          src={item.src}
                          alt={item.label}
                          width={24}
                          height={24}
                          className={`object-contain ${
                            theme === "dark" ? "invert" : ""
                          }`}
                        />
                      </div>
                      <span className="text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href="/dashboard"
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
          <div
            className="flex items-center justify-center border p-2 rounded cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <CiLight size={20} /> : <CiDark size={20} />}
          </div>
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
            className={`px-3 py-1.5 rounded-[6px] text-center transition-colors duration-300 border ${
              isDark
                ? "border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-[#111F35]"
                : "border-black text-black hover:bg-black hover:text-white"
            }`}
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
            className={`fixed top-0 right-0 h-full w-64 z-50 shadow-lg flex flex-col py-8 px-5 transition-colors duration-300 ${
              isDark ? "bg-[#001228]" : "bg-white"
            }`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className={`self-end mb-8 transition-colors duration-300 ${
                isDark ? "text-white" : "text-[#001228]"
              }`}
            >
              <FiX size={24} />
            </button>

            <nav className="flex flex-col gap-6">
              {["Policy area", "Dashboard", "Subscription", "About Us"].map(
                (label, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`transition-colors duration-300 hover:underline ${
                      isDark ? "text-gray-200" : "text-[#001228]"
                    }`}
                    style={{ fontSize: generateClamp(14, 16) }}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                )
              )}

              <a
                href="#"
                className={`px-3 py-1.5 rounded-[6px] text-center transition-colors duration-300 border ${
                  isDark
                    ? "border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-[#001228]"
                    : "border-[#001228] text-[#001228] hover:bg-[#001228] hover:text-white"
                }`}
                style={{ fontSize: generateClamp(14, 16) }}
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </a>

              <a
                href="#"
                className={`px-3 py-1.5 rounded-[6px] text-center transition-colors duration-300 border ${
                  isDark
                    ? "border-gray-200 text-gray-200 hover:bg-gray-200 hover:text-[#001228]"
                    : "border-[#001228] text-[#001228] hover:bg-[#001228] hover:text-white"
                }`}
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
