import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import MobileMenu from "@/components/mobilemenu"; // győződj meg róla, hogy a path helyes

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Győri matematika magántanár | Matematika oktatóoldal",
  description: "Győri magántanár matematika tananyaggal alsó, felső tagozat, középiskola és egyetem számára. Online oktatás, évfolyamonkénti bontásban.",
  keywords: ["Győri magántanár", "matematika tanár", "matek korrepetálás", "alsós matematika", "felsős matek", "középiskolai matek", "egyetemi matematika", "matek online oktatás"],
  openGraph: {
    title: "Győri matematika magántanár | Matematika oktatóoldal",
    description: "Matematika tananyag és korrepetálás évfolyamonként: alsó, felső, középiskola, egyetem. Online elérhető és tanulóbarát tartalom.",
    url: "https://math.gaalmark.hu", // cseréld a valós domainre
    siteName: "Matematika Oktatóoldal",
    type: "website",
    locale: "hu_HU",
  },
  metadataBase: new URL("https://math.gaalmark.hu"), // cseréld a valós domainre
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a1a] text-white`}>
        <div className="flex min-h-screen">
          <Sidebar className="hidden lg:block" />
          <MobileMenu />
          <main className="flex-1 ml-0 lg:ml-64 bg-[#1a1a1a]">{children}</main>
        </div>
      </body>
    </html>
  );
}
