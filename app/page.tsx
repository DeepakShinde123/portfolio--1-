'use client';

import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

const SkillsSection = dynamic(() => import("@/components/skills-section").then((mod) => mod.SkillsSection), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

