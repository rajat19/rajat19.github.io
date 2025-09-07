import { BackendSkills, DatabaseSkills, FrontendSkills, ToolsSkills } from "@/data/skills";

export interface ExperienceRole {
  position: string;
  period: string;
  description?: string;
  achievements?: string[];
  technologies?: (BackendSkills | DatabaseSkills | ToolsSkills | FrontendSkills)[];
}

export interface ExperienceCompany {
  company: string;
  location?: string;
  icon?: string;
  roles: ExperienceRole[];
}

export const experiences: ExperienceCompany[] = [
  {
    company: "Indeed.com",
    location: "Hyderabad, India",
    icon: "https://www.indeed.com/favicon.ico",
    roles: [
      {
        position: "Staff Software Engineer",
        period: "May 2024 - Present",
        description:
          "Leading high-impact initiatives across cross-functional teams in the Employer Org",
        achievements: [
          "Led development effort of building recommendation system for Indeed Talent Scout",
          "Led team of 7 engineers, guiding them on the project and providing technical guidance",
          "Drive Backlog grooming and sprint planning for the team",
          "Mentored engineers and drove engineering excellence",
        ],
        technologies: [
          BackendSkills.Java, 
          BackendSkills.SpringBoot,
          BackendSkills.Python,
          FrontendSkills.React,
          DatabaseSkills.MongoDB,
          ToolsSkills.OpenAI,
        ],
      },
      {
        position: "Senior Software Engineer",
        period: "May 2022 - Apr 2024",
        description:
          "Worked with International business unit on Indian market for low skilled groups",
        achievements: [
          "Mentored and led a team of 5 engineers to successfully complete multiple crucial projects built over Java, React, Kafka and Python",
          "Spearheaded engineering excellence efforts to enhance code quality and system efficiency",
          "Designed and Developed the Indian language detection and indexing module for jobs on Indeed using n-grams probabilistic models",
        ],
        technologies: [
          BackendSkills.Java, 
          BackendSkills.SpringBoot,
          FrontendSkills.React,
          DatabaseSkills.MongoDB,
          ToolsSkills.Kafka,
        ],
      },
    ],
  },
  {
    company: "Myntra",
    location: "Bangalore, India",
    icon: "https://www.myntra.com/favicon.ico",
    roles: [
      {
        position: "Senior Software Engineer",
        period: "Aug 2021 - Apr 2022",
        description:
          "Working with storefront team that handles all the traffic for myntra",
        achievements: [
          "Optimized storefront performance handling millions of concurrent users",
          "Implemented caching strategies reducing page load times",
          "Enhanced product discovery and recommendation systems",
        ],
        technologies: [
          BackendSkills.Golang,
          DatabaseSkills.Redis,
          DatabaseSkills.Postgres,
        ],
      },
    ],
  },
  {
    company: "Paytm",
    location: "Noida, India",
    icon: "https://www.paytm.com/favicon.ico",
    roles: [
      {
        position: "Senior Software Engineer",
        period: "Dec 2020 - Jul 2021",
        description: "Worked with multi-tiered reward team of paytm",
        achievements: [
          "Designed and implemented reward distribution systems",
          "Built cashback and scratch card features",
          "Received Paytm Rockstar award for top performance",
        ],
        technologies: [
          BackendSkills.NodeJS,
          BackendSkills.Java,
          DatabaseSkills.MySQL,
          DatabaseSkills.MongoDB,
          DatabaseSkills.Cassandra,
          DatabaseSkills.Redis,
          ToolsSkills.Kafka,
          ToolsSkills.Storm,
        ],
      },
      {
        position: "Software Engineer",
        period: "Aug 2018 - Dec 2020",
        description: "Worked with multi-tiered reward team of paytm",
        achievements: [
          "Developed core reward engine handling millions of transactions",
          "Implemented fraud detection mechanisms for reward systems",
          "Contributed to system architecture decisions",
        ],
        technologies: [
          BackendSkills.NodeJS,
          BackendSkills.Java,
          DatabaseSkills.MySQL,
          ToolsSkills.Kafka,
          ToolsSkills.Storm,
        ],
      },
    ],
  },
  {
    company: "Smartprix",
    location: "Noida, India",
    icon: "https://smartprix.com/favicon.ico",
    roles: [
      {
        position: "Software Developer",
        period: "Jun 2017 - Aug 2018",
        description:
          "Worked on various projects using node js, vue js and other new technologies",
        achievements: [
          "Built price comparison engine for consumer electronics",
          "Developed mobile app for Smartprix platform",
          "Implemented real-time price tracking systems",
        ],
        technologies: [
          BackendSkills.NodeJS,
          FrontendSkills.MarkoJS,
          FrontendSkills.Vue,
          BackendSkills.PHP,
          DatabaseSkills.Postgres,
        ],
      },
    ],
  },
];


