import React from "react";
import {motion} from 'framer-motion'
import { Card1, Card2, Card3, Card4 } from "@/components/Card";

const Project = () => {
  return (
    <div className="bg-[#2e3440] flex flex-col">
      <div className="spacer layer4 absolute"></div>

      <div id="project" className="w-full min-h-[150vh] z-10 pt-16 md:mt-40 sm:mt-28 xs:mt-16 lg:mt-48 xl:mt-60">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Projects</h1>
            <motion.div
              className="w-[90px] bg-[#808691] py-[1px]"
              initial={{ width: "0px" }}
              whileInView={{ width: "90px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="mx-8 big:mx-20 xl:mx-36 xxl:mx-40 mt-16">
            <div className="grid lg:grid-cols-3 xs:grid-rows-3 sm:grid-cols-2 gap-6 ">
              <Card1/>
              <Card2/>
              <Card3/>
              <Card4/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
