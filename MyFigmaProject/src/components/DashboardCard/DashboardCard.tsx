"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface DashboardCardProps {
  caption: string;
  imageSrcLight: string;
  imageSrcDark: string;
  isDark: boolean;
  active: boolean;
  onClick: () => void;
  buttonLabel: string;
  buttonHref: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  caption,
  imageSrcLight,
  imageSrcDark,
  isDark,
  active,
  onClick,
  buttonLabel,
  buttonHref,
}) => {
  const imageSrc = isDark ? imageSrcDark : imageSrcLight;

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center gap-4 transition-all duration-500 cursor-pointer
        ${active ? "scale-[1.05] -translate-y-2 z-20" : "scale-[0.95] translate-y-2 opacity-70 z-10"}
        w-[clamp(300px,45vw,540px)] h-[clamp(300px,50vh,520px)]
      `}
    >
      <div className="w-full relative" style={{ paddingTop: "71.2%" }}>
        <Image
          src={imageSrc}
          alt="Dashboard image"
          fill
          className="object-contain pointer-events-none"
          priority
        />
      </div>

      {active && (
        <Link href={buttonHref}>
          <button className="px-4 py-2 w-full rounded-md font-medium bg-orange-500 text-white hover:bg-orange-600 transition text-[clamp(0.875rem,2vw,1rem)]">
            {buttonLabel}
          </button>
        </Link>
      )}

      {active && (
        <p className="text-center text-gray-500 text-[clamp(0.75rem,1.5vw,0.875rem)]">
          {caption}
        </p>
      )}
    </div>
  );
};

export default DashboardCard;
