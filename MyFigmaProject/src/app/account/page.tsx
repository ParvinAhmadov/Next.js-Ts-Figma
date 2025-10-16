"use client";

import Image from "next/image";
import AuthCard from "../../components/AuthCard";

export default function Account() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/earth.jpg"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 text-white z-20">
        <div className="text-2xl font-bold">SEARCHART</div>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:underline">
            Policy area
          </a>
          <a href="#" className="hover:underline">
            Dashboard
          </a>
          <a href="#" className="hover:underline">
            Subscription
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Sign in
          </a>
          <a href="#" className="hover:underline">
            Sign up
          </a>
        </nav>
      </header>

      <div className="relative flex flex-col lg:flex-row items-center justify-center h-full px-8 z-20 gap-8 lg:gap-0">
        <div className="max-w-[532px] text-[#B5BAC0] text-center lg:text-left">
          <h1
            className="font-semibold font-inter mb-6"
            style={{
              fontSize: "58px",
              lineHeight: "1",
              letterSpacing: "-0.02em",
            }}
          >
            Welcome to our Searchart system!
          </h1>
          <p
            className="leading-relaxed font-inter"
            style={{ fontSize: "20px" }}
          >
            Welcome back! Your data journey continues. Sign in to access your
            personalized insights and make informed decisions effortlessly.
          </p>
        </div>

        <div className="w-full max-w-md">
          <AuthCard />
        </div>
      </div>
    </div>
  );
}
