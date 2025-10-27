"use client";

import React from "react";

interface PremiumPlanProps {
  plan: {
    name: string;
    price: string;
    priceOld?: string;
    features: string[];
    details: string[];
    buttonText: string;
    buttonClass: string;
  };
  isDark: boolean;
}

const PremiumPlan: React.FC<PremiumPlanProps> = ({ plan, isDark }) => {
  return (
    <div
      className={`relative rounded-2xl p-[clamp(1rem,2vw,2.5rem)] shadow-xl w-full max-w-[550px] ${
        isDark
          ? "bg-gradient-to-br from-[#1B3967] via-[#1a3f5f] to-[#16344f] border border-white"
          : "bg-[#0a1628] border border-[#0a1628]"
      }`}
    >
      {plan.priceOld && (
        <div className="absolute -left-1 -top-1 w-24 h-24 overflow-hidden">
          <div className="absolute top-5 -left-9 bg-[#CE1C1C] text-white text-[clamp(0.75rem,1.5vw,0.875rem)] font-bold py-1.5 px-10 -rotate-45 shadow-lg">
            -50%
          </div>
        </div>
      )}

      <div className="mt-6 mb-10">
        {plan.priceOld && (
          <p
            className={`text-[clamp(1rem,2.5vw,1.25rem)] line-through ${
              isDark ? "text-[#4F5D73]" : "text-gray-600"
            }`}
          >
            {plan.priceOld}
          </p>
        )}
        <p className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#CE1C1C] mt-2">
          {plan.price}/month
        </p>
      </div>

      <ul className="space-y-[clamp(0.5rem,1.5vw,1.25rem)] text-[clamp(0.875rem,2vw,1rem)]">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                isDark
                  ? "bg-gray-700/30 border border-gray-600/100"
                  : "bg-gray-700/20 border border-gray-600/30"
              }`}
            >
              <svg
                className={`w-3.5 h-3.5 ${
                  isDark ? "text-white" : "text-gray-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-gray-200">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PremiumPlan;
