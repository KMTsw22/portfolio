import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Synthwave from "./components/Synthwave";
import MacFrame from "./components/MacFrame";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mintae Kim — Software Engineer",
  description:
    "Software engineer with 2+ years building high-concurrency, distributed server systems in production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <Synthwave />
        <MacFrame>{children}</MacFrame>
      </body>
    </html>
  );
}
