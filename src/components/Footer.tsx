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
      href: "mailto:#",
      title: "Email",
    },
    {
      Icon: FaGithub,
      href: "https://github.com/thepradipthapa",
      title: "Github",
    },
    {
      Icon: FaXTwitter,
      href: "https://x.com/thepradipthapa",
      title: "Twitter",
    },
    {
      Icon: FaLinkedin,
      href: "https://www.linkedin.com/in/thepradipthapa/",
      title: "LinkedIn",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center py-6">
      <ul className="flex space-x-8 mb-4">
        {items.map(({ Icon, href, title }) => (
          <li key={title}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded hover:text-emerald-500 transition-colors text-gray-300"
            >
              <Icon size={28} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
