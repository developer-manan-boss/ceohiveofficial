"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setTimeout(() => {
      setCurrentYear(new Date().getFullYear());
    }, 0);
  }, []);

  return (
    <footer
      id="main-app-footer"
      className="relative bg-[#050505] border-t border-zinc-900 pt-20 pb-10 overflow-hidden"
    >
      {/* Massive Stroke Watermark */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-10 pointer-events-none select-none text-[15vw] sm:text-[18vw] font-black leading-none opacity-[0.03] tracking-[0.15em] text-[#FFD700] text-center uppercase whitespace-nowrap z-0 font-mono">
        CEOHIVE
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-zinc-900">
        {/* Column 1: Core Manifesto */}
        <div className="md:col-span-5 flex flex-col items-start">
          <Link href="/" className="group flex items-center gap-2 mb-6">
            <span className="font-mono text-base font-black tracking-[0.25em] text-white">
              CEOHIVE
            </span>
          </Link>
          <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-xs mb-8">
            Digital infrastructure, autonomous AI agents, and cinematic post-production designed
            to convert target audience attention into market dominance across three continents.
          </p>
          {/* Integrity status pin */}
          <div className="flex items-center gap-2.5 bg-zinc-900/40 border border-zinc-800/40 px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-[#FFD700]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            ALL OPERATIONS ACTIVE // UTC STATUS: OK
          </div>
        </div>

        {/* Column 2: System Nodes/Services */}
        <div className="md:col-span-3 flex flex-col">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#FFD700] uppercase font-bold mb-4">
            REGULATORY CORRIDORS
          </span>
          <nav className="flex flex-col gap-2.5">
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group font-mono text-xs"
            >
              Web Architectures
              <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-500 ml-1 transition-colors" />
            </Link>
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group font-mono text-xs"
            >
              Agentic AI Autonomy
              <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-500 ml-1 transition-colors" />
            </Link>
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group font-mono text-xs"
            >
              High-End App Dev
              <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-500 ml-1 transition-colors" />
            </Link>
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group font-mono text-xs"
            >
              Advanced Commercial VFX
              <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-500 ml-1 transition-colors" />
            </Link>
            <Link
              href="/services"
              className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center group font-mono text-xs"
            >
              Voice Cloning Solutions
              <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-amber-500 ml-1 transition-colors" />
            </Link>
          </nav>
        </div>

        {/* Column 3: Global Connect */}
        <div className="md:col-span-4 flex flex-col">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#FFD700] uppercase font-bold mb-4">
            FOUNDER COORDINATES
          </span>
          <div className="flex flex-col gap-3.5 text-xs text-zinc-400 font-mono">
            <a
              href="https://www.linkedin.com/in/mananbansalboss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all hover:translate-x-1"
            >
              <Linkedin className="w-3.5 h-3.5 text-amber-500" />
              <span>LinkedIn (g.dev/mananbansalboss)</span>
            </a>
            <a
              href="https://g.dev/mananbansal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all hover:translate-x-1"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-500" />
              <span>Google Developer Profile</span>
            </a>
            <a
              href="mailto:ceohive.enquiry@gmail.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all hover:translate-x-1"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>General: ceohive.enquiry@gmail.com</span>
            </a>
            <a
              href="mailto:mananbansal.founder@gmail.com"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all hover:translate-x-1"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>MD Direct: mananbansal.founder@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 z-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600">
        <div>© {currentYear} CEOHive Digital Solutions. Operating India, USA, and Europe channels.</div>
        <div className="flex gap-4">
          <span className="text-[#FFD700]/70 select-none">SYSTEMS OPERATIONAL // WCAG 2.1 AA COMPLIANT</span>
        </div>
      </div>
    </footer>
  );
}
