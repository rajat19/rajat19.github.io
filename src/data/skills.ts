import { Server, Database, Cloud } from "lucide-react";
import nodejsIcon from "@/assets/skills/node-dot-js.svg";
import javaIcon from "@/assets/skills/java.svg";
import pythonIcon from "@/assets/skills/python.svg";
import typescriptIcon from "@/assets/skills/typescript.svg";
import goIcon from "@/assets/skills/go.svg";
import mysqlIcon from "@/assets/skills/mysql.svg";
import mongodbIcon from "@/assets/skills/mongodb.svg";
import redisIcon from "@/assets/skills/redis.svg";
import cassandraIcon from "@/assets/skills/apachecassandra.svg";
import prometheusIcon from "@/assets/skills/prometheus.svg";
import aerospikeIcon from "@/assets/skills/aerospike.svg";
import kafkaIcon from "@/assets/skills/apachekafka.svg";
import stormIcon from "@/assets/skills/storm.svg";
import rabbitmqIcon from "@/assets/skills/rabbitmq.svg";
import herokuIcon from "@/assets/skills/heroku.svg";
import grafanaIcon from "@/assets/skills/grafana.svg";
import sparkIcon from "@/assets/skills/apachespark.svg";

export enum BackendSkills {
    NodeJS = "Node.js",
    Java = "Java",
    SpringBoot = "Spring Boot",
    Express = "Express.js",
    Koa = "Koa.js",
    Python = "Python",
    TypeScript = "TypeScript",
    Golang = "Golang",
    C = 'C',
    Cpp = 'C++',
    Ruby = "Ruby",
    PHP = "PHP",
    Laravel = "Laravel",
    CodeIgniter = "CodeIgniter",
    Flask = "Flask",
    Django = "Django",
    Android = "Android",
}

export enum FrontendSkills {
    React = "React",
    Angular = "Angular",
    Vue = "Vue.js",
    Svelte = "Svelte",
    NextJS = "Next.js",
    Astro = 'Astro',
    Jekyll = "Jekyll",
    Vite = "Vite",
    Tailwind = "Tailwind",
    Bootstrap = "Bootstrap",
    MarkoJS = "MarkoJS",
}

export enum DatabaseSkills {
    MySQL = "MySQL",
    Postgres = "Postgres",
    MongoDB = "MongoDB",
    Redis = "Redis",
    Cassandra = "Cassandra",
    Prometheus = "Prometheus",
    Firebase = "Firebase",
}

export enum ToolsSkills {
    OpenAI = "OpenAI",
    Gemini = "Gemini",
    Datadog = "Datadog",
    Kibana = "Kibana",
    Kafka = "Apache Kafka",
    Langsmith = "Langsmith",
    Storm = "Apache Storm",
    RabbitMQ = "RabbitMQ",
    Heroku = "Heroku",
    Grafana = "Grafana",
    Spark = "Apache Spark"
}

export const skillCategories = [
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: BackendSkills.NodeJS, level: 97, years: "5 years", icon: nodejsIcon },
        { name: BackendSkills.Java, level: 92, years: "4 years", icon: javaIcon },
        { name: BackendSkills.Python, level: 92, years: "4 years", icon: pythonIcon },
        { name: BackendSkills.TypeScript, level: 90, years: "3 years", icon: typescriptIcon },
        { name: BackendSkills.Golang, level: 80, years: "2 years", icon: goIcon }
      ]
    },
    {
      title: "Data Stores", 
      icon: Database,
      skills: [
        { name: DatabaseSkills.MySQL, level: 95, years: "5 years", icon: mysqlIcon },
        { name: DatabaseSkills.MongoDB, level: 92, years: "4 years", icon: mongodbIcon },
        { name: DatabaseSkills.Redis, level: 94, years: "4 years", icon: redisIcon },
        { name: DatabaseSkills.Cassandra, level: 85, years: "3 years", icon: cassandraIcon },
        { name: DatabaseSkills.Prometheus, level: 78, years: "2 years", icon: prometheusIcon },
        { name: DatabaseSkills.Firebase, level: 84, years: "2 years", icon: aerospikeIcon }
      ]
    },
    {
      title: "Tools & Skills",
      icon: Cloud, 
      skills: [
        { name: ToolsSkills.Kafka, level: 90, years: "4 years", icon: kafkaIcon },
        { name: ToolsSkills.Storm, level: 88, years: "3 years", icon: stormIcon },
        { name: ToolsSkills.RabbitMQ, level: 86, years: "3 years", icon: rabbitmqIcon },
        { name: ToolsSkills.Heroku, level: 89, years: "4 years", icon: herokuIcon },
        { name: ToolsSkills.Grafana, level: 86, years: "3 years", icon: grafanaIcon },
        { name: ToolsSkills.Spark, level: 79, years: "2 years", icon: sparkIcon },
        { name: ToolsSkills.Kibana, level: 81, years: "2 years", icon: "/src/assets/skills/kibana.svg" }
      ]
    }
  ] 