"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
  );
}
