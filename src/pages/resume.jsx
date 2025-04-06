import * as React from "react";
import Layout from "./layout";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import {
  classes,
  jobs,
  languages,
  frameworks,
  tools,
  databases,
} from "../resume";

import northeasternLogo from "../images/NU_RGB_Notched-N_wordmark_RW.png";

import BadgeCards from "../components/BadgeCards";

const Resume = () => {
  const cardStyle = "my-6 bg-blue-950";
  const cardHeaderStyle = "text-md text-gray-300 font-mono";

  return (
    <Layout>
      <a href="/resume.pdf">
        <Button
          variant="flat"
          className="text-white text-xl font-sans h-14 bg-blue-600"
        >
          View/Download my Resume
        </Button>
      </a>
      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Education</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <Card className="bg-blue-800 text-white mb-2 p-2 lg:p-4">
            <div className="flex flex-row items-center gap-4">
              <img
                src={northeasternLogo}
                className="object-scale-down h-24 w-auto py-2 px-1 bg-black m-2 rounded-lg"
                alt="Northeastern University Logo"
              ></img>
              <div className="flex flex-col">
                <p className="lg:text-2xl md:text-xl sm:text-xl text-sm font-bold">
                  Northeastern University
                </p>
                <div className="pt-2 md:text-md sm:text-sm text-xs lg:text-xl text-gray-200 pr-1">
                  <p className="">BS in Computer Science, AI Concentration</p>
                  <p className="">
                    Expected Graduation:{" "}
                    <b className="text-white">December 2026</b>{" "}
                  </p>
                </div>
              </div>
            </div>
            <CardFooter>
              <div className="w-full">
                <Accordion
                  className="text-gray-200 font-mono rounded-lg bg-blue-900"
                  isCompact
                >
                  <AccordionItem
                    className="text-lg pl-4 py-2"
                    title={
                      <p className="font-bold">
                        {"Relevant Coursework: (Click to Expand)"}
                      </p>
                    }
                    indicator={<p className="text-white text-xl pr-2">{`<`}</p>}
                  >
                    <Card
                      className=" text-gray-300 p-4 rounded-lg"
                      shadow="none"
                    >
                      {classes.map((course) => (
                        <div
                          className="relative inline-block group my-1"
                          key={course.name}
                        >
                          <p className="hover:text-gray-400 hover:underline inline-block transition-colors duration-600">
                            {course.name}
                          </p>
                          <p className="hidden md:inline-block md:group-hover:inline-block text-blue-500 italic transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <span className="text-gray-400">{`: `}</span>
                            {course.description}
                          </p>
                        </div>
                      ))}
                    </Card>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardFooter>
          </Card>
        </CardBody>
      </Card>

      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Work Experience</p>
        </CardHeader>
        <CardBody>
          {jobs.map((job, index) => (
            <Card
              key={index}
              className="text-gray-300 text-sm lg:text-lg bg-blue-800 p-2 lg:p-4 mb-2 font-sans"
              shadow="sm"
            >
              <CardHeader className="md:text-2xl text-md font-bold text-white flex flex-row py-1 px-2 hover:underline">
                <p className="flex-grow text-left">{job.company}</p>
                <p className="justify-end text-right">{job.date}</p>
              </CardHeader>
              <CardBody className="lg:text-xl">
                {job.positions.map((position, positionIndex) => (
                  <div
                    key={positionIndex}
                    className={positionIndex > 0 ? "mt-4" : ""}
                  >
                    <div className="text-gray-300 flex flex-row ">
                      <p className="flex-grow italic ml-2 text-left md:font-mono">
                        {position.title}
                      </p>
                      <p
                        className={`justify-end italic text-right ${position.date ? "" : "hidden"}`}
                      >
                        {position.date}
                      </p>
                    </div>
                    <div className="text-gray-300 bg-blue-900 md:p-6 p-2 rounded-xl">
                      {position.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex flex-row">
                          <p className="mr-2">-</p>
                          <p>{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          ))}
        </CardBody>
      </Card>

      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Skills</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <Card className="bg-blue-800" shadow="sm">
            <p className="text-sm text-white font-mono px-4 pt-2">LANGUAGES</p>
            <Divider />
            <BadgeCards cards={languages} />
          </Card>

          <Card className="bg-blue-800 mt-4" shadow="sm">
            <p className="text-sm text-white font-mono px-4 pt-2">FRAMEWORKS</p>
            <Divider />
            <BadgeCards cards={frameworks} />
          </Card>

          <Card className="bg-blue-800 mt-4" shadow="sm">
            <p className="text-sm text-white font-mono px-4 pt-2">DATABASES</p>
            <Divider />
            <BadgeCards cards={databases} />
          </Card>

          <Card className="bg-blue-800 mt-4" shadow="sm">
            <p className="text-sm text-white font-mono px-4 pt-2">
              TOOLS / INFRASTRUCTURE / CLOUD
            </p>
            <Divider />
            <BadgeCards cards={tools} />
          </Card>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Resume;
