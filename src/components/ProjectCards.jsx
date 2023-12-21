import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
  return <Card>
    <CardHeader className="flex gap-3">
      <h1 className="text-2xl font-bold">{project.name}</h1>
    </CardHeader>
    <Divider />
    <CardBody>
      <p className="text-lg">{project.description}</p>
      <a href="/">
        <p className="text-lg font-bold text-blue-500">View Project</p>
      </a>
    </CardBody>
    <Divider />
    <CardFooter>
      <h1 className="text-2xl font-bold">Technologies Used:</h1>
    </CardFooter>
  </Card>
};

const ProjectCards = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
