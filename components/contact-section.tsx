import { Mail, Phone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section id="contact" className="container py-12 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 p-4">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2 h-4 w-4" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">deepak@phleebs.tech</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="mr-2 h-4 w-4" /> Phone
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">+91 8652295380</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

