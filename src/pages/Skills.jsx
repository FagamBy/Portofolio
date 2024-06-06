import {motion} from 'framer-motion'
import React, { useRef } from "react";
import { IconCss, IconHtml, IconJs, IconNextjs, IconReact, IconTailwind, IconTs } from '../assets/icon/Skill';

const Skills = () => {
    const ref = useRef(null)
  return (
    <div className="bg-[#2e3440] flex flex-col">
      <div
        className="spacer layer2 absolute"
      >
      </div>

      <div id="skills"
        className="w-full z-10 pt-16 md:mt-40 sm:mt-28 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Skills</h1>
            <motion.div
                className="w-[90px] bg-[#808691] py-[1px]"
                initial={{ width: "0px" }}
                whileInView={{ width: "90px" }}
                viewport={{once: true}}
                transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="flex flex-col mx-8 big:mx-20 xl:mx-36 xxl:mx-40 mt-16 space-y-12">
            <div className="flex sm:justify-end justify-center">
              <div className="flex items-center justify-between p-5 bg-[#292e39] w-[450px] rounded-md"
              >

                <IconHtml/>
                <IconCss/>
                <IconJs/>
                <IconTs/>
              </div>
            </div>

            <div className="flex sm:justify-start justify-center">
              <div className="flex flex-col items-start space-y-5 sm:w-[35vw] ss:w-[50vw] xs:w-[70vw] text-wrap text-[#ECEFF4]">
                <h1 className="text-3xl font-semibold">Mond Tech Stack.</h1>
                <p className="text-lg font-normal">
                  I'm learning to create my own personal tech stack,
                  of course with my favorite programming language
                </p>
              </div>
            </div>

            <div className="flex sm:justify-end justify-center md:mr-24 xs:mr-0">
              <div className="flex items-center justify-between w-[450px] p-5 bg-[#292e39] rounded-md">
                <IconTailwind/>
                <IconReact/>
                <IconNextjs/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
