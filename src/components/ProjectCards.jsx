import React from "react";
import { Card, Divider } from "@nextui-org/react";
import { CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const ProjectCard = ({ project }) => {
  return (
    <Card isBlurred className="w-full lg:h-full">
      <CardHeader className="flex gap-3">
        <a href={project.link}>
          <h1 className="text-3xl font-sans font-bold text-blue-500 drop-shadow-lg">
            {project.name}
          </h1>
        </a>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-lg text-gray-300 h-full">{project.description}</p>
        <div className="flex flex-row items-center justify-center">
          {project.link ? (
            <a href={project.link}>
              <p className="text-lg font-bold text-white underline font-sans px-4">
                Project Code
              </p>
            </a>
          ) : (
            <div></div>
          )}
          {project.link2 ? (
            <a href={project.link2}>
              <p className="text-lg font-bold text-lime-400 underline font-sans px-4">
                Try It Live
              </p>
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <div className="flex flex-wrap justify-center items-center w-full">
          {project.badges.map((badge) => (
            <div key={badge}>
              <Card className="bg-slate-800 m-1">
                <p className="text-md font-bold text-blue-100 mx-2 my-1">
                  {badge}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

const ProjectCards = ({ projects }) => {
  return (
    <div className={"grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-4 light"}>
      {projects.map((project) => (
        <div key={project.name}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
