"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteMap } from "@/lib/config/site-config";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { title: "Home", href: siteMap.home },
  { title: "Projects", href: siteMap.projects },
  { title: "Resume", href: siteMap.resume },
  { title: "Blog", href: siteMap.blog },
  { title: "Contact", href: siteMap.contact },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between py-6" aria-label="Main navigation">
      {/* Navigation */}
      <ul className="flex items-center gap-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`
                  relative text-base font-medium transition-colors
                  ${
                    isActive
                      ? "text-primary-light dark:text-primary-dark after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-current"
                      : "text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark"
                  }
                `}

              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Theme Toggle */}
      <ThemeToggle />
    </nav>
  );
}
