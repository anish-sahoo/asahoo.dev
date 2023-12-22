import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
  return <Card isBlurred className=" w-full lg:h-full">
    <CardHeader className="flex gap-3">
      <a href={project.link}>
      <h1 className="text-3xl font-sans font-bold text-blue-500">{project.name}</h1>
      </a>
    </CardHeader>
    <Divider />
    <CardBody>
      <p className="text-lg text-white">{project.description}</p>
      <a href={project.link}>
        <p className="text-lg font-bold text-blue-700 px-4">View Project</p>
      </a>
      {project.link2? 
      <a href={project.link2}>
        <p className="text-lg font-bold text-blue-700 px-4">Live Demo</p>
      </a>
      : <div></div>}
    </CardBody>
    <Divider />
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
    <div className={"grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4"}>
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
