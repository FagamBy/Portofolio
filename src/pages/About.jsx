import React from "react";
import { Backpack } from "../assets/icon/Backpack";

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
            <div className="w-[115px] py-[1px] bg-[#808691]"></div>
          </div>

          <div className="flex ss:flex-row flex-col ss:space-y-0 space-y-9 items-center justify-between mx-6 bg-[#434C5E] p-5 mt-8 rounded-md">
            <div className="flex flex-col ss:w-[40%] space-y-3">
              <h1 className="text-[#eceff4]">- My Story</h1>
              <p className="text-justify text-wrap text-[#D8DEE9] text-sm">
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Molestias illum facere possimus
                reprehenderit consectetur illo!
                Lorem ipsum dolor sit amet.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente.
              </p>
              
              <p className="text-justify text-wrap text-[#D8DEE9] text-sm">
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Molestias illum facere possimus
                reprehenderit consectetur illo!
                Lorem ipsum dolor sit amet.asdads
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente.
              </p>
            </div>

            <div className="bg-[#3b4252] ss:w-[40%] flex p-5 rounded-md">
              <ul className="text-[#E5E9F0]">
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
