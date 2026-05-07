import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Center for Neuro-Innovation & Performance",
  description: "We translate neuroscience into practical tools for performance, stress regulation, and decision-making. Finland's first organization dedicated to the neuro-optimization of early-stage founders.",
  keywords: ["neuroscience", "performance", "stress regulation", "Finland", "founders", "occupational neuroscience"],
  openGraph: {
    title: "Center for Neuro-Innovation & Performance",
    description: "Train your brain to perform under pressure — not burn out from it.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
