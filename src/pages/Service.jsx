import {motion} from 'framer-motion'
import React, { useRef } from "react";
import { IconCss, IconHtml, IconJs, IconNextjs, IconReact, IconTailwind, IconThreejs, IconTs } from '../assets/icon/Skill';
import { Game } from '@/assets/icon/Game';

const Service = () => {
    const ref = useRef(null)
  return (
    <div className="bg-[#2e3440] flex flex-col">
      <div
        className="spacer layer2 absolute"
      >
      </div>

      <div id="service"
        className="w-full z-10 pt-16 md:mt-40 sm:mt-28 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Service</h1>
            <motion.div
                className="w-[90px] bg-[#808691] py-[1px]"
                initial={{ width: "0px" }}
                whileInView={{ width: "90px" }}
                viewport={{once: true}}
                transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="flex flex-col mx-8 big:mx-20 xl:mx-36 xxl:mx-40 my-10 space-y-6 sm:space-y-0">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
