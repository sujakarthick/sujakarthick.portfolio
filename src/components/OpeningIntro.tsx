import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface OpeningIntroProps {
  onComplete: () => void;
}

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<'particles' | 'monogram' | 'fullname' | 'fadeout'>('particles');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user has already seen intro in this session
    const hasSeen = sessionStorage.getItem('suja_portfolio_intro_seen');
    if (hasSeen === 'true') {
      onComplete();
      return;
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      sessionStorage.setItem('suja_portfolio_intro_seen', 'true');
      onComplete();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Generate sample points for "S K"
    const offscreen = document.createElement('canvas');
    offscreen.width = 400;
    offscreen.height = 200;
    const offCtx = offscreen.getContext('2d');
    const targetPoints: { x: number; y: number }[] = [];

    if (offCtx) {
      offCtx.fillStyle = '#ffffff';
      offCtx.font = 'bold 120px "Plus Jakarta Sans", sans-serif';
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillText('SK', 200, 100);

      const imgData = offCtx.getImageData(0, 0, 400, 200).data;
      const step = 6;
      for (let y = 0; y < 200; y += step) {
        for (let x = 0; x < 400; x += step) {
          const index = (y * 400 + x) * 4;
          if (imgData[index + 3] > 128) {
            targetPoints.push({
              x: x - 200,
              y: y - 100,
            });
          }
        }
      }
    }

    const particles: Particle[] = [];
    const colors = ['#22d3ee', '#38bdf8', '#818cf8', '#a855f7', '#ffffff'];

    targetPoints.forEach((pt) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * 400 + 200;
      particles.push({
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist,
        originX: width / 2 + Math.cos(angle) * dist,
        originY: height / 2 + Math.sin(angle) * dist,
        targetX: width / 2 + pt.x,
        targetY: height / 2 + pt.y,
        vx: 0,
        vy: 0,
        size: Math.random() * 2.2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
      });
    });

    const startTime = performance.now();
    const totalIntroDuration = 1800; // Fast 1.8s cinematic intro

    const render = (time: number) => {
      const elapsed = time - startTime;
      const p = Math.min(elapsed / totalIntroDuration, 1);
      setProgress(p);

      ctx.clearRect(0, 0, width, height);

      // Phase transitions
      if (elapsed > 1400) {
        setPhase('fadeout');
      } else if (elapsed > 700) {
        setPhase('fullname');
      } else if (elapsed > 300) {
        setPhase('monogram');
      }

      // Draw and update particles
      particles.forEach((pt) => {
        // Lerp towards target position
        const t = Math.min(elapsed / 650, 1);
        const easeT = 1 - Math.pow(1 - t, 3); // easeOutCubic

        pt.x = pt.originX + (pt.targetX - pt.originX) * easeT;
        pt.y = pt.originY + (pt.targetY - pt.originY) * easeT;

        if (elapsed > 700) {
          // Disperse gently into background glow
          const dispersion = (elapsed - 700) * 0.15;
          pt.x += (Math.random() - 0.5) * dispersion * 0.1;
          pt.y += (Math.random() - 0.5) * dispersion * 0.1;
          pt.alpha = Math.max(0, 1 - (elapsed - 700) / 700);
        }

        ctx.fillStyle = pt.color;
        ctx.globalAlpha = pt.alpha;
        ctx.shadowBlur = 12;
        ctx.shadowColor = pt.color;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      if (elapsed < totalIntroDuration) {
        animationFrameId = requestAnimationFrame(render);
      } else {
        sessionStorage.setItem('suja_portfolio_intro_seen', 'true');
        onComplete();
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('suja_portfolio_intro_seen', 'true');
    onComplete();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] transition-opacity duration-700 ${
        phase === 'fadeout' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Cinematic Ambient Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute w-[350px] h-[350px] rounded-full bg-indigo-500/15 blur-[120px] pointer-events-none" />

      {/* Monogram / Full Name Reveal Overlay */}
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        {phase === 'fullname' && (
          <div className="animate-fade-in transition-all duration-500 transform scale-100">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-[10px] font-mono tracking-widest text-cyan-300 uppercase">
                INITIALIZING PORTFOLIO
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight hero-gradient-text">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-xs md:text-sm text-gray-400 font-mono tracking-wider mt-2">
              Systems of Intelligence • AI & Software Engineering
            </p>
          </div>
        )}
      </div>

      {/* Skip Pill Button for Recruiters */}
      <div className="absolute bottom-8 right-8 z-20">
        <button
          onClick={handleSkip}
          className="group text-xs font-mono tracking-widest uppercase px-4 py-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-gray-400 hover:text-white transition-all flex items-center space-x-2 backdrop-blur-md"
        >
          <span>Skip Intro</span>
          <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Subtle Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 transition-all duration-75"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
};
