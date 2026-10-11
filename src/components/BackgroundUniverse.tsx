import React, { useEffect, useRef, useState } from 'react';

interface FloatingWordConfig {
  text: string;
  depth: number; // 1 to 3
  yPercent: number;
  speed: number;
  initialX: number;
  fontSize: string;
}

const WORDS_CONFIG: FloatingWordConfig[] = [
  { text: 'BUILD.', depth: 1, yPercent: 12, speed: 0.18, initialX: 5, fontSize: 'clamp(5rem, 13vw, 13rem)' },
  { text: 'LEARN.', depth: 2, yPercent: 38, speed: 0.28, initialX: 45, fontSize: 'clamp(4rem, 10vw, 10rem)' },
  { text: 'CREATE.', depth: 3, yPercent: 64, speed: 0.22, initialX: 18, fontSize: 'clamp(4.5rem, 11vw, 11rem)' },
  { text: 'INNOVATE.', depth: 1, yPercent: 86, speed: 0.15, initialX: 55, fontSize: 'clamp(5rem, 12vw, 12rem)' },
];

export const BackgroundUniverse: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState(() =>
    WORDS_CONFIG.map((w) => ({ x: w.initialX, glowing: false }))
  );

  // Periodic glowing highlights on one word
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * WORDS_CONFIG.length);
      setPositions((prev) =>
        prev.map((item, idx) => ({
          ...item,
          glowing: idx === randomIndex,
        }))
      );

      const turnOffTimeout = setTimeout(() => {
        setPositions((prev) =>
          prev.map((item) => ({ ...item, glowing: false }))
        );
      }, 3500);

      return () => clearTimeout(turnOffTimeout);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Smooth drift animation frame
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const animateDrift = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      setPositions((prev) =>
        prev.map((item, idx) => {
          const cfg = WORDS_CONFIG[idx];
          let nextX = item.x + cfg.speed * delta * 5;
          // Wrap around horizontally from -25% to 115%
          if (nextX > 110) {
            nextX = -30;
          }
          return { ...item, x: nextX };
        })
      );

      animId = requestAnimationFrame(animateDrift);
    };

    animId = requestAnimationFrame(animateDrift);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Subtle mouse parallax handler
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x: normX, y: normY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle floating starfield dust canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Subtle star nodes
    const starsCount = 45;
    const stars = Array.from({ length: starsCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2 + 0.4,
      alpha: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: (Math.random() - 0.5) * 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.fillStyle = `rgba(129, 140, 248, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep Space Radial Atmosphere */}
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 right-10 w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-[160px]" />
      <div className="absolute top-2/3 left-10 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[150px]" />

      {/* Subtle Digital Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle Stardust Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Drifting Floating Typography Layer */}
      {WORDS_CONFIG.map((cfg, idx) => {
        const state = positions[idx];
        const parallaxX = mousePos.x * (cfg.depth * 18);
        const parallaxY = mousePos.y * (cfg.depth * 12);

        return (
          <div
            key={cfg.text}
            className={`bg-drift-word ${state.glowing ? 'glowing' : ''}`}
            style={{
              top: `${cfg.yPercent}%`,
              left: `${state.x}%`,
              fontSize: cfg.fontSize,
              transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
              zIndex: cfg.depth,
              opacity: state.glowing ? 0.08 : cfg.depth === 1 ? 0.022 : cfg.depth === 2 ? 0.032 : 0.042,
              filter: cfg.depth === 1 ? 'blur(1.5px)' : 'none',
              transition: 'transform 0.2s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.8s ease',
            }}
          >
            {cfg.text}
          </div>
        );
      })}
    </div>
  );
};
