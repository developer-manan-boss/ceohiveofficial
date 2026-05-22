"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface EntrySequenceProps {
  onComplete: () => void;
}

const BOOT_LINES = [
  "SYSTEM COMMAND: INITIALIZE CEOHIVE PROTOCOL...",
  "VERIFYING HOST: SECURITY LAYERS ACTIVE [SECURE]",
  "CONNECTING SUB-BEACONS: [INDIA-HQ] [US-DISTRICT] [EUROPE-NODE]...",
  "COMPILING AGENTIC AI INFERENCE MODULES... DONE",
  "AUDITING COMPLIANCE LAYERS (SEBI / GDPR / WCAG 2.1 AA) [CERTIFIED]",
  "ESTABLISHING SECURE CONNECTION CODES: 200 OK",
  "CEOHIVE COMMAND CENTRE: ONLINE. POWER UP ACTIVE.",
];

export default function EntrySequence({ onComplete }: EntrySequenceProps) {
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [complete, setComplete] = useState(false);
  const [utcTime, setUtcTime] = useState<string>("");

  useEffect(() => {
    setTimeout(() => {
      setUtcTime(new Date().toISOString().slice(0, 19) + "Z");
    }, 0);

    if (localStorage.getItem("ceohive_boot_completed") === "true") {
      // If they already booted in this session, we can skip or fade instantly to make return visits flawless
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setCurrentLineIdx((prev) => {
        if (prev < BOOT_LINES.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setComplete(true);
            localStorage.setItem("ceohive_boot_completed", "true");
            setTimeout(onComplete, 1200); // Wait for fade-out
          }, 1200);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    localStorage.setItem("ceohive_boot_completed", "true");
    onComplete();
  };

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          id="entry-sequence-container"
          className="fixed inset-0 bg-[#050505] z-50 flex flex-col justify-between p-6 sm:p-12 font-mono text-[#FFD700]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -200 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top telemetry indicators */}
          <div className="flex justify-between items-center text-xs opacity-60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span>TERMINAL SECURE SEC-CH-UA</span>
            </div>
            <div>UTC TIME: {utcTime || "LOADING..."}</div>
          </div>

          {/* Central System logs */}
          <div className="max-w-3xl w-full mx-auto flex flex-col gap-3 sm:gap-4 my-auto">
            <div className="text-zinc-600 text-xs mb-2 select-none">
              &gt;_ SYSTEM BOOT COMPILING CODES // VER 26.5.22
            </div>

            {BOOT_LINES.slice(0, currentLineIdx + 1).map((line, idx) => {
              const isLast = idx === currentLineIdx;
              const isMajor = line.startsWith("CEOHIVE COMMAND");
              return (
                <motion.div
                  key={idx}
                  className={`text-xs sm:text-sm md:text-base leading-relaxed font-mono ${
                    isMajor ? "text-amber-400 font-bold tracking-wider pt-2" : "text-zinc-300"
                  }`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="text-amber-500 mr-2 select-none">❯</span>
                  {line}
                  {isLast && (
                    <span className="inline-block w-2 h-4 ml-1 bg-amber-500 animate-pulse align-middle" />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Skip buttons & telemetry footers */}
          <div className="flex justify-between items-end text-xs w-full">
            <div className="text-zinc-600 hidden sm:block">
              SYS INTEGRITY: HIGH // CORRIDOR SECURED [IN, US, EU]
            </div>
            <button
              onClick={handleSkip}
              id="skip-boot-button"
              className="text-amber-500 hover:text-white border border-amber-500/25 hover:border-amber-400 px-4 py-2 bg-amber-500/5 backdrop-blur-sm rounded cursor-pointer transition-all duration-300 ml-auto tracking-wide font-bold"
            >
              SKIP SECURE INTRO ➔
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
