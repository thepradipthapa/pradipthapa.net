// components/Footer.tsx
"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMailPlus } from "react-icons/lu";

export default function Footer() {
  const items = [
    {
      Icon: LuMailPlus,
      href: "mailto:hello@pradipthapa.net",
      label: "Email",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/thepradipthapa",
      label: "GitHub",
    },
    {
      Icon: FaXTwitter,
      href: "https://x.com/thepradipthapa",
      label: "Twitter",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/thepradipthapa/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      aria-label="Footer social links"
      className="flex flex-col items-center justify-center py-8"
    >
      <ul className="flex space-x-10">
        {items.map(({ Icon, href, label }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="
                p-2 rounded
                text-secondary-light dark:text-secondary-dark
                hover:text-primary-light dark:hover:text-primary-dark
                focus:outline-none focus:ring-2 focus:ring-border-light dark:focus:ring-border-dark
                transition-colors
              "
            >
              <Icon className="text-xl" />
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-6 text-sm text-secondary-light dark:text-secondary-dark">
        © {new Date().getFullYear()} Pradip Thapa
      </p>
    </footer>
  );
}
