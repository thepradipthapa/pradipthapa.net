import { 
  SiPython, 
  SiPostgresql, 
  SiDjango, 
  SiFastapi, 
  SiReact, 
  SiRedis, 
  SiLinux, 
  SiGit, 
  SiBootstrap ,
  SiVim 
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaAws } from "react-icons/fa";

import { PortfolioData} from "@/types/portfolio.types";

export const portfolioData: PortfolioData = {
  skills: [
    { title: "Python", icon: SiPython },
    { title: "SQL",  icon: TbSql },
    { title: "Django", icon: SiDjango },
    { title: "FastAPI", icon: SiFastapi },
    { title: "PostgreSQL", icon: SiPostgresql },
    { title: "Redis", icon: SiRedis },
    { title: "AWS", icon: FaAws },
    { title: "Linux", icon: SiLinux },
    { title: "Vim", icon: SiVim },
    { title: "Git", icon: SiGit },
    { title: "React", icon: SiReact },
    { title: "Bootstrap", icon: SiBootstrap },
  ],
  education: [
    {
      id: "1",
      degree: "Bachelor of Computer Science",
      institution: "Banke Bageshwori Campus",
      location: "Nepalgunj, Banke",
      startYear: 2023,
      endYear: 2027,
      gpa: "XXX/4.0",
    },
    {
      id: "2",
      degree: "Diploma in Computer Engineering",
      institution: "Tribhuwan Model School",
      location: "Kohalpur, Banke",
      startYear: 2018,
      endYear: 2022,
      gpa: "3.3/4.0"
    }
  ],
  certifications: [
    {
      id: "1",
      title: "Master Python",
      year: 2022,
      url: "https://pradipthapa.net", 
    }
  ],
  projects: [
    {
    id: "1",
    title: "LiveChat-Realtime Chat Application",
    description:
      "Full Stack real-time chat Application.",
    techStack: ["Django", "DRF", "PostgreSQL", "Redis", "WebSocket","NextJS","Docker"],
    features: [
      "OTP based Login with JWT authentication",
      "Private, Publice Chat with Websocket",
      "Message read/unread tracking",
      "Send Friend Request"
    ],
    githubUrl: "https://github.com/thepradipthapa/livechat",
  },
  
  ]
}