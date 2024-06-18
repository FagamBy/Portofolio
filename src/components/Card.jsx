import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pancarimaimg from "/pancarimaimg.png";
import nexcentimg from "/nexcentimg.png";
import kasirappimg from "/kasirappimg.png";
import inditechimg from "/inditechimg.png";
import irtitodo from "/irtitodo.png";

export const Card1 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={nexcentimg} alt="" className="imeg"/>
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Nexcent</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            href="https://github.com/IRTIDEATH/IRTI-Nexcent"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub}/> {" "} Github
          </a>
          <a
            href="https://irti-nexcent.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {" "} Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={pancarimaimg} alt="" className="imeg"/>
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Pancarima</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub}/> {" "} Github
          </a>
          <a
            href="https://pancarima.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {" "} Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={kasirappimg} alt="" className="imeg"/>
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Kasir App</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub}/> {" "} Github
          </a>
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {" "} Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={inditechimg} alt="" className="imeg"/>
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Inditech</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub}/> {" "} Github
          </a>
          <a
            href="https://web.indi.tech/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {" "} Demo
          </a>
        </div>
      </div>
    </div>
  );
};


export const Card5 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={irtitodo} alt="" className="imeg"/>
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Todo App</h1> 
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            href="https://github.com/IRTIDEATH/IRTI-Todo"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub}/> {" "} Github
          </a>
          <a
            href="https://irti-todo.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> {" "} Demo
          </a>
        </div>
      </div>
    </div>
  );
};