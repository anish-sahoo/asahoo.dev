import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const TypewriterText = ({ text, delay, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");
  // const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      for (let i = 0; i <= text.length; i++) {
        setDisplayText(text.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    };

    const startAnimation = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      await animateText();
    };

    startAnimation();
  }, [delay, text, speed]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {displayText}
    </motion.div>
  );
};

export default TypewriterText;
