export var projects = [
  {
    name: "image-storage-api",
    description:
      "Small scale file hosting server (not quite an FTP server) to be used to host assets for this website.",
    badges: ["Go", "HTMX"],
    link2: "https://github.com/anish-sahoo/image-storage-api",
  },
  {
    name: "Anime Discovery Engine",
    description:
      "Trying to build the most overkill anime recommendation/personalization system that exists. Microservice based architecture with graphql and grpc services. This is a work in progress (I'm done with the backend, working on ui).",
    badges: [
      "Python",
      "Java",
      "GraphQL",
      "gRPC",
      "Elasticsearch",
      "PostgreSQL",
      "React/Tailwind",
    ],
    // link2: "https://github.com/anish-sahoo/AnimeVisualizer",
  },
  {
    name: "ResumeTex",
    description:
      "API that accepts a resume in JSON format and returns LaTeX code/pdf in Jake's Resume Format.",
    badges: ["Python", "FastAPI", "Latex.js"],
    link: "https://github.com/anish-sahoo/ResumeTex",
    link2: "https://resumetex.asahoo.dev",
  },
  {
    name: "Knights Archers Zombies PPO",
    description:
      "Implemented a multi-agent version of the PPO algorithm on the KnightsArchersZombies environment from Pettingzoo.",
    badges: ["Python", "Pytorch", "Pettingzoo"],
    link: "https://github.com/anish-sahoo/KnightsArchersZombiesPPO",
  },
  {
    name: "OpenLegislation",
    description:
      "Congress legislation explorer with Vector Search and bill analysis. Won one of the 4 track prizes at HackHarvard '24.",
    badges: ["React.js", "Express.js", "MongoDB", "HuggingFace"],
    link: "https://github.com/ryankamiri/OpenLegislation",
    // link2: "https://openlegislation.asahoo.dev",
    hackathon: {
      name: "HackHarvard 2024 - Track Winner",
      link: "https://devpost.com/software/openlegislation",
    },
  },
  {
    name: "Sit Down and Study",
    description:
      "Web Application for coding practice with AI-generated LeetCode-style questions and online code judging.",
    badges: ["TypeScript", "React.js", "Express.js", "MongoDB", "Judge0"],
    link: "https://github.com/trentwiles/SitDownAndStudy",
    // link2: "https://sitdownand.study",
    hackathon: {
      name: "YHack 2024",
      link: "https://devpost.com/software/sit-down-and-study",
    },
  },
  {
    name: "AI Hoops",
    description:
      "Taught AI to play Atari's DoubleDunk basketball game using Reinforcement Learning (Double DQN)",
    badges: ["Python", "PyTorch", "Gymnasium"],
    link: "https://github.com/anish-sahoo/AI-Hoops",
  },
  {
    name: "AnimeVisualizer",
    description:
      "A map of the top 5000 anime scraped from MyAnimeList created using word embeddings, t-SNE dimensionality reduction, and rendered in webgl using PixiJS.",
    badges: ["Python", "JavaScript", "PixiJS", "TensorFlow"],
    link: "https://github.com/anish-sahoo/AnimeVisualizer",
    link2: "https://anime.asahoo.dev",
  },
  {
    name: "easyclassplanner.com",
    description:
      "Web application that generates optimal schedules using Recursive Backtracking and Rust.",
    badges: ["TypeScript", "Rust", "React.js", "Tailwind CSS"],
    link2: "https://easyclassplanner.com",
  },
  {
    name: "X Finance",
    description:
      "Web application that uses X API and xAI Grok LLM to form conclusions about current financial trends.",
    badges: ["TypeScript", "React.js", "Python", "X API", "xAI API"],
    link: "https://github.com/anish-sahoo/XDevChallenge",
    hackathon: { name: "X Developer Challenge 2023" },
  },
  {
    name: "Nearby Prices",
    description:
      "A simple crowd-sourced price aggregator for small businesses.",
    badges: ["React.js", "Express.js", "JavaScript", "SQLite"],
    link: "https://github.com/anish-sahoo/NearbyPrices",
    // link2: "https://nearbyprices.asahoo.dev",
  },
  {
    name: "PawHacks 1.0 Website",
    description:
      "Website for the PawHacks 1.0 Hackathon at Northeastern University Oakland.",
    badges: [
      "Javascript",
      "MySQL",
      "Handlebars",
      "Caddy Server",
      "DigitalOcean",
    ],
    // link2: "https://pawhacks.io",
  },
  {
    name: "Portfolio Website",
    description: "This website created to showcase my projects and skills!",
    badges: ["Gatsby.js", "React.js", "Tailwind CSS", "Netlify"],
    link: "https://github.com/anish-sahoo/asahoo.dev",
  },
  {
    name: "KhouryKTRL VSCode Extension",
    description:
      "Extension that helps CS2500 students save time in the execution and linting of Kotlin code. Used by multiple professors and 100+ students in 2023 at NU Oakland.",
    badges: ["JavaScript", "VSCode API"],
    link: "https://github.com/anish-sahoo/khouryktrl",
  },
  {
    name: "Snowjam Showdown",
    description:
      "Project for a Game Jam Competition created by our team. The theme was 'Christmas' and 'Mills College'. I was in charge of the art and the website.",
    badges: ["Unity", "C#", "HTML", "CSS", "JavaScript", "Netlify"],
    link: "https://github.com/anish-sahoo/SnowJam",
    link2: "https://snowjam.asahoo.dev",
  },
  {
    name: "HuskyLink",
    description:
      "Hackathon project for Calhacks 10.0, a mentor matching platform for students.",
    badges: ["Python", "CockroachDB", "Reflex.dev"],
    hackathon: { name: "CalHacks 10.0" },
  },
  {
    name: "Library Management System",
    description: "Web Application with various library management features.",
    badges: ["React.js", "JavaScript", "Netlify"],
    link: "https://github.com/anish-sahoo/LibraryManagement",
  },
  {
    name: "Expiry Date Reminder",
    description:
      "Project where user can store the expiry date of their products and get a reminder when the expiry date is near. Currently at ",
    badges: ["Java", "SQLite", "Android Studio"],
    link: "https://github.com/anish-sahoo/ExpiryDateReminder",
    link2:
      "https://play.google.com/store/apps/details?id=com.anish.expirydatereminder",
  },
  {
    name: "Password Manager",
    description:
      "Simple password manager that stores passwords in a SQLite database.",
    badges: ["Python", "SQLite"],
  },
  {
    name: "Wordle Clone",
    description: "Project where user can play a clone of the game Wordle.",
    badges: ["Java"],
  },
];
