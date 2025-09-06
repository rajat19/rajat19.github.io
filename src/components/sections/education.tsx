import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react"
import { education } from "@/data/education"

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that shaped my technical expertise and problem-solving approach.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 md:left-1.5 top-6 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start space-x-6 md:space-x-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0 mt-6">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-elegant" />
                </div>
                
                <Card className="portfolio-card glow-on-hover flex-1">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <p className="text-xl text-primary font-semibold">{edu.school}</p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <Award className="w-4 h-4 text-primary" />
                        <span>Achievements & Honors</span>
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center space-x-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span>Relevant Coursework</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <Badge key={course} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
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