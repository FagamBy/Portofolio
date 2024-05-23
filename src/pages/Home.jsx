import React from "react";

const Home = () => {
  return (
    <div id="home" className="bg-[#2e3440] flex sm:flex-row flex-col items-center px-6 big:px-12 xl:px-20 xxl:px-28
      sm:justify-between pt-24"
    >
      <div className="flex flex-col space-y-3">
        <p className="font-medium text-lg text-[#ECEFF4]">Hi! My name is</p>
        <h1 className="text-6xl font-semibold text-[#ECEFF4]">
          <span className="text-[#88C0D0]">Al Sakha </span>
          F<span className="text-[#88C0D0]">. </span>A<span className="text-[#88C0D0]">.</span>
        </h1>
        <p className="font-medium text-base text-[#ECEFF4]">
          Someone who enjoys learning new things and tech
        </p>
      </div>

      <div>
        <svg id="visual" viewBox="0 0 300 300" width="300" height="300" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><g transform="translate(148.84902758109817 162.98298628469723)"><path d="M58.3 -69.7C82.8 -49 114.8 -37.4 114.4 -22.6C114.1 -7.9 81.4 10.1 63.9 33.7C46.5 57.3 44.3 86.4 30.9 96.3C17.4 106.2 -7.2 96.8 -27.3 85.1C-47.5 73.4 -63.1 59.5 -79.3 41.1C-95.5 22.8 -112.3 0 -112.1 -23C-111.9 -46.1 -94.9 -69.4 -73.4 -90.6C-51.9 -111.8 -25.9 -130.9 -4.5 -125.5C16.9 -120.2 33.9 -90.3 58.3 -69.7" fill="#88C0D0"></path></g></svg>
      </div>
    </div>
  );
};

export default Home;
