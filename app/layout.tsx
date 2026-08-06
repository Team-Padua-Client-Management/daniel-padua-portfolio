import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sir Daniel Padua — Professional Portfolio",
  description:
    "Professional Client Servicing & Digital Creative Services by Sir Daniel Padua. Elevating brands through strategy, design, and technology.",
  keywords: [
    "Daniel Padua",
    "portfolio",
    "client servicing",
    "digital services",
    "creative",
    "web design",
  ],
  authors: [{ name: "Sir Daniel Padua" }],
  icons: {
    icon: [
      {
        url: "/images/Logo/DP.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/images/Logo/DP.png",
    apple: "/images/Logo/DP.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}