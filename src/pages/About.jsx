import React from "react";
import icon1 from '../assets/icon1.svg'

const About = () => {
  return (
    <div className="bg-[#292e39] flex flex-col">
      <div id="about" className="spacer layer1 flex items-center justify-start px-6">
        {/* <img src={icon1} alt="" className="xs:w-[45px] xs:h-auto xs:object-contain ss:w-[80px] ss:h-auto ss:object-contain"/> */}
      </div>

      <div className="min-h-screen w-full">
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">About me</h1>
            <div className="w-[115px] py-[1px] bg-[#808691]"></div>       
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
