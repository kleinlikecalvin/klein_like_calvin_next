import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";
import Nav from "./components/Nav";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Nikki Klein | Software Engineer - Portfolio",
  description: "TODO",
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
        className={`${merriweather.variable} m-0 text-base max-w-300 mt-42.5 mb-12.5 mx-auto antialiased`}
      >
        <ThemeProvider attribute="class" enableSystem={false}>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
