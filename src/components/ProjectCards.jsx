import React from "react";
import { Card } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
  return <Card></Card>;
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </div>
  );
};

export default ProjectCards;
