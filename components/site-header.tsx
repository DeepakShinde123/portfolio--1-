import Link from "next/link"

import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MobileNav />
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center space-x-2">
            <Link href="/" className="font-bold px-2 py-1 text-foreground">
              Deepak Shinde
            </Link>
          </div>
          <MainNav />
          <div className="flex items-center space-x-2">
            <ThemeToggle className="ml-4" />
          </div>
        </div>
      </div>
    </header>
  )
}

