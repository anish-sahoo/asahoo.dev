import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import TypewriterText from "../components/TypewriterText";
import { Link } from "gatsby";

const IndexPage = () => {
  const buttonStyle = "bg-blue-800 text-gray-200 mx-2 my-1 w-full";

  return (
    <Layout>
      <div className="h-full py-6">
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
          <Link to="/resume">
            <Button size="lg" className={buttonStyle} href="/resume">
              View My Resume
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" className={buttonStyle}>
              Contact Me
            </Button>
          </Link>
          <Link to="/projects">
            <Button size="lg" className={buttonStyle}>
              View My Projects
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anish's Portfolio</title>;
