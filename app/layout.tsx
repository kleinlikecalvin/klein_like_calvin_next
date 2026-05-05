import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";
import Nav from "./components/Nav";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Nikki Klein | Software Engineer - Portfolio",
  description:
    "A software engineer who loves owning problems end-to-end — from architecture and technical design all the way through to the UI people actually use. I care about the details that make experiences feel right, not just functional. When I'm not building, I'm painting, playing drums, learning languages, or watching a great film.",
};

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${merriweather.variable} m-0 text-base max-w-300 mt-40 mb-12.5 mx-auto antialiased`}
      >
        <ThemeProvider attribute="class">
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
