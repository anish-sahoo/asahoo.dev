import * as React from "react";
import Layout from "./layout";
import { Card, CardBody } from "@heroui/react";
import { projects } from "../projects";

const ProjectCard = ({ project, index }) => {
  return (
    <Card className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full">
      <CardBody className="p-8 flex flex-col h-full">
        <div className="flex flex-col gap-4 flex-grow">
          {/* Project Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex flex-wrap gap-2">
              {project.hackathon && (
                <span className="px-2 py-1 bg-yellow-500/10 text-yellow-300 text-xs rounded-full border border-yellow-500/20 font-mono">
                  🏆 {project.hackathon.name}
                </span>
              )}
            </div>
          </div>
          
          {/* Project Title */}
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
            {project.name}
          </h2>
          
          {/* Project Description */}
          <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-blue-500/10 text-blue-300 text-sm rounded-full border border-blue-500/20 font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project Links - Always at bottom */}
        <div className="flex flex-wrap gap-4 mt-auto">
          {project.link && (
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 font-mono text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View Code
            </a>
          )}
          {project.link2 && (
            <a 
              href={project.link2}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 font-mono text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          {project.hackathon?.link && (
            <a 
              href={project.hackathon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200 font-mono text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Hackathon
            </a>
          )}
        </div>
      </CardBody>
    </Card>
  );
};const Projects = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my work in web development, machine learning, and software engineering
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.name} 
              project={project} 
              index={index}
            />
          ))}
        </div>
        
        {/* Footer Message */}
        <div className="text-center mt-16 mb-8">
          <p className="text-gray-400 font-mono text-sm">
            More projects coming soon! Check out my{" "}
            <a 
              href="https://github.com/anish-sahoo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              GitHub
            </a>{" "}
            for the latest updates.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

export const Head = () => <title>Projects - Anish's Portfolio</title>;
