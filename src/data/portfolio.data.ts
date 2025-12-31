import { 
  SiPython, 
  SiPostgresql, 
  SiDjango, 
  SiFastapi, 
  SiReact, 
  SiRedis, 
  SiLinux, 
  SiGit, 
  SiSocketdotio 
} from "react-icons/si";
import { TbSql, TbApi  } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { PortfolioData} from "@/types/portfolio.types";


export const portfolioData: PortfolioData = {
  skills: [
    { title: "Python", icon: SiPython },
    { title: "SQL",  icon: TbSql },
    { title: "Django", icon: SiDjango },
    { title: "FastAPI", icon: SiFastapi },
    { title: "PostgreSQL", icon: SiPostgresql },
    {title: "WebSocket", icon: SiSocketdotio},
    {title: "DRF", icon: TbApi},
    { title: "Redis", icon: SiRedis },
    { title: "AWS", icon: FaAws },
    { title: "Linux", icon: SiLinux },
    { title: "Git", icon: SiGit },
    { title: "React", icon: SiReact },
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
    techStack: ["Django", "DRF", "PostgreSQL", "Redis", "WebSocket","RebbitMQ", "Next.js", "TypeScript", "Docker"],
    features: [
      "OTP based Login with JWT authentication",
      "Private, Publice Chat with Websocket",
      "Message read/unread tracking",
      "Send Friend Request"
    ],
    githubUrl: "https://github.com/thepradipthapa/livechat",
  },
  {
    id: "2",
    title: "Full Stack JWT Auth System",
    description:
      "A secure JWT‑based authentication system built with Django and Django REST Framework. This project provides a complete user authentication flow including registration, login, password management, and reset functionality.",
    techStack: ["Django", "DRF", "React", "Bootstrap", "JWT"],
    features: [
      "Create new user accounts",
      "Login: Authenticate users with JWT tokens",
      "Change PAssword: Allow users to update password",
      "Reset: Send password reset link and securely reset password"
    ],
    githubUrl: "https://github.com/thepradipthapa/fullstack-jwt-auth-system",
  },
  
  ]
}