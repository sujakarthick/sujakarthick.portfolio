# Suja Karthick | Personal Portfolio

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment_Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 1. Professional Introduction

Hi, I'm **Suja Karthick**, a Computer Science and Business Systems undergraduate at Panimalar Engineering College, Chennai (CGPA: 8.54). 

I engineer high-performance systems at the intersection of backend development, machine learning pipelines, and responsive web architectures. Having completed internships at **Vulture Lines Tech Management** (AI Developer Intern) and **CodeBind Technologies** (Web Development Intern), and having achieved finalist honors at the **XYNTRA'25 36-Hour National Level Hackathon**, I specialize in building robust, data-driven applications that transform complex algorithmic logic into intuitive user experiences.

---

## 2. About the Portfolio

This portfolio is an interactive digital universe designed to showcase my engineering skills, machine learning projects, and professional path to recruiters and hiring managers. 

Built with **React**, **TypeScript**, and **Tailwind CSS**, it avoids generic static templates in favor of a cinematic developer experience. It emphasizes 60 FPS motion, crisp editorial typography, accessible interactions, and real resume artifacts.

---

## 3. Key Features

- **Cinematic Opening Animation (~1.8s)**: An animated particle canvas assembles the monogram `SK` before smoothly revealing the hero section. Includes session caching (`sessionStorage`) and a fast skip toggle for returning recruiters.
- **3D Animated Hero Typography**: Each character of `SUJA KARTHICK` emerges with a 3D reveal and dynamic gradient shift between violet, electric blue, and cyan.
- **Continuous Natural Typewriter**: A smooth typewriter animation cycling through five core technical identities with natural typing speeds and a blinking caret.
- **Drifting Typography Universe**: Words like `BUILD.`, `LEARN.`, `CREATE.`, and `INNOVATE.` drift across multi-depth layers in the background with subtle parallax and periodic soft glow highlights.
- **The Skill Orbit (Signature Feature)**: A central glowing core labeled `MY TECH WORLD` surrounded by concentric planetary orbital tracks of resume skills. Hovering or tapping any skill pauses rotation and displays an interactive engineering specification card.
- **Magnetic CTA Buttons**: Smooth spring-physics cursor tracking on call-to-action buttons for tactile feedback without affecting click accuracy.
- **Scroll-Triggered Typography**: Section titles and keywords reveal word-by-word with subtle glowing emphasis when entering the viewport.
- **Direct Resume PDF Download**: Direct download link to my verified, up-to-date resume (`Suja_K_Resume.pdf`).
- **Reduced Motion & Responsive Design**: Full accessibility support honoring `prefers-reduced-motion` and responsive layouts across mobile, tablet, and ultra-wide screens.

---

## 4. Technologies Used

### Frontend & Core
- **React 19** (`react`, `react-dom`) — Component-driven reactive UI architecture.
- **TypeScript 5.7** — Strict static typing and interface contracts.
- **Vite 6** (`vite`, `@vitejs/plugin-react`) — High-speed build tooling and hot-module replacement.

### Styling & Motion
- **Tailwind CSS 3.4** — Utility-first styling with custom glassmorphism and midnight navy palettes.
- **PostCSS & Autoprefixer** — CSS transformation and vendor-prefixing.
- **HTML5 Canvas & CSS Keyframes** — Hardware-accelerated particle systems and 3D typography transforms.
- **Lucide React** (`lucide-react`) — Modern, lightweight vector icons.

---

## 5. Projects Showcased

### 🛡️ MediGuardian — Early Parkinson's Detection System
- **Domain**: HealthTech & Machine Learning
- **Tech Stack**: Python, Scikit-learn, Librosa, Gradio, Joblib
- **Description**: Machine learning web application that detects early acoustic biomarkers of Parkinson’s disease from voice recordings. Uses Librosa for vocal frequency feature extraction, Scikit-learn classification models for inference, Joblib for model persistence, and Gradio for an interactive clinician interface.

### 📖 KADHAI — AI Story Generator Web App
- **Domain**: Multi-modal Generative AI
- **Tech Stack**: Python, AI APIs, REST Architecture, Audio Synthesis
- **Description**: Multi-modal creative platform designed for children’s storytelling. Features a modular Python backend that transforms user story prompts into synchronized chapter narratives, vivid imagery, and narration audio.

---

## 6. Folder Structure

```text
portfolio/
├── public/                     # Static public assets
│   ├── profile.jpg             # High-resolution portrait photograph
│   └── Suja_K_Resume.pdf       # Verified downloadable resume PDF
├── src/
│   ├── components/             # Modular React UI components
│   │   ├── BackgroundUniverse.tsx   # Floating parallax words & stardust canvas
│   │   ├── ContactSection.tsx       # Collaborative CTA & social links
│   │   ├── ExperienceSection.tsx    # Internships, education & certifications
│   │   ├── HeroSection.tsx          # 3D animated name & portrait light sweep
│   │   ├── MagneticButton.tsx       # Physics-based magnetic button wrapper
│   │   ├── Navbar.tsx               # Floating glassmorphism pill navigation
│   │   ├── OpeningIntro.tsx         # 1.8s particle monogram sequence
│   │   ├── ProjectsSection.tsx      # MediGuardian & KADHAI showcase cards
│   │   ├── ScrollRevealText.tsx     # Word-by-word scroll observer
│   │   ├── SkillOrbit.tsx           # Concentric interactive skill matrix
│   │   └── Typewriter.tsx           # Continuous multi-role typewriter
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for resume details
│   ├── App.tsx                 # Root application composition
│   ├── index.css               # Global Tailwind directives & custom keyframes
│   └── main.tsx                # React DOM root entry point
├── .gitignore                  # Git tracking exclusion rules
├── index.html                  # HTML entry point with typography preconnects
├── package.json                # Project dependencies and script definitions
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Custom colors, fonts, and animation configs
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite configuration (base: './', port: 3000)
```

---

## 7. Installation and Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended, tested on Node v24)
- npm, pnpm, or yarn

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sujakarthick/sujakarthick.portfolio.git
   cd sujakarthick.portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the live site with Hot Module Replacement (HMR).

---

## 8. Building the Production Version

To generate an optimized, minified production build:

```bash
npm run build
```

This compiles TypeScript (`tsc`) and outputs the production bundle to the `dist/` directory:
- Minified JavaScript chunk with tree-shaking
- Optimized CSS with scoped glassmorphism rules
- Preserved static assets (`profile.jpg`, `Suja_K_Resume.pdf`)

To preview the production build locally:
```bash
npm run preview
```

---

## 9. How to Deploy on Vercel

This project is fully optimized for continuous zero-config deployment on **Vercel**.

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. Sign in to your sujakarthick-portfolio.vercel.app
2. Click **Add New...** > **Project**.
3. Select **Continue with GitHub** and import `sujakarthick/sujakarthick.portfolio`.
4. Configure Project Settings:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.
6. Vercel will build and assign a production URL https://sujakarthick-portfolio.vercel.app

### Method 2: Deploy via Vercel CLI

```bash
npx vercel
```
Follow the interactive prompts to link and deploy the repository.

---

## 10. Live Portfolio Link

- **Production URL**: 'sujakarthick-portfolio.vercel.app'
- **Alternative Mirror**: [suja.github.io](https://suja.github.io) *(Optional)*

*(This link will be updated with the live Vercel domain once the deployment step completes).*

---

## 11. GitHub Repository

- **Repository**: [https://github.com/sujakarthick/sujakarthick.portfolio](https://github.com/sujakarthick/sujakarthick.portfolio)

---

## 12. Contact & Connect

- **Name**: Suja Karthick
- **Email**: [sujakarthick7@gmail.com](mailto:sujakarthick7@gmail.com)
- **Phone**: [+91 78457 68665](tel:+917845768665)
- **LinkedIn**: [linkedin.com/in/sujakarthick](https://linkedin.com/in/sujakarthick)
- **GitHub**: [github.com/sujakarthick](https://github.com/sujakarthick)

---

*Architected & engineered with precision by Suja Karthick.*
