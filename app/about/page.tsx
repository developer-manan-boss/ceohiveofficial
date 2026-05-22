"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Shield, ShieldAlert, Cpu, Terminal, Linkedin, ExternalLink, Globe, LayoutGrid, CheckSquare, Mail } from "lucide-react";

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
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
          SYSTEM PROTOCOL // THE HIVE MIND NARRATIVE
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white mb-8 uppercase leading-[0.95]">
              WE DO NOT &quot;FREELANCE&quot; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-champagne to-zinc-500">
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
              <div className="border-l-2 border-luxury-gold pl-4">
                <div className="font-mono text-xs font-bold text-white mb-1">ZERO COMMODITY BUILD</div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Every asset we create is custom built from bare-metal code bases. No template noise. No sluggish pre-made builders.
                </p>
              </div>
              <div className="border-l-2 border-luxury-gold pl-4">
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

      {/* ================= SECTION 2: THE LEADERSHIP PILLARS ================= */}
      <section className="relative border-y border-zinc-900/65 bg-zinc-900/10 py-24 mb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-12 flex items-center gap-1.5 justify-center">
            <Terminal className="w-3.5 h-3.5 text-luxury-gold" />
            LEADERSHIP PILLARS // AUTHORITY CHIEFS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* COLUMN 1: MANAN BANSAL (CEO & FOUNDER) */}
            <div className="flex flex-col gap-8 bg-zinc-950/40 p-8 sm:p-10 border border-zinc-900 rounded relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-zinc-650 font-mono text-[9px] uppercase tracking-wider">
                CORE SEC-01 // FOUNDER CORE
              </div>
              
              <div>
                <span className="text-luxury-gold font-mono text-[10px] tracking-widest uppercase font-bold block mb-2">
                  CHIEF EXECUTIVE ADVISOR
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white uppercase tracking-tight mb-4">
                  Manan Bansal
                </h2>
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
                  CEO, Founder & Managing Director
                </div>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-4">
                  As the strategic brain and Managing Director behind CEOHive Digital Solutions, Manan positions architecture as the ultimate source of truth. He directs full-company client scaling, compliance grids, and localized voice operations.
                </p>
                <p className="font-sans text-xs text-zinc-450 leading-relaxed">
                  With verified Google Developer credentials and an elite global B2B network on LinkedIn, Manan enforces our central directive: <strong className="text-white">&quot;Systems over trust. Execution over promises.&quot;</strong>
                </p>
              </div>

              {/* Founder Stats Overlay */}
              <div className="bg-zinc-950 p-5 border border-zinc-900/80 rounded flex flex-col gap-2 font-mono text-[10px] text-zinc-450">
                <div className="flex justify-between">
                  <span className="text-zinc-600">COORDINATE LOC:</span>
                  <span className="text-white">CHANDIGARH REGION / IN-HQ</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">SYSTEM ROLES:</span>
                  <span className="text-luxury-gold font-bold">STRATEGY, COMPLIANCE AUDITS, B2B OUTREACH</span>
                </div>
                <div className="flex justify-between border-t border-zinc-900/60 pt-2 mt-1">
                  <span className="text-zinc-600">DIRECT LINE:</span>
                  <span className="text-zinc-350 font-sans">mananbansal.founder@gmail.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full mt-2">
                <a
                  href="https://www.linkedin.com/in/mananbansalboss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#05060a] bg-luxury-gold hover:bg-[#f4efdf] px-5 py-3 rounded transition-colors shrink-0"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  CONNECT ON LINKEDIN
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://g.dev/mananbansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 font-mono text-[10px] font-bold tracking-widest text-zinc-350 hover:text-white border border-zinc-900 hover:border-zinc-700 px-5 py-3 rounded transition-all"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  GOOGLE PROFILE
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* COLUMN 2: AKASH (CTO & SERVICE HEAD & QUALITY CONTROL) */}
            <div className="flex flex-col gap-8 bg-zinc-950/40 p-8 sm:p-10 border border-zinc-900 rounded relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-zinc-650 font-mono text-[9px] uppercase tracking-wider">
                CORE SEC-02 // SYSTEM PIPELINES
              </div>

              <div>
                <span className="text-luxury-gold font-mono text-[10px] tracking-widest uppercase font-bold block mb-2">
                  CHIEF TECHNOLOGY OFFICER
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-mono text-white uppercase tracking-tight mb-4">
                  Akash
                </h2>
                <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">
                  CTO, Service Head & Quality Control Chief
                </div>
                <p className="font-sans text-sm text-zinc-300 leading-relaxed mb-4">
                  Overseeing full-stack code pipelines and advanced production systems, Akash guides engineering logic at CEOHive. He steers automated multi-agentic AI workflows, secure API nodes, and lip-sync vocal rendering servers.
                </p>
                <p className="font-sans text-xs text-zinc-450 leading-relaxed">
                  As our chief Quality Control Director, Akash maintains a zero-compromise audit baseline—personally auditing WCAG 2.1 grids, direct SSL certificates, load-balance routers, and rendering timelines.
                </p>
              </div>

              {/* CTO Stats Overlay */}
              <div className="bg-zinc-950 p-5 border border-zinc-900/80 rounded flex flex-col gap-2 font-mono text-[10px] text-zinc-450">
                <div className="flex justify-between">
                  <span className="text-zinc-600">COORDINATE LOC:</span>
                  <span className="text-white">ASIA-PACIFIC / GLOBAL CHANNELS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600">SYSTEM ROLES:</span>
                  <span className="text-luxury-gold font-bold">SYSTEMS INTEGRITY, AGENT LOOPS, QUALITY TESTING</span>
                </div>
                <div className="flex justify-between border-t border-zinc-900/60 pt-2 mt-1">
                  <span className="text-zinc-600">SYS CORE STATUS:</span>
                  <span className="text-green-500 font-bold uppercase">SECURED & STRICT COMPLIANCE ACTIVE</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full mt-2">
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#05060a] bg-luxury-gold hover:bg-[#f4efdf] px-5 py-3 rounded transition-colors text-center shrink-0"
                >
                  <Cpu className="w-3.5 h-3.5 animate-spin" />
                  INITIATE CTO ALIGNMENT
                  <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <a
                  href="mailto:ceohive.enquiry@gmail.com"
                  className="group flex items-center justify-center gap-2 font-mono text-[10px] font-bold tracking-widest text-zinc-350 hover:text-white border border-zinc-900 hover:border-zinc-700 px-5 py-3 rounded transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  EMAIL CTO GATEWAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OPERATIONAL FOOTPRINT ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 mb-28">
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-luxury-gold" />
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
                  ? "bg-luxury-gold border-luxury-gold text-black font-bold"
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
                  ? "bg-luxury-gold border-luxury-gold text-black font-bold"
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
                  ? "bg-luxury-gold border-luxury-gold text-black font-bold"
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
                <span className="font-mono text-sm font-bold text-luxury-gold">
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
              <span className="text-luxury-gold font-bold">READY TO DEPLOY</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: THE OPERATIONAL DISCIPLINE ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <LayoutGrid className="w-3.5 h-3.5 text-luxury-gold" />
          NUCLEUS STANDARDS // THE DISCIPLINES
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mb-12 uppercase">
          OUR OPERATIONAL DISCIPLINES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-luxury-gold font-mono font-bold text-xs">V01 // SECURITY</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">SEBI SECURE frontend</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              We design frontends matching rigorous financial security standards, bypassing audit violations smoothly as demonstrated in our 39-hour deadline dispatch.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-luxury-gold font-mono font-bold text-xs">V02 // ACCESSIBLE</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">WCAG 2.1 AA Compliant</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              We build client systems fully accessible to keyboard inputs, screen readers, contrast variations, and assistive technologies.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-luxury-gold font-mono font-bold text-xs">V03 // AUTOMATION</span>
            <h3 className="font-mono text-sm font-bold text-white mt-3 mb-2 uppercase">Agentic AI Workflows</h3>
            <p className="font-sans text-xs text-zinc-450 leading-relaxed">
              No simple keyword bots. We structure custom offline and cloud automated multi-agent chains that handle real, deep tasks dynamically.
            </p>
          </div>

          <div className="glass-panel p-6 rounded border border-zinc-800/60">
            <span className="text-luxury-gold font-mono font-bold text-xs">V04 // LOCALIZATION</span>
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
