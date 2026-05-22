"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Globe2,
  Terminal,
  Cpu,
  Tv,
  Mic,
  Activity,
  Maximize2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Clock,
  ShieldAlert,
  MapPin,
  ExternalLink,
} from "lucide-react";
import ThreeGlobe from "@/components/ThreeGlobe";
import EntrySequence from "@/components/EntrySequence";

export default function HomePage() {
  const [bootCompleted, setBootCompleted] = useState(false);
  const [activeRegion, setActiveRegion] = useState<"IN" | "US" | "EU" | null>(null);

  // Counter animation values
  const [statistics, setStatistics] = useState({ clients: 0, speedHours: 0, complianceRate: 0 });

  useEffect(() => {
    // Check if user already booted
    const cached = localStorage.getItem("ceohive_boot_completed") === "true";
    if (cached) {
      setTimeout(() => {
        setBootCompleted(true);
      }, 0);
    }
  }, []);

  // Soft increment stats once homepage has loaded
  useEffect(() => {
    if (!bootCompleted) return;
    const timer = setTimeout(() => {
      let interval = setInterval(() => {
        setStatistics((prev) => {
          const clientsTarget = 47;
          const speedTarget = 39;
          const complianceTarget = 100;

          const nextClients = prev.clients < clientsTarget ? prev.clients + 1 : clientsTarget;
          const nextSpeed = prev.speedHours < speedTarget ? prev.speedHours + 1 : speedTarget;
          const nextCompliance = prev.complianceRate < complianceTarget ? prev.complianceRate + 2 : complianceTarget;

          if (
            nextClients === clientsTarget &&
            nextSpeed === speedTarget &&
            nextCompliance === complianceTarget
          ) {
            clearInterval(interval);
          }

          return {
            clients: nextClients,
            speedHours: nextSpeed,
            complianceRate: nextCompliance,
          };
        });
      }, 35);
      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(timer);
  }, [bootCompleted]);

  const handleRegionSelect = (region: "IN" | "US" | "EU") => {
    setActiveRegion(activeRegion === region ? null : region);
  };

  const getRegionDetails = () => {
    switch (activeRegion) {
      case "IN":
        return {
          title: "INDIA COMMAND HQ — SOUTH ASIA",
          coordinates: "20.5937° N, 78.9629° E",
          pithy: "The technical powerhouse. Orchestrating complex engineering systems and compliance validation.",
          services: "Core Web Architecture, Agentic Workflows, SEBI & FINTECH Systems",
        };
      case "US":
        return {
          title: "USA OPERATIONS — B2B HYPERGROWTH",
          coordinates: "37.0902° N, 95.7129° W",
          pithy: "Target strategic scaling. Aligning high-ticket architectures for hyper-speed digital capture.",
          services: "Enterprise Software Strategy, SaaS Solutions, Venture Architecture",
        };
      case "EU":
        return {
          title: "EUROPE NODE — LOCALIZATION CENTERS",
          coordinates: "54.5260° N, 15.2551° E",
          pithy: "Broadcasting localization. Leading accessible compliant frontends and cinematic dubs.",
          services: "WCAG 2.1 AA Audits, Multilingual Dubbing, Advanced Commercial VFX",
        };
      default:
        return null;
    }
  };

  const currentRegionMeta = getRegionDetails();

  return (
    <>
      <AnimatePresence>
        {!bootCompleted && (
          <EntrySequence onComplete={() => setBootCompleted(true)} />
        )}
      </AnimatePresence>

      <div
        className={`w-full relative transition-opacity duration-1000 ${
          bootCompleted ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ================= HERO SECTION ================= */}
        <section
          id="command-hero-section"
          className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left: Text & Content Coordinates */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Telemetry Tag */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-500/5 border border-amber-500/20 text-[#FFD700] rounded text-[10px] font-mono tracking-widest uppercase mb-6 shadow-md select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                CORE INJECTION INTERFACE ENGINE
              </div>

              {/* Massive Bold Headline */}
              <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[0.95] mb-6">
                WE ENGINEER <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white text-glow-gold">
                  DIGITAL SUPREMACY.
                </span>
              </h1>

              {/* Subheadline and Manifesto */}
              <p className="font-sans text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
                Architectural-Grade Digital Infrastructure. Autonomous Agentic AI. High-End Commercial VFX. Focused B2B execution partners for elite enterprises in <strong className="text-white">India, USA, and Europe</strong>. No compromises.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  href="/contact"
                  id="initiate-project-cta"
                  className="group flex items-center justify-center gap-1.5 font-mono text-xs font-bold tracking-widest text-[#050505] bg-amber-400 hover:bg-white px-8 py-4 rounded cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,215,0,0.35)] select-none text-center"
                >
                  INITIATE PROJECT CHANNELS
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#services-bento"
                  className="group flex items-center justify-center gap-1.5 font-mono text-xs font-bold tracking-widest text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-500 px-8 py-4 rounded transition-all duration-300 select-none text-center"
                >
                  SERVICES GRID
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Quick telemetry indicators */}
              <div className="mt-16 grid grid-cols-3 gap-6 border-t border-zinc-900 pt-8 w-full max-w-lg">
                <div>
                  <div className="font-mono text-3xl font-bold text-amber-500">
                    {statistics.clients}+
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">
                    B2B Client Systems
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-amber-500 flex items-center">
                    &lt;{statistics.speedHours}h
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">
                    SEBI Platform Time
                  </div>
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-amber-500">
                    {statistics.complianceRate}%
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mt-1">
                    WCAG & REG COMPLIANT
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Immersive 3D Globe with Clickable Node Panels */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative min-h-[480px]">
              {/* Subtle background glow circle */}
              <div className="absolute w-72 h-72 rounded-full bg-amber-500/5 blur-[80px] pointer-events-none select-none z-0" />

              {/* Real 3D Globe WebGL Container */}
              <div className="relative w-full h-[450px] z-10">
                <ThreeGlobe
                  activeRegion={activeRegion}
                  onRegionSelect={handleRegionSelect}
                  interactive={true}
                />
              </div>

              {/* Interactive Region Pointers Overlay */}
              <div className="absolute top-2 right-2 z-20 flex flex-col gap-2">
                <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider select-none text-right">
                  CLICK NODES OR QUICK BUTTONS
                </span>
                <div className="flex gap-1.5 justify-end">
                  <button
                    onClick={() => handleRegionSelect("IN")}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded border transition-all cursor-pointer ${
                      activeRegion === "IN"
                        ? "bg-amber-400 text-black border-amber-400 font-bold"
                        : "bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    IN-HQ
                  </button>
                  <button
                    onClick={() => handleRegionSelect("US")}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded border transition-all cursor-pointer ${
                      activeRegion === "US"
                        ? "bg-amber-400 text-black border-amber-400 font-bold"
                        : "bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    US-DIST
                  </button>
                  <button
                    onClick={() => handleRegionSelect("EU")}
                    className={`px-2.5 py-1 text-[10px] font-mono rounded border transition-all cursor-pointer ${
                      activeRegion === "EU"
                        ? "bg-amber-400 text-black border-amber-400 font-bold"
                        : "bg-zinc-900/40 text-zinc-400 border-zinc-800 hover:border-zinc-600"
                    }`}
                  >
                    EU-NODE
                  </button>
                </div>
              </div>

              {/* Floating Region details card */}
              <AnimatePresence>
                {activeRegion && currentRegionMeta && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-2 left-2 right-2 bg-[#0d0d0dfa] backdrop-blur-md border border-amber-500/30 p-4 rounded shadow-2xl z-20"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-mono text-xs font-bold text-amber-400 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {currentRegionMeta.title}
                      </span>
                      <span className="font-mono text-[9px] text-zinc-500">
                        {currentRegionMeta.coordinates}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-zinc-300 leading-relaxed mb-2.5">
                      {currentRegionMeta.pithy}
                    </p>
                    <div className="border-t border-zinc-800/60 pt-2 flex flex-col gap-1">
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                        Focus Capacities:
                      </span>
                      <span className="font-mono text-[10px] text-white">
                        {currentRegionMeta.services}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ================= SERVICES THEASER GRID ================= */}
        <section id="services-bento" className="py-24 relative border-t border-zinc-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
            {/* Header Column */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-xl">
                <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-3 flex items-center gap-1">
                  <Terminal className="w-3.5 h-3.5 text-amber-500" />
                  AGENCY SPECIFICATIONS // CAPABILITIES LIBRARIES
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-white leading-tight">
                  SIX SYSTEM PILLARS OF DIGITAL DOMINATION
                </h2>
              </div>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm">
                We design, code, automate, and localize. Each segment is coordinated in-house under pristine performance standards. One accent, zero fluff.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service 1: Web Development */}
              <div className="glass-panel p-8 rounded border border-zinc-800/60 glass-card-hover group interactive-card flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5 rounded text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Globe2 className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">01 / CAPABILITY</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Web Development
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    Architectural-grade digital infrastructure. Master-structured frontends using Next.js, headless architectures, and compliance compliance grids.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FFD700] hover:text-white flex items-center gap-1 mt-6"
                >
                  Audit Specs ➔
                </Link>
              </div>

              {/* Service 2: Agentic AI */}
              <div className="glass-panel p-8 rounded border border-zinc-800/60 glass-card-hover group interactive-card flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5 rounded text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">02 / CAPABILITY</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Agentic AI Autonomy
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    Autonomous systems that execute while you sleep. Multi-agent architecture workflows, pipeline automation, and direct LLM model engineering.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FFD700] hover:text-white flex items-center gap-1 mt-6"
                >
                  Audit Specs ➔
                </Link>
              </div>

              {/* Service 3: App Development */}
              <div className="glass-panel p-8 rounded border border-zinc-800/60 glass-card-hover group interactive-card flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5 rounded text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Activity className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">03 / CAPABILITY</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    High-End App Dev
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    Native fluid execution at scale. Cross-platform applications (iOS/Android) centering optimized render performance and raw structural utility.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FFD700] hover:text-white flex items-center gap-1 mt-6"
                >
                  Audit Specs ➔
                </Link>
              </div>

              {/* Service 4: VFX & Video Editing */}
              <div className="glass-panel p-8 rounded border border-zinc-800/60 glass-card-hover group interactive-card flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5 rounded text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Tv className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">04 / CAPABILITY</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Advanced VFX & Editing
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    Commercial grade cinematic assets, high-contrast grading, surgical tracking, compositing, and precision post-production mastery.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FFD700] hover:text-white flex items-center gap-1 mt-6"
                >
                  Audit Specs ➔
                </Link>
              </div>

              {/* Service 5: Voice Cloning & Dubbing */}
              <div className="glass-panel p-8 rounded border border-zinc-800/60 glass-card-hover group interactive-card flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5 rounded text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Mic className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">05 / CAPABILITY</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Voice Cloning & Dubbing
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    Precision localization pipelines. Audio synthesis and indistinguishable vocal clone translations tailored perfectly to cross-border audiences.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FFD700] hover:text-white flex items-center gap-1 mt-6"
                >
                  Audit Specs ➔
                </Link>
              </div>

              {/* Service 6: YouTube Management */}
              <div className="glass-panel p-8 rounded border border-zinc-800/60 glass-card-hover group interactive-card flex flex-col justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 flex items-center justify-center border border-amber-500/20 bg-amber-500/5 rounded text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">06 / CAPABILITY</span>
                  </div>
                  <h3 className="font-mono text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    YouTube Management
                  </h3>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    Authority-building systems. Scientific search optimizations, retention script edits, click-through analysis, and organic structural growth.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#FFD700] hover:text-white flex items-center gap-1 mt-6"
                >
                  Audit Specs ➔
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECT HIGHLIGHTS ================= */}
        <section id="homepage-featured-projects" className="py-24 relative border-t border-zinc-950">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
            <span className="text-[10px] text-[#FFD700] font-mono tracking-[0.2em] uppercase block mb-3">
              FEATURED RUNTIME DEPLOYMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-mono text-white mb-16 uppercase">
              SELECTED CASE STUDIES
            </h2>

            {/* Case Studies Staggered Grid */}
            <div className="flex flex-col gap-20">
              {/* Project 1: Vipul Kaushik */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-amber-500/5 border border-amber-500/10 text-amber-400 rounded text-[9px] font-mono uppercase tracking-widest mb-4">
                    SEBI-REGULATED COMPLIANCE INTEGRATION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-4">
                    Vipul Kaushik Research Analyst
                  </h3>
                  <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    Delivered a fully SEBI-compliant, WCAG 2.1 AA accessible research platform for one of India&apos;s most prominent SEBI-registered Research Analysts and YouTube authorities. Built and deployed in <strong className="text-[#FFD700]">39 hours 28 minutes</strong> — one day before audit. Zero compromises. Zero excuses.
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-y border-zinc-900/60 py-4 w-full mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-mono text-zinc-400">Time: 39h 28m Delivery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-mono text-zinc-400">Direct Audit Approved</span>
                    </div>
                  </div>

                  <a
                    href="https://vipultheresearchanalyst.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-amber-500 hover:text-white font-mono tracking-widest font-bold uppercase transition-colors"
                  >
                    View System Live
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="lg:col-span-6 order-1 lg:order-2 relative h-[300px] sm:h-[400px] border border-zinc-800/60 rounded bg-[#0b0b0b] overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent h-12 pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600">
                      <span>AUDIT CODE ENGINE INITIALIZED</span>
                      <span>SECURE PIPELINE</span>
                    </div>
                    {/* Visual Interface mockup */}
                    <div className="my-auto text-center flex flex-col items-center">
                      <span className="text-[3rem] font-bold font-mono tracking-wider text-amber-400/20 select-none uppercase">
                        SEBI SYS-01
                      </span>
                      <span className="text-xs font-mono text-zinc-500 tracking-widest mt-2">
                        LIVE HOST: VIPULKAUSHIKRESEARCHANALYST.COM
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-t border-zinc-900/80 pt-4">
                      <span className="text-[10px] font-mono text-zinc-500">WCAG 2.1 LOCAL DATA APPROVED</span>
                      <span className="text-xs font-mono text-amber-400">98 / Lighthouse</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-amber-500/5 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </div>

              {/* Project 2: Forever Capable */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 relative h-[300px] sm:h-[400px] border border-zinc-800/60 rounded bg-[#0b0b0b] overflow-hidden group">
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-amber-500/5 to-transparent h-12 pointer-events-none" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600">
                      <span>B2B INTEGRATION PORT AL</span>
                      <span>wisdom / enterprise</span>
                    </div>
                    {/* Visual Interface mockup */}
                    <div className="my-auto text-center flex flex-col items-center">
                      <span className="text-[3rem] font-bold font-mono tracking-wider text-amber-400/20 select-none uppercase">
                        FOREVER CAPABLE
                      </span>
                      <span className="text-xs font-mono text-zinc-500 tracking-widest mt-2">
                        ENTERPRISE MAT CHING PLAT FORM
                      </span>
                    </div>
                    <div className="flex justify-between items-end border-t border-zinc-900/80 pt-4">
                      <span className="text-[10px] font-mono text-zinc-500">AUTONOMOUS LINKAGE SYSTEM V1</span>
                      <span className="text-xs font-mono text-amber-400">ACTIVE CHANNELS</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-amber-500/5 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                <div className="lg:col-span-6 flex flex-col items-start">
                  <div className="flex items-center gap-2 px-2.5 py-1 bg-amber-500/5 border border-amber-500/10 text-amber-400 rounded text-[9px] font-mono uppercase tracking-widest mb-4">
                    STARTUP / TALENT HUB AGGREGATION
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-mono text-white mb-4">
                    Forever Capable platform
                  </h3>
                  <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                    A centralized ecosystem merging retired elite professionals with enterprise demand. We built the digital backbone that connects wisdom with opportunity — serving as the strategic intermediate between legacy expertise and modern companies requiring specialized, spectacular services.
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-y border-zinc-900/60 py-4 w-full mb-6">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-mono text-zinc-400">Matching: Dynamic Grid Matching</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-mono text-zinc-400">Markets: Asia-Pacific, America</span>
                    </div>
                  </div>

                  <Link
                    href="/projects"
                    className="flex items-center gap-1.5 text-xs text-amber-500 hover:text-white font-mono tracking-widest font-bold uppercase transition-colors"
                  >
                    View Project Case Study
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS TEASER ================= */}
        <section className="py-24 relative border-t border-zinc-950 bg-zinc-900/10">
          <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center relative z-10">
            <span className="text-[#FFD700] text-[10px] font-mono tracking-widest uppercase mb-4 block">
              SYSTEM COMMANDS // CLIENT FEEDBACK
            </span>
            {/* Elegant large typographic review layout */}
            <div className="relative mt-8">
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-[10rem] text-zinc-800/25 leading-none select-none pointer-events-none">
                “
              </span>
              <p className="font-mono text-xl sm:text-2xl md:text-3xl text-white font-medium max-w-4xl mx-auto leading-relaxed relative z-10 italic">
                &quot;CEOHive didn&apos;t just build our platform. They built our credibility. The SEBI compliance was flawless, and the delivery speed was inhuman. The audits passed without a single warning.&quot;
              </p>
              <div className="mt-8 flex flex-col items-center">
                <span className="font-sans text-sm font-bold text-white uppercase tracking-wider">
                  Vipul Kaushik
                </span>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
                  SEBI Research Analyst & Authority
                </span>
              </div>
            </div>

            <div className="mt-16">
              <Link
                href="/testimonials"
                className="font-mono text-[11px] text-zinc-400 hover:text-[#FFD700] tracking-widest font-bold uppercase border border-zinc-800 hover:border-amber-500/30 px-6 py-3.5 rounded transition-all transition-duration-300 pointer-events-auto"
              >
                VIEW SCATTERED EDITORIAL MARGIN TESTIMONIALS ➔
              </Link>
            </div>
          </div>
        </section>

        {/* ================= FINAL COMMAND INTEGRITY CTA ================= */}
        <section className="py-28 relative border-t border-zinc-950 overflow-hidden">
          {/* Neon wire decoration */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none select-none" />

          <div className="max-w-5xl mx-auto px-6 sm:px-12 text-center relative z-10 flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-mono text-white mb-6 uppercase">
              YOUR NEXT MOVE IS THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                ONLY MOVE THAT MATTERS
              </span>
            </h2>
            <p className="font-sans text-base text-zinc-400 max-w-2xl leading-relaxed mb-10">
              Stop relying on freelancer portfolios. Establish strategic engineering supremacy with CEOHive Digital Solutions. Infiltrate, architect, and dominate.
            </p>

            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 font-mono text-xs font-black tracking-widest text-black bg-[#FFD700] hover:bg-white px-10 py-5 rounded cursor-pointer transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,215,0,0.5)] select-none uppercase"
            >
              Contact the CEOHive Command
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
