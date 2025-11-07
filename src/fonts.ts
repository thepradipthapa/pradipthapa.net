// src/fonts.ts
import { Mona_Sans , Playfair_Display } from "next/font/google";

export const bodyFont = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});
