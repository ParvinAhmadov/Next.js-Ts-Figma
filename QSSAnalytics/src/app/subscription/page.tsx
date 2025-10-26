"use client";

import React, { useState } from "react";
import PremiumPlan from "@/components/SubscriptionPlans/PremiumPlan";
import BasicPlan from "@/components/SubscriptionPlans/BasicPlan";
import { useTheme } from "@/context";

const SubscriptionPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedPlan, setSelectedPlan] = useState<"premium" | "basic">(
    "premium"
  );

  const planDetails = {
    premium: {
      name: "Premium Plan",
      price: "14.99 $",
      priceOld: "$ 29.99 USD",
      features: [
        "All Dashboard",
        "200+ indicators",
        "Unlimited searchatbot",
        "Table view",
        "Download as PDF, PNG, XSLX",
      ],
      details: [
        "Unlock an extensive range of 200+ indicators, providing in-depth metrics across various domains.",
        "Enjoy unlimited access to our Searchatbot, enabling effortless data exploration and instant insights.",
        "Utilize advanced features like the table view for comprehensive data analysis.",
        "Download your findings as PDF, PNG, or XSLX for seamless integration with your workflow.",
        "Harness the full potential of data-driven decision-making with our comprehensive Premium plan.",
      ],
      buttonText: "Buy Now",
      buttonClass: "bg-green-500 hover:bg-green-600 text-white",
    },
    basic: {
      name: "Basic Plan",
      price: "00.00 $",
      features: [
        "2 Dashboard",
        "10 indicators",
        "Limited searchatbot use (5 times) daily",
      ],
      details: [
        "Access to two insightful dashboards for comparing countries and tracking overall performance.",
        "Explore up to 10 key indicators, offering valuable insights into various sectors and subsectors.",
        "Limited daily usage of our Searchatbot for quick data queries (up to 5 times per day).",
      ],
      buttonText: "Select Plan",
      buttonClass: isDark
        ? "bg-[#2a5a8a] hover:bg-[#3a6a9a] text-white"
        : "bg-[#0a1628] hover:bg-[#1a2638] text-white",
    },
  };

  const currentPlan = planDetails[selectedPlan];

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-6 transition-colors duration-500 ${
        isDark ? "bg-[#0B1420]" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1300px]">
        <h1
          className={`text-center text-3xl md:text-4xl font-normal mb-16 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Choose the plan that suits your needs
        </h1>

        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-[550px_auto] gap-12 items-start">
            <div className="flex lg:justify-end justify-center min-h-[460px]">
              <div className="transition-all duration-300">
                {selectedPlan === "premium" ? (
                  <PremiumPlan plan={currentPlan} isDark={isDark} />
                ) : (
                  <BasicPlan plan={currentPlan} isDark={isDark} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-8 max-w-[580px]">
              <div className="flex gap-4 sticky top-0 z-10">
                {(["premium", "basic"] as const).map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setSelectedPlan(plan)}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all flex-1 ${
                      selectedPlan === plan
                        ? isDark
                          ? "bg-[#1a3a5c] text-white"
                          : "bg-[#0a1628] text-white"
                        : isDark
                        ? "bg-[#1a2a3c] text-gray-400"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-4 flex-shrink-0 ${
                        selectedPlan === plan
                          ? "border-green-400"
                          : "border-gray-500"
                      }`}
                    ></div>
                    <div className="text-left">
                      <div className="font-semibold text-base">
                        {planDetails[plan].name}
                      </div>
                      <div className="text-sm opacity-70">
                        {planDetails[plan].price}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="min-h-[350px] transition-all duration-300">
                <div
                  className={`space-y-5 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {currentPlan.details.map((detail, idx) => (
                    <div key={idx} className="flex gap-4 animate-fadeIn">
                      <span className="text-green-500 font-bold text-xl flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed text-base">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full font-semibold py-3.5 px-8 rounded-xl transition-all duration-200 shadow-lg ${currentPlan.buttonClass}`}
              >
                {currentPlan.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
