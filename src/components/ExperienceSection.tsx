import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ScrollRevealText } from './ScrollRevealText';
import { Briefcase, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <ScrollRevealText
            text="Industry Tenure & Education"
            className="justify-center text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
            highlightWords={['Industry', 'Education']}
          />
          <p className="text-gray-400 text-sm sm:text-base">
            Hands-on internship experience in AI pipelines, web systems, and rigorous academic excellence.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_DATA.experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                        {exp.type} • {exp.location}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h4>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <div className="text-cyan-300 font-medium text-sm mb-6 flex items-center space-x-1">
                  <span>{exp.company}</span>
                </div>

                <div className="space-y-2.5 mb-8">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Box */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    Academic Foundation
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Computer Science & Business Systems
                  </h4>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-200 mb-1">
                {PORTFOLIO_DATA.personal.college}
              </p>
              <p className="text-xs font-mono text-cyan-400 mb-6">
                Batch {PORTFOLIO_DATA.personal.batch} • CGPA {PORTFOLIO_DATA.personal.cgpa}
              </p>

              {/* School Milestones */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-medium">SSLC (10th Standard)</span>
                    <p className="text-gray-400 text-[11px]">{PORTFOLIO_DATA.personal.school10.name}</p>
                  </div>
                  <span className="font-mono text-cyan-400 font-bold bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    100% Score
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-white font-medium">Higher Secondary (Bio-Maths)</span>
                    <p className="text-gray-400 text-[11px]">{PORTFOLIO_DATA.personal.school12.name}</p>
                  </div>
                  <span className="font-mono text-gray-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    {PORTFOLIO_DATA.personal.school12.score}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>Rigor & High Discipline</span>
              <span className="text-cyan-400">Top Academic Standing</span>
            </div>
          </div>

          {/* Certifications & Achievements Box */}
          <div className="lg:col-span-6 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400">
                    Verified Credentials
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    Oracle Cloud & Hackathon Honors
                  </h4>
                </div>
              </div>

              {/* Certifications List */}
              <div className="space-y-4 mb-6">
                {PORTFOLIO_DATA.certifications.map((cert) => (
                  <div key={cert.id} className="p-3.5 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{cert.title}</span>
                      <span className="text-[10px] font-mono text-cyan-400">{cert.validity}</span>
                    </div>
                    <p className="text-[11px] text-gray-400">{cert.description}</p>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                {PORTFOLIO_DATA.achievements.slice(0, 2).map((ach) => (
                  <div key={ach.id} className="flex items-start space-x-2.5 text-xs text-gray-300">
                    <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-semibold">{ach.title}</span>
                      <p className="text-[11px] text-gray-400">{ach.organization} • {ach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>National Hackathons</span>
              <span className="text-amber-400">XYNTRA’25 & Serve-AThon</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
