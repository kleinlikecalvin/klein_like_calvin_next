import type { Metadata } from "next";
import ClientLayout from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikki Klein | Software Engineer - Portfolio",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 text-base max-w-300 mt-42.5 mb-12.5 mx-auto">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
