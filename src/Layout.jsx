import React from "react";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
});

export const metadata = {
  title: "Global Export & Import Solutions",
  description:
    "Professional export and import services connecting businesses across borders efficiently and reliably.",
  generator: "v0.app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
