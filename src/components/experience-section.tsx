import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, TrendingUp } from "lucide-react"

const experiences = [
  {
    company: "Indeed.com",
    position: "Senior Software Engineer",
    period: "May 2022 - Present",
    location: "Remote",
    description: "Working with International business unit on Indian market for low skilled groups",
    achievements: [
      "Built scalable backend systems for international market expansion",
      "Optimized job matching algorithms for low-skilled worker segments",
      "Collaborated with cross-functional teams to enhance user experience"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "AWS", "Microservices"]
  },
  {
    company: "Myntra",
    position: "Senior Software Engineer", 
    period: "Aug 2021 - Apr 2022",
    location: "Bangalore, India",
    description: "Working with storefront team that handles all the traffic for myntra",
    achievements: [
      "Optimized storefront performance handling millions of concurrent users",
      "Implemented caching strategies reducing page load times",
      "Enhanced product discovery and recommendation systems"
    ],
    technologies: ["Java", "Spring", "Redis", "MySQL", "Kafka"]
  },
  {
    company: "Paytm",
    position: "Senior Software Engineer",
    period: "Dec 2020 - Jul 2021", 
    location: "Noida, India",
    description: "Worked with multi-tiered reward team of paytm",
    achievements: [
      "Designed and implemented reward distribution systems",
      "Built cashback and scratch card features",
      "Received Paytm Rockstar award for top performance"
    ],
    technologies: ["Node.js", "Java", "MongoDB", "Redis", "Kafka"]
  },
  {
    company: "Paytm",
    position: "Software Engineer",
    period: "Aug 2018 - Dec 2020",
    location: "Noida, India", 
    description: "Worked with multi-tiered reward team of paytm",
    achievements: [
      "Developed core reward engine handling millions of transactions",
      "Implemented fraud detection mechanisms for reward systems",
      "Contributed to system architecture decisions"
    ],
    technologies: ["Node.js", "Java", "MongoDB", "MySQL", "Microservices"]
  },
  {
    company: "Smartprix",
    position: "Software Developer",
    period: "Jun 2017 - Aug 2018",
    location: "Jaipur, India",
    description: "Worked on various projects using node js, vue js and other new technologies",
    achievements: [
      "Built price comparison engine for consumer electronics",
      "Developed mobile app for Smartprix platform", 
      "Implemented real-time price tracking systems"
    ],
    technologies: ["Node.js", "Vue.js", "PHP", "MySQL", "Android"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{exp.position}</h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>Key Achievements</span>
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        {tech}
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