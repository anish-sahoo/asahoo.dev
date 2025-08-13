---
title: "Building with Gatsby and React"
date: "2025-08-12"
slug: "building-with-gatsby-react"
tags: ["gatsby", "react", "tailwind", "portfolio"]
---

# Building with Gatsby and React

In this post, I'll share my experience building this portfolio website using Gatsby, React, and Tailwind CSS. It's been an exciting journey exploring modern web development tools and techniques.

## Why Gatsby?

Gatsby offers several advantages for building static sites:

1. **Performance**: Built-in optimizations and static site generation
2. **React Ecosystem**: Full React support with modern features  
3. **GraphQL**: Powerful data layer for content management
4. **Plugin System**: Rich ecosystem of plugins

## Key Technologies

### React Components

I used functional components with hooks throughout the project:

```jsx
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-blue-950 hover:bg-blue-900 transition-colors"
    >
      <h3 className="text-xl font-bold">{project.name}</h3>
      <p className="text-gray-300">{project.description}</p>
      {isHovered && (
        <div className="absolute inset-0 bg-blue-500/10" />
      )}
    </div>
  );
};
```

### Tailwind CSS

Tailwind provides utility-first CSS that makes styling fast and consistent:

```css
/* Custom utilities for consistent theming */
@layer utilities {
  .bg-primary { @apply bg-blue-950; }
  .text-primary { @apply text-blue-400; }
  .hover-primary { @apply hover:text-blue-300; }
}
```

### HeroUI Integration

Using HeroUI components for consistent design:

```jsx
import { Card, CardBody, Navbar } from "@heroui/react";

const MyComponent = () => (
  <Card className="bg-slate-900/50 backdrop-blur-sm">
    <CardBody>
      <h2>Beautiful card with glassmorphism effect</h2>
    </CardBody>
  </Card>
);
```

## Architecture Decisions

### Component Structure
```
src/
├── components/          # Reusable UI components
│   ├── NavbarMaker.jsx
│   ├── ProjectCards.jsx
│   └── TypewriterText.jsx
├── pages/              # Route components
└── templates/          # Dynamic page templates
```

### Data Flow
Using Gatsby's GraphQL layer for content management:

```graphql
query {
  allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
    nodes {
      id
      excerpt
      frontmatter {
        title
        date
        tags
      }
    }
  }
}
```

## Performance Optimizations

> **Pro Tip**: Gatsby automatically optimizes images, prefetches routes, and generates critical CSS for blazing-fast performance.

Some key optimizations I implemented:

- **Code splitting**: Automatic route-based splitting
- **Image optimization**: Using Gatsby's image processing
- **Prefetching**: Links are prefetched on hover
- **Critical CSS**: Above-the-fold CSS is inlined

## Lessons Learned

- **Component Reusability**: Breaking down UI into small, reusable components
- **Performance First**: Leveraging Gatsby's built-in optimizations
- **Responsive Design**: Using Tailwind's responsive utilities effectively
- **Accessibility**: Ensuring proper semantic HTML and ARIA labels

## Next Steps

I'm planning to add:
- ✅ Blog functionality (like this!)
- 🔄 Dark/light mode toggle
- 📱 Better mobile interactions
- 🔍 Search functionality
- 📊 Analytics integration

The journey of building this portfolio has been incredibly rewarding, and I'm excited to continue improving it!
