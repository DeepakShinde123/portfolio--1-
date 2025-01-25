import Image from "next/image"; // Ensure you're importing the right Image component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Untitled-Contact",
    description:
      "Features a contact form designed to collect user information, including name and email address. This form is intended for users to reach out or submit inquiries.",
    image: "/untitled.png", // Make sure this is a valid local path
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    demoLink: "https://untitled-ui.pages.dev/",
    githubLink: "https://github.com/DeepakShinde123/untitled-UI",
  },
  {
    title: "Fisker-Nextjs",
    description:
      "A collaborative task management application with real-time updates and team communication features.",
    image: "/fisker.png",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    demoLink: "https://fisker-nextjs-xi.vercel.app/",
    githubLink: "https://github.com/DeepakShinde123/fisker-nextjs",
  },
  {
    title: "Wakati-API",
    description:
      "Wakati API is an advanced text intelligence platform designed to analyze and calculate text scores with AI modules.",
    image: "/Wakati.png",
    technologies: ["Vue.js", "Python", "Flask", "SQLAlchemy"],
    demoLink: "https://wakati.ds3618037.workers.dev/",
    githubLink: "https://github.com/tiwakati/wakati",
  },
  {
    title: "Blog Platform",
    description:
      "A full-featured blog platform with user authentication, comment system, and markdown support.",
    image: "/blog-platform.png", // Add image
    technologies: ["Express.js", "MongoDB", "EJS", "Passport.js"],
    demoLink: "https://blog-platform-demo-link.com", // Add demo link
    githubLink: "https://github.com/yourusername/blog-platform",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <motion.h2
        className="mb-12 text-center text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden">
              {/* Using the correct Image component from next/image */}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full object-cover"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col justify-start gap-5">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.demoLink && (
                    <Button
                      variant="link"
                      asChild
                      size="sm"
                      className="flex-1 border dark:border-zinc-700 dark:bg-black dark:hover:bg-zinc-700"
                    >
                      <Link
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <FiExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="link"
                      asChild
                      size="sm"
                      className="flex-1 dark:hover:bg-zinc-700"
                    >
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border dark:border-zinc-700 dark:bg-black"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
