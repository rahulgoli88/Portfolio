export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  naukri?: string;
  portfolio?: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  period: string;
  details: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: ContactInfo;
  technicalSkills: SkillCategory[];
  experience: Job[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
}