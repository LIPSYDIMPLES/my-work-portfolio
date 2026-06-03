export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  courses?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'analytics' | 'web' | 'innovation' | 'diplomacy';
  githubUrl?: string;
  demoUrl?: string;
  role?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 5
  category: 'core' | 'power' | 'technical';
  description: string;
}

export interface ClubItem {
  name: string;
  role: string;
  period: string;
  description: string;
  iconType: 'innovation' | 'diplomacy';
}
