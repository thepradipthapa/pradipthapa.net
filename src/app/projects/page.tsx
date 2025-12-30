import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolio.data"
import Link from "next/link"
import { GoArrowUpRight } from "react-icons/go"


export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Projects by Pradip Thapa.",
};

export default function ProjectsSection() {
  return (
<section className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-heading font-semibold text-primary-light dark:text-primary-dark">
          Projects 🚀
        </h1>
        <p className="mt-2 text-secondary-light dark:text-secondary-dark">
          Backend systems, APIs, and scalable architectures I’ve built.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            className="card space-y-4"
          >
            {/* Title */}
            <h2 className="text-xl font-heading font-semibold text-primary-light dark:text-primary-dark">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-secondary-light dark:text-secondary-dark">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm rounded border
                  border-border-light dark:border-border-dark
                  text-secondary-light dark:text-secondary-dark"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Features */}
            <ul className="list-disc list-inside text-secondary-light dark:text-secondary-dark">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-1 text-sm
                  text-primary-light dark:text-primary-dark hover:underline"
                >
                  GitHub <GoArrowUpRight />
                </Link>
              )}
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-1 text-sm
                  text-primary-light dark:text-primary-dark hover:underline"
                >
                  Live Demo <GoArrowUpRight />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
