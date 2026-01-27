export const languages = [
  {
    name: "Java",
  },
  {
    name: "Python",
  },
  {
    name: "SQL",
  },
  {
    name: "Kotlin",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "HTML/CSS",
  },
  {
    name: "LaTeX",
  },
];

export const frameworks = [
  {
    name: "Java Spring Boot",
  },
  {
    name: "gRPC"
  },
  {
    name: "REST"
  },
  {
    name: "GraphQL"
  },
  {
    name: "Apache Kafka"
  },
  {
    name: "Elasticsearch"
  },
  {
    name: "Flask",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express.js",
  },
  {
    name: "Android SDK",
  },
  {
    name: "JUnit 5",
  },
  {
    name: "PyTorch",
  },
  {
    name: "React.js",
  },
];

export const databases = [
  {
    name: "SQLite",
  },
  {
    name: "MySQL",
  },
  {
    name: "BigQuery",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Redis",
  },
  {
    name: "PostgreSQL",
  },
  {
    name: "BigTable"
  }
];

export const tools = [
  {
    name: "Git/Github",
  },
  {
    name: "Bash",
  },
  {
    name: "Linux",
  },
  {
    name: "Docker",
  },
  {
    name: "Kubernetes",
  },
  {
    name: "Google Cloud Platform (GCP)",
  },
  {
    name: "NewRelic",
  },
  {
    name: "Splunk",
  },
  {
    name: "Grafana Cloud",
  },
  {
    name: "Terraform"
  },
  {
    name: "Amazon Web Services (AWS)"
  }
];

export const education = [
  {
    institution: "Northeastern University",
    degree: "BS in Computer Science, AI Concentration",
    graduation: {
      status: "Expected Graduation",
      date: "December 2026",
    },
    logo: "/src/images/NU_RGB_Notched-N_wordmark_RW.png",
    logoAlt: "Northeastern University Logo",
    courses: [], // Will be populated with classes array in resume.jsx
  },
  // Example for future education - just uncomment and modify:
  // {
  //   institution: "Stanford University",
  //   degree: "MS in Computer Science, Machine Learning Specialization",
  //   graduation: {
  //     status: "Graduation",
  //     date: "June 2028"
  //   },
  //   logo: "/src/images/stanford-logo.png",
  //   logoAlt: "Stanford University Logo",
  //   logoClassName: "h-16 w-auto", // Optional: customize logo styling
  //   courses: [
  //     {
  //       name: "CS 229 Machine Learning",
  //       description: "Advanced machine learning algorithms and theory"
  //     },
  //     {
  //       name: "CS 231N Convolutional Neural Networks",
  //       description: "Deep learning for computer vision"
  //     }
  //   ]
  // }
];

export const classes = [
  {
    name: "CS 1800 Discrete Structures",
    description: "Introduction to discrete mathematics and logic.",
  },
  // {
  //   name: "ARTD 2360 Introduction to Photography",
  //   description: "Photography and Photo Editing basics.",
  // },
  {
    name: "CS 2500 Fundamentals of Computer Science 1",
    description: "Introduction to functional programming with Kotlin.",
  },
  {
    name: "CS 2510 Fundamentals of Computer Science 2",
    description: "Introduction to object-oriented programming with Java.",
  },
  {
    name: "CS 2810 Mathematics of Data Models",
    description:
      "Introduction to linear algebra, probability & statistics for AI.",
  },
  {
    name: "CS 3000 Algorithms & Data",
    description: "Introduction to algorithms and data structures.",
  },
  {
    name: "CS 3200 Database Design",
    description:
      "Introduction to database design & management. (SQL, MongoDB, Redis)",
  },
  {
    name: "CS 3500 Object-Oriented Design",
    description: "Advanced object-oriented design principles.",
  },
  {
    name: "CS 3650 Computer Systems",
    description: "Introduction to operating systems and Assembly.",
  },
  {
    name: "CS 3800 Theory of Computation",
    description: "Introduces the automata theory, computability, etc.",
  },
  {
    name: "CS 4100 Artificial Intelligence",
    description: "Introduction to AI (search algorithms, RL, ML).",
  },
  {
    name: "CS 4180 Reinforcement Learning",
    description: "Advanced reinforcement learning techniques.",
  },
  {
    name: "DS 4400 Machine Learning & Data Mining 1",
    description: "Introduction to machine learning and data mining.",
  },
  {
    name: "CS 4535 Software Engineering for Consultants",
    description: "Software Engineering consulting & development for clients.",
  },
  {
    name: "CS 4973 Intro to Computer Vision",
    description: "Computer Vision fundamentals and techniques.",
  },
];

export const jobs = [
  {
    company: "MasterControl",
    date: "January 2026 - Present",
    positions: [
      {
        title: "Software Engineering Co-op, AI/ML",
        points: [
          "Working on ML Platform Services, AI/ML Products, and Agentic AI infrastructure",
        ],
      },
    ],
  },
  {
    company: "Generate Product Development, A Sherman Center Program",
    date: "January 2026 - Present",
    positions: [
      {
        title: "Software Engineer",
        points: [
          "Build toggo, a (iOS + Golang) application to make group trip planning more effective",
        ],
      },
    ],
  },
  {
    company: "Massachusetts National Guard + Northeastern University",
    date: "September 2025 - December 2025",
    positions: [
      {
        title: "Lead Software Engineer",
        points: [
          "Led backend engineering, system design, and infrastructure for a team of 8 software engineers in developing a communications and mentor matching platform supporting 8,000+ troop members daily",
          "Architected RBAC policy engine with Redis caching, reducing auth latency by 70\% during peak alerts",
          "Built scalable file ingestion and delivery system using AWS S3 presigned URLs and Web Push notifications",
          "Architected hybrid search-based mentorship recommendation algorithm using AWS Bedrock embeddings and pgvector"
        ],
      },
    ],
  },
  {
    company: "Priceline",
    date: "January 2025 - June 2025",
    positions: [
      {
        title: "Software Engineering Co-op, Backend",
        points: [
          "Delivered personalization and recommendation features by building scalable REST and gRPC services in Spring, working cross-functionally with product, data, and 4+ engineering teams in an Agile environment",
          "Led integration and A/B testing of Google Vertex AI Search for the Penny chatbot's search service in coordination with Google engineers, improving result relevance by around 25% across two evaluation metrics",
          "Engineered and deployed a Kafka-based system for real-time hotel price tracking and notifications, streaming millions of daily events with high throughput and instrumented for observability using NewRelic and Splunk",
          "Designed and implemented a relevancy ranking algorithm to personalize user experiences based on past activity"
        ],
      },
    ],
  },
  {
    company: "Northeastern University",
    date: "January 2024 - December 2024 (seasonal)",
    positions: [
      {
        title: "Teaching Assistant for CS 2500",
        date: "September 2024 - December 2024",
        points: [
          "Conducted 3-5 hours of office hours per week for Intro CS 1 class, instructing students in topics such as Kotlin, functional programming, and recursion",
          "Graded weekly assignments and exams and provided feedback to students",
        ],
      },
      {
        title: "Teaching Assistant for CS 2510",
        date: "January 2024 - April 2024",
        points: [
          "Conducted 20 hours of in-person office hours and tutoring sessions per week for Intro CS 2 class, instructing groups of 60+ people in Java and data structures",
          "Held on-demand 1-on-1 appointments for debugging help, LeetCode practice, and exam review",
        ],
      },
    ],
  },
  {
    company: "PawHacks (Student-led Hackathon)",
    date: "December 2023 - April 2024",
    positions: [
      {
        title: "Software Engineer",
        points: [
          "Collaborated with 15 classmates to host a hackathon with over 120 attendees and $3000+ worth of prizes",
          "Managed backend infrastructure and contributed to development for the pawhacks.io website with 10,000+ visits",
        ],
      },
    ],
  },
];
