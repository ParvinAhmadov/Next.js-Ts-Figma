"use client";

import React from "react";
import CountryComparison from "@/components/CountryComparison/CountryComparison";
import CountryOverview from "@/components/CountryOverview/CountryOverview";
import DashboardShowcase from "@/components/DashboardShowcase/DashboardShowcase";

export interface DashboardData {
  key: "overview" | "comparison";
  title: string;
  imageLight: string;
  imageDark: string;
  buttonHref: string;
  caption: string;
}

export const dashboards: DashboardData[] = [
  {
    key: "overview",
    title: "Country Overview Dashboard",
    imageLight: "/images/DashboardCountry1.png",
    imageDark: "/images/DashboardCountry.png",
    buttonHref: "/overview",
    caption: "Go to Overview Dashboard",
  },
  {
    key: "comparison",
    title: "Country Comparison Dashboard",
    imageLight: "/images/Comprasionlight.png",
    imageDark: "/images/Comprasiondark.png",
    buttonHref: "/comparison",
    caption: "Go to Comparison Dashboard",
  },
];

export default function Dashboard() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderContent = () => {
    switch (dashboards[activeIndex].key) {
      case "overview":
        return <CountryOverview />;
      case "comparison":
        return <CountryComparison />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <DashboardShowcase
        dashboards={dashboards}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />

      <div className="w-full mt-10 px-4">{renderContent()}</div>
    </div>
  );
}
