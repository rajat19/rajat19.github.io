import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { skillCategories } from "@/data/skills"
import { certifications } from "@/data/certifications"

export function SkillsSection() {
  return (
    <section id="skills" className="py-5 md:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, leadership experience, and professional certifications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="portfolio-card glow-on-hover">
              <div className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">{skill.years}</span>
                          <Badge variant="outline" className="text-xs border-primary/20 text-primary">
                            {skill.level}%
                          </Badge>
                        </div>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="portfolio-card">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Professional Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-colors duration-300"
                >
                  <p className="font-medium text-center">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}