"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiArrowRight, FiEye, FiEyeOff } from "react-icons/fi";

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
  labelStyle = "text-sm font-medium text-gray-700",
  type = "text",
  value,
  onChange,
  placeholder,
  children,
}: InputFieldProps) => (
  <div className="mb-4">
    <label className={`block mb-1 ${labelStyle}`}>{label}</label>
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-1"
      />
      {children}
    </div>
  </div>
);

export default function AuthCard() {
  const [step, setStep] = useState<Step>("login");
  const [showPassword, setShowPassword] = useState(false);

  const handleNext = () => setStep("register2");
  const handleBackToLogin = () => setStep("login");

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="h-[543px] w-[430px] rounded-[7px] overflow-hidden bg-white shadow-lg"
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
                    backgroundImage:
                      "linear-gradient(135deg, #12233D, #000000)",
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

                <h2 className="text-[20px] text-[#103557] font-semibold mt-4">
                  Welcome Searchart !
                </h2>
              </div>

              <InputField
                label="E-mail address"
                labelStyle="text-[16px] font-semibold text-[#515151]"
              />
              <InputField
                label="Password"
                labelStyle="text-[16px] font-semibold text-[#515151]"
                type={showPassword ? "text" : "password"}
              >
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-600 text-[#103557]"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </InputField>

              <div className="text-right text-[12px] mb-4 font-normal">
                <a href="#" className="text-[#103557] hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button className="w-full h-[50px] bg-[#103557] text-white rounded-[7px] text-[20px] font-semibold">
                Sign in
              </button>

              <p className="text-[12px] text-[#515151] text-center mt-6 font-normal">
                Not registered yet?{" "}
                <button
                  onClick={() => setStep("register1")}
                  className="text-[#103557] text-[12px]  font-normal hover:underline "
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
                  <h2 className="text-[20px] font-semibold mb-6 text-[#103557]">
                    Registration
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <label className="block text-[14px] font-normal text-[#727272] mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-normal text-[#727272] mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                    />
                  </div>
                </div>

                <label className="block text-[14px] font-normal text-[#727272] mb-1">
                  Gender
                </label>
                <input
                  type="text"
                  className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-1"
                ></input>

                <label className="block text-[14px] font-normal text-[#727272] ">
                  Phone Number
                </label>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 flex items-center gap-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-[7px] min-w-[90px]">
                    <span className="text-sm font-medium text-[#515151]">
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
                    className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] "
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[14px] font-normal text-[#727272] mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-normal text-[#727272] mb-1">
                      Industry
                    </label>
                    <input
                      type="text"
                      className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                    />
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={handleNext}
                  className="w-full h-[50px] bg-[#103557] text-white rounded-[7px] text-[16px] font-medium text-[20px] flex items-center justify-center group transition-all duration-300 mb-1"
                >
                  <span className="mr-2">Next</span>
                  <FiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={18}
                  />
                </button>

                <p className="text-[10px] text-center  text-[#515151]">
                  Already have an account?{" "}
                  <button
                    onClick={handleBackToLogin}
                    className="text-[10px] text-center  text-[#103557] hover:underline"
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
                    className="text-[20px] text-[#103557] font-semibold
 font-bold mb-6"
                  >
                    Registration
                  </h2>
                </div>

                <label className="block text-[#727272] text-normal text-[14px] mb-1">
                  Job title
                </label>
                <input
                  type="text"
                  className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                />

                <label className="block text-[#727272] text-normal text-[14px] mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                />

                <label className="block text-[#727272] text-normal text-[14px] mb-1">
                  Password
                </label>
                <div className="relative mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full h-[50px] px-4 border border-gray-300 border border-[#E9E9E9] rounded-[7px] text-[16px] bg-[#FBFBFB] mb-4"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-[13px] text-gray-600"
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-[#103557]" size={20} />
                    ) : (
                      <FiEye className="text-[#103557]" size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <button className="w-full h-[50px] bg-[#103557] text-white rounded-[7px] text-[20px] font-medium">
                  Registration
                </button>

                <p className="text-[12px] text-center mt-6 text-[#515151]">
                  Already have an account?{" "}
                  <button
                    onClick={handleBackToLogin}
                    className="text-[#103557] hover:underline"
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
