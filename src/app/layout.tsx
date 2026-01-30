import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanmesh Desai | Full Stack Developer",
  description: "Portfolio Website",
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}

      >
        <div className="inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 -z-10">
        <Navbar/>
        <main className="pt-24">
        {children}
        </main>
        </div>
      </body>
    </html>
  );
}
