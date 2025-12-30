/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import { IoLogoGithub, IoMdMail } from "react-icons/io";

export default function Home() {
  return (
    <section className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
      
      {/* Hero / Intro */}
      <div className="pb-8">
        <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-primary-light dark:text-primary-dark">
          Hey, I'm Pradip Thapa 👋
        </h1>

        <p className="mt-3 max-w-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
          Backend developer who practices backend-first principles and writes thoughtful code.
          When I’m not building with Python, Django, or FastAPI, you’ll find me diving into the
          internals of backend systems, exploring other codebases, or learning new skills.
        </p>
      </div>

      {/* Dynamic Sections */}
      {chunks.map((item) => (
        <section
          key={item.title}
          className="py-8 flex flex-col gap-3"
        >
          <h2 className="text-2xl font-heading font-semibold text-primary-light dark:text-primary-dark">
            {item.title}
          </h2>

          <div className="max-w-2xl text-secondary-light dark:text-secondary-dark leading-relaxed">
            {item.content}
          </div>
        </section>
      ))}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                    Content                                 */
/* -------------------------------------------------------------------------- */

export const chunks = [
  {
    title: "Intro",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          I’m a software engineer who cares deeply about writing thoughtful code.
          I like to build things from first principles. When I started learning backend
          development, I began by tracing the journey of a single HTTP request and
          understanding how data actually flows through a system.
        </p>

        <p>
          For me, backend development isn’t just about APIs. It’s about building systems
          that are reliable today, maintainable tomorrow, and scalable when needed.
          It’s about understanding the problem, designing simple solutions, and building
          something that makes a real impact.
        </p>
      </div>
    ),
  },

  {
    title: "Education & Expertise",
    content: (
      <div className="flex flex-col gap-3">
        <p>
          I’m currently pursuing a Bachelor of Computer Science at Banke Bageshwori Campus,
          Nepalgunj, Nepal. Alongside my studies, I spend most of my time building backend
          projects and learning how real-world systems are designed.
        </p>

        <p>
          I’ve gained hands-on experience with Python, Django, Django REST Framework, and
          FastAPI—designing REST APIs, working with PostgreSQL and Redis, implementing
          authentication and authorization, and containerizing applications with Docker.
          My focus is always on reliability, maintainability, and scalability.
        </p>
      </div>
    ),
  },

  {
    title: "Get in Touch",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          I’m always happy to talk about backend development, system design,
          or potential opportunities.
        </p>

        <div className="flex flex-col gap-2">
          <Link
            href="https://github.com/thepradipthapa"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary-light dark:text-primary-dark
            hover:underline focus:outline-none"
          >
            <IoLogoGithub />
            git me
          </Link>

          <Link
            href="mailto:hello@pradipthapa.net"
            className="inline-flex items-center gap-2 text-primary-light dark:text-primary-dark
            hover:underline focus:outline-none"
          >
            <IoMdMail  />
            hello@pradipthapa.net
          </Link>
        </div>
      </div>
    ),
  },
];
