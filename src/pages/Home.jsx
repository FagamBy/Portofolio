import React from "react";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-[#2e3440] flex sm:flex-row flex-col items-center px-8 big:px-20 xl:px-36 xxl:px-40
      sm:justify-between pt-28 pb-16"
    >
      <div className="flex flex-col space-y-3 items-start">
        <p className="font-medium text-lg text-[#ECEFF4]">
          Hi There! My name is
        </p>
        <h1 className="text-6xl font-semibold text-[#ECEFF4]">
          <span className="text-[#88C0D0]">Al Sakha </span>F
          <span className="text-[#88C0D0]">. </span>A
          <span className="text-[#88C0D0]">.</span>
        </h1>
        <p className="font-medium text-base text-[#ECEFF4]">
          Someone who enjoys learning new things and tech.
        </p>
        <h1 className="text-sm font-medium text-[#2e3440] py-2 px-[0.50rem] bg-[#88C0D0] rounded-sm animate-pulse">
          Web Developer
        </h1>
      </div>

      <div className="xs:mt-8 sm:mt-0 w-[300px] sm:w-[380px] h-[230px] bg-white rounded-lg">
        <div className="w-full bg-[#3B4252] flex flex-row space-x-3 px-8 py-4 rounded-t-md">
          <div className="p-2 bg-[#D8DEE9] rounded-full"></div>
          <div className="p-2 bg-[#D8DEE9] rounded-full"></div>
          <div className="p-2 bg-[#D8DEE9] rounded-full"></div>
        </div>

        <div className="w-full flex items-end mt-[1.20rem] justify-end">
          <div className="bg-[#3B4252] w-full ml-5 sm:ml-36 mr-5 p-5 rounded-md">
            <div className="flex flex-col items-start space-y-3">
              <div className="w-[140px] bg-[#D8DEE9] py-[0.35rem] rounded-[2px]"></div>
              <div className="flex w-full items-center justify-between">
                <div className="w-[65px] bg-[#81A1C1] py-[0.35rem] rounded-[2px] mr-3"></div>
                <div className="w-[120px] bg-[#88C0D0] py-[0.35rem] rounded-[2px]"></div>
              </div>
              <div className="w-[126px] bg-[#5E81AC] py-[0.35rem] rounded-[2px]"></div>
              <div className="flex w-full items-center justify-between">
                <div className="w-[55px] bg-[#5E81AC] py-[0.35rem] rounded-[2px]"></div>
                <div className="w-[55px] bg-[#8FBCBB] py-[0.35rem] rounded-[2px]"></div>
                <div className="w-[55px] bg-[#E5E9F0] py-[0.35rem] rounded-[2px]"></div>
              </div>
              <div className="w-full bg-[#88C0D0] py-[0.35rem] rounded-[2px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
