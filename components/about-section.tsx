import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 p-4">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle>Passionate Full Stack Developer</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-muted-foreground">
            I am a dedicated full stack developer with expertise in the MERN (MongoDB, Express.js, React, Node.js) stack. 
            With a strong foundation in both front-end and back-end development, I create seamless web applications that 
            deliver exceptional user experiences.
          </p>
          <p className="text-muted-foreground">
            Throughout my journey, I've completed several certifications and built multiple projects that showcase my 
            skills in modern web development technologies. I'm passionate about writing clean, efficient code and staying 
            up-to-date with the latest industry trends.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

