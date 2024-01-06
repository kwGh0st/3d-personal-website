import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div>
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-start"
      >
        <p className={styles.sectionSubText}>Tech.</p>
        <h2 className={styles.sectionHeadText}>My skills.</h2>
      </motion.div>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
        <div className="flex flex-row flex-wrap justify-start gap-10">
          {technologies.map((technology) => (
            <div
              className="w-28 h-28 flex flex-col justify-center items-center"
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />
              <p>{technology.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
