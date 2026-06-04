"use client";

import { useEffect, useRef } from "react";

/**
 * Density-driven particle field with a flowing central river.
 *
 * The pattern is sculpted by density(nx, ny) -> 0..1 (normalised coords).
 * Three layered regions, hand-tuned to match the reference:
 *   1. river  - a sine band snaking across the middle, dense at its core
 *   2. block  - dense vertical mass on the right edge, fading left
 *   3. ambient- low baseline scatter everywhere, thinning into corners
 *
 * Animation: dots tagged "river" stream rightward along the band's local
 * slope and respawn at the left when they exit. Everything else shimmers
 * a few px around its home position so the form stays crisp.
 */
export default function ParticleWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // ---- river geometry (in normalised y, as a function of nx) ----
    // crest left-of-centre, trough right-of-centre, like the reference
    const riverY = (nx: number) =>
      0.5 + Math.sin(nx * Math.PI * 1.15 - 0.4) * 0.16;
    // half-thickness of the band, slightly wider in the middle
    const riverHalf = (nx: number) => 0.07 + Math.sin(nx * Math.PI) * 0.05;

    // ---- the density field: probability a dot exists at (nx, ny) ----
    const density = (nx: number, ny: number) => {
      // 1. river band: gaussian across the band centre
      const dy = ny - riverY(nx);
      const half = riverHalf(nx);
      const band = Math.exp(-Math.pow(dy / half, 2));
      // river is densest in its core third, tapers at both ends
      const along = 0.55 + 0.45 * Math.sin(nx * Math.PI);
      const river = band * along;

      // 2. right-edge vertical block: rises sharply past nx ~ 0.72
      const block =
        Math.max(0, (nx - 0.72) / 0.28) ** 1.3 *
        // a touch denser in the vertical middle, fading top/bottom
        (0.6 + 0.4 * Math.exp(-Math.pow((ny - 0.5) / 0.55, 2)));

      // 3. ambient scatter: low everywhere, thinning into far corners
      const corner =
        Math.exp(-Math.pow((nx - 0.35) / 0.6, 2)) *
        Math.exp(-Math.pow((ny - 0.5) / 0.7, 2));
      const ambient = 0.07 * corner;

      return Math.min(1, river * 0.95 + block * 0.9 + ambient);
    };

    type P = {
      x: number;
      y: number;
      hx: number; // home (normalised)
      hy: number;
      sz: number;
      ph: number; // shimmer phase
      river: boolean;
    };
    let particles: P[] = [];

    // rejection-sample a point weighted by the density field
    const sample = (): { nx: number; ny: number; d: number } => {
      for (let k = 0; k < 24; k++) {
        const nx = Math.random();
        const ny = Math.random();
        const d = density(nx, ny);
        if (Math.random() < d) return { nx, ny, d };
      }
      const nx = Math.random();
      const ny = Math.random();
      return { nx, ny, d: density(nx, ny) };
    };

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // count scales with area
      const count = Math.floor((w * h) / 90);
      particles = [];
      for (let i = 0; i < count; i++) {
        const { nx, ny } = sample();
        // a dot belongs to the river if it sits within ~1.4x the band
        const inRiver =
          Math.abs(ny - riverY(nx)) < riverHalf(nx) * 1.4 && nx < 0.78;
        particles.push({
          x: nx * w,
          y: ny * h,
          hx: nx,
          hy: ny,
          sz: Math.random() * 1.1 + 0.35,
          ph: Math.random() * Math.PI * 2,
          river: inRiver,
        });
      }
    };

    const respawnRiver = (p: P) => {
      // re-enter from the left at a band-valid y
      const nx = Math.random() * 0.08;
      const ny = riverY(nx) + (Math.random() - 0.5) * riverHalf(nx) * 2.2;
      p.hx = nx;
      p.hy = ny;
      p.x = nx * w;
      p.y = ny * h;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#16161a";
      const time = t * 0.001;

      for (const p of particles) {
        if (p.river && !prefersReduced) {
          // stream rightward; speed eases through the dense core
          const speed = 0.0009 + 0.0007 * Math.sin(p.hx * Math.PI);
          p.hx += speed;
          // gentle vertical sway within the band
          const sway = Math.sin(time * 1.2 + p.ph) * 0.004;
          p.x = p.hx * w;
          p.y = (riverY(p.hx) + (p.hy - riverY(p.hx)) + sway) * h;
          if (p.hx > 0.82) respawnRiver(p);
        } else {
          // ambient + block: shimmer around home
          const amp = prefersReduced ? 0 : 2.2;
          p.x = p.hx * w + Math.sin(time * 0.9 + p.ph) * amp;
          p.y = p.hy * h + Math.cos(time * 0.7 + p.ph * 1.3) * amp;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.sz, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);
    const onResize = () => build();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="bg-teal w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block h-[clamp(260px,38vw,460px)] w-full"
      />
    </div>
  );
}