"use client";

import { useEffect, useState } from "react";

import { navLinks } from "../constants";
import Link from "next/link";
import MobileBar from "./MobileBar";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20);
    });
  }, []);
  return (
    <nav
      className={`w-full flex py-[1.35rem] justify-between items-center top-0 right-0 px-8 big:px-20 xl:px-36 xxl:px-40 z-50
      fixed ${scroll ? "stickys" : "bstickys"}
      bg-[#2e3440]
      `}
    >
      <a
        href="#home"
        aria-label="navlink"
        className="flex items-center space-x-2"
      >
        <svg
          className="w-[40px] h-[40px] object-contain"
          width="197"
          height="218"
          viewBox="0 0 197 218"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 1.99988H32.3693L166.527 136.158L159.306 143.379L28.1392 12.2122H12.2124V171.266H121.702V181.478H2V1.99988Z"
            fill="#ECEFF4"
            stroke="#ECEFF4"
            strokeWidth="3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M195 213.523L120.129 138.486L127.358 131.273L184.788 188.829V12.2124H77.0349V2.00003H195V213.523Z"
            fill="#ECEFF4"
            stroke="#ECEFF4"
            strokeWidth="3"
          />
        </svg>

        <h1
          className={`text-[#ECEFF4] font-semibold text-[1.900rem] ${
            scroll ? "hidden" : "flex"
          }`}
        >
          Zect
        </h1>
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-medium cursor-pointer text-[16px] py-[0.3rem] px-2 text-[#ECEFF4] rounded-[0.300rem]
            hover:bg-[#4C566A]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <Link href={`#${nav.id}`} aria-label="navlink">
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <MobileBar/>
    </nav>
  );
};

export default Navbar;
