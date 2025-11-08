/* eslint-disable react/no-unescaped-entities */
// "use client";

import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";

export default function Home() {
  return (
    <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
      <div className="flex flex-col pb-6">
        <h1 className="text-3xl font-heading font-semibold mb-2 text-primary-light dark:text-primary-dark">
          Hey, I'm Pradip Thapa 👋
        </h1>
        <p className="text-secondary-light dark:text-secondary-dark">
          I’m an aspiring Backend Developer focused on building reliable,
          scalable, and maintainable systems. I mainly work with Python, Django,
          Django REST Framework (DRF), and FastAPI to build systems. I enjoy
          solving practical problems by breaking complex challenges into smaller,
          manageable pieces and turning those solutions into production‑ready
          systems.
        </p>
      </div>

      {/* Dynamic Sections */}
      {chunks.map((item) => (
        <div key={item.title} className="flex flex-col gap-3 py-6">
          <h2 className="text-2xl font-heading font-semibold text-primary-light dark:text-primary-dark">{item.title}</h2>
          <div className="text-secondary-light dark:text-secondary-dark">{item.content}</div>
        </div>
      ))}
    </div>
  );
}

// Content
export const chunks = [
  {
    title: "Education & Expertise",
    content: (
      <div className="flex flex-col gap-2">
        <p className="">
          I am pursuing a Bachelor of Computer Science at Banke Bageshwori
          Campus, Nepalgunj, Nepal, combining theoretical knowledge with
          practical backend development skills.
        </p>
        <p className="">
          My expertise includes API design, database management, full‑stack
          development with Django, JWT‑based authentication for web security,
          and containerizing applications with Docker. I follow production‑grade
          practices to build reliable, scalable, and maintainable systems, and I
          enjoy tackling complex problems by breaking them into manageable
          components.
        </p>
      </div>
    ),
  },
  {
    title: "Learning & Mentorship",
    content: (
      <p className="">
        I’m continuously expanding my knowledge in backend development, system
        design, clean code, and database, with a focus on building systems that
        are reliable, scalable, and maintainable. I primarily follow official
        documentation to learn and stay up to date, gaining a deep understanding
        of the stack, and I also learn from my favorite YouTube educators. I
        also enjoy sharing my learning and experiences with others, mentoring
        beginners in backend development to help them understand concepts and
        grow into confident backend developers.
      </p>
    ),
  },
  {
    title: "Personal Interests",
    content: (
      <p className="">
        Beyond work, I enjoy exploring topics in technology, reading about
        personal development, watching movies and live games matches. I’m also
        passionate about learning new skills to expand my horizons.
      </p>
    ),
  },
  {
    title: "Get in Touch",
    content: (
      <div className="flex flex-col gap-3">
        <p className="">
          I'm always open to discussing backend development and opportunities as
          a backend developer.
        </p>
        <Link
          href="https://github.com/thepradipthapa"
          target="_blank"
          className="flex items-center gap-2  hover:underline focus:outline-none"
        >
          <GoArrowUpRight />
          Visit my GitHub
        </Link>
        <Link
          href="mailto:hello@pradipthapa.net"
          target="_blank"
          className="flex items-center gap-2  hover:underline focus:outline-none"
        >
          <CiMail />
          hello@pradipthapa.net
        </Link>
      </div>
    ),
  },
];
