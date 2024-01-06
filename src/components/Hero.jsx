import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import BackgroundAnimation from "./canvas/BackgroundAnimation";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto flex flex-col">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="flex flex-col justify-start items-center mt-5 w-2/3">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Karol</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces, <br className="sm:block hidden" />
            desktop and web applications.
          </p>
        </div>
        <div className="flex flex-row justify-end items-center w-full">
          <div className="w-3/4">
            <BackgroundAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
