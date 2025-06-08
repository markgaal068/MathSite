import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matematika Oktatóoldal",
  description: "Matematika tananyagok alsó, felső tagozat, középiskola és egyetem számára",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#121212] text-white`}
        style={{
          // opcionálisan CSS változók színhez, ha akarod később hivatkozni:
          // '--color-sidebar-bg': '#121212',
          // '--color-content-bg': '#1f1f1f',
          // '--color-primary': '#33d4ff',
          // '--color-text': '#ffffff',
        }}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64 bg-[#1f1f1f] p-6 text-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
