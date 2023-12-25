import * as React from "react";
import Layout from "./layout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

import tailwindImage from "../images/tailwindcss.svg";
import gatsbyImage from "../images/gatsby.svg";
import reactImage from "../images/react.svg";
import jsImage from "../images/javascript.png";
import javaImage from "../images/java.svg";
import pythonImage from "../images/python.svg";
import kotlinImage from "../images/kotlin.png";
import sqliteImage from "../images/sqlite.svg";
import terminalImage from "../images/bash.png";

import northeasternLogo from "../images/NU_RGB_Notched-N_wordmark_RW.png";

import BadgeCards from "../components/BadgeCards";

const Resume = () => {
  const cardStyle = "my-6 bg-blue-950";
  const cardHeaderStyle = "text-md text-gray-300 font-mono";

  const languages = [
    {
      name: "Java",
      image: javaImage,
    },
    {
      name: "Python",
      image: pythonImage,
    },
    {
      name: "JavaScript",
      image: jsImage,
    },
    {
      name: "Kotlin",
      image: kotlinImage,
    },
  ];

  const frameworks = [
    {
      name: "HTML",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      name: "CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    {
      name: "React.js",
      image: reactImage,
    },
    {
      name: "Gatsby.js",
      image: gatsbyImage,
    },
    {
      name: "Tailwind CSS",
      image: tailwindImage,
    },
    {
      name: "SQLite",
      image: sqliteImage,
    },
    {
      name: "Node.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Android SDK",
      image: "",
    },
  ];

  const tools = [
    {
      name: "Git",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
    {
      name: "GitHub",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      name: "Bash Terminal",
      image: terminalImage,
    },
    {
      name: "Android Studio",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c1/Android_Studio_icon_(2023).svg",
    },
    {
      name: "Visual Studio Code",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
    },
    {
      name: "IntelliJ IDEA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg",
    },
    {
      name: "Pycharm",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg",
    },
    {
      name: "Davinci Resolve",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg",
    },
    {
      name: "Capture One",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/27/CAPTURE_ONE_LOGO.svg",
    },
  ];

  return (
    <Layout>
      <a href="/Resume_Anish_Sahoo.pdf">
        <Button
          variant="flat"
          className="text-white text-xl font-sans h-14 bg-blue-600"
        >
          Download my Resume
        </Button>
      </a>
      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Education</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <Card className="bg-blue-800 text-white mb-2 py-2">
            <div className="flex flex-row items-center gap-4">
              <img
                src={northeasternLogo}
                className="object-scale-down h-24 w-auto py-2 px-1 bg-black m-2 rounded-lg"
                alt="Northeastern University Logo"
              ></img>
              <div className="flex flex-col">
                <p className="lg:text-xl md:text-xl sm:text-xl text-sm font-bold">
                  Northeastern University
                </p>
                <div className="pt-2 md:text-md sm:text-sm text-xs lg:text-lg text-gray-200 pr-1">
                  <p className="">BS in Computer Science</p>
                  <p className="">
                    Expected Graduation:{" "}
                    <b className="text-white">April 2027</b>{" "}
                  </p>
                </div>
              </div>
            </div>
            <CardFooter>
              <div className="w-full">
                <Card className="bg-blue-700 px-2 py-0.5">
                  <p className="text-sm text-gray-200 font-mono px-4 pt-2">
                    RELEVANT COURSEWORK:
                    <Divider />
                    <div className="text-md font-bold text-white pt-1">
                      <p>CS2500 Fundamentals of Computer Science 1</p>
                      <p>CS1800 Discrete Structures</p>
                    </div>
                  </p>
                </Card>
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
          <Card
            className="text-gray-300 text-sm lg:text-lg bg-blue-800 p-2 mb-1"
            shadow="sm"
          ></Card>
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
            <p className="text-sm text-white font-mono px-4 pt-2">
              TECHNOLOGIES
            </p>
            <Divider />
            <BadgeCards cards={frameworks} />
          </Card>

          <Card className="bg-blue-800 mt-4" shadow="sm">
            <p className="text-sm text-white font-mono px-4 pt-2">TOOLS</p>
            <Divider />
            <BadgeCards cards={tools} />
          </Card>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Resume;
