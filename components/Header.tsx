"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import CeoHiveLogo from "./CeoHiveLogo";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Monitor scrolling to hide/show the sticky header smoothly
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Classify if scrolled paste a threshold for glassmorphism background active
      if (currentScrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide/reveal scroll behavior
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setVisible(false);
      } else {
        // Scrolling up - show header
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route changes
  useEffect(() => {
    let active = true;
    setTimeout(() => {
      if (active) {
        setMobileMenuOpen(false);
      }
    }, 0);
    return () => {
      active = false;
    };
  }, [pathname]);

  return (
    <>
      <header
        id="main-app-header"
        className={`fixed left-0 w-full z-40 transition-all duration-500 ease-in-out ${
          visible ? "top-0" : "-top-24"
        } ${
          scrolled
            ? "py-4 bg-[#080a11e6] backdrop-blur-lg border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 z-50">
            <CeoHiveLogo height={38} width={155} className="transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative font-mono text-xs font-medium tracking-widest text-zinc-400 hover:text-white uppercase py-1.5 transition-colors duration-300"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Underline animates center-out */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-luxury-gold transition-all duration-300 ease-out group-hover:w-full ${
                      isActive ? "w-full bg-luxury-gold" : ""
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Header Action */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-widest text-[#05060a] bg-luxury-gold hover:bg-[#f4efdf] px-5 py-2.5 rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(223,180,85,0.25)] select-none cursor-pointer"
            >
              DEPLOY COMMAND
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer z-50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#080a11] z-30 flex flex-col justify-center px-10 pt-20"
          >
            {/* Ambient mesh watermark */}
            <div className="absolute right-0 bottom-0 text-white/5 text-[15vw] font-bold tracking-widest uppercase select-none pointer-events-none">
              HIVE
            </div>

            <nav className="flex flex-col gap-6 text-left max-w-sm">
              <span className="text-zinc-600 font-mono text-[10px] tracking-widest uppercase border-b border-zinc-800/60 pb-2 mb-2">
                SYSTEM CORRIDORS
              </span>
              {NAV_LINKS.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`font-mono text-xl font-bold uppercase tracking-widest hover:text-luxury-gold transition-colors ${
                        isActive ? "text-luxury-gold" : "text-zinc-300"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-12 border-t border-zinc-900 pt-8 flex flex-col gap-4">
              <span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">
                DIRECT CHANNELS
              </span>
              <a
                href="mailto:ceohive.enquiry@gmail.com"
                className="text-xs text-zinc-400 hover:text-luxury-gold font-mono tracking-wider transition-colors"
              >
                ceohive.enquiry@gmail.com
              </a>
              <Link
                href="/contact"
                className="group flex items-center justify-between w-full max-w-xs text-xs font-mono font-bold tracking-widest bg-luxury-gold hover:bg-[#f4efdf] text-black px-4 py-3.5 rounded mt-2 transition-colors duration-300"
              >
                INITIATE COMMAND PROJECT
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
