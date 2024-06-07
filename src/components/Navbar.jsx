import React, { useEffect, useState } from "react";

import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <nav
      className={`w-full flex py-5 justify-between items-center top-0 right-0 px-8 big:px-20 xl:px-36 xxl:px-40 z-[1000]
      fixed ${scroll ? "stickys" : "bstickys"}
      bg-[#2e3440]
      `}
      // lanjutin benerin mx dan px nya di ukuran layar besar
    >
      <div className="flex items-center space-x-2">
        <svg
          className="w-[40px] h-[40px] object-contain"
          width="135"
          height="148"
          viewBox="0 0 135 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 2H22.6415L113.827 93.1852L108.919 98.0933L19.7664 8.94118H8.94118V122.047H85.3594V128.989H2V2Z"
            fill="#ECEFF4"
            stroke="#ECEFF4"
            stroke-width="3"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M132.982 144L82.0936 92.9987L87.0072 88.096L126.041 127.216V9.17255H52.8034V2.23137H132.982V144Z"
            fill="#ECEFF4"
            stroke="#ECEFF4"
            stroke-width="3"
          />
        </svg>

        <h1 className={`text-[#ECEFF4] font-semibold text-3xl ${scroll ? "hidden" : "flex"}`}>Mond</h1>
        {/* tammbahin animation sebelum scroll dan sesudah scroll */}
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-medium cursor-pointer text-[16px] py-[0.3rem] px-2 text-[#ECEFF4] rounded-[0.300rem]
            hover:bg-[#4C566A]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-[#5E81AC] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px]
                  text-[#ECEFF4] hover:bg-[#81A1C1] hover:duration-300 rounded-[0.300rem]
                  px-2 py-[0.3rem]
                  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
