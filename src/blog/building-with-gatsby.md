---
title: "Building with Gatsby and React"
date: "2025-08-12"
slug: "building-with-gatsby-react"
tags: ["gatsby", "react", "tailwind", "portfolio"]
---

This is a sample article to display how things should look like. I will be posting real stuff in the future

## React Components

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
├── blog
│   └── building-with-gatsby.md
├── components
├── images
├── pages
│   ├── 404.jsx
│   ├── blog.jsx
│   ├── contact.jsx
│   ├── index.jsx
│   ├── layout.jsx
│   ├── projects.jsx
│   └── resume.jsx
├── styles
│   └── global.css
└── templates
    └── blog-post.jsx
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

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://asahoo.dev)

[link with title](http://asahoo.dev/blog/)

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

# Math Reference


# Mathematical Notation Reference

This guide shows you how to write mathematical expressions in your blog posts using KaTeX.

## Basic Syntax

### Inline Math
Wrap math expressions in single dollar signs: `$...$`

Examples:
- `$x + y = z$` renders as: $x + y = z$
- `$E = mc^2$` renders as: $E = mc^2$
- `$\pi \approx 3.14159$` renders as: $\pi \approx 3.14159$

### Display Math
Wrap math expressions in double dollar signs: `$$...$$`

Example:
```
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

Renders as:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

## Subscripts and Superscripts

### Superscripts
Use `^` for superscripts:
- `$x^2$` → $x^2$
- `$e^{i\pi}$` → $e^{i\pi}$
- `$2^{10}$` → $2^{10}$
- `$x^{2y+1}$` → $x^{2y+1}$ (use braces for multi-character exponents)

### Subscripts
Use `_` for subscripts:
- `$x_1$` → $x_1$
- `$a_n$` → $a_n$
- `$H_2O$` → $H_2O$
- `$x_{i,j}$` → $x_{i,j}$ (use braces for multi-character subscripts)

### Combined
- `$x_1^2$` → $x_1^2$
- `$a_n^{(k)}$` → $a_n^{(k)}$
- `$\sum_{i=1}^{n} x_i^2$` → $\sum_{i=1}^{n} x_i^2$

## Common Mathematical Expressions

### Fractions
```
$\frac{a}{b}$ → inline fraction
$$\frac{numerator}{denominator}$$ → display fraction
```
Examples:
- $\frac{1}{2}$
- $\frac{x^2 + 1}{x - 1}$

### Square Roots
```
$\sqrt{x}$ → square root
$\sqrt[n]{x}$ → nth root
```
Examples:
- $\sqrt{2}$
- $\sqrt[3]{27}$
- $\sqrt{x^2 + y^2}$

### Summations and Products
```
$\sum_{i=1}^{n} x_i$ → summation
$\prod_{i=1}^{n} x_i$ → product
```
Examples:
- $\sum_{i=1}^{\infty} \frac{1}{i^2} = \frac{\pi^2}{6}$
- $\prod_{i=1}^{n} i = n!$

### Integrals
```
$\int f(x) dx$ → indefinite integral
$\int_a^b f(x) dx$ → definite integral
```
Examples:
- $\int x^2 dx = \frac{x^3}{3} + C$
- $\int_0^1 x^2 dx = \frac{1}{3}$

### Limits
```
$\lim_{x \to \infty} f(x)$ → limit
```
Example:
- $\lim_{n \to \infty} \frac{1}{n} = 0$

## Advanced Examples

### Matrices
```
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$
```

$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

### System of Equations
```
$$
\begin{aligned}
x + y &= 1 \\
2x - y &= 0
\end{aligned}
$$
```

$$
\begin{aligned}
x + y &= 1 \\
2x - y &= 0
\end{aligned}
$$

### Calculus Example
```
$$
\frac{d}{dx}\left(\int_a^x f(t) dt\right) = f(x)
$$
```

$$
\frac{d}{dx}\left(\int_a^x f(t) dt\right) = f(x)
$$

### Physics Example (Maxwell's Equations)
```
$$
\begin{aligned}
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial \vec{E}}{\partial t} \\
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \vec{B} &= 0
\end{aligned}
$$
```

$$
\begin{aligned}
\nabla \times \vec{E} &= -\frac{\partial \vec{B}}{\partial t} \\
\nabla \times \vec{B} &= \mu_0\vec{J} + \mu_0\epsilon_0\frac{\partial \vec{E}}{\partial t} \\
\nabla \cdot \vec{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \vec{B} &= 0
\end{aligned}
$$

## Tips

1. **Use braces `{}` for multi-character sub/superscripts**: `x^{10}` not `x^10`
2. **Escape special characters**: Use `\$` for literal dollar signs
3. **Preview your math**: The expressions render in real-time during development
4. **Use `\text{}` for text in math mode**: \
   `$\text{speed} = \frac{\text{distance}}{\text{time}}$` $\text{speed} = \frac{\text{distance}}{\text{time}}$

## Common Greek Letters

- `$\alpha, \beta, \gamma, \delta$` → $\alpha, \beta, \gamma, \delta$
- `$\epsilon, \zeta, \eta, \theta$` → $\epsilon, \zeta, \eta, \theta$
- `$\lambda, \mu, \nu, \xi$` → $\lambda, \mu, \nu, \xi$
- `$\pi, \rho, \sigma, \tau$` → $\pi, \rho, \sigma, \tau$
- `$\phi, \chi, \psi, \omega$` → $\phi, \chi, \psi, \omega$

Uppercase: `$\Gamma, \Delta, \Theta, \Lambda, \Pi, \Sigma, \Phi, \Psi, \Omega$` → $\Gamma, \Delta, \Theta, \Lambda, \Pi, \Sigma, \Phi, \Psi, \Omega$
