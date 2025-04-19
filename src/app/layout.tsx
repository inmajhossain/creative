import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Header/theme-provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackgroundEffect from "@/components/Background/BackgroundEffect";
import { motion } from "framer-motion";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Tape Industries Ltd.",
  description: "Garments Accessories Manufacturer & Supplier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundEffect />

          <Header />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
