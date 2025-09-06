export interface Education {
    school: string;
    degree: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
    courses: string[];
}

export const education = [
    {
      school: "Ajay Kumar Garg Engineering College",
      degree: "Bachelor Degree",
      period: "Aug 2013 - Jun 2017",
      location: "Ghaziabad, India", 
      description: "Pursued Btech in computer science stream.",
      achievements: [
        "B.Tech aggregate: 80.72%",
        "Part of Open Source R&D Center",
        "Worked on various college and inter-college level projects",
        "Research Analyst for college R&D center"
      ],
      courses: ["Data Structures", "Algorithms", "Software Engineering", "Web Development"]
    },
    {
      school: "Dr. VSEC, Kanpur",
      degree: "Schooling",
      period: "Apr 1999 - May 2012",
      location: "Kanpur, India",
      description: "Completed primary and secondary education with focus on science and mathematics.",
      achievements: [
        "10th marks: 89.71% (ICSE)",
        "12th marks: 89.67% (ISC)",
        "Consistent academic excellence",
        "Active participation in science competitions"
      ],
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
]