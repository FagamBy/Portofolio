import React from "react";
import { Backpack } from "../assets/icon/Backpack";
import { motion } from "framer-motion";

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

          <div className="flex flex-col my-10">
            <div className="flex items-center justify-center flex-col space-y-2 mx-8 big:mx-20 xl:mx-36 xxl:mx-40">
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                Hello there! I am a junior web developer who loves learning to code. I started learning code in 2022.
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                I created this website to showcase both the projects I am
                currently working on and those I have completed.
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">I am ready to work independently or in a team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
