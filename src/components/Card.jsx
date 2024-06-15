import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pancarimaimg from "/pancarimaimg.png";
import nexcentimg from "/nexcentimg.png";
import kasirappimg from "/kasirappimg.png";
import inditechimg from "/inditechimg.png";
import irtitodo from "/irtitodo.png";

export const Card1 = () => {
  return (
    <div className="bg-[#292e39] text-[#ECEFF4] flex flex-col rounded-b-md">
      <img src={nexcentimg} alt="" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Nexcent</h1>
        <div className="flex items-center justify-between text-sm font-medium">
          <a
            href="https://github.com/IRTIDEATH/IRTI-Nexcent"
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200 bg-[#88C0D0] p-2 rounded-sm"
          >
            Source Code
          </a>
          <a
            href="https://irti-nexcent.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200 bg-[#88C0D0] p-2 rounded-sm"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="bg-[#292e39] text-[#ECEFF4] flex flex-col rounded-b-md">
      <img src={pancarimaimg} alt="" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Pancarima</h1>
        <div className="flex items-center justify-between text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm cursor-not-allowed"
          >
            Source Code
          </a>
          <a
            href="https://pancarima.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200 bg-[#88C0D0] p-2 rounded-sm"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="bg-[#292e39] text-[#ECEFF4] flex flex-col rounded-b-md">
      <img src={kasirappimg} alt="" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Kasir App</h1>
        <div className="flex items-center justify-between text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm cursor-not-allowed"
          >
            Source Code
          </a>
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm cursor-not-allowed"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="bg-[#292e39] text-[#ECEFF4] flex flex-col rounded-b-md">
      <img src={inditechimg} alt="" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Inditech</h1>
        <div className="flex items-center justify-between text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm cursor-not-allowed"
          >
            Source Code
          </a>
          <a
            href="https://web.indi.tech/"
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};


export const Card5 = () => {
  return (
    <div className="bg-[#292e39] text-[#ECEFF4] flex flex-col rounded-b-md">
      <img src={irtitodo} alt="" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Todo App</h1> 
        <div className="flex items-center justify-between text-sm font-medium">
          <a
            href="https://github.com/IRTIDEATH/IRTI-Todo"
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm"
          >
            Source Code
          </a>
          <a
            href="https://irti-todo.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-[#ECEFF4] transition duration-200
            bg-[#88C0D0] p-2 rounded-sm"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};