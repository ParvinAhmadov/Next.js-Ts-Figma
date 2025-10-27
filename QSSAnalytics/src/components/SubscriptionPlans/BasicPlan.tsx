"use client";

import React from "react";

interface BasicPlanProps {
  plan: {
    name: string;
    price: string;
    features: string[];
    details: string[];
    buttonText: string;
    buttonClass: string;
  };
  isDark: boolean;
}

const BasicPlan: React.FC<BasicPlanProps> = ({ plan, isDark }) => {
  return (
    <div
      className={`relative rounded-2xl p-[clamp(1rem,2vw,2.5rem)] shadow-xl w-full max-w-[550px] ${
        isDark
          ? "bg-gradient-to-br from-[#2a4a6a] via-[#234058] to-[#1d3648] border border-[#3a5a7a]"
          : "bg-white border border-gray-300"
      }`}
    >
      <div className="mt-2 mb-10">
        <p
          className={`text-[clamp(2rem,5vw,3rem)] font-bold ${
            isDark ? "text-gray-400" : "text-blue-400"
          }`}
        >
          {plan.price}/month
        </p>
      </div>

      <ul className="space-y-[clamp(0.5rem,1.5vw,1.25rem)] text-[clamp(0.875rem,2vw,1rem)]">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                isDark
                  ? "bg-blue-900/30 border border-blue-600/40"
                  : "bg-gray-900 border border-gray-900"
              }`}
            >
              <svg
                className={`w-3.5 h-3.5 ${
                  isDark ? "text-blue-400" : "text-white"
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
            <span className="text-[clamp(0.875rem,1.5vw,1rem)]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BasicPlan;
