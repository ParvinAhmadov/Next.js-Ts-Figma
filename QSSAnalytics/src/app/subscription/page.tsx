"use client";

import React, { useState } from "react";
import PremiumPlan from "@/components/SubscriptionPlans/PremiumPlan";
import BasicPlan from "@/components/SubscriptionPlans/BasicPlan";
import { useTheme } from "@/context";
import { IoMdArrowRoundBack } from "react-icons/io";

const SubscriptionPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedPlan, setSelectedPlan] = useState<"premium" | "basic">(
    "premium"
  );
  const [showPaymentForm, setShowPaymentForm] = useState(false);

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

  const handleBuyNow = () => {
    if (selectedPlan === "premium") {
      setShowPaymentForm(true);
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center py-12 px-6 transition-colors duration-500 ${
        isDark ? "bg-[#0B1420]" : "bg-white"
      }`}
    >
      <div className="w-full max-w-[1440px]">
        <h1
          className={`text-center font-normal mb-16 text-[clamp(0.75rem,2vw,1.5rem)] ${
            isDark ? "text-[#133E82]" : "text-[#133E82]"
          }`}
        >
          Choose the plan that suits your needs
        </h1>

        <div className="flex items-center justify-center">
          <div className="grid lg:grid-cols-[550px_auto] lg:gap-18 items-start">
            <div className="flex justify-center lg:justify-end min-h-[460px]">
              <div className="transition-all duration-300">
                {selectedPlan === "premium" ? (
                  <PremiumPlan plan={currentPlan} isDark={isDark} />
                ) : (
                  <BasicPlan plan={currentPlan} isDark={isDark} />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-8 max-w-[580px]">
              {!showPaymentForm ? (
                <>
                  <div className="flex gap-4 sticky top-0 z-10">
                    {(["premium", "basic"] as const).map((plan) => (
                      <button
                        key={plan}
                        onClick={() => {
                          setSelectedPlan(plan);
                          setShowPaymentForm(false);
                        }}
                        className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all flex-1 text-[clamp(0.875rem,2vw,1rem)] ${
                          selectedPlan === plan
                            ? isDark
                              ? "bg-[#1a3a5c] text-white"
                              : "bg-[#0B1525] text-white"
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
                          <div className="font-semibold">
                            {planDetails[plan].name}
                          </div>
                          <div className="opacity-70">
                            {planDetails[plan].price}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="min-h-[150px] transition-all duration-300 mt-4">
                    <div
                      className={`space-y-5 text-[clamp(0.875rem,2vw,1rem)] ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {currentPlan.details.map((detail, idx) => (
                        <div key={idx} className="flex gap-4 animate-fadeIn">
                          <span className="text-green-500 font-bold text-[clamp(1rem,2.5vw,1.25rem)] flex-shrink-0">
                            {idx + 1}
                          </span>
                          <p className="leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={handleBuyNow}
                    className={`mx-auto  items-center font-semibold py-3.5 px-[15%] rounded-xl transition-all duration-200 shadow-lg ${currentPlan.buttonClass} max-w-[300px] sm:max-w-[400px] mt-4 text-[clamp(0.875rem,2vw,1rem)]`}
                  >
                    <span className="ml-auto">{currentPlan.buttonText}</span>
                  </button>
                </>
              ) : (
                <div
                  className={`space-y-6 text-[clamp(0.875rem,2vw,1rem)] ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        isDark
                          ? "bg-[#1a3a5c] border-[#2a4a6c] text-white placeholder-gray-500"
                          : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Validity <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDark
                            ? "bg-[#1a3a5c] border-[#2a4a6c] text-white placeholder-gray-500"
                            : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        CVC <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="XXX"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDark
                            ? "bg-[#1a3a5c] border-[#2a4a6c] text-white placeholder-gray-500"
                            : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Country <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          className={`w-full px-4 py-3 rounded-lg border transition-colors appearance-none ${
                            isDark
                              ? "bg-[#1a3a5c] border-[#2a4a6c] text-white"
                              : "bg-white border-gray-300 text-gray-800"
                          }`}
                        >
                          <option
                            className={
                              isDark
                                ? "bg-[#1a3a5c] text-white"
                                : "bg-white text-gray-800"
                            }
                          >
                            Select...
                          </option>
                          <option
                            className={
                              isDark
                                ? "bg-[#1a3a5c] text-white"
                                : "bg-white text-gray-800"
                            }
                          >
                            United States
                          </option>
                          <option
                            className={
                              isDark
                                ? "bg-[#1a3a5c] text-white"
                                : "bg-white text-gray-800"
                            }
                          >
                            United Kingdom
                          </option>
                          <option
                            className={
                              isDark
                                ? "bg-[#1a3a5c] text-white"
                                : "bg-white text-gray-800"
                            }
                          >
                            Azerbaijan
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                          <svg
                            className={`w-4 h-4 ${
                              isDark ? "text-white" : "text-gray-800"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Postal Code <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Postal Code"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          isDark
                            ? "bg-[#1a3a5c] border-[#2a4a6c] text-white placeholder-gray-500"
                            : "bg-white border-gray-300 text-gray-800 placeholder-gray-400"
                        }`}
                      />
                    </div>
                  </div>

                  <button className="mx-auto flex justify-end items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 px-[15%] rounded-xl transition-all duration-200 shadow-lg max-w-[300px] sm:max-w-[400px] mt-2 text-[clamp(0.875rem,2vw,1rem)]">
                    <span className="ml-auto">Buy Now</span>
                  </button>

                  <button
                    onClick={() => setShowPaymentForm(false)}
                    className={`inline-flex items-center border  rounded-full gap-2 font-medium py-[clamp(0.5rem,1vw,0.75rem)] px-[clamp(1rem,2vw,1.5rem)] text-[clamp(0.875rem,1.5vw,1rem)] mt-2 transition-colors ${
                      isDark
                        ? "text-gray-400 hover:text-white border-gray-600"
                        : "text-gray-600 hover:text-gray-800 border-gray-300"
                    }`}
                  >
                    <IoMdArrowRoundBack className="w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)]" />
                    Back to plans
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
