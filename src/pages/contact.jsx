import * as React from "react";
import Layout from "./layout";
import { Button } from "@heroui/button";
import AnimatedGradientBackground from "../components/AnimatedGradientBackground";
import githubLogo from "../images/github-mark-white.svg";
import linkedInLogo from "../images/LI-In-Bug.png";

const Contact = () => {
  return (
    <Layout>
      <AnimatedGradientBackground />
      <div className="flex flex-col items-center text-center relative z-10">
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
            className="my-2 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-white font-bold text-md h-14 pr-8 w-52"
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
            className="my-2 bg-slate-900/40 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 text-white font-bold text-md h-14 w-52"
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

export const Head = () => <title>Contact - Anish's Portfolio</title>;
