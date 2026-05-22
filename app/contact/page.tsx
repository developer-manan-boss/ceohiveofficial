"use client";

import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, AnimatePresence } from "motion/react";
import {
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  ArrowUpRight,
  ShieldAlert,
  Cpu,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const mount3DRef = useRef<HTMLDivElement>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    region: "",
    budget: "",
    brief: "",
    howFound: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submissionState, setSubmissionState] = useState<"idle" | "sending" | "success">("idle");
  const [secureUplinkCode, setSecureUplinkCode] = useState("");

  const handleCheckboxChange = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) errors.name = "Candidate name required.";
    if (!formData.company.trim()) errors.company = "Company identity code required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid corporate email coordination path required.";
    }
    if (!formData.region) errors.region = "Select target operational region node.";
    if (selectedServices.length === 0) {
      errors.services = "Select at least one strategic service spec.";
    }
    if (!formData.brief.trim() || formData.brief.length < 50) {
      errors.brief = `Context brief details must contain at least 50 chars. (Currently: ${formData.brief.length})`;
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setSubmissionState("sending");

    // Simulate elite network transmission uplink (1.5s delay)
    setTimeout(() => {
      // Generate a stylized checksum code
      const hash = Math.floor(Math.random() * 899999 + 100000);
      setSecureUplinkCode(`CH-UL-${formData.region.toUpperCase()}-${hash}`);
      setSubmissionState("success");
    }, 1600);
  };

  // 3D wireframe render inside left panel
  useEffect(() => {
    if (!mount3DRef.current) return;

    const container = mount3DRef.current;
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Floating double wireframe icosahedron (Sacred alignment vibe)
    const innerGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    scene.add(innerMesh);

    const outerGeo = new THREE.IcosahedronGeometry(1.8, 1);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    scene.add(outerMesh);

    // Mouse drift
    let mouseX = 0,
      mouseY = 0;
    const handleMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };
    window.addEventListener("mousemove", handleMouse);

    // Render anim
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      reqId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Slow spin
      innerMesh.rotation.y = elapsed * 0.15 + mouseX * 0.5;
      innerMesh.rotation.x = elapsed * 0.1 + mouseY * 0.5;

      outerMesh.rotation.y = -elapsed * 0.08 - mouseX * 0.3;
      outerMesh.rotation.z = elapsed * 0.12 + mouseY * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const obs = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    obs.observe(container);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("mousemove", handleMouse);
      obs.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div id="contact-page-root" className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        {/* ================= LEFT SIDE: COORDINATES INFO ================= */}
        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
          <div className="text-amber-500 font-mono text-xs tracking-widest uppercase mb-4 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-amber-500" />
            COMMUNICATION DIRECTIVES // CENTRAL UPLINK
          </div>
          <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white mb-6 uppercase leading-[0.95]">
            INITIATE COORDINATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
              CONTACT NOW.
            </span>
          </h1>
          <p className="font-sans text-sm text-zinc-450 leading-relaxed mb-8 max-w-sm">
            We respond to strategic inquiries within 24 hours. Tactical corporate questions deserve surgical digital answers. Connect with our command centers.
          </p>

          <div className="flex flex-col gap-5 w-full bg-[#0a0a0df3] border border-zinc-900 rounded p-6 sm:p-8 mb-8">
            <span className="font-mono text-[9px] text-[#FFD700] uppercase tracking-widest border-b border-zinc-900 pb-2 mb-2 block">
              PREFERRED CONNECTION CORE
            </span>

            {/* LinkedIn preference */}
            <a
              href="https://www.linkedin.com/in/mananbansalboss/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 group"
            >
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-colors mt-0.5 shrink-0">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                  Most Preferred Connection
                </span>
                <span className="font-sans text-sm text-zinc-200 group-hover:text-amber-400 transition-colors flex items-center font-bold">
                  Connect on LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
            </a>

            {/* Emails */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mt-0.5 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  General Command Inquiries
                </span>
                <a
                  href="mailto:ceohive.enquiry@gmail.com"
                  className="font-sans text-xs text-zinc-300 hover:text-amber-400 font-bold transition-colors mt-0.5"
                >
                  ceohive.enquiry@gmail.com
                </a>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mt-3">
                  Direct Founder Mail
                </span>
                <a
                  href="mailto:mananbansal.founder@gmail.com"
                  className="font-sans text-xs text-zinc-300 hover:text-amber-400 font-bold transition-colors mt-0.5"
                >
                  mananbansal.founder@gmail.com
                </a>
              </div>
            </div>

            {/* Operations */}
            <div className="flex items-start gap-3 pt-2">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mt-0.5 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                  Active Regional Hubs
                </span>
                <span className="font-sans text-xs text-zinc-300 leading-relaxed block font-bold">
                  India (HQ), USA, Europe
                </span>
                <span className="font-mono text-[9px] text-zinc-650 mt-1 block">
                  Synchronized GMT, EST, & IST Channels
                </span>
              </div>
            </div>
          </div>

          {/* Embedded 3D Wireframe geometric block */}
          <div className="w-full h-[220px] bg-zinc-900/10 border border-dashed border-zinc-900 rounded flex items-center justify-center relative overflow-hidden">
            <div ref={mount3DRef} className="absolute inset-0 w-full h-full z-10" />
            <span className="absolute bottom-3 left-3 text-[9px] text-zinc-600 font-mono tracking-widest z-0 select-none">
              SECURE GEOMETRIC WIREFRAME INTERACTION
            </span>
          </div>
        </div>

        {/* ================= RIGHT SIDE: FORM CONSOLE ================= */}
        <div className="lg:col-span-7 w-full bg-[#0a0a0df6] border border-zinc-900 rounded p-6 sm:p-10 shadow-2xl relative">
          <div className="absolute top-4 right-4 flex items-center gap-1.5 text-zinc-600 font-mono text-[9px]">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500/60 animate-pulse"></span>
            TRANS CONSOLE SECURE
          </div>

          <AnimatePresence mode="wait">
            {submissionState === "idle" && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="font-mono text-zinc-500 text-[10px] uppercase tracking-widest border-b border-zinc-900 pb-2 mb-2">
                  TRANSMIT DIRECT CONSOLE QUERY
                </div>

                {/* Name & Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      Sender Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alexis Carter"
                      className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 placeholder-zinc-700 outline-none transition-colors font-sans"
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-400 font-mono">{formErrors.name}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      Company / Venture Identity*
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Alpha Corp"
                      className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 placeholder-zinc-700 outline-none transition-colors font-sans"
                    />
                    {formErrors.company && (
                      <span className="text-[10px] text-red-400 font-mono">{formErrors.company}</span>
                    )}
                  </div>
                </div>

                {/* Email & Region */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      Coordinated Corporate Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. alexis@apexalpha.io"
                      className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 placeholder-zinc-700 outline-none transition-colors font-sans"
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-400 font-mono">{formErrors.email}</span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      Operational Region Priority*
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 outline-none transition-colors font-mono cursor-pointer"
                    >
                      <option value="">-- CHOOSE REGION NODE --</option>
                      <option value="in">INDIA NODE (HQ)</option>
                      <option value="us">USA NODE</option>
                      <option value="eu">EUROPE NODE</option>
                      <option value="other">OTHER INTERNATIONAL LANES</option>
                    </select>
                    {formErrors.region && (
                      <span className="text-[10px] text-red-400 font-mono">{formErrors.region}</span>
                    )}
                  </div>
                </div>

                {/* Service Interest Checklist (Multi-select) */}
                <div className="flex flex-col gap-2.5">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    SPECIFIED SERVICES INTERESTS* (Select multiple)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-zinc-950/60 p-4 border border-zinc-900 rounded">
                    {[
                      { id: "web", label: "Web Architecture Systems" },
                      { id: "ai", label: "Agentic AI Autonomy Loops" },
                      { id: "app", label: "High-Ticket App Dev" },
                      { id: "vfx", label: "Advanced Commercial VFX" },
                      { id: "voice", label: "Voice Synthesis Localization" },
                      { id: "youtube", label: "Authority YouTube Growth" },
                      { id: "strategy", label: "Legacy Modernization Console" },
                    ].map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-2.5 text-xs text-zinc-350 cursor-pointer select-none font-sans"
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(item.id)}
                          onChange={() => handleCheckboxChange(item.id)}
                          className="accent-amber-400 w-3.5 h-3.5 cursor-pointer rounded bg-zinc-900"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                  {formErrors.services && (
                    <span className="text-[10px] text-red-400 font-mono">{formErrors.services}</span>
                  )}
                </div>

                {/* Budget Range & Find Check */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      Budget Parameters
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 outline-none transition-colors font-mono cursor-pointer"
                    >
                      <option value="">-- CHOOSE INVESTMENT --</option>
                      <option value="under5k">&lt;$5,000 USD</option>
                      <option value="mid5to15k">$5,000 - $15,000 USD</option>
                      <option value="gold15to50k">$15,000 - $50,000 USD</option>
                      <option value="enterprise50k">$50,000+ USD (EXECUTIVE)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      Source Referral Coordinate
                    </label>
                    <select
                      name="howFound"
                      value={formData.howFound}
                      onChange={handleInputChange}
                      className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 outline-none transition-colors font-mono cursor-pointer"
                    >
                      <option value="">-- CHOOSE SOURCE --</option>
                      <option value="linkedin">LinkedIn Authority profile</option>
                      <option value="gdev">Google Developer Network</option>
                      <option value="word">Word of Mouth / Colleague referral</option>
                      <option value="youtube">YouTube brand authority channels</option>
                      <option value="other">Other search portals</option>
                    </select>
                  </div>
                </div>

                {/* Project Brief Details */}
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    COMPREHENSIVE PROJECT BRIEF* (Minimum 50 characters)
                  </label>
                  <textarea
                    name="brief"
                    rows={5}
                    value={formData.brief}
                    onChange={handleInputChange}
                    placeholder="Briefly state your strategic product needs, deadline tolerances, and regulatory compliance benchmarks..."
                    className="bg-zinc-950 border border-zinc-850 hover:border-zinc-700 focus:border-amber-500 text-zinc-100 text-xs rounded px-4 py-3 placeholder-zinc-700 outline-none transition-colors font-sans resize-none"
                  />
                  <div className="flex justify-between items-center mt-0.5">
                    {formErrors.brief ? (
                      <span className="text-[10px] text-red-400 font-mono">{formErrors.brief}</span>
                    ) : (
                      <span className="text-[9px] text-zinc-600 font-mono tracking-tight">
                        Provide a clear outline to fast-track alignment.
                      </span>
                    )}
                    <span className="text-[9px] font-mono text-zinc-500">
                      Chars: {formData.brief.length} / 50 min
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  id="transmit-inquiry-button"
                  className="group flex items-center justify-center gap-1.5 font-mono text-xs font-bold tracking-widest text-[#050505] bg-amber-400 hover:bg-white py-4 rounded cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] select-none text-center mt-4"
                >
                  TRANSMIT DIGITAL INQUIRY➔
                </button>
              </form>
            )}

            {submissionState === "sending" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-24 text-center font-mono"
              >
                <Loader2 className="w-12 h-12 text-[#FFD700] animate-spin mb-6" />
                <span className="text-sm font-bold text-white tracking-widest block mb-2">
                  TRANSMITTING ENCRYPTED INQUIRY DATA CONTROLS...
                </span>
                <span className="text-xs text-zinc-500 max-w-sm leading-relaxed">
                  Establishing secure tunnel with CEOHive global servers (India-HQ, US, Europe)... Checking checksum codes.
                </span>
              </motion.div>
            )}

            {submissionState === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-start gap-4 p-4 font-mono text-xs text-zinc-300 leading-relaxed"
              >
                <div className="flex items-center gap-2.5 text-green-400 font-bold border-b border-zinc-900 pb-3 mb-2 w-full text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  UPLINK COMPLETED // TRANSMISSION SECURELY ENGAGED
                </div>

                <div className="bg-zinc-950 p-4 border border-zinc-900 rounded w-full flex flex-col gap-2 text-[11px]">
                  <div>
                    <span className="text-zinc-600 uppercase mr-2 font-bold">CHECKSUM CODE:</span>
                    <span className="text-amber-400 font-bold">{secureUplinkCode}</span>
                  </div>
                  <div>
                    <span className="text-zinc-600 uppercase mr-2 font-bold">OPERATOR ID:</span>
                    <span className="text-zinc-100">{formData.name}</span>
                  </div>
                  <div>
                    <span className="text-zinc-600 uppercase mr-2 font-bold">VENTURE ID:</span>
                    <span className="text-zinc-100">{formData.company}</span>
                  </div>
                  <div>
                    <span className="text-zinc-600 uppercase mr-2 font-bold">UPLINK REGION:</span>
                    <span className="text-zinc-100 uppercase">{formData.region} Node</span>
                  </div>
                  <div>
                    <span className="text-zinc-600 uppercase mr-2 font-bold">SPEC PILLARS:</span>
                    <span className="text-zinc-400 uppercase font-bold text-[9px]">
                      {selectedServices.join(", ")}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-zinc-400 mt-2">
                  A corporate representative coordinated by Managing Director **Manan Bansal** will evaluate your context brief details: &quot;{formData.brief.slice(0, 80)}...&quot; and establish communication within 24 hours.
                </p>

                <button
                  onClick={() => {
                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      region: "",
                      budget: "",
                      brief: "",
                      howFound: "",
                    });
                    setSelectedServices([]);
                    setFormErrors({});
                    setSubmissionState("idle");
                  }}
                  className="font-mono text-[#FFD700] hover:text-white mt-6 transition-colors border border-amber-500/30 px-4 py-2 bg-amber-500/5 rounded cursor-pointer"
                >
                  &lt; TRANST MIT ANOTHER QUERY
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
