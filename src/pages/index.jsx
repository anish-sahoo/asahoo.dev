import * as React from "react";
import Layout from "./layout";
import { Button } from "@nextui-org/button";
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
            text="I'm Anish Sahoo, a developer attending college in the San Francisco Bay Area."
            delay={800}
            speed={50}
          />
        </h2>
        <h2 className="text-xl mt-6 font-sans text-blue-400 italic">
          <TypewriterText
            text="I'm passionate about building things that help people out."
            delay={5500}
            speed={50}
          />
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 8.5 }}
          className="my-10 w-full"
        >
          <Link to="/projects">
            <Button
              size="lg"
              variant="ghost"
              radius="small"
              className=" text-gray-200 hover:text-black hover:bg-blue-700 lg:text-4xl md:text-3xl text-2xl p-8"
            >
              View My Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anish's Portfolio</title>;
