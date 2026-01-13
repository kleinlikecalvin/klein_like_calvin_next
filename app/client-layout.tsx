"use client";

import { Merriweather } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import { useState } from "react";
import clsx from "clsx";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "900",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <html lang="en">
      <main
        className={clsx(`${merriweather} Arial antialiased bg-white`, {
          dark: !isLightMode,
        })}
      >
        <Nav setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
        {children}
      </main>
    </html>
  );
}
