import { portfolioData } from "@/data/portfolio.data";
import type { Metadata } from "next";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { BiDownload } from "react-icons/bi";


export const metadata: Metadata = {
  title: "Resume",
  description:
    "Explore the resume of Pradip Thapa – Backend Developer",
};
export default function Resume() {
  return (
    <div>
      {/* Heading */}
      <div className="flex justify-between items-center flex-wrap">
        <h1 className="text-3xl font-heading font-semibold mb-2 text-primary-light dark:text-primary-dark">
           My Resume📝
        </h1>
        <Link
          href="https://pradipthapa.net"
          target="_blank"
          className="flex border px-2 py-2 gap-2 rounded text-primary-light dark:text-primary-dark"
        >
        <BiDownload className="text-xl"/>  Download Resume
        </Link>
      </div>

      {/*  Education */}
      <div id="education" className="mt-8 text-primary-light dark:text-primary-dark">
        <h2 className="text-2xl font-heading font-semibold">Education</h2>
        <div className="mt-3 space-y-6">
          {portfolioData.education.map((edu) => (
            <div key={edu.id}>
              <div className="flex flex-wrap justify-between items-center border-b pb-2 border-border-light dark:border-border-dark">
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-primary-light dark:text-primary-dark">
                  {edu.startYear} - {edu.endYear}
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-center mt-2">
                <p className="italic">{edu.institution}</p>
                <p className="text-secondary-light dark:text-secondary-dark">{edu.location}</p>
              </div>
              {edu.gpa && (
                <p className="text-secondary-light dark:text-secondary-dark">GPA: {edu.gpa}</p>
              )}
              {edu.description && (
                <p className="text-secondary-light dark:text-secondary-dark mt-1">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      

      {/* Skills */}
      <div id="skills" className="mt-8">
        <h2 className="text-2xl font-heading font-semibold text-primary-light dark:text-primary-dark">
          Skills
        </h2>
        <div className="mt-4 flex flex-wrap">
          {portfolioData.skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded text-sm border border-border-light dark:border-border-dark mt-2 me-3 text-secondary-light dark:text-secondary-dark"
              >
                {Icon && <Icon className="text-xl" />}
                {skill.title}
              </span>
            );
          })}
        </div>
      </div>


      {/* Certifications */}
      <div id="awards-certifications" className="mt-8">
        <h2 className="text-2xl font-heading font-semibold text-primary-light dark:text-primary-dark">
          Certifications
        </h2>
        <div className="mt-4">
          <ul className="list-disc list-inside">
            {portfolioData.certifications.map((cert) => (
              <li
                key={cert.id}
                className="text-secondary-light dark:text-secondary-dark mb-2"
              >
                {cert.title} - ({cert.year}){" "}
                {cert.url && (
                  <Link
                    href={cert.url}
                    target="_blank"
                    className="px-2 py-1 text-primary-light dark:text-primary-dark text-sm hover:underline"
                  >
                    View Certificate <GoArrowUpRight className="inline-block" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
</div>


    </div>
  );
}
