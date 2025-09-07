import { Server, Database, Cloud, Monitor } from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
import firebaseIcon from "@/assets/skills/firebase.svg";
import kafkaIcon from "@/assets/skills/apachekafka.svg";
import stormIcon from "@/assets/skills/storm.svg";
import rabbitmqIcon from "@/assets/skills/rabbitmq.svg";
import openaiIcon from "@/assets/skills/openai.svg";
import sparkIcon from "@/assets/skills/apachespark.svg";
import langgraphIcon from "@/assets/skills/langgraph.svg";
import datadogIcon from "@/assets/skills/datadog.svg";
import flaskIcon from "@/assets/skills/flask.svg";
import reactIcon from "@/assets/skills/react.svg";
import astroIcon from "@/assets/skills/astro.svg";
import jekyllIcon from "@/assets/skills/jekyll.svg";
import viteIcon from "@/assets/skills/vite.svg";
import nextjsIcon from "@/assets/skills/nextdotjs.svg";
import tailwindIcon from "@/assets/skills/tailwindcss.svg";
import bootstrapIcon from "@/assets/skills/bootstrap.svg";
import springBootIcon from "@/assets/skills/springboot.svg";

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
    Langgraph = "Langgraph",
    Datadog = "Datadog",
    Kafka = "Apache Kafka",
    Langsmith = "Langsmith",
    Storm = "Apache Storm",
    RabbitMQ = "RabbitMQ",
    Spark = "Apache Spark"
}

export interface ISkill {
    name: string;
    level: number;
    years: number;
    icon: string;
}

export interface ISkillCategory {
    title: string;
    icon: LucideIcon;
    skills: ISkill[];
}

export const skillCategories: ISkillCategory[] = [
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: BackendSkills.NodeJS, level: 97, years: 8, icon: nodejsIcon },
        { name: BackendSkills.TypeScript, level: 90, years: 7, icon: typescriptIcon },
        { name: BackendSkills.Java, level: 92, years: 8, icon: javaIcon },
        { name: BackendSkills.SpringBoot, level: 92, years: 3, icon: springBootIcon },
        { name: BackendSkills.Python, level: 92, years: 6, icon: pythonIcon },
        { name: BackendSkills.Flask, level: 92, years: 2, icon: flaskIcon },
        { name: BackendSkills.Golang, level: 80, years: 2, icon: goIcon }
      ]
    },
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        { name: FrontendSkills.React, level: 97, years: 6, icon: reactIcon },
        { name: FrontendSkills.NextJS, level: 84, years: 1, icon: nextjsIcon },
        { name: FrontendSkills.Astro, level: 80, years: 1, icon: astroIcon },
        { name: FrontendSkills.Jekyll, level: 90, years: 5, icon: jekyllIcon },
        { name: FrontendSkills.Tailwind, level: 92, years: 1, icon: tailwindIcon },
        { name: FrontendSkills.Bootstrap, level: 85, years: 1, icon: bootstrapIcon },
      ]
    },
    {
      title: "Data Stores", 
      icon: Database,
      skills: [
        { name: DatabaseSkills.MySQL, level: 95, years: 5, icon: mysqlIcon },
        { name: DatabaseSkills.MongoDB, level: 92, years: 6, icon: mongodbIcon },
        { name: DatabaseSkills.Redis, level: 94, years: 8, icon: redisIcon },
        { name: DatabaseSkills.Cassandra, level: 85, years: 3, icon: cassandraIcon },
        { name: DatabaseSkills.Prometheus, level: 78, years: 2, icon: prometheusIcon },
        { name: DatabaseSkills.Firebase, level: 84, years: 4, icon: firebaseIcon }
      ]
    },
    {
      title: "Tools & Skills",
      icon: Cloud,
      skills: [
        { name: ToolsSkills.Kafka, level: 90, years: 7, icon: kafkaIcon },
        { name: ToolsSkills.Storm, level: 88, years: 3, icon: stormIcon },
        { name: ToolsSkills.RabbitMQ, level: 86, years: 5, icon: rabbitmqIcon },
        { name: ToolsSkills.Spark, level: 79, years: 5, icon: sparkIcon },
        { name: ToolsSkills.OpenAI, level: 85, years: 1, icon: openaiIcon },
        { name: ToolsSkills.Langgraph, level: 80, years: 1, icon: langgraphIcon },
        { name: ToolsSkills.Datadog, level: 86, years: 6, icon: datadogIcon }
      ]
    }
]