import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"
import { projects } from "@/data/projects"

// Resolve project images via Vite glob import with fallback
const projectImages = import.meta.glob("/src/assets/projects/*.{png,jpg,jpeg,webp}", { eager: true, import: "default" }) as Record<string, string>
const resolveProjectImage = (imageName: string): string => {
  const candidates = [
    `/src/assets/projects/${imageName}.png`,
    `/src/assets/projects/${imageName}.jpg`,
    `/src/assets/projects/${imageName}.jpeg`,
    `/src/assets/projects/${imageName}.webp`,
  ]
  for (const path of candidates) {
    if (projectImages[path]) return projectImages[path]
  }
  return "/placeholder.svg"
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-5 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of complex, scalable applications that demonstrate my expertise in full-stack development and system architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card glow-on-hover overflow-hidden group h-full flex flex-col relative">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden flex items-center justify-center">
                <img
                  src={resolveProjectImage(project.image)}
                  alt={project.title}
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                {project.metrics && (
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      <Star className="w-3 h-3 mr-1" />
                      {project.metrics.stars}
                    </Badge>
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      <GitFork className="w-3 h-3 mr-1" />
                      {project.metrics.forks}
                    </Badge>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4 flex flex-col pb-16">
                {/* Title and Description */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Tech Stack</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs border-primary/20 text-primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Organization */}
                {project.organization && (
                    <div className="text-sm text-muted-foreground">
                      <span>For </span>
                      <a
                        href={project.organization.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        {project.organization.name}
                      </a>
                    </div>
                )}

                {/* Metrics */}
                {project.metrics && (
                    <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                      <span>{project.metrics.users} users</span>
                      <div className="flex space-x-4">
                    <span className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span>{project.metrics.stars}</span>
                    </span>
                        <span className="flex items-center space-x-1">
                      <GitFork className="w-3 h-3" />
                      <span>{project.metrics.forks}</span>
                    </span>
                      </div>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2 absolute inset-x-6 bottom-6">
                  {project.links.live && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                  )}
                  { project.links.github && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={`https://github.com/${project.links.github}`} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}