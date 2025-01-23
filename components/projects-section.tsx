import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: ["Next.js", "TypeScript", "Firebase"],
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that provides real-time weather information for multiple locations.",
    technologies: ["React", "Redux", "OpenWeatherMap API"],
    link: "https://github.com/yourusername/weather-dashboard",
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with user authentication, comment system, and markdown support.",
    technologies: ["Express.js", "MongoDB", "EJS", "Passport.js"],
    link: "https://github.com/yourusername/blog-platform",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 p-4">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  <ExternalLink size={20} />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

