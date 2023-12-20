import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import TypewriterText from "../components/TypewriterText";

const IndexPage = () => {
  const buttonStyle = "bg-blue-800 text-gray-200 mx-2 my-1";

  return (
    <Layout>
      <div className="h-full">
        <h1>
          <TypewriterText text="Hello." delay={0} />
        </h1>
        <h2>
          <TypewriterText
            text="I'm Anish, a developer attending college in beautiful San Francisco."
            delay={800}
            speed={50}
          />
        </h2>
        <h2 className="py-10">This website is still being built!</h2>
        <div className="flex flex-col w-60">
          <Button
            size="lg"
            variant="ghost"
            className="text-gray-200 mx-2 my-1 hover:text-gray-900"
          >
            View My Projects
          </Button>
          <Button size="lg" className={buttonStyle}>
            View My Resume
          </Button>
          <Button size="lg" className={buttonStyle}>
            View My Linkedin
          </Button>
          <Button size="lg" className={buttonStyle}>
            View My Github
          </Button>
          <Button size="lg" className={buttonStyle}>
            View My Projects
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anish's Portfolio</title>;
