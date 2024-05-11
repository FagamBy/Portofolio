import {motion} from 'framer-motion'
import React, { useRef } from "react";

const Skills = () => {
    const ref = useRef(null)
  return (
    <div className="bg-[#2e3440] flex flex-col">
      <div
        className="spacer layer2 flex items-center justify-start px-6"
      >
      </div>

      <div id="skills" className="min-h-[60vh] w-full">
        <div className="flex justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
