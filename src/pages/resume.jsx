import * as React from "react";
import Layout from "./layout";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Link } from "@nextui-org/react";

const Resume = () => {
  const buttonStyle = "bg-blue-800 text-gray-200 mx-2 my-1";
  const cardStyle = "my-6 bg-blue-950";
  const linkStyle = "text-blue-800 hover:text-blue-900";
  const cardHeaderStyle = "text-md text-gray-300";
  return (
    <Layout>
      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Education</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <p>Northeastern University</p>
          <p>BS in Computer Science</p>
          <p>Expected Graduation: April 2027</p>
        </CardBody>
        <CardFooter>
          <Divider />
        </CardFooter>
      </Card>

      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Work Experience</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <p>Nothing yet</p>
        </CardBody>
        <CardFooter>
          <Divider />
        </CardFooter>
      </Card>

      <Card className={cardStyle} shadow="sm">
        <CardHeader>
          <p className={cardHeaderStyle}>Skills</p>
        </CardHeader>
        <CardBody className="text-gray-300">
          <Card className="bg-blue-800 my-4" shadow="sm">
            <CardHeader className={cardHeaderStyle}>
              <p className={cardHeaderStyle}>Languages</p>
            </CardHeader>
            <CardBody className="text-gray-300">
              <p>Java</p>
              <p>Python</p>
              <p>C</p>
              <p>JavaScript</p>
              <p>HTML</p>
              <p>CSS</p>
            </CardBody>
            <CardFooter>
              <Divider />
            </CardFooter>
          </Card>
        </CardBody>
        <CardFooter>
          <Divider />
        </CardFooter>
      </Card>
    </Layout>
  );
};

export default Resume;
