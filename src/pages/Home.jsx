import React from "react";
import styles from "../style";
import blob from "../assets/blob.svg"

const Home = () => {
  return (
    <div id="home" className="bg-[#2e3440] flex sm:flex-row flex-col items-center pl-6 pr-6
      sm:justify-between pt-24"
    >
      <div className="flex flex-col space-y-3">
        <p className="font-medium text-lg text-[#ECEFF4]">Hi! My name is</p>
        <h1 className="text-6xl font-semibold text-[#ECEFF4]">
          <span className="text-[#88C0D0]">Al Sakha </span>
          F<span className="text-[#88C0D0]">. </span>A<span className="text-[#88C0D0]">.</span>
        </h1>
        <p className="font-medium text-base text-[#ECEFF4]">
          Someone who enjoys learning new things and coding
        </p>
      </div>

      <div className="">
        <img src={blob} alt=""/>
      </div>
    </div>
  );
};

export default Home;
