import React from "react";
import { Backpack } from "../assets/icon/Backpack";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#292e39] flex flex-col">
      <div id="about" className="spacer layer1 flex items-center justify-start px-6">
        <Backpack/>
      </div>

      <div className="min-h-[55vh] w-full">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">About me</h1>
            <motion.div
                className="w-[115px] bg-[#808691] py-[1px]"
                initial={{ width: "0px" }}
                whileInView={{ width: "115px" }}
                viewport={{once: true}}
                transition={{ duration: 0.5 }}
            ></motion.div>
          </div>

          <div className="flex ss:flex-row flex-col ss:space-y-0 space-y-9 items-center justify-between mx-6 bg-[#434C5E] p-5 mt-8 rounded-md">
            <div className="flex flex-col ss:w-[40%] space-y-3">
              <h1 className="text-[#eceff4]">- My Story</h1>
              <p className="text-justify text-wrap text-[#D8DEE9] text-sm">
                The beginning of learning basic programming was very fun, but
                after learning more deeply, my head was dizzy. But I didn't give
                up and kept learning, because it was fun and I liked it. And that 
                was just frontend.
              </p>
              
              <p className="text-justify text-wrap text-[#D8DEE9] text-sm">
                After entering the backend section, more errors appeared than 
                on the frontend section. I actually couldn't do mathematics 
                since I was little, and thought about giving up learning programming because 
                it might require strong logic in learning programming. But I always remember
                my goal in learning programming. And I decided
                to learn programming more often until I master it
              </p>
            </div>

            <div className="bg-[#3b4252] ss:w-[40%] flex p-5 rounded-md">
              <ul className="text-[#E5E9F0] text-lg">
                <li>Hobby : Reading novel, Gaming, Coding</li>
                <li>Status : Student</li>
                <li>Age : 17</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
