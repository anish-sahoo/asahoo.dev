import * as React from "react";
import Layout from "./layout";
import TypewriterText from "../components/TypewriterText";

const Projects = () => {
  return (
    <Layout>
      <div>
        <h1>Projects</h1>
        <h2>
          <TypewriterText text="Project 1" delay={0} />
        </h2>
        <h2>
          <TypewriterText text="Project 2" delay={1000} speed={5} />
        </h2>
        <h2>
          <TypewriterText text="Project 3" delay={2000} />
        </h2>
      </div>
    </Layout>
  );
};

export default Projects;
