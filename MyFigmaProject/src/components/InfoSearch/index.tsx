import React from "react";

const InfoSearch: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center px-4 bg-[#1A2A4D] overflow-hidden">
      <img
        src="https://searchartfront-production.up.railway.app/assets/map-109b3526.svg"
        alt="World Map"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  pointer-events-none"
        style={{
          width: "1000px",
          maxWidth: "90%",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2A4D] via-[#111f35d9] to-[#04070bd9] z-0" />

      <div className="relative z-10 max-w-3xl text-center space-y-6 text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Welcome to <span className="text-red-500">SEARCH4ART</span>!
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-gray-200">
          The ultimate data analytics platform designed for managers in
          business, education, economics, health, and army, as well as
          government officials and researchers. Our dashboards are specifically
          designed to help you make critical strategic decisions, whether you're
          looking to benchmark your organization's performance against industry
          standards, evaluate different countries' performances, or conduct
          further research.
        </p>
        <div className="text-sm text-gray-400 animate-bounce">Scroll to ↓</div>
      </div>
    </section>
  );
};

export default InfoSearch;
