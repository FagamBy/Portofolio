import {motion} from 'framer-motion'
import React, { useRef } from "react";
import { IconCss, IconHtml, IconJs, IconTs } from '../assets/icon/Skill';

const Skills = () => {
    const ref = useRef(null)
  return (
    <div className="bg-[#2e3440] flex flex-col">
      <div
        className="spacer layer2 flex items-center justify-start px-6 absolute"
      >
      </div>

      <div id="skills"
        className="min-h-[60vh] w-full z-10 pt-16 md:mt-40 sm:mt-28 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Skills</h1>
            <motion.div
                className="w-[90px] bg-[#808691] py-[1px]"
                initial={{ width: "0px" }}
                whileInView={{ width: "90px" }}
                viewport={{once: true}}
                transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="flex flex-col items-center justify-between mx-6 mt-8">
            <div className="flex p-5 bg-[#3B4252] space-x-5 rounded-md">
              <IconHtml/>
              <IconCss/>
              <IconJs/>
              <IconTs/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
