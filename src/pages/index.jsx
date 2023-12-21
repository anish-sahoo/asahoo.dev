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
            text="I'm passionate about building things that help people."
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
              className="bg-blue-800 text-gray-200 hover:text-white hover:bg-blue-700 text-4xl p-8"
            >
              My Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Anish's Portfolio</title>;
