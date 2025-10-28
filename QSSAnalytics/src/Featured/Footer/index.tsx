"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { useTheme } from "@/context";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`w-full py-10 transition-colors duration-500 ${
        isDark ? "bg-[#09101B] text-gray-200" : "bg-[#FBFBFB] text-[#1F2937]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link
            href="/policy"
            className={`hover:underline transition ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Policy page
          </Link>
          <Link
            href="/dashboard"
            className={`hover:underline transition ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/contacts"
            className={`hover:underline transition ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Contacts
          </Link>
          <Link
            href="/contact"
            className={`hover:underline transition ${
              isDark ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark ? "hover:text-[#1877F2]" : "hover:text-[#1877F2]"
            }`}
          >
            <FaFacebookF size={18} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark ? "hover:text-[#E1306C]" : "hover:text-[#E1306C]"
            }`}
          >
            <FaInstagram size={18} />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition ${
              isDark ? "hover:text-[#0A66C2]" : "hover:text-[#0A66C2]"
            }`}
          >
            <FaLinkedinIn size={18} />
          </Link>
        </div>

        <div
          className={`text-xs transition-colors duration-500 ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Copyright © 2023 Privacy and policy • Searchart
        </div>
      </div>
    </footer>
  );
};

export default Footer;
