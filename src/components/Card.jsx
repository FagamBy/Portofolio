import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pancarimaimg from "/pancarimaimg.png";
import nexcentimg from "/nexcentimg.png";
import kasirappimg from "/kasirappimg.png"
import inditechimg from "/inditechimg.png"

export const Card1 = () => {
  return (
    <div className="bg-[#4C566A] text-[#88C0D0] flex flex-col rounded-b-md">
      <img src={nexcentimg} alt=""/>
      <div className="p-5 flex flex-col space-y-3">
        <h1 className="text-2xl font-semibold">Nexcent</h1>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/IRTIDEATH/IRTI-Nexcent"
            className="hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://irti-nexcent.vercel.app/"
            className="hover:text-white transition duration-200"
          >
            <FontAwesomeIcon icon={faPlay} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="bg-[#4C566A] text-[#88C0D0] flex flex-col rounded-b-md">
      <img src={pancarimaimg} alt="" />
      <div className="p-5 flex flex-col space-y-3">
        <h1 className="text-2xl font-semibold">Pancarima</h1>
        <div className="flex space-x-4 text-xl">
          <button className="text-[#BF616A]">
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <a href="https://pancarima.vercel.app/"
            className="hover:text-white transition duration-200">
            <FontAwesomeIcon icon={faPlay} />
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="bg-[#4C566A] text-[#88C0D0] flex flex-col rounded-b-md">
      <img src={kasirappimg} alt="" />
      <div className="p-5 flex flex-col space-y-3">
        <h1 className="text-2xl font-semibold">Kasir Desktop</h1>
        <div className="flex space-x-4 text-xl">
          <button className="text-[#BF616A]">
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button className="text-[#BF616A]">
            <FontAwesomeIcon icon={faPlay} />
          </button>
        </div>
      </div>
    </div>
  );
};


export const Card4 = () => {
    return (
      <div className="bg-[#4C566A] text-[#88C0D0] flex flex-col rounded-b-md">
        <img src={inditechimg} alt="" />
        <div className="p-5 flex flex-col space-y-3">
          <h1 className="text-2xl font-semibold">Inditech</h1>
          <div className="flex space-x-4 text-xl">
            <button className="text-[#BF616A]">
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <a href="https://web.indi.tech/"
              className="hover:text-white transition duration-200">
              <FontAwesomeIcon icon={faPlay} />
            </a>
          </div>
        </div>
      </div>
    );
  };