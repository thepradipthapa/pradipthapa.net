import type { Metadata } from "next";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  role: string;
  features: string[];
  links: {
    github: string;
    demo?: string;
    live?: string;
  };
};
export const projects: Project[] = [
  {
    title: "Scalable Authentication API",
    description:
      "REST API for user registration, login, and role-based access control. Built with Django REST Framework and deployed via Docker.",
    techStack: ["Python", "Django REST Framework", "PostgreSQL", "Docker"],
    role: "Backend Developer",
    features: [
      "JWT authentication with refresh tokens",
      "Role-based access control middleware",
      "Dockerized deployment with PostgreSQL",
    ],
    links: {
      github: "https://github.com/thepradipthapa/auth-api",
      demo: "https://auth-api-demo.vercel.app/docs",
    },
  },
  {
    title: "E-commerce API",
    description:
      "REST API for managing products, orders, and payments. Includes JWT authentication and PostgreSQL database integration.",
    techStack: ["Python", "Django", "DRF", "PostgreSQL", "Docker"],
    role: "Backend Developer",
    features: [
      "Product and order management endpoints",
      "JWT-based authentication",
      "Containerized deployment with Docker",
    ],
    links: {
      github: "https://github.com/thepradipthapa/ecommerce-api",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "Minimal recruiter-friendly portfolio built with Next.js 16 and Tailwind CSS v4, featuring dark/light mode and responsive design.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    role: "Full-stack Developer",
    features: [
      "Responsive design with light/dark mode",
      "Custom theme tokens with Tailwind v4",
      "Optimized for recruiter readability",
    ],
    links: {
      github: "https://github.com/thepradipthapa/portfolio",
      live: "https://pradipthapa.net",
    },
  },
];

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Projects by Pradip Thapa.",
};

export default function ProjectsSection() {
  return (
    <>
    <div className="font-heading text-3xl text-primary-light dark:text-primary-dark ">Project</div>
    </>
  );
}
