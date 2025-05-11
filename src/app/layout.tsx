import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Header/theme-provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BackgroundEffect from "@/components/Background/BackgroundEffect";
import Location from "@/components/body/Location";

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
  description:
    "Creative Tape Industries is a best & top garments accessories manufacturer in Bangladesh, producing high-quality elastic bands, jacquard elastic, drawstrings, twill tapes, belts, drawcords, rib tapes, sporting tapes, and tipping solutions. Trusted by global brands since 2006.",
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
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundEffect />

          <Header />

          {children}
          <Location />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
