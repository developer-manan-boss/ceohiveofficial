"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Shield, ShieldAlert, Cpu, Terminal, Linkedin, ExternalLink, Globe, LayoutGrid, CheckSquare } from "lucide-react";

export default function AboutPage() {
  const [activeFocalPoint, setActiveFocalPoint] = useState<"india" | "usa" | "europe">("india");

  const focalPointData = {
    india: {
      location: "India HQ (Asia-Pacific Coordination)",
      specialty: "Core Systems Architecture, Agentic AI Workflows, Regulation Compliance Testing",
      coordinates: "20.5937° N, 78.9629° E",
      description:
        "The core engineering nerve-center. This is where high-ticket frameworks are built under extreme timing limits. Leads advanced backends and SEBI compliance operations.",
    },
    usa: {
      location: "USA Districts (North America Operations)",
      specialty: "B2B Strategic Scaling, SaaS Architecture, Product Infiltration",
      coordinates: "37.0902° N, 95.7129° W",
      description:
        "Commercial and B2B deployment center. Focuses on system conversion strategy and aligns enterprise architecture configurations directly with venture monetization frameworks.",
    },
    europe: {
      location: "Europe Nodes (UK & Continent Localizations)",
      specialty: "VFX Domination, Voice Localization Pipelines, WCAG 2.1 Audits",
      coordinates: "54.5260° N, 15.2551° E",
      description:
        "The creative core. Coordinates multi-lingual custom voice synthesis, color-graded commercial VFX assets, and AA accessible frontends to guarantee absolute regulatory compliance.",
    },
  };

  return (
    <div id="about-us-page-wrapper" className="pt-32 pb-24">
      {/* ================= SECTION 1: THE HIVE MIND NARRATIVE ================= */}
      <section className="relative px-6 sm:px-12 max-w-7xl mx-auto mb-28">
        <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
          SYSTEM PROTOCOL // THE HIVE MIND NARRATIVE
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white mb-8 uppercase leading-[0.95]">
              WE DO NOT &quot;FREELANCE&quot; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-zinc-500">
                WE INFILTRATE & DOMINATE.
              </span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              CEOHive Digital Solutions is a Next-Generation Digital Powerhouse operating at the absolute intersection of sophisticated system engineering, client execution, and multi-agentic AI.
            </p>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              We started with a singular observation: high-ticket B2B clients in India, USA, and Europe are fatigued by generic agency fluff, missed deadlines, and unmotivated development teams. We built CEOHive to be the definitive **execution partner** of choice for elite companies who require architectural compliance, zero-compromise speed, and spectacular products.
            </p>
          </div>
          <div className="lg:col-span-5 bg-zinc-900/40 p-8 border border-zinc-900 rounded flex flex-col justify-between">
            <div className="font-mono text-zinc-600 text-xs mb-4">SYSTEM INJECT COMMANDS</div>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="font-mono text-xs font-bold text-white mb-1">ZERO COMMODITY BUILD</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every asset we create is custom built from bare-metal code bases. No template noise. No sluggish pre-made builders.
                </p>
              </div>
              <div className="border-l-2 border-amber-500 pl-4">
                <div className="font-mono text-xs font-bold text-white mb-1">REGULATORY COMPLIANT FIRST</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We are compliance-first pioneers. Whether it is SEBI regulatory audits, GDPR privacy policies, or WCAG 2.1 accessibility benchmarks, we commit.
                </p>
              </div>
            </div>
            <div className="border-t border-zinc-900 pt-4 mt-6 flex justify-between items-center text-[10px] font-mono text-zinc-500">
              <span>SYS STATUS: 100% SECURED</span>
              <span>IN, US, EU LANES</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE FOUNDER AUTHORITY ================= */}
      <section className="relative border-y border-zinc-900/65 bg-zinc-900/10 py-24 mb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Founder Bio and Authority links */}
          <div className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1">
            <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-500" />
              FOUNDER & MANAGING DIRECTOR AUTHORITY
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white uppercase tracking-tight mb-6">
              Manan Bansal
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              As the lead Managing Director and strategic brain behind CEOHive Digital Solutions, Manan positions systems as the ultimate truth. He maps out the high-level architectures, compliance grids, and localized voice operations that connect global target audiences directly with B2B ventures.
            </p>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed mb-8">
              With deep credentials spanning Google Developer certifications and a high-ticket B2B network on LinkedIn, Manan enforces a rigorous standard of performance: <strong className="text-white">&quot;Systems over trust. Execution over promises.&quot;</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a
                href="https://www.linkedin.com/in/mananbansalboss/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 font-mono text-xs font-bold tracking-widest text-[#050505] bg-[#FFD700] hover:bg-white px-6 py-3 rounded transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                CONNECT ON LINKEDIN
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://g.dev/mananbansal"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 font-mono text-xs font-bold tracking-widest text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-500 px-6 py-3 rounded transition-all"
              >
                <Terminal className="w-4 h-4" />
                GOOGLE DEVELOPER PROFILE
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* Right: Premium Graphic representation of Authority mind */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm border border-zinc-800 p-8 rounded bg-[#0a0a0d] flex flex-col justify-between h-[360px] relative overflow-hidden group">
              {/* Radial decor */}
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-amber-500/5 to-transparent pointer-events-none" />

              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-650">
                <span>FOUNDER CORE SEC-01</span>
                <span className="text-amber-500 font-bold">MANAN BANSAL BOSS</span>
              </div>

              {/* Graphic Matrix Code blocks */}
              <div className="my-auto">
                <span className="text-[1.5rem] font-bold font-mono text-zinc-100 uppercase tracking-tight block">
                  SYSTEM ARCHITECT
                </span>
                <span className="font-mono text-[10px] text-zinc-500 block mt-2">
                  LOC: CHANDIGARH REGION / IN-HQ CORE
                </span>
                <span className="font-mono text-[10px] text-zinc-500 block">
                  SCOPE: INTERNATIONAL [IN, US, EU]
                </span>
                <span className="font-mono text-xs text-amber-400 mt-4 block">
                  &gt; console.log(&quot;Execution over promises.&quot;);
                </span>
              </div>

              <div className="flex justify-between items-center border-t border-zinc-900 pt-4">
                <span className="font-mono text-[9px] text-zinc-500 hover:text-white">LINKEDIN // 2K+ CO-STELLATION</span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OPERATIONAL FOOTPRINT ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 mb-28">
        <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-amber-500" />
          GLOBAL RECOGNITION // SYSTEM REGIONS
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mb-6 uppercase">
          OPERATIONAL FOOTPRINT
        </h2>
        <p className="font-sans text-sm text-zinc-400 max-w-xl leading-relaxed mb-12">
          CEOHive is engineered to deploy synchronized tactical operations across three core continents. Click a coordinate station below to align the channels.
        </p>

        {/* Global Select Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              onClick={() => setActiveFocalPoint("india")}
              className={`p-5 rounded text-left border transition-all cursor-pointer ${
                activeFocalPoint === "india"
                  ? "bg-amber-400 border-amber-400 text-black font-bold"
                  : "bg-zinc-900/30 border-zinc-800/80 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              <div className="font-mono text-xs text-zinc-500 font-medium uppercase mb-1">
                COORDINATE NODE IN-01
              </div>
              <div className="font-mono text-sm uppercase">INDIA (HQ - SOUTH ASIA)</div>
            </button>

            <button
              onClick={() => setActiveFocalPoint("usa")}
              className={`p-5 rounded text-left border transition-all cursor-pointer ${
                activeFocalPoint === "usa"
                  ? "bg-amber-400 border-amber-400 text-black font-bold"
                  : "bg-zinc-900/30 border-zinc-800/80 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              <div className="font-mono text-xs text-zinc-500 font-medium uppercase mb-1">
                COORDINATE NODE US-02
              </div>
              <div className="font-mono text-sm uppercase">USA OPERATIONS</div>
            </button>

            <button
              onClick={() => setActiveFocalPoint("europe")}
              className={`p-5 rounded text-left border transition-all cursor-pointer ${
                activeFocalPoint === "europe"
                  ? "bg-amber-400 border-amber-400 text-black font-bold"
                  : "bg-zinc-900/30 border-zinc-800/80 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              <div className="font-mono text-xs text-zinc-500 font-medium uppercase mb-1">
                COORDINATE NODE EU-03
              </div>
              <div className="font-mono text-sm uppercase">EUROPE LOCAL OPERATIONS</div>
            </button>
          </div>

          <div className="lg:col-span-8 bg-zinc-900/20 p-8 rounded border border-zinc-900 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-900 pb-4 mb-6">
                <span className="font-mono text-sm font-bold text-amber-400">
                  {focalPointData[activeFocalPoint].location}
                </span>
                <span className="font-mono text-xs text-zinc-500">
                  LAT/LON: {focalPointData[activeFocalPoint].coordinates}
                </span>
              </div>
              <div className="mb-4">
                <span className="font-mono text-[10px] uppercase text-zinc-500 block mb-1">
                  REGIONAL FOCUS FOCUS
                </span>
                <span className="font-mono text-sm text-white font-medium">
                  {focalPointData[activeFocalPoint].specialty}
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {focalPointData[activeFocalPoint].description}
              </p>
            </div>
            <div className="border-t border-zinc-900/80 pt-4 mt-6 text-xs font-mono text-zinc-500 flex justify-between">
              <span>SYSTEM CHANNELS OPERABILITY: 100% SECURE</span>
              <span className="text-amber-500 font-bold">READY TO DEPLOY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: THE OPERATIONAL DISCIPLINE ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <LayoutGrid className="w-3.5 h-3.5 text-amber-500" />
          NUCLEUS STANDARDS // THE DISCIPLINES
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mb-12 uppercase">
          OUR OPERATIONAL DISCIPLINES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-amber-400 font-mono font-bold text-xs">V01 // SECURITY</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">SEBI SECURE frontend</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              We design frontends matching rigorous financial security standards, bypassing audit violations smoothly as demonstrated in our 39-hour deadline dispatch.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-amber-400 font-mono font-bold text-xs">V02 // ACCESSIBLE</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">WCAG 2.1 AA Compliant</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              We build client systems fully accessible to keyboard inputs, screen readers, contrast variations, and assistive technologies.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-amber-400 font-mono font-bold text-xs">V03 // AUTOMATION</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">Agentic AI Workflows</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              No simple keyword bots. We structure custom offline and cloud automated multi-agent chains that handle real, deep tasks dynamically.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-amber-400 font-mono font-bold text-xs">V04 // LOCALIZATION</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">Multilingual Dubbing</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              Using state-of-the-art neural cloning patterns, we dub rich media assets, preserving vocal structures and micro-timbres seamlessly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
