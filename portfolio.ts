import { localizedPortfolio, uiTranslations } from "./data/portfolio/localized";

export type {
  AdvancedSkill,
  DeliverableType,
  EducationType,
  ExperienceType,
  GraphData,
  GraphLink,
  GraphNode,
  Greetings,
  Language,
  LocalizedPortfolioContent,
  Note,
  ProjectType,
  QAItem,
  SeoData,
  SkillCategory,
  SocialLinks,
  SystemArchitecture,
} from "./data/portfolio/types";

export { feedbacks, graphData, notes, seoData, socialLinks, systemArchitecture } from "./data/portfolio/common";
export { localizedPortfolio, uiTranslations };

export const greetings = localizedPortfolio.vi.greetings;
export const educationInfo = localizedPortfolio.vi.educationInfo;
export const experience = localizedPortfolio.vi.experience;
export const projects = localizedPortfolio.vi.projects;
export const skillCategories = localizedPortfolio.vi.skillCategories;
export const aiQA = localizedPortfolio.vi.aiQA;
