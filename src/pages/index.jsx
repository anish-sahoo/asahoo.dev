import * as React from "react";
import Layout from "./layout";
import { Button } from "@heroui/button";
import TypewriterText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";


const IndexPage = () => {
  return (
    <Layout>
      <div className="h-full flex flex-col">
        <h1 className="text-6xl md:7xl sm:6xl lg:l8xl mt-20">
          <TypewriterText text="Hello." delay={0} />
        </h1>
        <h2 className="text-2xl my-4">
          <TypewriterText
            text="I'm Anish Sahoo, a developer attending Northeastern University in Boston, Massachussets."
            delay={800}
            speed={50}
          />
        </h2>
        <h2 className="text-xl mt-6 font-sans text-blue-400 italic">
          <TypewriterText
            text="I'm passionate about building things that help people out."
            delay={6100} // 3500
            speed={50} // 30
          />
        </h2>
        <div className="flex md:flex-row flex-col md:mt-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }} // 8.5 // 5.5
            className="mt-10 flex"
          >
            <Link to="/projects">
              <Button
                size="lg"
                variant="ghost"
                radius="small"
                className="light text-gray-200 hover:text-black hover:bg-blue-700 lg:text-4xl md:text-3xl text-2xl p-8"
              >
                My Work
              </Button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }} // 6 // 9
            className="mt-4 flex md:mt-10 md:mx-4"
          >
            <a href="/resume.pdf">
              <Button
                size="lg"
                variant="ghost"
                radius="small"
                className="light text-gray-200 hover:text-black hover:bg-blue-700 lg:text-4xl md:text-3xl text-2xl p-8"
              >
                My Resume
              </Button>
            </a>
          </motion.div>
          
        </div>
        <div>
        {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0 }} // 6 // 9
            className="mt-4 flex md:mt-10"
          >
            <a href="https://linkedin.com/in/anish-sahoo">
              <Button
                size="lg"
                variant="ghost"
                radius="small"
                className="light text-gray-200 hover:text-black hover:bg-blue-700 lg:text-4xl md:text-3xl text-2xl py-8"
              >
                <img
                src={githubLogo}
                className="object-scale-down h-12 w-auto rounded-lg"
                alt="GitHub Logo"
              ></img>
              </Button>
            </a>
          </motion.div> */}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anish's Portfolio</title>;
