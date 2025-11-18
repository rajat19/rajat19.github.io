import {BackendSkills, DatabaseSkills, FrontendSkills, ToolsSkills} from "@/data/skills.ts";

export interface IProjectLinks {
    live?: string;
    github?: string;
}

export interface IProjectMetrics {
    users?: string;
    stars?: number;
    forks?: number;
}

export interface IProjectOrganization {
    name: string;
    link: string;
}

export type ProjectFilter = 'web-py' | 'web-js' | 'web-jekyll' | 'web-java' | 'web-php' | 'android';

export interface IProject {
    title: string;
    description?: string;
    image: string;
    filters: ProjectFilter[];
    skills: (BackendSkills | DatabaseSkills | ToolsSkills | FrontendSkills)[];
    metrics?: IProjectMetrics;
    links: IProjectLinks;
    organization?: IProjectOrganization;
}

export const projects: IProject[] = [
    {
        title: 'My Wedding Website',
        description: 'Website for my wedding events',
        image: 'wedding',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.React,
            FrontendSkills.Tailwind,
            FrontendSkills.Vite,
            DatabaseSkills.Firebase,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/wedding/',
            github: 'rajat19/wedding',
        }
    },
    {
        title: 'Wander Weather',
        description: 'A map based webapp that shows users the best places to visit, temperature and rainfall data for selected country and month.',
        image: 'wander-weather',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.React,
            FrontendSkills.Tailwind,
            DatabaseSkills.Firebase,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/wander-weather/',
            github: 'rajat19/wander-weather',
        }
    },
    {
        title: 'Cracking Interview',
        description: 'A webapp that helps users prepare for interviews by providing interview questions and answers.',
        image: 'cracking-interview',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.NextJS,
            FrontendSkills.Tailwind,
            FrontendSkills.Vite,
            DatabaseSkills.Firebase,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/cracking-interview/',
            github: 'rajat19/cracking-interview',
        }
    },
    {
        title: 'SplitBill',
        description: 'An alternative to Splitwise that allows you to split bills with your friends and family.',
        image: 'splitbill',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.React,
            FrontendSkills.Tailwind,
            FrontendSkills.Vite,
            DatabaseSkills.Firebase,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://geek-paradox.github.io/split-bill/',
            github: 'geek-paradox/split-bill',
        }
    },
    {
        title: 'Torrent Crawler',
        image: 'torrent-crawler',
        description: 'A web crawler that scrapes torrent metadata from various sources and provides a searchable interface for users.',
        skills: [
            BackendSkills.Python,
        ],
        filters: ['web-py'],
        links: {
            live: 'https://rajat19.github.io/torrent-crawler/',
            github: 'rajat19/torrent-crawler',
        }
    },
    {
        title: 'Portfolio',
        image: 'portfolio',
        description: 'My personal portfolio showcasing my projects, skills, and experiences.',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.React,
            FrontendSkills.Tailwind,
            FrontendSkills.Vite,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/',
            github: 'rajat19/rajat19.github.io',
        }
    },
    {
        title: 'Hackerrank Solutions Crawler',
        image: 'hackerrank-crawler',
        description: 'A web crawler that scrapes solutions to Hackerrank problems and provides a searchable interface for users.',
        skills: [
            BackendSkills.Python,
        ],
        filters: ['web-py'],
        links: {
            live: 'https://nullifiers.github.io/Hackerrank-Solution-Crawler/',
            github: 'nullifiers/Hackerrank-Solution-Crawler',
        },
    },
    {
        title: 'System Design',
        image: 'system-design',
        description: 'A comprehensive guide to system design concepts, patterns, and best practices, presented in a user-friendly format.',
        skills: [
            BackendSkills.Java,
            FrontendSkills.Jekyll,
            BackendSkills.Python,
        ],
        filters: ['web-py', 'web-jekyll', 'web-java'],
        links: {
            live: 'https://rajat19.github.io/system-design/',
            github: 'rajat19/system-design',
        }
    },
    {
        title: 'Interview Questions',
        image: 'interview-questions',
        description: 'A curated collection of interview questions and answers across various domains, designed to help candidates prepare effectively.',
        skills: [
            FrontendSkills.Jekyll,
            BackendSkills.Ruby,
        ],
        filters: ['web-jekyll'],
        links: {
            live: 'https://rajat19.github.io/interview-questions/',
            github: 'rajat19/interview-questions',
        }
    },
    {
        title: 'Medical Portfolio',
        description: 'A webapp that generates a portfolio for doctors and clinics.',
        image: 'med-portfolio',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.NextJS,
            FrontendSkills.Tailwind,
            DatabaseSkills.Firebase,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/med-portfolio-studio/',
            github: 'rajat19/med-portfolio-studio',
        }
    },
    {
        title: 'Card Assist',
        description: 'A webapp that compares and discovers best card for your use case',
        image: 'card-assist',
        skills: [
            BackendSkills.TypeScript,
            FrontendSkills.React,
            DatabaseSkills.Firebase,
            ToolsSkills.Gemini,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/card-assist/',
            github: 'rajat19/card-assist',
        }
    },
    {
        title: 'Jsniper',
        description: 'Basic templating script to start your coding with typescript/javascript',
        image: 'jsniper',
        skills: [
            BackendSkills.TypeScript,
            BackendSkills.NodeJS,
        ],
        filters: ['web-js'],
        links: {
            live: 'https://rajat19.github.io/jsniper/',
            github: 'rajat19/jsniper',
        }
    },
    // {
    //     title: 'Indeed Talent Scout',
    //     description: 'OpenAI and Langchain based AI assistant that helps you find the best candidates for your job openings.',
    //     image: 'talent-scout',
    //     skills: [
    //         BackendSkills.Python,
    //         BackendSkills.TypeScript,
    //         FrontendSkills.React,
    //         ToolsSkills.Datadog,
    //         ToolsSkills.OpenAI,
    //         ToolsSkills.Langsmith,
    //     ],
    //     filters: ['web-py', 'web-js'],
    //     links: {
    //         live: 'https://employers.indeed.com',
    //     },
    //     organization: {
    //         name: "Indeed",
    //         link: "https://indeed.com"
    //     }
    // },
    {
        title: "Paytm Cashback Offers",
        description: "Multi-tiered reward system handling millions of transactions daily with real-time cashback distribution and fraud detection.",
        image: "paytm-supercash",
        skills: [
            BackendSkills.NodeJS,
            BackendSkills.Java,
            DatabaseSkills.MongoDB,
            DatabaseSkills.Redis,
            ToolsSkills.Kafka,
        ],
        filters: ["android"],
        links: {
            live: "https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN"
        },
        organization: {
            name: "Paytm",
            link: "https://paytm.com"
        }
    },
    {
        title: "Paytm Scratch Card",
        description: "Interactive scratch card rewards system with dynamic prize allocation and user engagement analytics.",
        image: "paytm-scratch",
        skills: [
            BackendSkills.NodeJS,
            BackendSkills.Java,
            DatabaseSkills.MongoDB,
            DatabaseSkills.Redis,
            ToolsSkills.Kafka,
            ToolsSkills.Storm,
        ],
        filters: ["android"],
        links: {
            live: "https://play.google.com/store/apps/details?id=net.one97.paytm&hl=en_IN"
        },
        organization: {
            name: "Paytm",
            link: "https://paytm.com"
        }
    },
    {
        title: "Smartprix International",
        description: "Global price comparison platform with multi-currency support and international shipping options.",
        image: "smartprix-intl",
        skills: [
            BackendSkills.NodeJS,
            FrontendSkills.React,
            DatabaseSkills.MySQL,
        ],
        filters: ['web-js'],
        links: {
            live: "https://smartprix.com",
        },
        organization: {
            name: "Smartprix",
            link: "https://smartprix.com"
        }
    },
    {
        title: "Justwravel",
        description: "Travel booking platform with custom itinerary planning and local guide connections.",
        image: "justwravel",
        skills: [
            BackendSkills.PHP,
            BackendSkills.CodeIgniter,
        ],
        filters: ['web-php'],
        links: {
            live: "https://justwravel.com"
        },
        organization: {
            name: "Justwravel",
            link: "https://justwravel.com"
        }
    },
    {
        title: "Geosearch",
        description: "Location-based search engine with advanced geospatial query capabilities.",
        image: "geosearch",
        skills: [
            BackendSkills.PHP,
            BackendSkills.Laravel,
        ],
        filters: ['web-php'],
        links: {
            github: "https://github.com/rajat19/Geosearch"
        }
    },
    {
        title: 'Model Paper Portal',
        description: 'A web portal for students to access model papers and study materials for various subjects',
        skills: [
            BackendSkills.PHP,
            DatabaseSkills.MySQL,
        ],
        image: 'uptu',
        filters: ['web-js'],
        links: {
            live: 'http://117.55.241.41/qpportal',
            github: 'rajat19/QP-Portal',
        },
        organization: {
            name: "Dr. APJ Abdul Kalam Technical University",
            link: 'https://aktu.ac.in'
        }
    },
    {
        title: 'Samarpan',
        description: "Healthcare management system for hospitals and clinics.",
        image: 'samarpan',
        skills: [
            BackendSkills.PHP,
            BackendSkills.Laravel,
            DatabaseSkills.MySQL,
        ],
        filters: ['web-js'],
        links: {
            github: 'rajat19/samarpan',
        },
        organization: {
            name: 'Sysbiome Technologies',
            link: 'https://sysbiome.com'
        }
    },
    {
        title: 'Timetable Management',
        description: 'Website for colleges to manage the faculty timetable',
        image: 'timetable',
        skills: [
            BackendSkills.PHP,
            DatabaseSkills.MySQL,
        ],
        filters: ['web-php'],
        links: {
            live: 'http://paradox.eu5.org',
            github: 'rajat19/Timetable',
        },
        organization: {
            name: 'Ajay Kumar Garg Engineering College',
            link: 'https://www.akgec.ac.in/'
        }
    }
];