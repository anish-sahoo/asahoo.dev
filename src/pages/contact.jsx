import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import githubLogo from "../images/github-mark-white.svg";
import linkedInLogo from "../images/LI-In-Bug.png";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <p className="my-16">
          Need a developer?{" "}
          <a
            href="mailto:sahoo.an@northeastern.edu"
            className="text-blue-300 font-bold"
          >
            Email me!
          </a>
        </p>
        <Button
          className="my-2 bg-gray-950 text-white text-sans font-bold text-md h-14 pr-8 w-52"
          startContent={
            <img
              src={githubLogo}
              className="object-scale-down h-10 w-auto p-2 px-1 pr-4 rounded-lg"
            ></img>
          }
        >
          My GitHub
        </Button>
        <Button
          className="my-2 bg-blue-600 text-sans font-bold text-white text-md h-14 w-52"
          startContent={
            <img
              src={linkedInLogo}
              className="object-scale-down h-10 w-auto p-2 px-1 rounded-lg bg-white"
            ></img>
          }
        >
          My LinkedIn
        </Button>
      </div>
    </Layout>
  );
};

export default Contact;
