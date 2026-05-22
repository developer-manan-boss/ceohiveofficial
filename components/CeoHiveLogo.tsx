"use client";

import React from "react";

interface CeoHiveLogoProps {
  className?: string;
  height?: number;
  width?: number;
  showText?: boolean;
}

export default function CeoHiveLogo({ className = "", height = 36, width, showText = true }: CeoHiveLogoProps) {
  // Calculated proportional width if showText is true vs false
  const logoWidth = width || (showText ? 150 : 36);

  return (
    <svg
      id="ceohive-core-logo"
      viewBox={showText ? "0 0 310 80" : "110 5 80 70"}
      width={logoWidth}
      height={height}
      className={`select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle drop shadow/glow filter */}
        <filter id="ceohive-isometric-shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="3" stdDeviation="1" floodColor="#000000" floodOpacity="0.8" />
        </filter>
        <filter id="gold-neon-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        {/* Horizontal pattern lines for the golden logo segments */}
        <pattern id="gold-hatch-pattern" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(0)">
          <line x1="0" y1="2.5" x2="5" y2="2.5" stroke="#dfb455" strokeWidth="1" />
        </pattern>
      </defs>

      {showText && (
        <g filter="url(#ceohive-isometric-shadow)">
          {/* "CE" block characters */}
          <text
            x="20"
            y="56"
            fill="#FFFFFF"
            stroke="#0b0f19"
            strokeWidth="1.5"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="52"
            letterSpacing="-1"
          >
            CE
          </text>
          
          {/* Isometric white 3D backing shadow for 'CE' */}
          <text
            x="22"
            y="58"
            fill="#c5a880"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="52"
            letterSpacing="-1"
            opacity="0.3"
          >
            CE
          </text>
        </g>
      )}

      {/* Styled custom circular Segmented Target 'O' Logo inside middle coordinates */}
      <g transform={showText ? "translate(-28, 0)" : "translate(-30, 0)"} filter="url(#gold-neon-glow)">
        {/* Group circle dimensions: outer: r=28, inner: r=14 */}
        {/* Top-Right and Right Thick Arc segment */}
        <path
          d="M 150 14 A 26 26 0 0 1 176 40 L 162 40 A 12 12 0 0 0 150 28 Z"
          fill="#dfb455"
          stroke="#0b0f19"
          strokeWidth="1"
        />
        {/* Bottom Arc with space gaps */}
        <path
          d="M 174 44 A 26 26 0 0 1 140 66 L 140 52 A 12 12 0 0 0 160 44 Z"
          fill="#b89133"
          stroke="#0b0f19"
          strokeWidth="1"
        />

        {/* Bottom-left segmented Hatch segment with horizontal detail lines */}
        <path
          d="M 136 64 A 26 26 0 0 1 124 40 L 138 40 A 12 12 0 0 0 144 54 Z"
          fill="url(#gold-hatch-pattern)"
          stroke="#dfb455"
          strokeWidth="1"
        />
        <path
          d="M 136 64 A 26 26 0 0 1 124 40 L 138 40 A 12 12 0 0 0 144 54 Z"
          fill="none"
          stroke="#0b0f19"
          strokeWidth="1"
        />

        {/* Top-Left segment Arc */}
        <path
          d="M 126 36 A 26 26 0 0 1 146 14 L 148 28 A 12 12 0 0 0 138 36 Z"
          fill="#eedaa2"
          stroke="#0b0f19"
          strokeWidth="1"
        />

        {/* Central Core Circle Dot outline */}
        <circle cx="150" cy="40" r="14" fill="#080a11" stroke="#dfb455" strokeWidth="2" />
        <circle cx="150" cy="40" r="6" fill="#dfb455" />
      </g>

      {showText && (
        <g filter="url(#ceohive-isometric-shadow)">
          {/* "HIVE" block characters */}
          <text
            x="175"
            y="56"
            fill="#FFFFFF"
            stroke="#0b0f19"
            strokeWidth="1.5"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="52"
            letterSpacing="0"
          >
            HIVE
          </text>
          
          {/* Isometric white 3D backing shadow for 'HIVE' */}
          <text
            x="177"
            y="58"
            fill="#c5a880"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontSize="52"
            letterSpacing="0"
            opacity="0.3"
          >
            HIVE
          </text>
        </g>
      )}
    </svg>
  );
}
