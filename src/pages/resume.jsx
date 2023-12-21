import * as React from "react";
import Layout from "./layout";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

import tailwindImage from "../images/tailwindcss.svg";
import gatsbyImage from "../images/gatsby.svg";
import reactImage from "../images/react.svg";
import jsImage from "../images/javascript.png";

import BadgeCards from "../components/BadgeCards";

const Resume = () => {
  const cardStyle = "my-6 bg-blue-950";
  const cardHeaderStyle = "text-md text-gray-300 font-mono";

  const languages = [
    {
      name: "JavaScript",
      image: jsImage,
    },
    {
      name: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    },
    {
      name: "Java",
      image: "https://upload.wikimedia.org/wikipedia/de/e/e1/Java-Logo.svg",
    },
    {
      name: "Kotlin",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png",
    },
  ];

  const frameworks = [
    {
      name: "React",
      image: reactImage,
    },
    {
      name: "Gatsby",
      image: gatsbyImage,
    },
    {
      name: "Tailwind",
      image: tailwindImage,
    },
    {
      name: "SQLite",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg",
    },
  ];

  return (
    <Layout>
      <Button
        variant="flat"
        className="text-white text-xl font-sans h-14 bg-blue-600"
      >
        Download my Resume
      </Button>
      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Education</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <p>Northeastern University</p>
          <p>BS in Computer Science</p>
          <p>Expected Graduation: April 2027</p>
        </CardBody>
      </Card>

      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Work Experience</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <p>Nothing yet</p>
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

          <Card className="bg-blue-800 my-4" shadow="sm">
            <p className="text-sm text-white font-mono px-4 pt-2">FRAMEWORKS</p>
            <Divider />
            <BadgeCards cards={frameworks} />
          </Card>
        </CardBody>
      </Card>
    </Layout>
  );
};

export default Resume;
