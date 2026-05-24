"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Globe,
  Cpu,
  Smartphone,
  Video,
  Mic,
  BarChart,
  Grid,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  Shield,
  FileCode,
} from "lucide-react";

const SERVICES_SPECS = [
  {
    id: "proptech-3d",
    name: "PropTech (Real Estate 3D Analytics & Customization)",
    icon: Grid,
    desc: "A very specialized service for international real estate developers, agencies, and builders. We convert under-construction, bare shell, unbuilt, prebuilt, or project-only properties into highly precise, immersive end-to-end 3D simulations. Realtors ke liye ye ek absolute revolutionary service aur end-to-end operational software solution hai.",
    included: [
      "Live 3D Walkthroughs: Under-construction ya bareshell properties ka ultra-precise, fully-rendered 3D workspace model.",
      "AI Avatar Integration: Integrates realistic AI avatars of customer's family members inside the virtual 3D home walking and interacting live.",
      "Hyper-Local Hyper-Data: Surrounded live traffic data, metro timetables, and even nearest tea-stall operator names integrated directly into the map dataset.",
      "Transparency & Live Editing: Real-time tracking of raw material quality, active contractor certificates, and live material/furniture customization.",
      "Instant 1-Click Interior PDF/BOM: Standardized extraction of a 100-200 page interior design PDF and raw Bill of Materials to turn the virtual render into reality.",
    ],
    ideal: "International real estate builders, high-ticket property brokers, luxury developers, and pre-sales architecture teams.",
    caseStudyName: "Bare shell Interactive Walkthrough with Live PDF BOM Generation",
    caseStudyHref: "/projects",
  },
  {
    id: "advanced-ai-content",
    name: "Advanced AI Content & Studio Production",
    icon: Cpu,
    desc: "Studio-grade neural asset pipeline for supreme global communication. Bina kisi real human presence ke, advanced-level AI avatars aur natural voice cloning solutions ke sath video and media platforms launch karna under strict regulatory safety filters.",
    included: [
      "Faceless Content Creation: Bina kisi real human ke, advanced level cinematic AI Avatars ke sath targeted authority content banana.",
      "Voice Cloning & Dubbing: Studio-grade voice cloning aur natural multi-language dubbing jo bilkul real speech ki tarah natural sound kare.",
      "High-Retention Pacing Algorithms: Custom automated script structures designed for maximum viewer engagement and audience expansion.",
      "Multi-region distribution optimization and direct compliance sandboxing.",
    ],
    ideal: "B2B founders, global agencies, online tutoring academies, and multi-region commercial brands.",
    caseStudyName: "Vipul Kaushik Automatic Content Production Shell (CEOHive original)",
    caseStudyHref: "/projects",
  },
  {
    id: "vfx-cinematics",
    name: "Hollywood-Grade VFX & 3D Cinematic Commercials",
    icon: Video,
    desc: "Micro-pixel precision video editing and VFX designed to rival premium physical ad agencies. We produce breathtaking cinematic advertising assets featuring heavy visual effects, seamless CGI transitions, and professional high-end colour grading.",
    included: [
      "Micro-Pixel VFX: Ultra-sharpness and micro-accuracy motion tracking and object composition for raw cinematic fidelity.",
      "Blender + AI Environment Merging: We generate 3D baseline shots in Blender and merge them using custom neural lighting grids for perfect transitions.",
      "Enterprise Ads: Nike-level high-end ads like 'Comet' brand (featuring custom Jungle themes, Bahubali style scales, and YouTuber memes).",
      "Studio Grade Cinema Audio: Mastered audio compression, realistic atmospheric sounds, and sound design tuned to custom systems.",
    ],
    ideal: "Enterprise consumer brands on modern web networks, luxury products, and high-performance agency campaigns.",
    caseStudyName: "Comet Brand Jungle-Theme Cinematic Launch Film",
    caseStudyHref: "/projects",
  },
  {
    id: "next-gen-dev",
    name: "Next-Gen Web & App Development (Speed + Immersive Tech)",
    icon: Globe,
    desc: "High-end corporate software compiled from the ground up on modern Next.js edge loops. We deploy specialized lightweight codebases that load instantly, maintain strict SEBI and GDPR compliance, and feature browser-native spatial engineering.",
    included: [
      "Ultra-Fast Delivery: WordPress and bespoke framework architectures built day-and-night in exact 30 hours, 29 minutes, and 48 seconds.",
      "Video Proof of Work: Complete high-value building recordings served transparently as our ultimate marketing tool and proof of execution.",
      "Browser-Based WebVR/AR: Lightweight 1-click WebVR integration inside the website—no external application downloads, fully accessible in the browser.",
      "SEBI analytical platform compliance, WCAG 2.1 AA accessibility grids, and high-convert B2B lead generation loops.",
    ],
    ideal: "SEBI-registered financial research analysts, high-ticket scale builders, and immersive startup platforms.",
    caseStudyName: "Vipul Kaushik SEBI-Compliant Fast Platform (Delivered in 39 hours)",
    caseStudyHref: "/projects",
  },
  {
    id: "web-development",
    name: "Web Development Architecture",
    icon: Globe,
    desc: "Architectural-grade corporate digital platforms. We write bespoke lightweight codebases prioritizing maximum loading speeds, pristine SEO schemas, and rigorous security structures.",
    included: [
      "Custom Next.js 15 & React App Router frontends",
      "Full SEBI-compliance audit readiness dashboards",
      "WCAG 2.1 AA certified accessibility architectures",
      "Headless CMS custom bindings (Sanity, Strapi, Contentful)",
      "Vercel Enterprise standalone edge optimization",
    ],
    ideal: "Enterprise scale B2B brands, SEBI-registered analysts, fintech firms, and startup hubs.",
    caseStudyName: "Vipul Kaushik research platform (Built in 39 hours)",
    caseStudyHref: "/projects",
  },
  {
    id: "agentic-ai",
    name: "Agentic AI & Custom AI Solutions",
    icon: Cpu,
    desc: "Deploy autonomous systems that act as virtual operational staff. We build multi-agent orchestration loops that link models directly with internal databases and automate heavy workflows.",
    included: [
      "Dynamic multi-agent workflow chains (LangChain / AutoGPT style)",
      "Custom fine-tune custom pipelines and embedding retrieval maps",
      "Private server model deployments protecting corporate secret safety",
      "Intelligent autonomous email and customer research workers",
      "Venture data analytics forecast AI modeling",
    ],
    ideal: "Companies carrying heavy operational labor debt looking to scale without hiring lag.",
    caseStudyName: "Forever Capable Platform Wisdom Linker",
    caseStudyHref: "/projects",
  },
  {
    id: "app-development",
    name: "High-Performance App Development",
    icon: Smartphone,
    desc: "Sleek native applications designed for infinite scrolls and heavy content rendering. We specialize in cross-platform execution maintaining native 60fps refresh limits.",
    included: [
      "React Native & Flutter premium client shells",
      "Real-time background synchronizations and WebSockets",
      "Native device sensor controls (GPS, Camera, Accelerometer)",
      "Secure custom cryptographic offline local data structures",
      "Preloaded system state engines reducing cold load speeds",
    ],
    ideal: "Consumer brands, SaaS products, and local service networks requiring dedicated screens.",
    caseStudyName: "Talent Aggregator Mobile Native shell",
    caseStudyHref: "/projects",
  },
  {
    id: "vfx-editing",
    name: "Advanced Commercial VFX & Video Editing",
    icon: Video,
    desc: "Commercial-grade cinema and media assets. This is post-production mastery catering to brand authorities seeking world-class conversion metrics and absolute visual perfection.",
    included: [
      "High-accuracy motion tracking and object compositing",
      "Color grading matching Arri Log-C broadcast benchmarks",
      "Fluid 3D motion graphics and custom title vector animations",
      "Sound design design matching cinema compression systems",
      "Click-optimized social and billboard media exports",
    ],
    ideal: "Content creators, online authorities, SaaS marketing leaders, and brand executives.",
    caseStudyName: "Prominent SEBI YouTuber Video Systems",
    caseStudyHref: "/projects",
  },
  {
    id: "voice-cloning",
    name: "Video Dubbing & Voice Cloning",
    icon: Mic,
    desc: "Shatter regional bottlenecks safely. We analyze the vocal acoustics, timbers, and sub-frequencies of a founder's speaking voice to clone and translate content indistinguishably.",
    included: [
      "Neural voice print synthesis matching original phonetic timbres",
      "Automatic lip-synchronization using video-warp algorithms",
      "Accurate localized translations into 12+ international tongues",
      "Custom broadcast quality audio levels matching local studio output",
      "Rapid localization render system for fast dispatch",
    ],
    ideal: "Global agencies, tutorial academies, and financial instructors serving multi-regions.",
    caseStudyName: "Bilingual Asset Distribution Center",
    caseStudyHref: "/projects",
  },
  {
    id: "youtube-management",
    name: "Authority YouTube Management",
    icon: BarChart,
    desc: "Systematic organic dominance. We turn the channel from a hobby into a predictable client-acquisition flywheel using custom retention metrics, packaging design, and thumbnail psychology.",
    included: [
      "Analytical split testing for click-through rate optimizations",
      "Retention script editing backed by statistical pacing metrics",
      "Custom vector thumbnail design featuring gold aesthetics",
      "Localized SEO optimizations and metadata tagging schemas",
      "Direct conversion funnel setups linking viewers to B2B channels",
    ],
    ideal: "B2B founders, research authorities, financial advisors, and startup leaders.",
    caseStudyName: "Vipul Kaushik Channel growth mechanics",
    caseStudyHref: "/projects",
  },
  {
    id: "additional-solutions",
    name: "Digital Strategy & Legacy Modernization",
    icon: Grid,
    desc: "Bespoke consultancy services. We audit lagging monolithic servers and refactor insecure codebases into fast modern Jamstack API clouds, preventing collapse.",
    included: [
      "Monolithic application separation audits",
      "Direct API integrations bypassing billing loops and scaling limits",
      "Comprehensive WCAG 2.1 AA legal accessibility audits",
      "AI conversion pipeline consulting for service companies",
      "Bespoke security and hosting audits mapping to Cloud Run / AWS",
    ],
    ideal: "Established enterprises with slowing legacy platforms needing clean digital modernization.",
    caseStudyName: "Confidential Fortune 500 Modernization",
    caseStudyHref: "/projects",
  },
];

export default function ServicesPage() {
  // Reference list to handle smooth scroll offsets on coordinate clicks
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleScrollToService = (id: string) => {
    const element = serviceRefs.current[id];
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div id="services-page-root" className="pt-32 pb-24">
      {/* ================= HERO INTRO ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-20">
        <div className="text-luxury-gold font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-luxury-gold" />
          SYSTEM PROTOCOLS // SYSTEM CAPABILITIES
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-mono tracking-tight text-white mb-6 uppercase leading-none">
          ENGINEERED CAPABILITIES DEPLOYMENT
        </h1>
        <div className="mb-8 inline-block bg-luxury-gold/5 border border-luxury-gold/20 px-4 py-2.5 rounded text-luxury-gold font-mono text-xs tracking-widest uppercase relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 via-transparent to-transparent animate-[pulse_3s_infinite]" />
          &quot;We are not an expense, we are an investment.&quot;
        </div>
        <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          We construct digital systems designed to execute flawlessly. No fluff. Below is the complete blueprints specification index of the services CEOHive deploys for elite global enterprises.
        </p>
      </section>

      {/* ================= INTERACTIVE DUAL COLUMN ================= */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sticky Left Navigation Index */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="sticky top-28 bg-[#0a0a0d] border border-zinc-900 rounded p-6 flex flex-col gap-2 shadow-2xl">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-4 block pb-2 border-b border-zinc-900">
              SYSTEM CHANNELS SPEC INDEX
            </span>
            {SERVICES_SPECS.map((spec) => {
              const Icon = spec.icon;
              return (
                <button
                  key={spec.id}
                  onClick={() => handleScrollToService(spec.id)}
                  className="flex items-center gap-3 w-full text-left font-mono text-xs text-zinc-400 hover:text-white px-3 py-3 rounded hover:bg-zinc-950 transition-all cursor-pointer group"
                >
                  <Icon className="w-4 h-4 text-zinc-600 group-hover:text-luxury-gold transition-colors" />
                  <span className="uppercase tracking-wider group-hover:translate-x-1 transition-transform truncate">
                    {spec.name.replace("Architecture", "").replace("Development", "")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Vertical Scenes */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {SERVICES_SPECS.map((spec) => {
            const Icon = spec.icon;
            return (
              <div
                key={spec.id}
                ref={(el) => {
                  serviceRefs.current[spec.id] = el;
                }}
                className="bg-[#0b0b0e] border border-zinc-900/80 rounded p-8 sm:p-10 flex flex-col justify-between shadow-lg relative group overflow-hidden"
              >
                {/* Visual hover grid deco */}
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-luxury-gold/[0.02] to-transparent h-20 pointer-events-none" />

                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-900 pb-5 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 flex items-center justify-center border border-luxury-gold/20 bg-luxury-gold/5 rounded text-luxury-gold shrink-0">
                        <Icon className="w-4.5 h-4.5 animate-pulse" />
                      </div>
                      <h2 className="font-mono text-base sm:text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                        {spec.name}
                      </h2>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[10px] text-zinc-650 bg-zinc-950 px-2 py-1 rounded shrink-0">
                      SPEC // {spec.id.toUpperCase().slice(0, 9)}
                    </span>
                  </div>

                  {/* Core description */}
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed max-w-2xl mb-8">
                    {spec.desc}
                  </p>

                  {/* Bullet points mapping */}
                  <div className="mb-8">
                    <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-4">
                      WHAT IS DEPLOYED
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {spec.included.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal Client tag */}
                  <div className="border-t border-zinc-900 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
                        IDEAL TARGET DEMAND
                      </span>
                      <span className="font-sans text-xs text-white block mt-1">
                        {spec.ideal}
                      </span>
                    </div>

                    <Link
                      href={spec.caseStudyHref}
                      className="text-[10px] font-mono text-luxury-gold hover:text-white flex items-center gap-1 transition-colors bg-zinc-950 border border-zinc-850 px-3 py-1.5 rounded"
                    >
                      <FileCode className="w-3 h-3 text-luxury-gold" />
                      View Related Build
                    </Link>
                  </div>
                </div>

                <div className="mt-8 border-t border-zinc-930 pt-6">
                  <Link
                    href={`/contact?service=${spec.id}`}
                    className="group inline-flex items-center gap-1.5 font-mono text-xs font-bold tracking-widest text-[#05060a] bg-luxury-gold hover:bg-[#f4efdf] px-6 py-3 rounded cursor-pointer transition-colors"
                  >
                    DEPLOY THIS SERVICE
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
