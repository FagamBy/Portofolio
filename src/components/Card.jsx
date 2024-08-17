import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import pancarimaimg from "/pancarimaimg.png";
import kasirappimg from "/kasirappimg.png";
import inditechimg from "/inditechimg.png";
import irtitodo from "/irtitodo.png";
import dhafaart from "/dhafaart.png";
import zabod from "/zabod.png";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const Card1 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={dhafaart} alt="" className="imeg" />
      <div className="p-5 flex flex-col space-y-6">
        <div className="flex space-x-2 items-center">
          <h1 className="text-2xl font-semibold text-[#88C0D0]">Dhafa art</h1>
          <p className="text-[#D8DEE9] text-xs">{"[ON PROGRESS]"}</p>
        </div>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub} /> Github
          </a>
          <a
            href="https://dhafaart.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
          {/* <Dialog>
            <DialogTrigger><FontAwesomeIcon icon={faBook} size="2x" color="white" /></DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}
        </div>
      </div>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={pancarimaimg} alt="" className="imeg" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Pancarima</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub} /> Github
          </a>
          <a
            href="https://pancarima.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={kasirappimg} alt="" className="imeg" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Kasir App</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            href="https://github.com/IRTIDEATH/IRTI-KasirApp"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub} /> Github
          </a>
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={inditechimg} alt="" className="imeg" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Inditech</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub} /> Github
          </a>
          <a
            href="https://web.indi.tech/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={irtitodo} alt="" className="imeg" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Todo App</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            href="https://github.com/IRTIDEATH/IRTI-Todo"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub} /> Github
          </a>
          <a
            href="https://irti-todo.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card6 = () => {
  return (
    <div className="bg-[#292e39] text-[#2e3440] flex flex-col rounded-b-md">
      <img src={zabod} alt="" className="imeg" />
      <div className="p-5 flex flex-col space-y-6">
        <h1 className="text-2xl font-semibold text-[#88C0D0]">Zabod</h1>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <a
            aria-disabled
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm cursor-not-allowed"
          >
            <FontAwesomeIcon className="text-[1rem]" icon={faGithub} /> Github
          </a>
          <a
            href="https://zabod.vercel.app/"
            className="hover:text-[#88C0D0] hover:bg-transparent border-2 border-[#88C0D0] hover:border-2 transition duration-200 bg-[#88C0D0] p-[0.4rem] rounded-sm"
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Demo
          </a>
        </div>
      </div>
    </div>
  );
};
