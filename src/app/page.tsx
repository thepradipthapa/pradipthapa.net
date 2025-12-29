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
        Backend developer who practices backend first principles and writes thoughtful code. When I’m not building with Python, Django, or FastAPI, you’ll find me diving into the internals of backend systems, exploring other codebases or learning new skills to expand my horizons.
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
    title: "Intro",
    content: (
      <div className="flex flex-col gap-2">
        <p className="">
          I’m a software engineer who cares deeply about writing thoughtful code. I like to build things from first principles. When I started learning backend development, I began by tracing the journey of a single HTTP request and understanding how data actually flows through a system.
        </p>
        <p className="">
          For me, backend development isn’t just about APIs. It’s about building systems that are reliable today, maintainable tomorrow, and scalable when needed. It’s about understanding the problem, designing simple and elegant solutions, and building something that makes a real impact.
        </p>
      </div>
    ),
  },

  {
    title: "Education & Expertise",
    content: (
      <div className="flex flex-col gap-2">
        <p className="">
          I’m currently pursuing a Bachelor of Computer Science at Banke Bageshwori Campus, Nepalgunj, Nepal. Alongside my studies, I spend most of my time building backend projects and exploring how real-world systems are designed.
        </p>
        <p className="">
          Over time, I’ve gained hands-on experience with Python, Django, Django REST Framework, and FastAPI, designing REST APIs and backend architectures, working with databases like PostgreSQL and Redis, implementing authentication and authorization, and containerizing applications with Docker. I focus on building systems that are reliable, maintainable, and scalable, while constantly improving my understanding of backend development from first principles.
        </p>
      </div>
    ),
  },
  {
    title: "Get in Touch",
    content: (
      <div className="flex flex-col gap-3">
        <p className="">
          I’m always happy to talk about backend development or potential opportunities. 
          Feel free to reach out!
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
