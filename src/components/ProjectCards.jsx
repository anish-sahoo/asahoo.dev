import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
  return <Card isBlurred className="h-full w-full">
    <CardHeader className="flex gap-3">
      <h1 className="text-2xl font-bold text-blue-500">{project.name}</h1>
    </CardHeader>
    <CardBody>
      <p className="text-lg text-white">{project.description}</p>
      <a href="/">
        <p className="text-lg font-bold text-blue-500">View Project</p>
      </a>
    </CardBody>
    <CardFooter>
      <div className="flex flex-wrap">
        {project.badges.map((badge) => (
          <div key={badge}>
            <Card className="bg-slate-800 m-1">
            <p className="text-lg font-bold text-blue-100 mx-2 my-1">{badge}</p>
            </Card>
          </div>
        ))}
      </div>
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
