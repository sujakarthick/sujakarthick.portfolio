import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, Sparkles, Menu, X } from 'lucide-react';

interface NavbarProps {
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-5xl">
      <nav
        className={`glass-panel rounded-full px-5 py-2.5 flex items-center justify-between transition-all duration-300 border ${
          scrolled
            ? 'bg-slate-950/90 border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'border-white/10 shadow-2xl'
        }`}
      >
        {/* Monogram / Brand */}
        <a href="#hero" className="flex items-center space-x-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center font-black text-slate-950 text-xs shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
            {PORTFOLIO_DATA.personal.monogram}
          </div>
          <span className="font-bold tracking-tight text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors hidden sm:inline">
            {PORTFOLIO_DATA.personal.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 text-xs font-mono uppercase tracking-widest text-gray-400">
          <a href="#hero" className="hover:text-cyan-400 transition-colors">
            Intro
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Orbit
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Artifacts
          </a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">
            Tenure
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Connect
          </a>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={onReplayIntro}
            title="Replay cinematic opening experience"
            className="p-2 rounded-full glass-panel hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-colors text-xs flex items-center"
          >
            <Sparkles className="w-3.5 h-3.5" />
          </button>

          <a
            href="/Suja_K_Resume.pdf"
            download="Suja_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white/10 hover:bg-cyan-500 hover:text-slate-950 text-white transition-all flex items-center space-x-1.5 border border-white/10"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Resume</span>
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 glass-panel rounded-3xl border border-cyan-500/20 bg-slate-950/95 animate-fade-in shadow-2xl">
          <div className="flex flex-col space-y-4 text-xs font-mono uppercase tracking-widest text-gray-300">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Intro
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              The Skill Orbit
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Featured Artifacts
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Experience & Education
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Contact & Inquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
