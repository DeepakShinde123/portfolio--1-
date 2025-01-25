import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="container py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">About Me</h2>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <p className="text-muted-foreground">
            I'm a Full Stack Developer focused on building responsive and high-performance applications. With expertise
            in Next.js, TypeScript, and modern web technologies, I create innovative digital solutions that solve
            real-world problems and deliver seamless user experiences.
          </p>
          <p className="text-muted-foreground">
            With a focus on clean code and efficient development, I build dynamic and scalable applications that solve
            real-world challenges. I’m passionate about creating intuitive user interfaces and ensuring smooth
            functionality, all while leveraging the latest web technologies to deliver top-notch digital experiences.
            Let's turn your ideas into reality!
          </p>
        </CardContent>
      </Card>
    </section>
  )
}