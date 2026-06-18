"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { site } from "@/lib/site";
import DownloadDropdown from "./DownloadDropdown";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Respect users who prefer reduced motion — skip the animation entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();
      }
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d4ff]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#7c3aed]/5 blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            {/* Psychological hook */}
            <p className="text-[#8892a4] text-lg font-medium mb-3 italic">
              Do you need IT to be a pillar you can depend on?
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-4">
              <span className="text-white">The</span>
              <br />
              <span className="gradient-text">Solutionist.</span>
            </h1>

            <p className="text-xl text-white font-semibold mb-1">Jhean Lamprecht</p>
            <p className="text-[#8892a4] mb-4 font-medium">
              Senior IT Manager & Digital Transformation Leader
            </p>
            <p className="text-[#e8eaf0] text-lg mb-6 leading-relaxed max-w-lg">
              <span className="text-[#00d4ff] font-semibold">14+ years</span>{" "}
              of turning impossible problems into elegant solutions. I don&apos;t
              fear change — I architect it.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-semibold mb-6 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              Available for new opportunities
            </div>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Oracle DB", "Microservices", "DevOps", "Agile Leadership", "Cloud"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-[#1a1f2e] border border-[#2a2f42] text-[#8892a4] text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <DownloadDropdown variant="solid" />
              <a
                href="#experience"
                className="px-6 py-3 rounded-full border border-[#2a2f42] text-[#e8eaf0] font-semibold text-sm hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all"
              >
                See My Work
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="px-4 py-3 rounded-full border border-[#2a2f42] text-[#e8eaf0] font-semibold text-sm hover:border-[#00d4ff]/50 hover:text-[#00d4ff] transition-all inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] p-[2px] scale-110 opacity-20 blur-sm" />
              <div className="absolute -inset-4 rounded-full border border-[#00d4ff]/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-[#7c3aed]/10 animate-[spin_30s_linear_infinite_reverse]" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[#00d4ff]/40">
                <Image
                  src="/profile.jpg"
                  alt="Jhean Lamprecht"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Stats chips */}
              <div className="absolute -bottom-4 -left-4 bg-[#12151e] border border-[#2a2f42] rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-2xl font-bold text-[#00d4ff]">14+</div>
                <div className="text-xs text-[#8892a4]">Years Experience</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#12151e] border border-[#2a2f42] rounded-2xl px-4 py-2 shadow-xl">
                <div className="text-2xl font-bold text-[#7c3aed]">99.9%</div>
                <div className="text-xs text-[#8892a4]">Uptime Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8892a4] text-xs">
          <span>Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#8892a4] to-transparent" />
        </div>
      </div>
    </section>
  );
}
