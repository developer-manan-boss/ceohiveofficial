"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle,
  XCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Grid,
  Cpu,
  Video,
  Globe2,
  Activity,
  Mic,
  Maximize2,
  Terminal,
  BookmarkCheck,
  Mail,
  UserCheck
} from "lucide-react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  // 11 Core Pillars checklist data
  const ALL_SERVICES_PILLARS = [
    { name: "PropTech 3D Simulation Walkthrough", key: "proptech" },
    { name: "AI Content & Faceless Production", key: "production" },
    { name: "Hollywood CGI Commercial Animations", key: "cgi" },
    { name: "Next-Gen Web & VR Dev (Speed Tech)", key: "speedtech" },
    { name: "Web Development Architecture (Next.js)", key: "web" },
    { name: "Agentic AI Autonomy Loops", key: "agentic" },
    { name: "High-End Cross-Platform Apps", key: "app" },
    { name: "Advanced VFX & Grading Precision", key: "vfx" },
    { name: "Voice Cloning & Translating Localization", key: "voice" },
    { name: "Authority YouTube Channel Growth", key: "yt" },
    { name: "Monolithic Legacy Systems Modernizing", key: "modernize" },
  ];

  const PLANS = [
    {
      name: "AI & Studio Production",
      desc: "Ideal for global businesses looking to automate organic lead generation, high-authority YouTube strategies, and custom neural vocal assets.",
      pricing: {
        monthly: 79000,
        yearly: 63000,
      },
      badge: "CREATOR ELITE",
      highlights: ["Voice Cloning & Dubbing", "Authority YouTube Scaling", "Faceless Content Workflows"],
      includedServices: ["production", "voice", "yt"],
      cta: "INITIATE CREATIVE CHANNEL",
    },
    {
      name: "Platform & PropTech Supreme",
      desc: "Perfect for real estate developers, builders, and enterprise brands wanting live interactive virtual properties and elite low-latency software.",
      pricing: {
        monthly: 189000,
        yearly: 151000,
      },
      badge: "MOST POPULAR CORE",
      featured: true,
      highlights: ["Live 3D Walkthroughs", "30-Hour Dev Loop Dispatch", "Corporate Next.js Systems"],
      includedServices: ["proptech", "speedtech", "web", "app", "cgi"],
      cta: "ACTIVATE SYSTEM DEPLOYMENT",
    },
    {
      name: "Enterprise Custom Concierge",
      desc: "Full command delegation. Direct access to elite engineering retainers, custom private LLM training, color grades, and digital modernization pipelines.",
      pricing: {
        monthly: 320000,
        yearly: 256000,
      },
      badge: "GLOBAL ENTERPRISE",
      highlights: ["All 11 Core Pillars Included", "Private Autonomous Agents", "Unlimited Scale Consultation"],
      includedServices: ["proptech", "production", "cgi", "speedtech", "web", "agentic", "app", "vfx", "voice", "yt", "modernize"],
      cta: "CONTACT MANAN DIRECTLY",
    }
  ];

  const PREVIOUS_WORKS = [
    {
      title: "Vipul Kaushik Research Analyst",
      tag: "SEBI-Compliant Financial Platform",
      metric: "Delivered in exactly 39 hours & 28 minutes. High Compliance.",
      tech: ["Next.js 15", "WCAG 2.1 AA Grids"],
      url: "https://vipultheresearchanalyst.com"
    },
    {
      title: "European Dubbing Localization",
      tag: "Neural Vocal Sync Translation",
      metric: "500-hour localized translation mimicking native vocal timbres.",
      tech: ["Neural Voice Copy", "Lip-Sync Warp"]
    },
    {
      title: "Confidential US SaaS Node",
      tag: "Trillion-Dollar Database AI Pipeline",
      metric: "41% gain in workflows speed with local secure servers.",
      tech: ["Private LLM Clusters", "LangChain Core"]
    }
  ];

  return (
    <div id="pricing-page-root" className="pt-32 pb-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* ================= HERO TEXT ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-16">
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5 justify-center md:justify-start">
          <Terminal className="w-4 h-4 text-luxury-gold animate-pulse" />
          SYSTEM COST GRID // INVEST IN VALUE GENERATION
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white mb-6 uppercase text-center md:text-left leading-none">
          TRANSPARENT SYSTEM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-white to-zinc-400">
            BLUEPRINT PLANS.
          </span>
        </h1>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed text-center md:text-left">
          We don’t hide raw metrics. Our tiered execution retainers outline what is delivered under absolute guidelines. Pick your architectural scope and align with Manan Bansal.
        </p>

        {/* ================= BILLING SWITCH ================= */}
        <div className="flex justify-center md:justify-start items-center gap-4 mt-10">
          <span className={`font-mono text-xs tracking-wider transition-colors ${!isYearly ? "text-white font-bold" : "text-zinc-500"}`}>
            MONTHLY RATES
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 rounded-full bg-zinc-900 border border-zinc-800 p-1 flex items-center cursor-pointer transition-all focus:outline-none"
            aria-label="Toggle Billing Mode"
          >
            <div
              className={`w-5 h-5 rounded-full bg-luxury-gold transition-all duration-300 ${
                isYearly ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`font-mono text-xs tracking-wider transition-colors flex items-center gap-2 ${isYearly ? "text-luxury-gold font-bold" : "text-zinc-500"}`}>
            YEARLY BLUEPRINTS (SAVE 20%)
            <span className="px-2 py-0.5 bg-luxury-gold/15 border border-luxury-gold/30 text-[9px] rounded text-luxury-gold uppercase font-mono font-bold animate-pulse">
              HOT
            </span>
          </span>
        </div>
      </section>

      {/* ================= PRICING CARDS GRID ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PLANS.map((plan, idx) => {
          const displayedPrice = isYearly ? plan.pricing.yearly : plan.pricing.monthly;
          return (
            <div
              key={plan.name}
              className={`relative rounded border transition-all duration-500 p-8 flex flex-col justify-between min-h-[550px] ${
                plan.featured
                  ? "bg-gradient-to-b from-zinc-900 via-[#10131ee6] to-zinc-950/90 border-luxury-gold/40 shadow-[0_0_30px_rgba(223,180,85,0.08)]"
                  : "bg-zinc-950/60 border-zinc-900 hover:border-zinc-800"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-luxury-gold text-black rounded px-4 py-1 text-[9px] font-mono tracking-widest font-black uppercase shadow-lg select-none">
                  HIGH RECOMMENDATION
                </div>
              )}

              <div>
                {/* Header Tag */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[9px] tracking-widest text-zinc-500 font-bold uppercase">
                    {"// PLAN TYPE"} {idx + 1}
                  </span>
                  <span className="text-luxury-gold font-mono text-[10px] font-bold tracking-widest border border-luxury-gold/20 bg-luxury-gold/5 px-2.5 py-1 rounded">
                    {plan.badge}
                  </span>
                </div>

                {/* Plan Title & description */}
                <h3 className="font-mono text-xl font-bold text-white mb-3 tracking-tight uppercase">
                  {plan.name}
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Pricing Number */}
                <div className="border-t border-zinc-900 pt-6 mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl sm:text-4xl font-black text-white">
                      ₹{displayedPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="font-sans text-xs text-zinc-500">/ month</span>
                  </div>
                  <span className="font-mono text-[9.5px] text-zinc-600 block mt-1">
                    {isYearly ? "* Billed on annual contract basis" : "* Custom monthly retainer"}
                  </span>
                </div>

                {/* Plan Highlights summary */}
                <div className="space-y-3 mb-8">
                  <span className="font-mono text-[9px] tracking-widest text-[#dfb455] font-bold block uppercase mb-1.5">
                    SPECIFICATION HIGHLIGHTS:
                  </span>
                  {plan.highlights.map((hlt) => (
                    <div key={hlt} className="flex items-center gap-2 text-xs text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                      <span className="font-sans font-medium">{hlt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Onboarding Button */}
              <div className="pt-6 border-t border-zinc-900/40">
                <Link
                  href="/contact"
                  className={`w-full block py-4 px-6 rounded text-center font-mono text-xs font-bold tracking-widest transition-all ${
                    plan.featured
                      ? "bg-luxury-gold hover:bg-[#f4efdf] text-black shadow-lg shadow-luxury-gold/10"
                      : "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-850"
                  }`}
                >
                  {plan.cta} ➔
                </Link>
              </div>
            </div>
          );
        })}
      </section>

      {/* ================= COMPREHENSIVE SERVICE VERIFICATION MATRIX ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-24">
        <div className="glass-panel p-8 sm:p-12 rounded border border-zinc-900 bg-zinc-950/40">
          <div className="max-w-xl mb-10">
            <span className="font-mono text-luxury-gold text-xs tracking-widest uppercase block mb-3">
              {"// COMPLETE SYSTEM COVERAGE MATRIX"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white mb-4 uppercase">
              WHICH PILLARS ARE REGISTERED IN PLAN BLUEPRINTS?
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
              Find exactly how each of CEOHive Digital Solutions’ <strong>11 core agency frameworks</strong> map into our corporate tiers. Custom requirements can be engineered on demand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-zinc-900 pt-8">
            {ALL_SERVICES_PILLARS.map((srv, index) => {
              const inTier1 = PLANS[0].includedServices.includes(srv.key);
              const inTier2 = PLANS[1].includedServices.includes(srv.key);
              const inTier3 = PLANS[2].includedServices.includes(srv.key);

              return (
                <div key={srv.name} className="border-b border-zinc-900/60 pb-5">
                  <div className="flex gap-2 items-start mb-3">
                    <span className="font-mono text-[9px] text-zinc-650 mt-0.5">
                      {String(index + 1).padStart(2, "0")} /
                    </span>
                    <span className="font-mono text-xs font-bold text-white leading-relaxed">
                      {srv.name}
                    </span>
                  </div>

                  {/* Tier status ticks */}
                  <div className="flex gap-4 items-center pl-6">
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[8px] text-zinc-500 uppercase">TIER 1:</span>
                      {inTier1 ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <span className="text-[10px] text-zinc-800 font-bold">X</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[8px] text-zinc-500 uppercase">TIER 2:</span>
                      {inTier2 ? (
                        <CheckCircle className="w-3.5 h-3.5 text-[#dfb455]" />
                      ) : (
                        <span className="text-[10px] text-zinc-800 font-bold">X</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-[8px] text-zinc-500 uppercase">TIER 3:</span>
                      {inTier3 ? (
                        <CheckCircle className="w-3.5 h-3.5 text-[#dfb455]" />
                      ) : (
                        <span className="text-[10px] text-zinc-800 font-bold font-mono">X</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= PREVIOUS WORKS INTEGRATION IN RATES PAGE ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-24">
        <div className="mb-10 text-center md:text-left">
          <span className="font-mono text-luxury-gold text-xs tracking-widest uppercase block mb-3">
            {"// METRIC PROOF MATRIX"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-white mb-4 uppercase">
            VERIFY EXPERT PROOF BEFORE DEPLOYMENT
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Our historical executions demonstrate speed engineering, rigorous standard adherence, SEBI-compliant distributions, and flawless international vocal preservation. No dry theories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PREVIOUS_WORKS.map((work) => (
            <div key={work.title} className="bg-zinc-950/40 border border-zinc-900 rounded p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {work.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-zinc-900 text-zinc-400 font-mono text-[9px] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-mono text-[14px] font-bold text-white mb-2 uppercase tracking-wide">
                  {work.title}
                </h3>
                <span className="font-mono text-[10px] text-luxury-gold uppercase block mb-3 font-semibold">
                  {work.tag}
                </span>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {work.metric}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-900/60 flex items-center justify-between">
                {work.url ? (
                  <Link
                    href={work.url}
                    target="_blank"
                    className="text-[10px] font-mono font-bold uppercase text-luxury-gold hover:text-white flex items-center gap-1"
                  >
                    VISIT PRODUCTION CLIENT ➔
                  </Link>
                ) : (
                  <span className="text-[9px] font-mono text-zinc-700 uppercase">
                    CONFIDENTIAL ENTERPRISE DEPLOY
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/projects"
            className="font-mono text-xs font-bold tracking-widest text-zinc-300 hover:text-luxury-gold flex items-center gap-1.5 uppercase transition-colors"
          >
            EXPLORE FULL PORTFOLIO SPECIFICATIONS ➔
          </Link>
        </div>
      </section>

      {/* ================= ONBOARDING CONTACT CALLOUT FEATURE ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="relative rounded border border-luxury-gold/25 bg-gradient-to-r from-zinc-950 via-[#131725] to-zinc-950 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0_0_40px_rgba(223,180,85,0.06)]">
          {/* Decorative light strip overlay */}
          <div className="absolute top-0 left-0 w-2 h-full bg-luxury-gold animate-pulse" />

          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#dfb455] font-black uppercase mb-3">
              <UserCheck className="w-4 h-4 text-luxury-gold" />
              DIRECT COMMUNICATIONS WITH THE FOUNDER
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white mb-4 uppercase leading-none">
              BOOK A PRIORITY BLUEPRINT CONSULT
            </h2>
            <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              Connect directly with CEO Manan Bansal. Map out your custom PropTech models or automated enterprise workflow system. Get dedicated estimation metrics in less than 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-luxury-gold" />
                <span>ceohive.enquiry@gmail.com</span>
              </div>
              <div className="hidden sm:block text-zinc-700">|</div>
              <div>Response Time: &lt; 4 Hours</div>
            </div>
          </div>

          <div className="w-full md:w-auto shrink-0 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-luxury-gold hover:bg-[#f4efdf] text-black font-mono text-xs font-bold tracking-widest uppercase rounded shadow-lg text-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,180,85,0.3)]"
            >
              DEPLOY CONTACT CHANNELS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
