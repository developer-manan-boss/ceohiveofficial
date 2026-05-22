import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "CEOHive Digital Solutions | B2B Web, AI & Cinematic Production",
  description: "Elite web development, autonomous agentic AI solutions, and high-end commercial VFX engineering for enterprise clients globally in India, USA, and Europe. Directed by Manan Bansal.",
  openGraph: {
    title: "CEOHive Digital Solutions | Global Tech Command Center",
    description: "Architectural-grade software, agentic AI, and world-class digital VFX localization.",
    type: "website",
    locale: "en_US",
    siteName: "CEOHive Digital Solutions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="font-sans bg-[#050505] text-zinc-100 min-h-screen relative antialiased selection:bg-amber-400 selection:text-black overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Core trailing high-ticket cursor */}
        <CustomCursor />

        {/* Global organic canvas particulate grid */}
        <ParticleBackground />

        {/* Dynamic header tracker */}
        <Header />

        {/* Navigation spacer & page injector */}
        <main className="relative z-10 w-full min-h-screen">
          {children}
        </main>

        {/* Bottom footer container */}
        <Footer />
      </body>
    </html>
  );
}
