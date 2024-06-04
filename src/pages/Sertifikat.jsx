import React from "react";
import {motion} from 'framer-motion'

const Sertifikat = () => {
  return (
    <div className="bg-[#292e39] flex flex-col">
      <div className="spacer layer3 absolute"></div>

      <div id="project" className="min-h-[100vh] w-full z-10 pt-16 md:mt-40 sm:mt-28 xs:mt-16 lg:mt-48 xl:mt-60">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Project</h1>
            <motion.div
              className="w-[110px] bg-[#808691] py-[1px]"
              initial={{ width: "0px" }}
              whileInView={{ width: "110px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sertifikat;
