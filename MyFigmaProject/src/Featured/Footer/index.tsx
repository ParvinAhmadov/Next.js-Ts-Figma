"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 dark:bg-[#0F1C2E] text-gray-800 dark:text-gray-200 py-10">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col items-center justify-center gap-6 text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link href="/policy" className="hover:underline transition">Policy page</Link>
          <Link href="/dashboard" className="hover:underline transition">Dashboard</Link>
          <Link href="/contacts" className="hover:underline transition">Contacts</Link>
          <Link href="/contact" className="hover:underline transition">Contact</Link>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition">
            <FaFacebookF size={18} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E1306C] transition">
            <FaInstagram size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#0A66C2] transition">
            <FaLinkedinIn size={18} />
          </a>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">
          Copyright ©2023 www.pixabay - StasKn
        </div>
      </div>
    </footer>
  );
};

export default Footer;
