import * as React from "react";
import Layout from "./layout";
import PageHero from "../components/PageHero";
import ProjectCards from "../components/ProjectCards";
import PageFooter from "../components/PageFooter";
import { projects } from "../projects";

const Projects = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        <PageHero 
          subtitle="A collection of projects showcasing my work in web development, machine learning, and software engineering"
        />
        
        <ProjectCards projects={projects} />
        
        <PageFooter 
          message="More projects coming soon! Check out my"
          linkText="GitHub"
          linkUrl="https://github.com/anish-sahoo"
        />
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects - Anish's Portfolio</title>;
