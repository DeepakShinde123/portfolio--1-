"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "#about",
      label: "About",
    },
    {
      href: "#skills",
      label: "Skills",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#contact",
      label: "Contact",
    },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-6 ml-auto justify-end">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === route.href ? "text-foreground" : "text-muted-foreground",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

