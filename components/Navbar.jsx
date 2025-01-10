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
        logo

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
