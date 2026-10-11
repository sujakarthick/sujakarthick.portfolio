import React, { useState } from 'react';
import { BackgroundUniverse } from './components/BackgroundUniverse';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SkillOrbit } from './components/SkillOrbit';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { OpeningIntro } from './components/OpeningIntro';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Only show if not previously seen in session
    return sessionStorage.getItem('suja_portfolio_intro_seen') !== 'true';
  });

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleReplayIntro = () => {
    sessionStorage.removeItem('suja_portfolio_intro_seen');
    setShowIntro(true);
  };

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* 1. Cinematic Opening Intro (1.8s Particle Assembly & Monogram) */}
      {showIntro && <OpeningIntro onComplete={handleIntroComplete} />}

      {/* 2. Moving Words in the Background (BUILD. LEARN. CREATE. INNOVATE.) */}
      <BackgroundUniverse />

      {/* 3. Floating Navbar */}
      <Navbar onReplayIntro={handleReplayIntro} />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col space-y-12">
        {/* Animated Hero Section */}
        <HeroSection />

        {/* Signature Feature: The Skill Orbit */}
        <SkillOrbit />

        {/* Featured Artifacts & Projects */}
        <ProjectsSection />

        {/* Industry Tenure, Education & Certifications */}
        <ExperienceSection />

        {/* Interactive Contact & CTA */}
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
