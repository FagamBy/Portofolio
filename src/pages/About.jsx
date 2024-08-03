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

          <div className="flex flex-col-reverse my-10 items-center justify-between">
            <div className="flex items-center justify-center flex-col space-y-1 mt-8 mx-8 big:mx-20 xl:mx-36 xxl:mx-40">
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                Hello there! I am a junior web developer who loves learning to
                code. I started learning code in 2022.
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                I created this website to showcase both the projects I am
                currently working on and those I have completed.
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg">
                I am ready to work independently or in a team.
              </p>
            </div>

            {/* <div className="xs:mt-8 sm:mt-0 w-[300px] ss:w-[380px] h-[230px] bg-white rounded-lg">
              <div className="w-full bg-[#3B4252] flex flex-row space-x-3 px-8 py-4 rounded-t-md">
                <div className="p-2 bg-[#D8DEE9] rounded-full"></div>
                <div className="p-2 bg-[#D8DEE9] rounded-full"></div>
                <div className="p-2 bg-[#D8DEE9] rounded-full"></div>
              </div>

              <div className="w-full flex items-end mt-[1.20rem] justify-end">
                <div className="bg-[#3B4252] w-[240px] mx-7 sm:mx-5 p-5 rounded-md">
                  <div className="flex flex-col items-start space-y-3">
                    <motion.div
                      className="w-[140px] bg-[#D8DEE9] py-[0.35rem] rounded-[2px]"
                      initial={{ opacity: 0, width: "0px" }}
                      whileInView={{ opacity: 1, width: "140px" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <div className="flex w-full items-center justify-between">
                      <motion.div
                        className="w-[65px] bg-[#81A1C1] py-[0.35rem] rounded-[2px]"
                        initial={{ opacity: 0, width: "0px" }}
                        whileInView={{ opacity: 1, width: "65px" }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <motion.div
                        className="w-[120px] bg-[#88C0D0] py-[0.35rem] rounded-[2px]"
                        initial={{ opacity: 0, width: "0px" }}
                        whileInView={{ opacity: 1, width: "120px" }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <motion.div
                      className="w-[126px] bg-[#5E81AC] py-[0.35rem] rounded-[2px]"
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "126px" }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    ></motion.div>
                    <div className="flex w-full items-center justify-between">
                      <motion.div
                        className="w-[55px] bg-[#5E81AC] py-[0.35rem] rounded-[2px]"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "55px" }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <motion.div
                        className="w-[55px] bg-[#8FBCBB] py-[0.35rem] rounded-[2px]"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "55px" }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      ></motion.div>
                      <motion.div
                        className="w-[55px] bg-[#E5E9F0] py-[0.35rem] rounded-[2px]"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "55px" }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                    <motion.div
                      className="w-full bg-[#88C0D0] py-[0.35rem] rounded-[2px]"
                      initial={{ opacity: 0, width: 0 }}
                      whileInView={{ opacity: 1, width: "100%" }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
