import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LuCalendar, LuMapPin } from "react-icons/lu"
import { experiences } from "@/data/experience"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-5 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey through leading technology companies, building products that scale to millions of users.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-2 md:left-1.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6 md:space-x-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-6">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-elegant" />
                </div>
                
                <Card className="portfolio-card glow-on-hover flex-1">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                      <div className="space-y-1 flex items-center gap-3">
                        {exp.icon && (
                          <img
                            src={exp.icon}
                            alt={`${exp.company} logo`}
                            className="w-6 h-6 rounded-sm object-contain"
                            loading="lazy"
                          />
                        )}
                        <h3 className="text-2xl font-bold">{exp.company}</h3>
                        {exp.location && (
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <LuMapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Roles (multi-role) */}
                    {exp.roles ? (
                      <div className="space-y-6">
                        {exp.roles.map((role, i) => (
                          <div key={i} className="space-y-3">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                              <h4 className="text-xl font-semibold">{role.position}</h4>
                              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                <LuCalendar className="w-4 h-4" />
                                <span>{role.period}</span>
                              </div>
                            </div>
                            {role.description && (
                              <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                            )}
                            {role.achievements && (
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {role.achievements.map((ach, j) => (
                                  <li key={j}>{ach}</li>
                                ))}
                              </ul>
                            )}
                            {role.technologies && (
                              <div className="flex flex-wrap gap-2 pt-1">
                                {role.technologies.map((tech) => (
                                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </Card>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}