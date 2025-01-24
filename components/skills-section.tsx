"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "HtmlCss", icon: "/icons/html.svg" },
      { name: "Shadcn/ui", icon: "/icons/shadcn.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Notion", icon: "/icons/notion.svg" },
      { name: "Github", icon: "/icons/github.svg" },
      { name: "Parcel", icon: "/icons/parcel.svg" },
      { name: "Vite", icon: "/icons/vite.svg" },
    ],
  },
]

function SkillIcon({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 bg-black rounded-full p-2 transition-all duration-300 hover:scale-105 hover:bg-[#2A2A2A] hover:shadow-lg hover:shadow-black/25 w-full">
      <div className="w-8 h-8 rounded-full bg-[#333333] flex items-center justify-center transition-transform duration-300 hover:rotate-12 flex-shrink-0">
        <Image
          src={icon || "/placeholder.svg"}
          alt={name}
          width={20}
          height={20}
          className="w-5 h-5 transition-all duration-300 group-hover:scale-110"
        />
      </div>
      <span className="text-sm text-white pr-2 truncate">{name}</span>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Skills</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            className="bg-black border-none overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <CardContent className="p-6 bg-black">
              <h3 className="text-2xl font-bold text-white bg-black text-center mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-3 bg-black">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

