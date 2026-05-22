"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create background stars
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      alphaDelta: number;
    }> = [];

    const particleCount = 75;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,
        alpha: Math.random() * 0.5 + 0.2,
        alphaDelta: (Math.random() - 0.5) * 0.005,
      });
    }

    // Grid lines count
    const horizGrid = 15;
    const vertGrid = 25;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Space Base
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, width, height);

      // 1. Render ultra subtle dark grid overlay
      ctx.strokeStyle = "rgba(255, 215, 0, 0.015)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 1; i < vertGrid; i++) {
        const x = (width / vertGrid) * i;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 1; i < horizGrid; i++) {
        const y = (height / horizGrid) * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Render drifting particles/stars
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap lines
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.alphaDelta;
        if (p.alpha <= 0.15 || p.alpha >= 0.75) {
          p.alphaDelta = -p.alphaDelta;
        }

        ctx.fillStyle = `rgba(255, 215, 0, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw a subtle cyber ambient radial glow in the center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        width * 0.1,
        width / 2,
        height / 2,
        width * 0.75
      );
      gradient.addColorStop(0, "rgba(255, 215, 0, 0.012)");
      gradient.addColorStop(0.5, "rgba(0, 240, 255, 0.005)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="cosmic-canvas-background-grid"
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
