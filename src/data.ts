import { ExperienceItem, EducationItem, ProjectItem, SkillItem, ClubItem } from './types';

export const PERSONAL_INFO = {
  fullName: 'Praise Hombarume',
  title: 'Computer Science & Software Eng. Student',
  subTitle: 'Aspiring Full-Stack Developer & Data Analyst',
  email: 'hombarumepraise@gmail.com',
  phone: '+267 71281845',
  location: 'Gaborone, Botswana | Gutu, Zimbabwe',
  github: 'https://github.com/LIPSYDIMPLES', // Elegant default
  linkedin: 'https://linkedin.com/in/praise-hombarume', // Elegant default
  bio: 'Currently pursuing a Bachelor of Science in Computer Science and Software Engineering at Botswana International University of Science and Technology. Demonstrates strong analytical and problem-solving skills with a dedicated approach to learning foundational software development principles. Exhibits the ability to adapt quickly to new technologies and collaborate effectively with diverse teams. Committed to continuous growth and delivering reliable results in academic and practical environments.',
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Intern',
    company: 'Spectrum Analytics',
    location: 'Gaborone, Botswana',
    period: 'May 2026 – Present',
    current: true,
    description: [
      'Collaborating on data-driven solutions and consulting workflows for local enterprise clients.',
      'Developing automated scripting and analytical models to process large-scale datasets.',
      'Gaining hands-on experience in modern technology stacks, database management, and professional agile delivery.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'Bachelor of Science, Computer Science and Software Engineering',
    institution: 'Botswana International University of Science and Technology (BIUST)',
    location: 'Palapye, Botswana',
    period: 'Aug 2023 – Present',
    courses: [
      'C',
      'C++',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Software Engineering',
      'Operating Systems',
      'Computer Networks',
      'IT & Society',
      'IT Infrastructure',
      'Computer Architecture',
      'Discrete Mathematics',
      'Business Management & Entrepreneurship',
    ],
  },
  {
    id: 'edu2',
    degree: 'ZIMSEC General Certificate of Education (O-Level)',
    institution: 'Mutero High School',
    location: 'Gutu, Zimbabwe',
    period: 'Jan 2019 – Dec 2022',
    courses: [
      'Mathematics',
      'Integrated Sciences',
      'English Language',
      'Geography',
      'Computer Applications',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'Aqua Vigilance: AI-Enhanced Real-Time Collaborative Analytics Platform',
    description: 'Designed an AI-assisted distributed system for high-precision water management in Palapye to address centralized infrastructure vulnerabilities, leakages, and delayed sensor communication. Implemented continuous high-speed Apache Kafka pipelines, fault-tolerant worker node checkpointing, 24/7 predictive AI leak patterns, and an interactive command interface that triggers autonomous valve shutoff responses.',
    technologies: ['Apache Kafka', 'Distributed Systems', 'Fault Tolerance Checkpoints', 'Predictive AI Analytics', 'Python', 'Real-Time Alerts'],
    category: 'analytics',
    githubUrl: 'https://github.com/kitsor897/Aqua-Vigilance',
    role: 'Processing Worker Lead'
  },
  {
    id: 'proj2',
    title: 'Bravo Event Hub',
    description: 'Vetted and engineered a web-based event coordination platform enabling organizers to create, manage, edit, and track comprehensive attendance analytics. Built flexible client environments with user flow verification, including safe attendee listings, email/anonymous authentications, and secure unique QR codes for scanned entrance verification.',
    technologies: ['Firebase Auth', 'Cloud Firestore', 'React', 'QR Code Scanning', 'Environment Configuration', 'Tailwind CSS'],
    category: 'web',
    githubUrl: 'https://github.com/Moxions/bravo-event-hub',
    role: 'Database & Authentication Lead'
  }
];

export const SKILLS: SkillItem[] = [
  // Core Professional (from CV)
  {
    name: 'Problem Solving',
    level: 5,
    category: 'core',
    description: 'Strong analytical mindset to troubleshoot and design algorithms.',
  },
  {
    name: 'Adaptability',
    level: 5,
    category: 'core',
    description: 'Quick to learn new technical libraries, frameworks, and methodologies.',
  },
  {
    name: 'Positive Attitude',
    level: 5,
    category: 'core',
    description: 'Driven by constructive curiosity and a strong resolve to deliver results.',
  },
  // Power Collaboration (from CV)
  {
    name: 'Team Collaboration',
    level: 5,
    category: 'power',
    description: 'Cross-functional teamwork and supportive communication.',
  },
  {
    name: 'Communication',
    level: 5,
    category: 'power',
    description: 'Excellent verbal and written expression in multilingual environments.',
  },
  {
    name: 'Organization',
    level: 4,
    category: 'power',
    description: 'Efficient self-management, scheduling, and structured documentation.',
  },
];

export const CLUBS: ClubItem[] = [
  {
    name: 'BIUST Innovation Club (PA)',
    role: 'Member & Technical Collaborator',
    period: 'Present',
    description: 'Engaging in creative hackathons, engineering ideations, and peer tech mentoring. Building small prototypes to spark university-wide technological innovation.',
    iconType: 'innovation',
  },
  {
    name: 'Ministry of International Affairs',
    role: 'Zimbabwe Representative (Youth Liaison)',
    period: 'Present',
    description: 'Representing young Zimbabwean delegates in cross-border dialogues, coordinating community representation, and driving diplomatic outreach campaigns.',
    iconType: 'diplomacy',
  },
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Full Professional Proficiency', rating: 5 },
  { name: 'Shona', proficiency: 'Native / Bilingual', rating: 5 },
];
