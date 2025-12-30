import { portfolioData } from "@/data/portfolio.data";
import type { Metadata } from "next";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { BiDownload } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Resume | Pradip Thapa",
  description: "Explore the resume of Pradip Thapa – Backend Developer",
};

export default function Resume() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-semibold text-primary-light dark:text-primary-dark">
            My Resume 📝
          </h1>
          <p className="mt-1 text-secondary-light dark:text-secondary-dark">
            Experience, Education, skills, and certifications
          </p>
        </div>

        <Link
          href="https://pradipthapa.net"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-md border
          border-border-light dark:border-border-dark
          px-4 py-2 text-sm font-medium
          text-primary-light dark:text-primary-dark
          hover:bg-surface-light dark:hover:bg-surface-dark
          transition"
        >
          <BiDownload className="text-lg" />
          Download Resume
        </Link>
      </header>

      {/* Education */}
      <section id="education" className="card space-y-6">
        <h2 className="text-2xl font-heading font-semibold text-primary-light dark:text-primary-dark">
          Education
        </h2>

        {portfolioData.education.map((edu) => (
          <div key={edu.id} className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-2 border-border-light dark:border-border-dark">
              <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark">
                {edu.degree}
              </h3>
              <span className="text-sm text-secondary-light dark:text-secondary-dark">
                {edu.startYear} – {edu.endYear}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between text-sm">
              <p className="italic text-primary-light dark:text-primary-dark">{edu.institution}</p>
              <p className="text-secondary-light dark:text-secondary-dark">
                {edu.location}
              </p>
            </div>

            {edu.gpa && (
              <p className="text-sm text-secondary-light dark:text-secondary-dark">
                GPA: {edu.gpa}
              </p>
            )}

            {edu.description && (
              <p className="text-sm text-secondary-light dark:text-secondary-dark">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Skills */}
      <section id="skills" className="card">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-primary-light dark:text-primary-dark">
          Skills
        </h2>

        <div className="flex flex-wrap gap-3">
          {portfolioData.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span
                key={index}
                className="inline-flex items-center gap-2 rounded-md border
                border-border-light dark:border-border-dark
                px-4 py-2 text-sm
                text-secondary-light dark:text-secondary-dark
                hover:text-primary-light dark:hover:text-primary-dark
                hover:border-primary-light dark:hover:border-primary-dark
                transition"
              >
                {Icon && <Icon className="text-lg" />}
                {skill.title}
              </span>
            );
          })}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="card">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-primary-light dark:text-primary-dark">
          Certifications
        </h2>

        <ul className="space-y-3">
          {portfolioData.certifications.map((cert) => (
            <li
              key={cert.id}
              className="flex flex-wrap items-center justify-between gap-2"
            >
              <span className="text-secondary-light dark:text-secondary-dark">
                {cert.title} {cert.year && `(${cert.year})`}
              </span>

              {cert.url && (
                <Link
                  href={cert.url}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm
                  text-primary-light dark:text-primary-dark
                  hover:underline"
                >
                  View Certificate <GoArrowUpRight />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
