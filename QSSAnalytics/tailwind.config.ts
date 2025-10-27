/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // "media" deyil, "class" — yəni theme-i sən idarə edirsən

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  safelist: [
    // Dinamik rəng və fon class-larının itməməsi üçün əlavə olunur
    "bg-[#0B1420]",
    "bg-gray-50",
    "text-blue-400",
    "text-blue-600",
    "text-blue-700",
    "bg-[#1a3a5c]",
    "bg-[#1a2a3c]",
    "text-gray-400",
    "text-gray-600",
    "border-green-400",
    "border-gray-400",
  ],

  theme: {
    extend: {
      colors: {
        darkBlue: "#12233D",
        blackCustom: "#000000",
        // Əlavə istəyə görə gradient və ya tematik rənglər
        primaryDark: "#0a1628",
        secondaryDark: "#1a3a5c",
      },
      maxWidth: {
        "1440": "1440px", // sənin layout ölçünü Tailwind-də rahat istifadə üçün
      },
    },
  },

  plugins: [],
};
