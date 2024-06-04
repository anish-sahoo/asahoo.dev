import reactImage from "./images/react.svg";
import jsImage from "./images/javascript.png";
import javaImage from "./images/java.svg";
import pythonImage from "./images/python.svg";
import kotlinImage from "./images/kotlin.png";
import sqliteImage from "./images/sqlite.svg";
import terminalImage from "./images/bash.png";

export const languages = [
  {
    name: "Java",
    image: javaImage,
  },
  {
    name: "Python",
    image: pythonImage,
  },
  {
    name: "Kotlin",
    image: kotlinImage,
  },
  {
    name: "JavaScript",
    image: jsImage,
  },
  {
    name: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    name: "HTML",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "SQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    name: "Rust",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
  }
];

export const frameworks = [
  {
    name: "React.js",
    image: reactImage,
  },
  {
    name: "Express.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  {
    name: "Flask",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
  },
  {
    name: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    name: "Android SDK",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_%282023%29.svg",
  },
  {
    name: "JUnit 5",
    image:
      "https://junit.org/junit5/assets/img/junit5-logo.png",
  }
];

export const databases = [
  {
    name: "SQLite",
    image: sqliteImage,
  },
  {
    name: "MySQL",
    image:
      "",
  },
  {
    name: "MongoDB",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
  },
  {
    name: "Redis",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Logo-redis.svg/768px-Logo-redis.svg.png?20210820223643",
  }
];

export const tools = [
  {
    name: "Git",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "GitHub",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Bash Terminal",
    image: terminalImage,
  },
  {
    name: "Linux",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  },
  {
    name: "Docker",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png",
  },
  {
    name: "Android Studio",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_(2023).svg",
  },
  {
    name: "Visual Studio Code",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
  },
  {
    name: "IntelliJ IDEA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
  },
  {
    name: "Davinci Resolve",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
  },
  {
    name: "Capture One",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/CAPTURE_ONE_LOGO.svg",
  },
  {
    name: "Latex",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/LaTeX_project_logo_bird.svg",
  }
];

export const classes = [
  {
    name: "CS 1800 Discrete Structures",
    description: "Introduction to discrete mathematics and logic.",
  },
  {
    name: "CS 2500 Fundamentals of Computer Science 1",
    description: "Introduction to computer science and programming.",
  },
  {
    name: "CS 2510 Fundamentals of Computer Science 2",
    description: "Introduction to object-oriented programming.",
  },
  {
    name: "CS 3200 Database Design",
    description: "Introduction to database design and management.",
  },
  {
    name: "CS 3500 Object-Oriented Design",
    description: "Introduction to object-oriented design principles.",
  },
  {
    name: "CS 3000 Algorithms & Data",
    description: "Introduction to algorithms and data structures.",
  },
];

export const jobs = [
  {
    company: "Northeastern University - Khoury College of Computer Sciences",
    date: "January 2024 - April 2024",
    positions: [
      {
        title: "Teaching Assistant",
        points: [
          "Conducted 20 hours of in-person office hours and tutoring sessions per week for CS 2510 (Fundamentals of CS 2)",
          "Instructed over 35 people concurrently during peak times in Java and data structures",
          "Held on-demand 1-on-1 appointments for debugging help, LeetCode practice, and exam review",
        ],
      },
    ],
  },
  {
    company: "PawHacks",
    date: "December 2023 - Present",
    positions: [
      {
        title: "Technical Recruiter/Mentor",
        date: "May 2024 - Present",
        points: [
          "Conducting technical interviews for applicants and mentor the website team for PawHacks 2.0"
        ],
      },
      {
        title: "Full Stack Developer",
        date: "December 2023 - April 2024",
        points: [
          "Collaborated with 15 classmates to host a hackathon with over 120 attendees and $3000+ worth of prizes",
          "Developed and deployed the full-stack pawhacks.io hackathon website with over 400 unique visitors"
        ],
      },
    ],
  },
];
