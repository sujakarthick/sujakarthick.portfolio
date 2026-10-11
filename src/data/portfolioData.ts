export interface SkillItem {
  id: string;
  name: string;
  category: 'Languages' | 'AI & ML' | 'Web & APIs' | 'Tools & Cloud';
  description: string;
  highlight: string;
  experienceLevel: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  keyHighlights: string[];
  technologies: string[];
  metrics: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  bullets: string[];
  tags: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  validity: string;
  badgeType: string;
  description: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  highlight: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'SUJA KARTHICK',
    shortName: 'Suja K',
    monogram: 'SK',
    phone: '+91 78457 68665',
    email: 'sujakarthick7@gmail.com',
    linkedin: 'https://linkedin.com/in/sujakarthick',
    github: 'https://github.com/sujakarthick',
    portfolioUrl: 'https://suja.github.io',
    college: 'Panimalar Engineering College, Chennai',
    degree: 'B.Tech – Computer Science and Business Systems',
    cgpa: '8.54',
    batch: '2023 – 2027',
    school12: {
      name: 'Wisdom Matriculation Higher Secondary School',
      score: '69%',
      stream: 'Higher Secondary (Bio-Maths)',
      year: '2022 – 2023'
    },
    school10: {
      name: 'Wisdom Matriculation Higher Secondary School',
      score: '100%',
      stream: 'SSLC (10th Standard)',
      year: '2020 – 2021'
    },
    availability: 'Available for Software & AI Roles',
    summary: 'Computer Science undergraduate with hands-on internship experience in Python backend development, AI/ML pipelines, and fullstack web applications. Seeking Software Developer roles to apply strong problem-solving, Python, Java, and REST API skills to build scalable, real-world software.'
  },

  rotatingRoles: [
    'Aspiring Software Developer',
    'AI & Machine Learning Enthusiast',
    'Data Analytics Learner',
    'Creative Problem Solver',
    'Future Technology Professional'
  ],

  backgroundWords: [
    'BUILD',
    'LEARN',
    'CREATE',
    'INNOVATE'
  ],

  skills: [
    {
      id: 'python',
      name: 'Python',
      category: 'Languages',
      description: 'Primary language for AI/ML pipelines, backend logic, and automated data processing.',
      highlight: 'Engineered multi-modal generation pipelines & biomarker ML models',
      experienceLevel: 'Advanced',
      color: '#38bdf8'
    },
    {
      id: 'java',
      name: 'Java',
      category: 'Languages',
      description: 'Core Object-Oriented Programming, enterprise structures, and algorithmic problem-solving.',
      highlight: 'Strong OOP architecture & structured application design',
      experienceLevel: 'Proficient',
      color: '#f97316'
    },
    {
      id: 'sql',
      name: 'SQL',
      category: 'Languages',
      description: 'Relational database schema design, complex query optimization, and data persistence.',
      highlight: 'Relational modeling & Oracle Cloud Data Management foundations',
      experienceLevel: 'Proficient',
      color: '#a855f7'
    },
    {
      id: 'scikit-learn',
      name: 'Scikit-learn',
      category: 'AI & ML',
      description: 'Machine learning model training, hyperparameter tuning, and vocal biomarker classification.',
      highlight: 'Core classifier behind the MediGuardian Parkinson’s detection system',
      experienceLevel: 'Advanced',
      color: '#06b6d4'
    },
    {
      id: 'librosa',
      name: 'Librosa',
      category: 'AI & ML',
      description: 'Audio feature extraction, spectral analysis, and vocal acoustic signal processing.',
      highlight: 'Vocal acoustic feature extraction for clinical voice diagnostics',
      experienceLevel: 'Proficient',
      color: '#34d399'
    },
    {
      id: 'gradio',
      name: 'Gradio',
      category: 'AI & ML',
      description: 'Rapid interactive ML interface generation for model deployment and clinician testing.',
      highlight: 'Interactive real-time diagnostic testing interface for MediGuardian',
      experienceLevel: 'Proficient',
      color: '#f59e0b'
    },
    {
      id: 'rest-apis',
      name: 'REST APIs',
      category: 'Web & APIs',
      description: 'Multi-API orchestration, JSON payload parsing, and asynchronous backend integration.',
      highlight: 'Integrated text, audio, and vision AI endpoints into unified pipeline',
      experienceLevel: 'Advanced',
      color: '#6366f1'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      category: 'Web & APIs',
      description: 'Interactive UI state management, modern ESNext workflows, and frontend logic.',
      highlight: 'Engineered dynamic leave request workflows and employee dashboard',
      experienceLevel: 'Proficient',
      color: '#fbbf24'
    },
    {
      id: 'html-css',
      name: 'HTML & CSS',
      category: 'Web & APIs',
      description: 'Semantic markup, modern responsive layouts, and Tailwind glassmorphism design systems.',
      highlight: 'Crafted production-grade responsive interfaces and dashboards',
      experienceLevel: 'Advanced',
      color: '#ec4899'
    },
    {
      id: 'git-github',
      name: 'Git & GitHub',
      category: 'Tools & Cloud',
      description: 'Distributed version control, branch management, pull requests, and collaborative dev.',
      highlight: 'Daily repository workflows, project versioning, and CI tracking',
      experienceLevel: 'Proficient',
      color: '#94a3b8'
    },
    {
      id: 'postman',
      name: 'Postman',
      category: 'Tools & Cloud',
      description: 'API endpoint inspection, mock servers, request validation, and pipeline debugging.',
      highlight: 'End-to-end testing of multimedia generation and webhook responses',
      experienceLevel: 'Proficient',
      color: '#fb923c'
    },
    {
      id: 'oracle-cloud',
      name: 'Oracle Cloud',
      category: 'Tools & Cloud',
      description: 'Certified AI Foundations & Data Management Associate across OCI services.',
      highlight: 'OCI 2025 AI Foundations & Data Management Associate credentials',
      experienceLevel: 'Certified',
      color: '#ef4444'
    }
  ] as SkillItem[],

  projects: [
    {
      id: 'mediguardian',
      title: 'MediGuardian',
      subtitle: 'Early Parkinson’s Detection System',
      tagline: 'Acoustic vocal biomarker analysis with high-precision machine learning.',
      description: 'Developed an innovative medical AI web application that detects early acoustic indicators of Parkinson’s disease from voice recordings. The system processes vocal frequencies using Librosa, evaluates patterns through trained Scikit-learn classification models, uses Joblib for model persistence, and provides clinicians with an intuitive interactive Gradio interface.',
      keyHighlights: [
        'Vocal acoustic feature extraction using Librosa for subtle tremor detection',
        'High-precision machine learning inference trained with Scikit-learn',
        'Streamlined model persistence and real-time execution via Joblib',
        'Interactive, clinician-ready diagnostics interface deployed with Gradio'
      ],
      technologies: ['Python', 'Scikit-learn', 'Librosa', 'Gradio', 'Joblib'],
      metrics: 'High precision inference from raw voice samples',
      category: 'HealthTech AI'
    },
    {
      id: 'kadhai',
      title: 'KADHAI',
      subtitle: 'AI Story Generator Web App',
      tagline: 'End-to-end multi-modal creative generation converting prompts into narrated storybooks.',
      description: 'Engineered an AI-powered storytelling platform designed to foster children’s imagination. Built a modular Python backend integrating multiple generative AI APIs that converts user prompt parameters into synchronized chapter narratives, vivid accompanying visual imagery, and synchronized narration voiceovers.',
      keyHighlights: [
        'Multi-modal pipeline integrating text generation, vision AI, and audio synthesis',
        'Modular asynchronous Python backend designed for concurrent API handling',
        'Context-aware story pacing and prompt expansion for children’s literature',
        'Automated media synchronization into an engaging multimedia story output'
      ],
      technologies: ['Python', 'Generative AI APIs', 'REST APIs', 'Audio Synthesis'],
      metrics: 'Seamless multi-modal story generation pipeline',
      category: 'Generative AI'
    }
  ] as ProjectItem[],

  experiences: [
    {
      id: 'vulture-lines',
      role: 'AI Developer Intern',
      company: 'Vulture Lines Tech Management Pvt. Ltd.',
      location: 'Remote',
      period: 'Jun 2025 – Jul 2025',
      duration: '2 Months',
      type: 'Internship',
      bullets: [
        'Developed an AI-powered kids’ story generator producing synchronized text, audio, and image outputs using Python.',
        'Built backend logic integrating multiple AI APIs into a unified generation pipeline.',
        'Engineered an end-to-end pipeline converting user prompts into multimedia story outputs.'
      ],
      tags: ['Python', 'Generative AI', 'API Integration', 'Backend Engineering']
    },
    {
      id: 'codebind',
      role: 'Web Development Intern',
      company: 'CodeBind Technologies',
      location: 'Remote',
      period: 'Jun 2024',
      duration: '1 Month',
      type: 'Internship',
      bullets: [
        'Built an Employee Leave Management System using HTML, CSS, and JavaScript.',
        'Designed the frontend interface and implemented leave request and approval workflows.',
        'Streamlined user navigation and reduced administrative interaction friction.'
      ],
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Workflow Automation']
    }
  ] as ExperienceItem[],

  certifications: [
    {
      id: 'oci-ai',
      title: 'Oracle Cloud Infrastructure 2025 AI Foundations Associate',
      issuer: 'Oracle',
      validity: 'Issued 2025 · Active',
      badgeType: 'Cloud & AI',
      description: 'Certified expertise in OCI AI architecture, machine learning concepts, automated services, and enterprise cloud AI deployment.'
    },
    {
      id: 'oci-data',
      title: 'Oracle Cloud Data Management 2023 Foundations Associate',
      issuer: 'Oracle',
      validity: 'Valid through 2026',
      badgeType: 'Data Architecture',
      description: 'Demonstrated proficiency in cloud database services, autonomous data warehousing, relational schema modeling, and security.'
    }
  ] as CertificationItem[],

  achievements: [
    {
      id: 'xyntra-25',
      title: 'Finalist – XYNTRA’25 National Level Hackathon',
      organization: 'Rajalakshmi Engineering College',
      year: '2025',
      description: 'Competed in an intense 36-hour non-stop national hackathon sprint, engineering an innovative software solution under high pressure against teams from across the nation.',
      highlight: '36-Hour National Sprint'
    },
    {
      id: 'serve-athon',
      title: 'Finalist – Serve-AThon 2025',
      organization: 'Saveetha Engineering College',
      year: '2025',
      description: 'Selected as finalist for engineering high-impact tech solutions addressing community and societal challenges through applied computing.',
      highlight: 'Finalist Tech Innovator'
    },
    {
      id: 'sslc-perfect',
      title: 'SSLC (10th Standard) – 100% Academic Excellence',
      organization: 'Wisdom Matriculation Higher Secondary School',
      year: '2021',
      description: 'Achieved a perfect 100% score in the SSLC Board examinations, showcasing sustained discipline and academic rigor.',
      highlight: '100% Perfect Score'
    }
  ] as AchievementItem[]
};
