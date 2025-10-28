"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";
import { generateClamp } from "@/utils/clamp";
import { useTheme } from "@/context";
import Link from "next/link";

type Step = "login" | "register1" | "register2";

type InputFieldProps = {
  label: string;
  labelStyle?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  children?: React.ReactNode;
};

const InputField = ({
  label,
  labelStyle = "text-sm font-medium",
  type = "text",
  value,
  onChange,
  placeholder,
  children,
}: InputFieldProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="mb-4">
      <label
        className={`block mb-1 ${labelStyle} ${
          isDark ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-[50px] px-4 border rounded-[7px] text-[16px] mb-1
            ${
              isDark
                ? "bg-[#1f2937] border-gray-600 text-white"
                : "bg-[#FBFBFB] border-[#E9E9E9] text-[#103557]"
            }`}
        />
        {children}
      </div>
    </div>
  );
};

export default function AuthCard() {
  const [step, setStep] = useState<Step>("login");
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleNext = () => setStep("register2");
  const handleBackToLogin = () => setStep("login");

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`sm:w-[380px] lg:w-[430px] h-[543px] rounded-[7px] overflow-hidden shadow-lg transition-colors duration-500 ${
          isDark ? "bg-[#111827] text-white" : "bg-white text-black"
        }`}
        style={{ perspective: 1000 }}
      >
        <AnimatePresence mode="wait">
          {step === "login" && (
            <motion.div
              key="login"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full h-full p-[32px]"
            >
              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-[68px] h-[68px] rounded-full flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(135deg, #334155, #000)"
                      : "linear-gradient(135deg, #12233D, #000000)",
                  }}
                >
                  <Image
                    src="/images/Frame 1.png"
                    alt="Search Icon"
                    width={32.55}
                    height={32.55}
                    className="object-contain"
                  />
                </div>

                <h2
                  style={{
                    fontSize: generateClamp(18, 22),
                    lineHeight: generateClamp(22, 28),
                  }}
                  className={`font-semibold mt-4 ${
                    isDark ? "text-white" : "text-[#103557]"
                  }`}
                >
                  Welcome Searchart !
                </h2>
              </div>

              <InputField
                label="E-mail address"
                labelStyle={`text-[16px] font-semibold ${
                  isDark ? "text-gray-200" : "text-[#515151]"
                }`}
              />
              <InputField
                label="Password"
                labelStyle={`text-[16px] font-semibold ${
                  isDark ? "text-gray-200" : "text-[#515151]"
                }`}
                type={showPassword ? "text" : "password"}
              >
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-4 top-3 ${
                    isDark ? "text-gray-300" : "text-[#103557]"
                  }`}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </InputField>

              <div
                className={`text-right text-[12px] mb-4 font-normal ${
                  isDark ? "text-gray-300" : "text-[#103557]"
                }`}
              >
                <Link href="#" className="hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <button
                style={{
                  fontSize: generateClamp(16, 20),
                }}
                className={`w-full h-[50px] rounded-[7px] font-semibold transition-colors duration-300 ${
                  isDark
                    ? "bg-[#2563eb] hover:bg-[#1e3a8a] text-white"
                    : "bg-[#103557] text-white hover:bg-[#1e3a8a]"
                }`}
              >
                Sign in
              </button>

              <p
                style={{
                  fontSize: generateClamp(10, 14),
                }}
                className={`text-center mt-6 ${
                  isDark ? "text-gray-300" : "text-[#515151]"
                }`}
              >
                Not registered yet?{" "}
                <button
                  onClick={() => setStep("register1")}
                  className={`hover:underline ${
                    isDark ? "text-blue-400" : "text-[#103557]"
                  }`}
                >
                  Create an account
                </button>
              </p>
            </motion.div>
          )}

          {step === "register1" && (
            <motion.div
              key="register1"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full p-[25px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-center">
                  <h2
                    className={`font-semibold mb-6 ${
                      isDark ? "text-white" : "text-[#103557]"
                    }`}
                    style={{
                      fontSize: generateClamp(18, 22),
                      lineHeight: generateClamp(22, 28),
                    }}
                  >
                    Registration
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  {["First Name", "Last Name"].map((label, i) => (
                    <div key={i}>
                      <label
                        className={`block font-normal mb-1 ${
                          isDark ? "text-gray-300" : "text-[#727272]"
                        }`}
                        style={{ fontSize: generateClamp(13, 16) }}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        className={`w-full h-[50px] px-4 border rounded-[7px] mb-4 ${
                          isDark
                            ? "bg-[#1f2937] border-gray-600 text-white"
                            : "bg-[#FBFBFB] border-[#E9E9E9]"
                        }`}
                        style={{ fontSize: generateClamp(14, 16) }}
                      />
                    </div>
                  ))}
                </div>

                <label
                  className={`block font-normal mb-1 ${
                    isDark ? "text-gray-300" : "text-[#727272]"
                  }`}
                  style={{ fontSize: generateClamp(13, 16) }}
                >
                  Gender
                </label>
                <input
                  type="text"
                  className={`w-full h-[50px] px-4 border rounded-[7px] mb-1 ${
                    isDark
                      ? "bg-[#1f2937] border-gray-600 text-white"
                      : "bg-[#FBFBFB] border-[#E9E9E9]"
                  }`}
                />

                <label
                  className={`block font-normal ${
                    isDark ? "text-gray-300" : "text-[#727272]"
                  }`}
                >
                  Phone Number
                </label>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 border rounded-[7px] min-w-[90px] ${
                      isDark
                        ? "bg-[#374151] border-gray-600"
                        : "bg-gray-100 border-gray-300"
                    }`}
                  >
                    <span
                      className={`font-medium ${
                        isDark ? "text-gray-200" : "text-[#515151]"
                      }`}
                      style={{ fontSize: generateClamp(12, 14) }}
                    >
                      +994
                    </span>
                    <Image
                      src="/images/images.jpeg"
                      alt="Azerbaijan Flag"
                      width={20}
                      height={14}
                      className="object-contain"
                    />
                  </div>

                  <input
                    type="tel"
                    className={`w-full h-[50px] px-4 border rounded-[7px] ${
                      isDark
                        ? "bg-[#1f2937] border-gray-600 text-white"
                        : "bg-[#FBFBFB] border-[#E9E9E9]"
                    }`}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {["Company", "Industry"].map((label, i) => (
                    <div key={i}>
                      <label
                        className={`block font-normal mb-1 ${
                          isDark ? "text-gray-300" : "text-[#727272]"
                        }`}
                        style={{ fontSize: generateClamp(13, 16) }}
                      >
                        {label}
                      </label>
                      <input
                        type="text"
                        className={`w-full h-[50px] px-4 border rounded-[7px] mb-4 ${
                          isDark
                            ? "bg-[#1f2937] border-gray-600 text-white"
                            : "bg-[#FBFBFB] border-[#E9E9E9]"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={handleNext}
                  className={`w-full h-[50px] rounded-[7px] flex items-center justify-center group transition-all duration-300 mb-1 ${
                    isDark
                      ? "bg-[#2563eb] hover:bg-[#1e3a8a]"
                      : "bg-[#103557] hover:bg-[#1e3a8a]"
                  } text-white font-medium`}
                >
                  <span className="mr-2">Next</span>
                  <FiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={18}
                  />
                </button>

                <p
                  className={`text-center ${
                    isDark ? "text-gray-300" : "text-[#515151]"
                  }`}
                  style={{ fontSize: generateClamp(10, 12) }}
                >
                  Already have an account?{" "}
                  <button
                    onClick={handleBackToLogin}
                    className={`hover:underline ${
                      isDark ? "text-blue-400" : "text-[#103557]"
                    }`}
                  >
                    Log in
                  </button>
                </p>
              </div>
            </motion.div>
          )}

          {step === "register2" && (
            <motion.div
              key="register2"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: 90, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full h-full p-[32px] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-center">
                  <h2
                    className={`text-[20px] font-bold mb-6 ${
                      isDark ? "text-white" : "text-[#103557]"
                    }`}
                  >
                    Registration
                  </h2>
                </div>

                {["Job title", "Email address"].map((label, i) => (
                  <div key={i}>
                    <label
                      className={`block mb-1 ${
                        isDark ? "text-gray-300" : "text-[#727272]"
                      }`}
                    >
                      {label}
                    </label>
                    <input
                      type={label.includes("Email") ? "email" : "text"}
                      className={`w-full h-[50px] px-4 border rounded-[7px] mb-4 ${
                        isDark
                          ? "bg-[#1f2937] border-gray-600 text-white"
                          : "bg-[#FBFBFB] border-[#E9E9E9]"
                      }`}
                    />
                  </div>
                ))}

                <label
                  className={`block mb-1 ${
                    isDark ? "text-gray-300" : "text-[#727272]"
                  }`}
                >
                  Password
                </label>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`w-full h-[50px] px-4 border rounded-[7px] mb-4 ${
                      isDark
                        ? "bg-[#1f2937] border-gray-600 text-white"
                        : "bg-[#FBFBFB] border-[#E9E9E9]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-[13px]"
                  >
                    {showPassword ? (
                      <FiEyeOff
                        className={isDark ? "text-blue-400" : "text-[#103557]"}
                        size={20}
                      />
                    ) : (
                      <FiEye
                        className={isDark ? "text-blue-400" : "text-[#103557]"}
                        size={20}
                      />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <button
                  className={`w-full h-[50px] rounded-[7px] font-medium ${
                    isDark
                      ? "bg-[#2563eb] hover:bg-[#1e3a8a]"
                      : "bg-[#103557] hover:bg-[#1e3a8a]"
                  } text-white text-[20px]`}
                >
                  Registration
                </button>

                <p
                  className={`text-[12px] text-center mt-6 ${
                    isDark ? "text-gray-300" : "text-[#515151]"
                  }`}
                >
                  Already have an account?{" "}
                  <button
                    onClick={handleBackToLogin}
                    className={`hover:underline ${
                      isDark ? "text-blue-400" : "text-[#103557]"
                    }`}
                  >
                    Log in
                  </button>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
