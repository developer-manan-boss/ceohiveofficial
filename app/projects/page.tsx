"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  FileCode,
  MapPin,
  Clock,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Tv,
  Sparkles,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  client: string;
  tag: string;
  region: "IN" | "US" | "EU";
  service: "web" | "ai" | "creative" | "strategy";
  challenge: string;
  solution: string;
  tech: string[];
  metrics: string;
  url?: string;
  isMystery?: boolean;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "vipul-kaushik",
    title: "Vipul Kaushik Research Analyst",
    client: "Vipul Kaushik (Prominent SEBI registered Research Analyst)",
    tag: "SEBI-Compliant Financial Platform",
    region: "IN",
    service: "web",
    challenge:
      "A sudden mandatory SEBI regulatory audit required a fully compliant, high-security financial platform with rigorous WCAG 2.1 AA accessibility guidelines inside an extremely strict timeline (pre-audit deadline). Compromises would risk penalty flags.",
    solution:
      "We engineered and deployed a bulletproof server-client Next.js framework in exactly **39 hours and 28 minutes**. Handled SSL encryption schemes, high-fidelity research distribution, keyboard navigation, and structural layouts. Zero excuses.",
    tech: ["Next.js 15", "Tailwind CSS v4", "WCAG 2.1 AA Grids", "Direct SSL Certs", "Doc Distribution Systems"],
    metrics: "39h 28m Built and Dispatched. Passed SEBI Audit. zero warnings.",
    url: "https://vipultheresearchanalyst.com",
  },
  {
    id: "forever-capable",
    title: "Forever Capable",
    client: "Forever Capable Startup venture",
    tag: "Startup Talent Hub Aggregation",
    region: "IN",
    service: "web",
    challenge:
      "The startup required an architectural platform that acts as an intermediate matching bridge between retired legacy enterprise experts and companies requiring specialized consulting services. It needed complex matching profiles and pristine branding.",
    solution:
      "We constructed the complete B2B talent hub matching engine. Integrated secure corporate profiles, customized skill tags mapping, automated interest indicators, and modern fluid dashboards.",
    tech: ["React App Router", "Framer Motion", "Tailwind styling", "Responsive Grid Matrix", "Matcher API"],
    metrics: "Connecting corporate wisdom. Fully operational.",
  },
  {
    id: "confidential-saas",
    title: "Confidential B2B SaaS",
    client: "Fortune 500 Enterprise (Silicon Valley / USA)",
    tag: "Legacy System Modernization & AI agent integration",
    region: "US",
    service: "ai",
    challenge:
      "A trillion-dollar cloud framework required modernization of internal workflows, routing legacy database systems into a secure, private AI pipeline without exposing client records to third-party endpoints.",
    solution:
      "We consulted and mapped out custom multi-agent routing loops running securely behind protected local clusters. Accelerated operational speed metrics by 41% while bypassing external API loops.",
    tech: ["Private LLM clusters", "LangChain core", "Node Cloud Run", "Bespoke database nodes"],
    metrics: "Confidential SaaS Modernization. 41% speed gains inside secure pipeline.",
    isMystery: true,
  },
  {
    id: "multilingual-vfx",
    title: "European Dubbing Localization",
    client: "Global Financial Academy / Europe Node",
    tag: "Video localization & voice cloning pipeline",
    region: "EU",
    service: "creative",
    challenge:
      "The academy serving European districts required translating their entire 500-hour educational asset library from English into Spanish, French, and German while preserving the original founder's vocal timbres.",
    solution:
      "We deployed custom neural cloning voice synthesizers paired with automatic lip-synchronization warp layers, delivering broadcast-quality dubbed media outputs mimicking native accents flawlessly.",
    tech: ["Neural Voice Copy", "Lip-Sync Warp", "Cinema Audio Levels", "VFX Local Overlays"],
    metrics: "500-hour localized translation. Vocal timbres preserved perfectly.",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "IN" | "US" | "EU">("all");
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "ai" | "creative">("all");

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    const regionMatch = activeFilter === "all" || p.region === activeFilter;
    const categoryMatch = activeCategory === "all" || p.service === activeCategory;
    return regionMatch && categoryMatch;
  });

  return (
    <div id="projects-page-root" className="pt-32 pb-24">
      {/* ================= HERO TITLE ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-16">
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-luxury-gold" />
          SYSTEM METRICS // SELECTED CASE STUDIES
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white mb-6 uppercase leading-none">
          SYSTEM WORK DEPLOYMENTS
        </h1>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          We don&apos;t build mock projects. Every system listed below represents high-ticket execution matching specific B2B client demands, regulatory compliance audits, or AI pipeline modernizations.
        </p>
      </section>

      {/* ================= INTERACTIVE FILTER MATRIX ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-y border-zinc-900 py-6">
        {/* Region Filter */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
            FILTER ROUTE REGIONS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["all", "IN", "US", "EU"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-3 py-1.5 text-[11px] sm:text-xs font-mono rounded cursor-pointer transition-all ${
                  activeFilter === filter
                    ? "bg-luxury-gold text-black font-bold"
                    : "bg-zinc-900/40 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {filter === "all" ? "ALL CONTINENTS" : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
            FILTER SPEC PILLARS
          </span>
          <div className="flex flex-wrap gap-1.5">
            {["all", "web", "ai", "creative"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-3 py-1.5 text-[11px] sm:text-xs font-mono rounded cursor-pointer transition-all ${
                  activeCategory === cat
                    ? "bg-luxury-gold text-black font-bold"
                    : "bg-zinc-900/40 text-zinc-400 border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {cat === "all" ? "ALL SPECS" : cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPREHENSIVE PROJECT GRID ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className={`bg-[#0a0a0dfb] border border-zinc-900 rounded p-6 sm:p-8 flex flex-col justify-between shadow-lg hover:border-luxury-gold/20 transition-all group ${
                  project.isMystery ? "border-dashed border-zinc-850" : ""
                }`}
              >
                <div className="relative">
                  {/* Top line indicator */}
                  <div className="flex justify-between items-center border-b border-zinc-900 pb-4 mb-6">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-luxury-gold" />
                      COORDINATE: {project.region} NODE
                    </span>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase bg-zinc-950 px-2 py-0.5 rounded">
                      SPEC // {project.service.toUpperCase()}
                    </span>
                  </div>

                  {project.isMystery ? (
                    <div className="flex gap-1.5 items-center px-1.5 py-0.5 rounded bg-zinc-900 text-white border border-zinc-800 mb-4 inline-block w-fit">
                      <ShieldCheck className="w-3 h-3 text-luxury-gold animate-pulse" />
                      <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                        CLASSIFIED B2B PROTOCOL
                      </span>
                    </div>
                  ) : null}

                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-luxury-gold transition-colors uppercase animate-none">
                    {project.title}
                  </h3>
                  <div className="font-sans text-xs text-zinc-500 uppercase tracking-wide mb-6">
                    Client: {project.client}
                  </div>

                  {/* Challenge details */}
                  <div className="mb-4">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
                      Strategic Dilemma Challenge
                    </span>
                    <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  {/* Solution details */}
                  <div className="mb-6">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
                      Result Execution Solution
                    </span>
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Micro Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-zinc-950 text-zinc-500 font-mono text-[9px] px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-zinc-900/80 pt-6 mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-zinc-900/5 px-2 py-4 rounded">
                  <div>
                    <span className="font-mono text-[8px] text-zinc-500 uppercase tracking-widest block">
                      RESULT CERTIFIED INTEGRITY
                    </span>
                    <span className="font-mono text-[10px] text-luxury-gold font-bold block mt-0.5 uppercase tracking-tight">
                      {project.metrics}
                    </span>
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] text-zinc-100 hover:text-luxury-gold flex items-center gap-1 uppercase transition-colors shrink-0 self-end sm:self-auto"
                    >
                      Audit
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-mono text-[10px] text-zinc-650 uppercase shrink-0">SECURE PASS</span>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-2 text-center py-20 font-mono text-zinc-500 text-xs">
              &gt; NO CORE WORK MATCHING REGISTERED CHANNELS. INITIALIZE STANDARD QUERY FOR DETAILS.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
