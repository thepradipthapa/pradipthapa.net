"use client";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import { siteMap } from "@/lib/config/site-config";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname()

  const items = [
    {
      title: 'Home',
      href: siteMap.home,
    },
    {
      title: 'Resume',
      href: siteMap.resume,
    },
    {
      title: 'Blog',
      href: siteMap.blog,
    },
    {
      title: 'Projects',
      href: siteMap.projects,
    },
    {
      title: 'Contact',
      href: siteMap.contact,
    },
  ]
  return (
    <nav className="flex items-center justify-between py-4 text-lg font-body mt-4">
      <ul className="flex space-x-6">
        {items.map((item)=> (
          <li key={item.title}>
            <Link href={item.href} className={` ${pathname === item.href ? "text-primary-light dark:text-primary-dark" : "text-secondary-light dark:text-secondary-dark"}`} >
            {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <ThemeToggle/>
    </nav>
  )
}
