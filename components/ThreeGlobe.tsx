"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Coordinate {
  name: string;
  lat: number;
  lon: number;
  region: "IN" | "US" | "EU";
  details: string;
  focus: string;
}

const NODES: Coordinate[] = [
  {
    name: "India (HQ - Asia Pacific)",
    lat: 20.5937,
    lon: 78.9629,
    region: "IN",
    details: "Engineering Command, AI Agentic Workflows & SEBI Compliance Systems",
    focus: "Next-gen enterprise software, full-scale system architecture, high-ticket Web & AI integrations.",
  },
  {
    name: "USA (North America)",
    lat: 37.0902,
    lon: -95.7129,
    region: "US",
    details: "Market Expansion, B2B High-Ticket Solutions & Venture Architecture",
    focus: "Hyper-growth scaling, SaaS architectural structures, enterprise product strategy.",
  },
  {
    name: "Europe (UK & Continental)",
    lat: 54.5260,
    lon: 15.2551,
    region: "EU",
    details: "VFX Domination, Voice Localization & Accessible FinTech Systems",
    focus: "WCAG 2.1 AA certified frontends, advanced media cloning and multilingual distribution systems.",
  },
];

interface ThreeGlobeProps {
  activeRegion?: "IN" | "US" | "EU" | null;
  onRegionSelect?: (region: "IN" | "US" | "EU") => void;
  interactive?: boolean;
}

export default function ThreeGlobe({
  activeRegion = null,
  onRegionSelect,
  interactive = true,
}: ThreeGlobeProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const beaconMeshesRef = useRef<{ [key: string]: THREE.Mesh[] }>({});
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Synchronize external prop activeRegion with local rotations
  useEffect(() => {
    if (!globeGroupRef.current) return;
    const targetGroup = globeGroupRef.current;

    if (activeRegion) {
      // Find latitude/longitude of targeting region and face the camera
      const node = NODES.find((n) => n.region === activeRegion);
      if (node) {
        // Convert lat lon to target rotation angles
        const phi = (90 - node.lat) * (Math.PI / 180);
        const theta = (node.lon + 180) * (Math.PI / 180) - Math.PI / 2;

        targetGroup.rotation.x = phi - Math.PI / 2;
        targetGroup.rotation.y = -theta;
      }
    }
  }, [activeRegion]);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;
    cameraRef.current = camera;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffd700, 1.5); // Gold light
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00f0ff, 1.2); // Cyan backlight
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // 5. Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // 6. Main Spheres
    const radius = 5;

    // Sphere 1: Base sphere (slightly visible charcoal core)
    const sphereGeo = new THREE.SphereGeometry(radius - 0.05, 64, 64);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x070707,
      transparent: true,
      opacity: 0.85,
    });
    const baseSphere = new THREE.Mesh(sphereGeo, sphereMat);
    globeGroup.add(baseSphere);

    // Sphere 2: Holographic Dot/Grid Shell
    // We compose elegant rings of latitudes and longitudes
    const gridGroup = new THREE.Group();
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.3,
    });

    // Create Latitude Lines
    for (let i = 1; i < 18; i++) {
      const latRad = (i * 10 - 90) * (Math.PI / 180);
      const r = radius * Math.cos(latRad);
      const y = radius * Math.sin(latRad);

      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 64; j++) {
        const theta = (j / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
      const ringMesh = new THREE.Line(ringGeo, lineMat);
      gridGroup.add(ringMesh);
    }

    // Create Longitude Lines
    for (let i = 0; i < 18; i++) {
      const lonRad = (i * 20) * (Math.PI / 180);
      const points: THREE.Vector3[] = [];
      for (let j = 0; j <= 64; j++) {
        const phi = (j / 64) * Math.PI * 2;
        points.push(new THREE.Vector3(
          radius * Math.cos(phi) * Math.cos(lonRad),
          radius * Math.sin(phi),
          radius * Math.cos(phi) * Math.sin(lonRad)
        ));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(points);
      const ringMesh = new THREE.Line(ringGeo, lineMat);
      gridGroup.add(ringMesh);
    }
    globeGroup.add(gridGroup);

    // Gold Continental Cloud (Sparse Matrix of Gold Particles)
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Let's procedurally cluster points near actual geographic hotspots
    const goldColor = new THREE.Color(0xffd700);
    const cyanColor = new THREE.Color(0x00f0ff);

    for (let i = 0; i < particleCount; i++) {
      // Pick random latitude & longitude skewing toward USA, Europe, India
      let lat = (Math.random() - 0.5) * 180;
      let lon = (Math.random() - 0.5) * 360;

      // Group bias (clustering points to look like landmass operational channels)
      const biasIdx = Math.random();
      if (biasIdx < 0.25) {
        // India cluster bias
        lat = 20 + (Math.random() - 0.5) * 20;
        lon = 78 + (Math.random() - 0.5) * 25;
      } else if (biasIdx < 0.5) {
        // America cluster bias
        lat = 38 + (Math.random() - 0.5) * 25;
        lon = -97 + (Math.random() - 0.5) * 40;
      } else if (biasIdx < 0.75) {
        // Europe cluster bias
        lat = 50 + (Math.random() - 0.5) * 15;
        lon = 15 + (Math.random() - 0.5) * 30;
      }

      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      // Add slight noise to radii
      const r = radius + (Math.random() - 0.5) * 0.15;
      const x = -(r * Math.sin(phi) * Math.sin(theta));
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.cos(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Mix particle colors between Gold (accent) and Cyan/White (secondary core)
      const mixRatio = Math.random();
      const finalColor = mixRatio < 0.7 ? goldColor : cyanColor;
      colors[i * 3] = finalColor.r;
      colors[i * 3 + 1] = finalColor.g;
      colors[i * 3 + 2] = finalColor.b;
    }

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Glowy Points Material
    const pointMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const continentParticles = new THREE.Points(particleGeometry, pointMat);
    globeGroup.add(continentParticles);

    // Beacons (Operational Nodes) Setup
    const beaconGroup = new THREE.Group();
    globeGroup.add(beaconGroup);

    const localBeacons: { [key: string]: THREE.Mesh[] } = {};

    NODES.forEach((node) => {
      const phi = (90 - node.lat) * (Math.PI / 180);
      const theta = (node.lon + 180) * (Math.PI / 180);

      const x = -(radius * Math.sin(phi) * Math.sin(theta));
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.cos(theta);

      // Main pin point
      const pinGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const pinMat = new THREE.MeshBasicMaterial({
        color: 0xffd700,
        transparent: true,
        opacity: 0.9,
      });
      const pin = new THREE.Mesh(pinGeo, pinMat);
      pin.position.set(x, y, z);
      beaconGroup.add(pin);

      // Ripple meshes
      const ripplerCount = 2;
      const riplers: THREE.Mesh[] = [];

      for (let rIdx = 0; rIdx < ripplerCount; rIdx++) {
        const ringGeo = new THREE.RingGeometry(0.08, 0.18, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xffd700,
          transparent: true,
          opacity: 0.7,
          side: THREE.DoubleSide,
          blending: THREE.AdditiveBlending,
        });
        const rippleMesh = new THREE.Mesh(ringGeo, ringMat);

        // Position at pin
        rippleMesh.position.set(x, y, z);
        // Align ring to sphere's surface normal
        const lookTarget = new THREE.Vector3(x, y, z).multiplyScalar(1.2);
        rippleMesh.lookAt(lookTarget);

        beaconGroup.add(rippleMesh);
        riplers.push(rippleMesh);
      }

      localBeacons[node.region] = riplers;
    });

    beaconMeshesRef.current = localBeacons;

    // Atmospheric Glow Core Shell
    const glowGeo = new THREE.SphereGeometry(radius * 1.15, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffd700,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
    });
    const atmosphericGlow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(atmosphericGlow);

    // Initial positioning to face India, then starting standard rotation
    globeGroup.rotation.y = 0.5;
    globeGroup.rotation.x = 0.2;

    // Mouse Movement and Wheel Parallax Sync
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.4;
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Scroll listener to update rotation/zoom
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (globeGroupRef.current && !activeRegion) {
        // Rotate globe on scroll
        globeGroupRef.current.rotation.y = scrollY * 0.0015 + 0.5;
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Raycasting for Interactivity
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleContainerClick = (event: MouseEvent) => {
      if (!onRegionSelect) return;
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      // Check which node pin coordinates are close
      let foundRegion: "IN" | "US" | "EU" | null = null;
      let minDistance = Infinity;

      NODES.forEach((node) => {
        // Convert node position back to world position
        const phi = (90 - node.lat) * (Math.PI / 180);
        const theta = (node.lon + 180) * (Math.PI / 180);

        const localPos = new THREE.Vector3(
          -(radius * Math.sin(phi) * Math.sin(theta)),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.cos(theta)
        );

        // Apply globeGroup rotations
        localPos.applyEuler(globeGroup.rotation);

        // Project map positions to screen space
        const projected = localPos.clone().project(camera);
        const distance = Math.hypot(projected.x - mouse.x, projected.y - mouse.y);

        if (distance < 0.15 && distance < minDistance) {
          minDistance = distance;
          foundRegion = node.region;
        }
      });

      if (foundRegion) {
        onRegionSelect(foundRegion);
      }
    };

    const handleContainerMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      let foundNodeName: string | null = null;
      let minDistance = Infinity;

      NODES.forEach((node) => {
        const phi = (90 - node.lat) * (Math.PI / 180);
        const theta = (node.lon + 180) * (Math.PI / 180);

        const localPos = new THREE.Vector3(
          -(radius * Math.sin(phi) * Math.sin(theta)),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.cos(theta)
        );
        localPos.applyEuler(globeGroup.rotation);

        const projected = localPos.clone().project(camera);
        const distance = Math.hypot(projected.x - mouse.x, projected.y - mouse.y);

        if (distance < 0.15 && distance < minDistance) {
          minDistance = distance;
          foundNodeName = node.name;
        }
      });

      setHoveredNode(foundNodeName);
    };

    if (interactive && onRegionSelect) {
      container.addEventListener("click", handleContainerClick);
      container.addEventListener("mousemove", handleContainerMouseMove);
    }

    // 7. Render Loop
    let clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Slow ambient spin when no active region overrides it
      if (!activeRegion && globeGroup) {
        globeGroup.rotation.y += delta * 0.05;
      }

      // Parallax lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      if (camera) {
        camera.position.x = currentMouseX * 5;
        camera.position.y = currentMouseY * 5;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
      }

      // Animate pulsing ripples for India, USA, and Europe
      Object.keys(beaconMeshesRef.current).forEach((regCode) => {
        const meshes = beaconMeshesRef.current[regCode];
        const multiplier = regCode === activeRegion ? 1.5 : 1.0;

        meshes.forEach((mesh, index) => {
          // Staggered pulsation speed
          const scaleScale = 1.0 + ((elapsed * 1.5 + index * 0.6) % 1.2) * 1.8 * multiplier;
          mesh.scale.set(scaleScale, scaleScale, scaleScale);

          const rawOpacity = 1.0 - ((elapsed * 1.5 + index * 0.6) % 1.2) / 1.2;
          const material = mesh.material as THREE.MeshBasicMaterial;
          material.opacity = rawOpacity * 0.8 * multiplier;

          // If the region code is currently selected, highlight with secondary Cyan pulse!
          if (regCode === activeRegion) {
            material.color.setHex(0x00f0ff);
          } else {
            material.color.setHex(0xffd700);
          }
        });
      });

      // Ambient continent particulate breathing
      if (continentParticles) {
        const material = continentParticles.material as THREE.PointsMaterial;
        material.size = 0.09 + Math.sin(elapsed * 2) * 0.015;
      }

      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    };

    animate();

    // Resize Handling via ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (rendererRef.current && cameraRef.current) {
          cameraRef.current.aspect = w / h;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(w, h);
        }
      }
    });
    resizeObserver.observe(container);

    // Cleanups
    return () => {
      cancelAnimationFrame(frameId);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
        if (onRegionSelect) {
          container.removeEventListener("click", handleContainerClick);
          container.removeEventListener("mousemove", handleContainerMouseMove);
        }
      }
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeRegion, interactive, onRegionSelect]);

  return (
    <div className="relative w-full h-full min-h-[450px]">
      <div
        ref={mountRef}
        className="w-full h-full cursor-pointer touch-none"
        id="three-globe-webgl-canvas"
      />
      {hoveredNode && (
        <div className="absolute top-4 left-4 z-20 bg-charcoal/90 backdrop-blur-md border border-amber-500/30 text-white px-3 py-1.5 text-xs font-mono rounded tracking-tight shadow-lg animate-pulse">
          ⚡ NODE DETECTED: {hoveredNode}
        </div>
      )}
      <div className="absolute bottom-4 right-4 z-10 flex flex-col items-end pointer-events-none font-mono text-[10px] text-zinc-500 gap-1 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
          <span>SYSTEM CHANNELS ACTIVE</span>
        </div>
        <div className="text-right text-zinc-600">IN, US, EU ORBITAL GRID V2.0</div>
      </div>
    </div>
  );
}
