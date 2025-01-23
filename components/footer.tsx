import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">deepak.shinde@example.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Deepak Shinde. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

