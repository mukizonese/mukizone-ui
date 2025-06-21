"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeSwitch } from "./theme-switch"

export function Nav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/videos", label: "Recorded Videos" },
    { href: "/contacts", label: "Contacts" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-xl font-extrabold text-lg shadow hover:scale-105 transition-transform">
              MukiZone
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                    <span
                      className={`px-4 py-2 rounded-full font-bold text-lg transition duration-300 ease-in-out
                        ${
                          isActive
                            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                            : "text-gray-800 dark:text-gray-200 hover:text-purple-600"
                        }
                      `}
                    >
                      {item.label}
                    </span>

                </Link>
              )
            })}
          </div>

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  )
}
