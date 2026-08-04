import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";
import Nav from "./components/Nav/Nav";
import { ThemeProvider } from "next-themes";
import { metaData as meta } from "./data/meta_data";
import Footer from "./components/Footer/Footer";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
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
      <body className={`${merriweather.variable} text-base antialiased`}>
        <ThemeProvider attribute="class">
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
