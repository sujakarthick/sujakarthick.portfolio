import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';
import { Activity, BookOpen, Layers, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Production Architectures</span>
          </div>
          <ScrollRevealText
            text="Featured Engineering Artifacts"
            className="justify-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
            highlightWords={['Engineering', 'Artifacts']}
          />
          <p className="text-gray-400 text-sm sm:text-base">
            Verified machine learning systems and multi-modal generative backends engineered from scratch.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.projects.map((project, idx) => {
            const isMediGuardian = project.id === 'mediguardian';

            return (
              <div
                key={project.id}
                className="group relative glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 ${
                    isMediGuardian ? 'bg-cyan-500/15 group-hover:bg-cyan-500/25' : 'bg-indigo-500/15 group-hover:bg-indigo-500/25'
                  }`}
                />

                <div>
                  {/* Category Pill & Project Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2.5">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                        {isMediGuardian ? <Activity className="w-5 h-5" /> : <BookOpen className="w-5 h-5 text-indigo-400" />}
                      </div>
                      <span className="text-xs font-mono tracking-widest uppercase text-cyan-400 font-semibold">
                        {project.category}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      SYS // 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400/90 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Highlights Bullets */}
                  <div className="space-y-2 mb-8">
                    {project.keyHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start space-x-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-white/5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metric / Case Study CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-mono">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.metrics}</span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center text-xs font-bold text-cyan-400 hover:text-cyan-300 group/btn transition-colors"
                    >
                      <span>System Specs</span>
                      <ChevronRight className="ml-1 w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep System Specs */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
            <div className="glass-panel max-w-xl w-full p-6 sm:p-8 rounded-3xl border border-cyan-500/40 bg-slate-950/95 shadow-2xl relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    System Architecture Review
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="my-4 text-xs sm:text-sm text-gray-300 space-y-3 leading-relaxed">
                <p>{selectedProject.description}</p>
                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
                  <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                    Verified Engineering Contributions
                  </h4>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {selectedProject.keyHighlights.map((hl, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end pt-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  Close Specs
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
