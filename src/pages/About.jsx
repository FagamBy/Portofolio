import React from "react";
import { Backpack } from "../assets/icon/Backpack";
import { motion } from "framer-motion";
import {
  IconCss,
  IconHtml,
  IconJs,
  IconNextjs,
  IconReact,
  IconTailwind,
  IconThreejs,
  IconTs,
} from "../assets/icon/Skill";
import { Game } from "@/assets/icon/Game";

const About = () => {
  return (
    <div className="bg-[#292e39] flex flex-col">
      <div className="spacer layer1 flex items-center justify-start px-8 big:px-20 xl:px-36 xxl:px-40 absolute">
        <Backpack />
      </div>

      <div
        id="about"
        className="w-full pt-16
        z-10 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">About me</h1>
            <motion.div
              className="w-[115px] bg-[#808691] py-[1px]"
              initial={{ width: "0px" }}
              whileInView={{ width: "115px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="flex flex-col my-10 sm:space-y-20 xs:space-y-9">
            <div className="flex items-center justify-center flex-col space-y-2 mx-8 big:mx-20 xl:mx-36 xxl:mx-40">
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                A junior web developer who loves learning to code
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                I created this website to showcase both the projects I am
                currently working on and those I have completed.
              </p>
            </div>

            <div className="flex flex-col mx-8 big:mx-20 xl:mx-36 xxl:mx-40 space-y-6 sm:space-y-0">
              <div className="flex sm:justify-end justify-center">
                <div className="flex items-center justify-between p-4 bg-[#434C5E] w-[450px] rounded-md">
                  <IconHtml />
                  <IconCss />
                  <IconJs />
                  <IconTs />
                </div>
              </div>

              <div className="flex sm:justify-start justify-center">
                <div
                  className="flex flex-col space-y-5 sm:w-[35vw] ss:w-[50vw]
                  xs:w-[70vw] text-wrap text-[#ECEFF4] xs:text-center sm:text-start"
                >
                  <h1 className="text-3xl font-semibold">Zect Skills.</h1>
                  <p className="text-lg font-normal text-[#D8DEE9]">
                    I'm learning to create my own personal tech stack, of course
                    with my favorite programming language.
                  </p>
                </div>
              </div>

              <div className="flex sm:justify-end justify-center xs:space-x-0 sm:space-x-16 md:mr-24 xs:mr-0">
                <Game />
                <div className="flex items-center justify-between w-[450px] p-4 bg-[#434C5E] rounded-md">
                  <IconTailwind />
                  <IconReact />
                  <IconNextjs />
                  <IconThreejs />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
