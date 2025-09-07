# Component Library Documentation

This document provides usage examples for all reusable components in the portfolio site. All components follow a consistent design system with glassmorphism effects, blue accent colors, and responsive layouts.

## 🎓 EducationCard

Displays educational background with institution details, courses, and graduation info.

### Props

- `institution` (string): Name of the educational institution
- `degree` (string): Degree title and specialization
- `graduation` (object): Contains `status` and `date` fields
- `logo` (string): Path to the institution's logo image
- `logoAlt` (string): Alt text for the logo
- `courses` (array): Array of course objects with `name` and `description`
- `logoClassName` (string, optional): Custom CSS classes for logo styling

### Usage Example

```jsx
import EducationCard from "../components/EducationCard";

<EducationCard
  institution="Stanford University"
  degree="MS in Computer Science, Machine Learning Specialization"
  graduation={{
    status: "Expected Graduation",
    date: "June 2028",
  }}
  logo="/src/images/stanford-logo.png"
  logoAlt="Stanford University Logo"
  courses={[
    {
      name: "CS 229 Machine Learning",
      description: "Advanced machine learning algorithms and theory",
    },
    {
      name: "CS 231N CNN for Visual Recognition",
      description: "Deep learning for computer vision applications",
    },
  ]}
/>;
```

## 💼 ExperienceCard

Displays work experience with company details, positions, and responsibilities.

### Props

- `job` (object): Job object containing company, date, and positions array
- `index` (number): Index for styling purposes

### Usage Example

```jsx
import ExperienceCard from "../components/ExperienceCard";

const jobData = {
  company: "Google",
  date: "2023 - Present",
  positions: [
    {
      title: "Senior Software Engineer",
      date: "Jan 2024 - Present",
      points: [
        "Led development of ML infrastructure serving 1B+ users",
        "Mentored 5 junior engineers and improved team velocity by 40%",
      ],
    },
  ],
};

<ExperienceCard job={jobData} index={0} />;
```

## 🛠️ SkillsCard

Displays a categorized list of skills with badge styling.

### Props

- `title` (string): Category title for the skills
- `skills` (array): Array of skill objects with `name` property

### Usage Example

```jsx
import SkillsCard from "../components/SkillsCard";

const programmingLanguages = [
  { name: "JavaScript" },
  { name: "Python" },
  { name: "TypeScript" },
  { name: "Java" },
];

<SkillsCard title="Programming Languages" skills={programmingLanguages} />;
```

## 📝 BlogPostCard

Displays blog post preview with metadata and excerpt.

### Props

- `post` (object): Gatsby blog post node with frontmatter and excerpt
- `index` (number): Post index for numbering

### Usage Example

```jsx
import BlogPostCard from "../components/BlogPostCard";

const blogPost = {
  frontmatter: {
    title: "Building Scalable Web Applications",
    date: "2024-01-15",
    slug: "scalable-web-apps",
  },
  excerpt: "Learn how to build web applications that scale...",
};

<BlogPostCard post={blogPost} index={0} />;
```

## 🚀 ProjectCards

Displays project information with technologies, links, and achievements.

### Props

- `projects` (array): Array of project objects
- Each project should contain: `name`, `description`, `tech`, `github`, `demo`, `hackathon` (optional)

### Usage Example

```jsx
import { ProjectCards } from "../components/ProjectCards";

const projectsData = [
  {
    name: "AI Chat Assistant",
    description: "Intelligent chatbot using GPT-4 and vector embeddings",
    tech: ["React", "Node.js", "OpenAI", "Pinecone"],
    github: "https://github.com/username/ai-chat",
    demo: "https://ai-chat-demo.com",
    hackathon: {
      name: "AI Hackathon 2024",
      placement: "1st Place",
    },
  },
];

<ProjectCards projects={projectsData} />;
```

## 🎯 PageHero

Creates a centered hero section with title, subtitle, and accent line.

### Props

- `title` (string): Main page title
- `subtitle` (string): Descriptive subtitle

### Usage Example

```jsx
import PageHero from "../components/PageHero";

<PageHero
  title="About Me"
  subtitle="Full-stack developer passionate about creating innovative solutions that make a difference in people's lives."
/>;
```

## 📄 EmptyState

Displays placeholder content when no data is available.

### Props

- `icon` (string/emoji): Display icon or emoji
- `title` (string): Empty state title
- `subtitle` (string): Descriptive message

### Usage Example

```jsx
import EmptyState from "../components/EmptyState";

<EmptyState
  icon="📝"
  title="No Posts Yet"
  subtitle="Check back soon for exciting content!"
/>;
```

## ⌨️ TypewriterText

Animated text that appears character by character with typewriter effect.

### Props

- `text` (string): Text to animate
- `delay` (number): Delay before animation starts (ms)
- `speed` (number, optional): Typing speed in milliseconds (default: 100)

### Usage Example

```jsx
import TypewriterText from "../components/TypewriterText";

<TypewriterText
  text="Hello, I'm a Software Engineer"
  delay={1000}
  speed={80}
/>;
```

## 🏷️ BadgeCards

Displays a collection of badges/tags in a flexible layout.

### Props

- `cards` (array): Array of card objects with `name` property

### Usage Example

```jsx
import BadgeCards from "../components/BadgeCards";

const technologies = [
  { name: "React" },
  { name: "Node.js" },
  { name: "MongoDB" },
  { name: "AWS" },
];

<BadgeCards cards={technologies} />;
```

## 🔗 PageFooter

Creates a footer with message and optional external link.

### Props

- `message` (string): Footer message
- `linkText` (string, optional): Text for the link
- `linkUrl` (string, optional): URL for the link

### Usage Example

```jsx
import PageFooter from "../components/PageFooter";

<PageFooter
  message="Connect with me on"
  linkText="LinkedIn"
  linkUrl="https://linkedin.com/in/yourprofile"
/>;
```

## 🎨 Design System

All components follow these design principles:

### Colors

- **Background**: `bg-slate-900/50` with `backdrop-blur-sm`
- **Borders**: `border-slate-700/50` with `hover:border-blue-500/50`
- **Text**: White titles, `text-blue-300` for subtitles, `text-gray-400` for meta
- **Accents**: `text-blue-400` for links and highlights

### Animations

- **Hover Effects**: Subtle shadow and border color transitions
- **Duration**: `transition-all duration-300`
- **Shadows**: `hover:shadow-lg hover:shadow-blue-500/10`

### Typography

- **Headings**: Bold, white text
- **Body**: Gray-400 for secondary text
- **Code/Meta**: `font-mono` for technical elements

### Layout

- **Cards**: Consistent padding with `p-6` or `p-8`
- **Spacing**: `gap-4` or `gap-6` for consistent spacing
- **Responsive**: Mobile-first with `md:` and `lg:` breakpoints

## 🛠️ Development Notes

- All components are built with **React** and **Tailwind CSS**
- **HeroUI** components used for base Card and Button elements
- **Framer Motion** used for advanced animations (TypewriterText)
- Components are fully **responsive** and **accessible**
- Consistent **glassmorphism** design across all components
