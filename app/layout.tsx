import type { Metadata } from "next";
import { Arvo, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { WeddingProvider } from "@/lib/context/WeddingContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const arvo = Arvo({ 
  weight: ["400", "700"], 
  subsets: ["latin"],
  variable: "--font-arvo"
});
const dancingScript = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing"
});

export const metadata: Metadata = {
  title: "Wedding SaaS | Create Your Blessed Nikah Website",
  description: "A premium wedding website builder for modern couples. Beautiful, customisable, and ready in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${arvo.variable} ${dancingScript.variable} antialiased`}>
        <WeddingProvider>
          {children}
        </WeddingProvider>
      </body>
    </html>
  );
}
