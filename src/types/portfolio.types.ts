import React from "react"

export interface SocialLink {
  platform: string
  url: string
  icon?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone: string
  socials: SocialLink[]
}


export interface Certification {
  title: string
  url?: string
}

export interface Skills {
    title: string
    icon?: React.ElementType
}

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number;
  gpa?: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  year: number;
  url?: string; 
}

export interface PortfolioData {
    skills: Skills[]
    education: Education[]
    certifications: Certification[]
}