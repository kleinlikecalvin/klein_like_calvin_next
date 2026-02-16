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
    <main
      // TODO: is adding the classes here correct and/or necessary?
      className={clsx(`${merriweather} Arial antialiased`, {
        dark: !isLightMode,
      })}
    >
      <Nav setIsLightMode={setIsLightMode} isLightMode={isLightMode} />
      {children}
    </main>
  );
}
