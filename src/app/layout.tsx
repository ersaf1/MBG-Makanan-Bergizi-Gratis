import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MBG — Makan Bergizi Gratis | Program Nasional Indonesia",
  description:
    "Program makanan sehat untuk mendukung generasi Indonesia yang lebih kuat, cerdas, dan sehat. Makan Bergizi Gratis untuk masa depan Indonesia.",
  openGraph: {
    title: "MBG — Makan Bergizi Gratis",
    description: "Program makanan sehat untuk mendukung generasi Indonesia yang lebih kuat, cerdas, dan sehat.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas noise-overlay">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:text-sm">
          Langsung ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
