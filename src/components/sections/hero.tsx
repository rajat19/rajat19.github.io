import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import profilePhoto from "@/assets/profile.png"
import resumePdf from "@/assets/pdf/RajatResume.pdf"

const socialLinks = [
  { icon: Github, href: "https://github.com/rajat19", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajatsriv19", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/evilj0ker", label: "Twitter" },
  { icon: Mail, href: "mailto:rajatsri94@gmail.com", label: "Email" },
]

export function HeroSection() {
  const displayText = "Staff Software Engineer"

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-glow/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img
                src={profilePhoto} 
                alt="Rajat Srivastava" 
                className="w-32 h-32 rounded-full border-4 border-primary/20 shadow-elegant hover:shadow-glow transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Rajat Srivastava</span>
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent min-h-[1.2em]">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Highly effective software developer offering a wealth of more than 8+ years of relevant expertise.
              A valuable team player who also is personable and dedicated.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="hero-button group" asChild>
              <a href={resumePdf} download>
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" className="px-8 py-4 rounded-xl border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-4 pt-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link group"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}