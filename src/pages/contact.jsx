import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
import githubLogo from "../images/github-mark-white.svg";
import linkedInLogo from "../images/LI-In-Bug.png";

const Contact = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center text-center">
        <p className="my-16 text-2xl">
          Need a developer?{" "}
          <a
            href="mailto:sahoo.an@northeastern.edu"
            className="text-blue-300 font-bold underline"
          >
            Email me!
          </a>
        </p>
        <p>You can also find me at:</p>

        <a href="https://github.com/anish-sahoo">
          <Button
            className="my-2 bg-gray-950 text-white text-sans font-bold text-md h-14 pr-8 w-52"
            startContent={
              <img
                src={githubLogo}
                className="object-scale-down h-10 w-auto p-2 px-1 pr-4 rounded-lg"
                alt="GitHub Logo"
              ></img>
            }
          >
            My GitHub
          </Button>
        </a>
        <a href="https://linkedin.com/in/anish-sahoo/">
          <Button
            className="my-2 bg-blue-600 text-sans font-bold text-white text-md h-14 w-52"
            startContent={
              <img
                src={linkedInLogo}
                className="object-scale-down h-10 w-auto p-2 px-1 rounded-lg bg-white"
                alt="LinkedIn Logo"
              ></img>
            }
          >
            My LinkedIn
          </Button>
        </a>
      </div>
    </Layout>
  );
};

export default Contact;
