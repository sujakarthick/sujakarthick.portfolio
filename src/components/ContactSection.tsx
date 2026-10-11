import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { MagneticButton } from './MagneticButton';
import { ScrollRevealText } from './ScrollRevealText';
import { Mail, Phone, Download, Check, Copy, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>OPEN FOR ENGINEERING ROLES</span>
        </div>

        {/* Large Editorial Title */}
        <ScrollRevealText
          text="Let’s Architect the Future Together."
          className="justify-center text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-8 text-white"
          highlightWords={['Architect', 'Future']}
        />

        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-12">
          Seeking full-time Software Developer or AI Engineering roles. Eager to bring high-rigor problem solving and scalable architecture to your team.
        </p>

        {/* Big Email Display with Copy Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="text-xl sm:text-3xl font-light text-white hover:text-cyan-400 transition-colors border-b-2 border-white/10 hover:border-cyan-400 pb-1.5 font-mono"
          >
            {PORTFOLIO_DATA.personal.email}
          </a>

          <button
            onClick={handleCopyEmail}
            className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-300 transition-all flex items-center space-x-1.5 text-xs font-mono"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <MagneticButton
            as="a"
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all group"
          >
            <Mail className="mr-2 w-4 h-4" />
            <span>Send Email Directly</span>
            <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>

          <MagneticButton
            as="a"
            href="/Suja_K_Resume.pdf"
            download="Suja_K_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl font-bold text-sm glass-panel border border-white/10 hover:border-cyan-500/40 text-white hover:text-cyan-400 transition-all group"
          >
            <Download className="mr-2 w-4 h-4 text-cyan-400" />
            <span>Download Resume PDF</span>
          </MagneticButton>
        </div>

        {/* Social and Direct Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-white/5 text-xs font-mono text-gray-400">
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            <svg className="w-4 h-4 text-cyan-400 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/[^0-9+]/g, '')}`}
            className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors uppercase tracking-widest"
          >
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{PORTFOLIO_DATA.personal.phone}</span>
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-white/5 text-center">
        <p className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name} • ENGINEERED FOR SYSTEMS OF INTELLIGENCE
        </p>
      </footer>
    </section>
  );
};
