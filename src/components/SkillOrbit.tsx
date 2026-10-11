import React, { useState, useEffect, useRef } from 'react';
import { PORTFOLIO_DATA, SkillItem } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';
import { Sparkles, Pause, Play, X, ExternalLink, Cpu } from 'lucide-react';

interface OrbitNode {
  skill: SkillItem;
  trackIndex: number; // 0, 1, 2
  baseAngle: number;
}

export const SkillOrbit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [orbitAngle, setOrbitAngle] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Group skills into 3 concentric orbital rings
  const skills = PORTFOLIO_DATA.skills;
  const nodes: OrbitNode[] = [
    // Ring 0 (Inner): Core Foundation
    { skill: skills.find((s) => s.id === 'python')!, trackIndex: 0, baseAngle: 0 },
    { skill: skills.find((s) => s.id === 'java')!, trackIndex: 0, baseAngle: (2 * Math.PI) / 3 },
    { skill: skills.find((s) => s.id === 'sql')!, trackIndex: 0, baseAngle: (4 * Math.PI) / 3 },

    // Ring 1 (Middle): AI & Architecture
    { skill: skills.find((s) => s.id === 'scikit-learn')!, trackIndex: 1, baseAngle: 0.2 },
    { skill: skills.find((s) => s.id === 'rest-apis')!, trackIndex: 1, baseAngle: 0.2 + (Math.PI / 2) },
    { skill: skills.find((s) => s.id === 'oracle-cloud')!, trackIndex: 1, baseAngle: 0.2 + Math.PI },
    { skill: skills.find((s) => s.id === 'javascript')!, trackIndex: 1, baseAngle: 0.2 + (3 * Math.PI) / 2 },

    // Ring 2 (Outer): Tools, Audio & Frameworks
    { skill: skills.find((s) => s.id === 'librosa')!, trackIndex: 2, baseAngle: 0.5 },
    { skill: skills.find((s) => s.id === 'gradio')!, trackIndex: 2, baseAngle: 0.5 + (2 * Math.PI) / 5 },
    { skill: skills.find((s) => s.id === 'git-github')!, trackIndex: 2, baseAngle: 0.5 + (4 * Math.PI) / 5 },
    { skill: skills.find((s) => s.id === 'postman')!, trackIndex: 2, baseAngle: 0.5 + (6 * Math.PI) / 5 },
    { skill: skills.find((s) => s.id === 'html-css')!, trackIndex: 2, baseAngle: 0.5 + (8 * Math.PI) / 5 },
  ].filter((n) => n.skill !== undefined);

  // Measure container for responsive radius calculations
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Smooth orbital motion loop
  useEffect(() => {
    if (isPaused || selectedSkill !== null) return;

    let animId: number;
    let lastTime = performance.now();

    const loop = (currentTime: number) => {
      const delta = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      // Rotate ~0.15 rad/sec
      setOrbitAngle((prev) => (prev + delta * 0.18) % (Math.PI * 2));
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, selectedSkill]);

  // Radii calculation based on screen size
  const isMobile = containerWidth < 640;
  const isTablet = containerWidth >= 640 && containerWidth < 1024;

  const baseScale = isMobile ? 0.48 : isTablet ? 0.72 : 1;
  const trackRadii = [
    { rx: 140 * baseScale, ry: 90 * baseScale, speedMul: 1.0 },
    { rx: 235 * baseScale, ry: 150 * baseScale, speedMul: -0.75 },
    { rx: 330 * baseScale, ry: 210 * baseScale, speedMul: 0.5 },
  ];

  const handleNodeClick = (skill: SkillItem) => {
    if (selectedSkill?.id === skill.id) {
      setSelectedSkill(null);
    } else {
      setSelectedSkill(skill);
    }
  };

  const categories = ['All', 'Languages', 'AI & ML', 'Web & APIs', 'Tools & Cloud'];

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 overflow-hidden z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Architecture</span>
          </div>

          <ScrollRevealText
            text="The Skill Orbit"
            className="justify-center text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white"
            highlightWords={['Orbit']}
          />

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            A real-time cosmic constellation of technologies from Suja’s verified resume. Hover or tap any celestial node to explore its architecture and implementation in her systems.
          </p>

          {/* Category Filter Tabs & Motion Control */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'glass-panel text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={() => setIsPaused((p) => !p)}
              className="p-1.5 px-3 rounded-full glass-panel border border-white/10 text-xs font-mono text-gray-400 hover:text-cyan-400 flex items-center space-x-1.5 transition-colors"
              title={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
            >
              {isPaused ? <Play className="w-3 h-3 text-cyan-400" /> : <Pause className="w-3 h-3 text-cyan-400" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          </div>
        </div>

        {/* The Orbit Arena */}
        <div
          ref={containerRef}
          className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] flex items-center justify-center select-none"
        >
          {/* Orbital Track Rings */}
          {trackRadii.map((track, i) => (
            <div
              key={i}
              className="orbit-track"
              style={{
                width: `${track.rx * 2}px`,
                height: `${track.ry * 2}px`,
                borderColor: i === 0 ? 'rgba(56, 189, 248, 0.25)' : i === 1 ? 'rgba(129, 140, 248, 0.2)' : 'rgba(168, 85, 247, 0.15)',
              }}
            />
          ))}

          {/* Central Glowing Sphere: "MY TECH WORLD" */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            {/* Core Glow Aura */}
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full orbit-core-glow pointer-events-none" />

            {/* Glowing 3D Sphere */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-[#0b112c] via-[#0f172a] to-[#1e1b4b] border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(6,182,212,0.35)] flex flex-col items-center justify-center p-3 text-center cursor-default transition-transform duration-500 hover:scale-105">
              <Cpu className="w-5 h-5 text-cyan-400 mb-1 animate-pulse" />
              <div className="text-[11px] sm:text-xs font-black tracking-wider text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                MY TECH WORLD
              </div>
              <div className="text-[9px] font-mono text-cyan-300 tracking-widest uppercase mt-0.5 opacity-80">
                Core Matrix
              </div>
              {/* Inner animated ring */}
              <div className="absolute inset-1 rounded-full border border-cyan-400/20 animate-spin-slow pointer-events-none" />
            </div>
          </div>

          {/* Orbiting Celestial Skill Labels */}
          {nodes.map(({ skill, trackIndex, baseAngle }) => {
            const track = trackRadii[trackIndex];
            const currentAngle = baseAngle + orbitAngle * track.speedMul;
            const x = Math.cos(currentAngle) * track.rx;
            const y = Math.sin(currentAngle) * track.ry;

            const isSelected = selectedSkill?.id === skill.id;
            const isDimmed = activeCategory !== 'All' && skill.category !== activeCategory;

            return (
              <div
                key={skill.id}
                onClick={() => handleNodeClick(skill)}
                onMouseEnter={() => setSelectedSkill(skill)}
                style={{
                  transform: `translate3d(${x}px, ${y}px, 0)`,
                  zIndex: isSelected ? 40 : 25,
                }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 group ${
                  isDimmed ? 'opacity-20 scale-90' : 'opacity-100 scale-100'
                }`}
              >
                <div
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center space-x-1.5 backdrop-blur-md shadow-lg ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 scale-110 shadow-[0_0_25px_rgba(6,182,212,0.6)] font-bold'
                      : 'glass-panel text-white hover:text-cyan-300 hover:border-cyan-400/50 hover:scale-105'
                  }`}
                  style={{
                    borderColor: isSelected ? '#22d3ee' : undefined,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span>{skill.name}</span>
                </div>
              </div>
            );
          })}

          {/* Interactive Information Card Popover */}
          {selectedSkill && (
            <div className="absolute bottom-4 sm:bottom-8 z-50 w-[92%] max-w-md p-5 rounded-2xl glass-panel border border-cyan-500/40 bg-slate-950/90 shadow-[0_0_40px_rgba(6,182,212,0.25)] animate-fade-in backdrop-blur-xl">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: selectedSkill.color, color: selectedSkill.color }}
                  />
                  <div>
                    <h4 className="text-base font-bold text-white tracking-tight">
                      {selectedSkill.name}
                    </h4>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                      {selectedSkill.category} • {selectedSkill.experienceLevel}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed mb-3">
                {selectedSkill.description}
              </p>

              <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center space-x-2">
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="text-[11px] text-cyan-200 font-mono">
                  {selectedSkill.highlight}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
