"use client"

import * as React from "react";

import Line from "../ui/Line";

const Experience = () => {
  return (
    <section className="bg-[#292e39] flex flex-col">
      <div className="spacer layer3 absolute"></div>

      <div
        className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Experience</h1>
            <Line/>
          </div>

          <div className="w-full flex justify-center my-5">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
