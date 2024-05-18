import * as React from "react";
import Layout from "./layout";
import ProjectCards from "../components/ProjectCards";
import { projects } from "../projects";

const Projects = () => {
  return (
    <Layout>
      <ProjectCards projects={projects} />
    </Layout>
  );
};

export default Projects;
