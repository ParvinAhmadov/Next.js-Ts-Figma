"use client";
import React, { useEffect, useState } from "react";
import { TfiAngleUp } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context";

const UpButton: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [showUpButton, setShowUpButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercentage);

      setShowUpButton(scrollTop > 10);
    };

    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bgColor = isDark ? "#09101B" : "#FFFFFF";
  const outerIconColor = isDark ? "#FFFFFF" : "#09101B";
  const innerIconColor = isDark ? "#09101B" : "#FFFFFF";

  return (
    <AnimatePresence>
      {showUpButton && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-20 right-6 w-[50px] h-[50px] flex items-center justify-center shadow-md transition-all transform translate-x-1/2"
          style={{ backgroundColor: bgColor }}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <TfiAngleUp className="absolute" style={{ color: outerIconColor }} />
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              clipPath: `inset(${100 - scrollProgress}% 0 0 0)`,
              backgroundColor: outerIconColor,
            }}
          >
            <TfiAngleUp
              className="absolute"
              style={{ color: innerIconColor }}
            />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default UpButton;
