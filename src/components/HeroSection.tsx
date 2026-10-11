import React, { useEffect, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Typewriter } from './Typewriter';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, Download, Terminal, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const nameLetters = PORTFOLIO_DATA.personal.name.split('');

  // Subtle interactive 3D typography tilt on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const tiltX = (e.clientY - centerY) / centerY * -6; // max 6deg
      const tiltY = (e.clientX - centerX) / centerX * 6;  // max 6deg
      setTilt({ x: tiltX, y: tiltY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden z-10"
      style={{ perspective: '1200px' }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 my-auto">
        
        {/* Left Column: Typography & CTAs */}
        <div
          className="flex-1 text-center lg:text-left transition-transform duration-300 ease-out will-change-transform"
          style={{
            transform: `rotateX(${tilt.x * 0.4}deg) rotateY(${tilt.y * 0.4}deg)`,
          }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/20 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_8px_#22d3ee]" />
            </span>
            <span className="text-xs font-mono font-medium tracking-wider text-cyan-300 uppercase">
              {PORTFOLIO_DATA.personal.availability}
            </span>
          </div>

          {/* Subheading Prompt */}
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Creative Software & AI Developer</span>
          </div>

          {/* Animated 3D Hero Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-4">
            <div className="flex flex-wrap justify-center lg:justify-start select-none">
              {nameLetters.map((char, index) => {
                if (char === ' ') {
                  return <span key={index} className="w-4 md:w-6 inline-block" />;
                }
                return (
                  <span
                    key={index}
                    className="letter-3d-reveal hero-gradient-text"
                    style={{
                      animationDelay: `${index * 45}ms`,
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </div>
          </h1>

          {/* Typewriter Line Cycling Roles */}
          <div className="flex items-center justify-center lg:justify-start text-lg sm:text-2xl md:text-3xl font-medium text-gray-300 mb-6">
            <span className="text-gray-500 mr-2 font-mono text-base sm:text-xl">&gt;</span>
            <Typewriter roles={PORTFOLIO_DATA.rotatingRoles} />
          </div>

          {/* Short Bio Statement */}
          <p className="max-w-xl mx-auto lg:mx-0 text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            Computer Science undergraduate at{' '}
            <span className="text-white font-medium border-b border-cyan-500/40 pb-0.5">
              Panimalar Engineering College
            </span>{' '}
            (CGPA 8.54). Finalist at{' '}
            <span className="text-cyan-400 font-medium">XYNTRA’25 36h Hackathon</span>. Building scalable architectures with Python, Java, and Machine Learning.
          </p>

          {/* CTA Buttons with Magnetic Hover */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <MagneticButton
              as="a"
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all group"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href="/Suja_K_Resume.pdf"
              download="Suja_K_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-bold text-sm glass-panel border border-white/10 hover:border-cyan-500/40 text-white hover:text-cyan-400 transition-all group"
            >
              <Download className="mr-2 w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume (PDF)</span>
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#contact"
              className="px-5 py-3.5 rounded-xl font-medium text-sm text-gray-400 hover:text-white transition-colors"
            >
              Let’s Connect →
            </MagneticButton>
          </div>
        </div>

        {/* Right Column: Real Portrait with Cinematic Light Sweep */}
        <div className="relative flex justify-center items-center">
          {/* Ambient Glowing Halo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 via-indigo-500/25 to-violet-500/20 rounded-[40px] blur-2xl opacity-70 animate-pulse-glow" />

          {/* Geometric Accent Rings */}
          <div className="absolute -inset-6 border border-cyan-500/10 rounded-[48px] pointer-events-none animate-spin-slow" />

          {/* Portrait Container */}
          <div className="relative light-sweep-container glass-panel rounded-[36px] p-2.5 shadow-2xl border border-white/15 backdrop-blur-xl group overflow-hidden">
            <div className="relative w-64 h-80 sm:w-72 sm:h-92 md:w-80 md:h-[420px] rounded-[30px] overflow-hidden bg-slate-900">
              <img
                src="/profile.jpg"
                alt="Suja Karthick"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

              {/* Bottom Card Identity Info */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-panel border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">
                      Suja Karthick
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-400">
                      B.Tech CSBS • Panimalar '27
                    </p>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[10px] font-mono text-cyan-300 font-semibold">
                    CGPA 8.54
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#skills" className="flex flex-col items-center group">
          <span className="text-[10px] font-mono tracking-widest text-gray-400 uppercase group-hover:text-cyan-400 transition-colors">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-4 h-4 text-cyan-400 animate-bounce mt-1" />
        </a>
      </div>
    </section>
  );
};
