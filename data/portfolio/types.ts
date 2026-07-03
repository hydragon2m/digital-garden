export interface AdvancedSkill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: AdvancedSkill[];
}

export interface QAItem {
  keywords: string[];
  answer: string;
}

export interface SystemArchitecture {
  title: string;
  description: string;
  nodes: { id: string; label: string; type: "client" | "gateway" | "service" | "db" | "cache"; status: "active" | "standby" }[];
  connections: { from: string; to: string; label?: string }[];
}

export interface Note {
  id: string;
  title: string;
  stage: "seedling" | "growing" | "evergreen";
  tags: string[];
  content: string;
  updatedAt: string;
}

export interface GraphNode {
  id: string;
  label: string;
  type: "skill" | "project" | "note" | "experience";
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  nodes: GraphNode[];
  links: GraphLink[];
}

export interface ProjectType {
  name: string;
  desc: string;
  github?: string;
  docs?: string;
  link?: string;
  tags: string[];
  stars?: number;
  metrics?: {
    users?: string;
    qps?: string;
    uptime?: string;
    latency?: string;
  };
  highlights?: string[];
  architecture?: {
    description: string;
  };
}

export interface DeliverableType {
  id: string;
  category: string;
  name: string;
  description: string;
  tags: string[];
  achievement: string;
}

export interface EducationType {
  schoolName: string;
  subHeader: string;
  duration: string;
  desc: string;
  grade?: string;
  descBullets?: string[];
}

export interface ExperienceType {
  role: string;
  company: string;
  companyLogo?: string;
  date: string;
  desc: string;
  descBullets?: string[];
  stack?: string[];
}

export interface Greetings {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  resumeLink: string;
}

export type Language = "vi" | "en";

export interface LocalizedPortfolioContent {
  greetings: Greetings;
  educationInfo: EducationType[];
  experience: ExperienceType[];
  projects: ProjectType[];
  skillCategories: SkillCategory[];
  deliverables: DeliverableType[];
  aiQA: QAItem[];
  contactFallback: { bio: string; location: string };
  scale: Record<string, string[]>;
}

export interface SocialLinks {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  gitlab: string;
  twitter: string;
}

export interface SeoData {
  title: string;
  description: string;
  author: string;
  image: string;
  url: string;
  keywords: string[];
}
