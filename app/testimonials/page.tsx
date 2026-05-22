"use client";

import React from "react";
import Link from "next/link";
import { Quote, Linkedin, ShieldCheck, HelpCircle, MapPin } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  linkedin?: string;
  region: "India" | "USA" | "Europe";
  gridClass: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    quote: "CEOHive didn't just build our platform. They built our credibility. The SEBI compliance was flawless, and the speed was humanly impossible. The audits passed without a single warning.",
    author: "Vipul Kaushik",
    role: "Registered Research Analyst & Authority",
    company: "Vipul Kaushik research channels",
    linkedin: "https://www.linkedin.com/in/mananbansalboss/", // proxy connect
    region: "India",
    gridClass: "md:col-span-8 md:col-start-1 lg:col-span-7",
  },
  {
    quote: "Forever Capable exists because CEOHive understood the vision before we finished explaining it. They consolidated retired experts and built our primary matching engine cleanly.",
    author: "Forever Capable Team",
    role: "Founding Board Members",
    company: "Forever Capable Platform",
    region: "India",
    gridClass: "md:col-span-4 lg:col-span-5 md:translate-y-12",
  },
  {
    quote: "Securing modern multi-agentic workflows inside our compliance limits was our primary task. CEOHive understood the data isolation mandates perfectly. Outstanding delivery.",
    author: "Enterprise Director",
    role: "Cloud Architect Integrations",
    company: "Fortune 500 SaaS client",
    region: "USA",
    gridClass: "md:col-span-5 md:col-start-2 lg:col-span-6 lg:translate-y-4",
  },
  {
    quote: "Vocal synthesis cloned from our instructors was incredibly precise. We translated 500-hours of material into Continental languages flawlessly while keeping our core timber accents intact.",
    author: "Content Localization Director",
    role: "Language Distribution Chief",
    company: "European Educational Academy Nodes",
    region: "Europe",
    gridClass: "md:col-span-6 md:col-start-7 lg:col-span-6 lg:-translate-y-8 lg:col-start-7",
  },
];

export default function TestimonialsPage() {
  return (
    <div id="testimonials-page-wrapper" className="pt-32 pb-24">
      {/* ================= HERO INTRO ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-16">
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
          SYSTEM ACCREDITATION // VOICES OF AUTHORITY
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white mb-6 uppercase leading-none">
          SYSTEM COMPLIANCE VERDICT
        </h1>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          We don&apos;t do simple thumbs-up ratings. Here are raw strategic perspectives from research authorities, startup pioneers, and enterprise tech directors who trusted CEOHive.
        </p>
      </section>

      {/* ================= ASYMMETRICAL EDITORIAL CANVAS ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-10 items-start">
          {TESTIMONIALS_DATA.map((t, index) => (
            <div
              key={index}
              className={`bg-[#0b0b0ef5] border border-zinc-900 rounded p-8 sm:p-10 flex flex-col justify-between hover:border-luxury-gold/20 transition-all relative ${t.gridClass} overflow-hidden shadow-xl group`}
            >
              {/* Massive background quote glyph */}
              <Quote className="absolute -top-4 -right-4 w-32 h-32 text-zinc-900/15 pointer-events-none stroke-[0.3]" />

              <div>
                <div className="flex justify-between items-center mb-6 pl-1 border-b border-zinc-900/80 pb-3">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-luxury-gold animate-pulse" />
                    REGION: {t.region} CLIENT NODE
                  </span>
                  <span className="font-mono text-[9px] text-luxury-gold">AUTHENTIC LOG // V0{index + 1}</span>
                </div>

                {/* Main large text content */}
                <p className="font-mono text-sm sm:text-base text-zinc-200 leading-relaxed italic mb-8 relative z-10">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="border-t border-zinc-900 pt-6 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                    {t.author}
                  </h4>
                  <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">
                    {t.role}, {t.company}
                  </div>
                </div>

                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[10px] text-luxury-gold hover:text-white font-mono tracking-widest uppercase transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    Verify Node
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXTRA VERDICT BANNER ================= */}
      <section className="px-6 sm:px-12 max-w-4xl mx-auto mt-32 text-center relative z-10 border border-dashed border-zinc-850 p-8 sm:p-12 bg-zinc-950/40 rounded">
        <HelpCircle className="w-8 h-8 text-luxury-gold mx-auto mb-4 animate-bounce" />
        <h3 className="font-mono text-sm font-bold text-white uppercase tracking-widest mb-2">
          HAVE STRUCTURAL INQUIRIES?
        </h3>
        <p className="font-sans text-xs text-zinc-450 leading-relaxed max-w-lg mx-auto mb-6">
          We provide strategic consultations directly with founder Manan Bansal. Tactical questions receive surgical answers.
        </p>
        <Link
          href="/contact"
          className="font-mono text-[10px] text-[#05060a] bg-luxury-gold hover:bg-[#f4efdf] px-6 py-3 rounded tracking-widest font-extrabold uppercase transition-colors"
        >
          Initiate Contact Now
        </Link>
      </section>
    </div>
  );
}
