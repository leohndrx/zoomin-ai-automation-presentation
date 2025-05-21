import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "AI & Automation for Zoomin' Marketing",
  description: "Practical AI and automation solutions for Zoomin' Marketing by Bespoke Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${saira.variable} font-saira antialiased text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
