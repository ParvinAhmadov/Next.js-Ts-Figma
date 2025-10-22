// src/lib/utils.ts

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind siniflərini dinamik birləşdirmək üçün utility funksiyası
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
