"use client";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import { siteMap } from "@/lib/config/site-config";

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
      <ul className="flex space-x-6 px-10 py-3 bg-dark opacity-75 rounded-full border">
        {items.map((item)=> (
          <li key={item.title}>
            <Link href={item.href} className={`shadow ${pathname === item.href ? "text-gray-50" : "text-gray-400"}`} >
            {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <button className="text-dark bg-stone-50 rounded-4xl px-3">Light</button>
    </nav>
  )
}
