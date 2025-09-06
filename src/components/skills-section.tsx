import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Server, Database, Cloud, Smartphone, Users } from "lucide-react"

// Import skill icons
import nodejsIcon from "@/assets/skills/node-dot-js.svg"
import javaIcon from "@/assets/skills/java.svg"
import pythonIcon from "@/assets/skills/python.svg"
import typescriptIcon from "@/assets/skills/typescript.svg"
import goIcon from "@/assets/skills/go.svg"
import mysqlIcon from "@/assets/skills/mysql.svg"
import mongodbIcon from "@/assets/skills/mongodb.svg"
import redisIcon from "@/assets/skills/redis.svg"
import cassandraIcon from "@/assets/skills/apachecassandra.svg"
import prometheusIcon from "@/assets/skills/prometheus.svg"
import aerospikeIcon from "@/assets/skills/aerospike.svg"
import kafkaIcon from "@/assets/skills/apachekafka.svg"
import stormIcon from "@/assets/skills/storm.svg"
import rabbitmqIcon from "@/assets/skills/rabbitmq.svg"
import herokuIcon from "@/assets/skills/heroku.svg"
import grafanaIcon from "@/assets/skills/grafana.svg"
import sparkIcon from "@/assets/skills/apachespark.svg"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 97, years: "5 years", icon: nodejsIcon },
      { name: "Java Spring", level: 92, years: "4 years", icon: javaIcon },
      { name: "Python", level: 92, years: "4 years", icon: pythonIcon },
      { name: "TypeScript", level: 90, years: "3 years", icon: typescriptIcon },
      { name: "Golang", level: 80, years: "2 years", icon: goIcon }
    ]
  },
  {
    title: "Data Stores", 
    icon: Database,
    skills: [
      { name: "MySQL", level: 95, years: "5 years", icon: mysqlIcon },
      { name: "MongoDB", level: 92, years: "4 years", icon: mongodbIcon },
      { name: "Redis", level: 94, years: "4 years", icon: redisIcon },
      { name: "Cassandra", level: 85, years: "3 years", icon: cassandraIcon },
      { name: "Prometheus", level: 78, years: "2 years", icon: prometheusIcon },
      { name: "Aerospike", level: 84, years: "2 years", icon: aerospikeIcon }
    ]
  },
  {
    title: "Tools & Skills",
    icon: Cloud, 
    skills: [
      { name: "Apache Kafka", level: 90, years: "4 years", icon: kafkaIcon },
      { name: "Apache Storm", level: 88, years: "3 years", icon: stormIcon },
      { name: "RabbitMQ", level: 86, years: "3 years", icon: rabbitmqIcon },
      { name: "Heroku", level: 89, years: "4 years", icon: herokuIcon },
      { name: "Grafana", level: 86, years: "3 years", icon: grafanaIcon },
      { name: "Apache Spark", level: 79, years: "2 years", icon: sparkIcon },
      { name: "Kibana", level: 81, years: "2 years", icon: "/src/assets/skills/kibana.svg" }
    ]
  }
]

const certifications = [
  "Paytm Rockstar Award (2019, 2020)",
  "Letter of Appreciation from Governor of UP (2016)",
  "Open Source Contributor",
  "Research & Development Experience"
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
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