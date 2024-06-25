// src/components/Services.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Services = ({ index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <div className="text-center md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionText}>Skills</h2>
      </motion.div>

      <section className="services-section py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-10"
          >
          </motion.div>

          <div className="flex flex-col md:flex-row md:justify-around">
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
              <motion.div
                className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
                whileHover={{ scale: 1.05 }}
              >
                C# .NET
              </motion.div>
              <Skill name="HTML" x="-25vw" y="2vw" />
              <Skill name="ReactJS" x="-5vw" y="-10vw" />
              <Skill name="JavaScript" x="20vw" y="6vw" />
              <Skill name="Python" x="0vw" y="12vw" />
              <Skill name="NextJs" x="-20vw" y="-15vw" />
              <Skill name="GatsbyJs" x="15vw" y="-12vw" />
              <Skill name="Web Design" x="32vw" y="-5vw" />
              <Skill name="Figma" x="0vw" y="-20vw" />
              <Skill name="Firebase" x="-25vw" y="18vw" />
              <Skill name="Tailwind CSS" x="18vw" y="18vw" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper(Services, "services");
