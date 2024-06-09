import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#4C566A] flex justify-center items-center xs:mt-8 sm:mt-0">
      <div
        className="w-full mx-8 big:mx-20 xl:mx-36 xxl:mx-40
        flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center py-8 space-y-5">
          <div className="flex items-center space-x-2">
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
          </div>

          <div className="flex space-x-4 text-xl text-[#D8DEE9]">
            <a href="" className="hover:text-[#88C0D0]">
              <FontAwesomeIcon icon={faDiscord} />
            </a>

            <a href="" className="hover:text-[#88C0D0] text-[1.35rem]">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a href="" className="hover:text-[#88C0D0] text-[1.45rem]">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>

          <div>
            <h1 className="text-[#D8DEE9] font-medium">&copy; 2024{' '}- {' '}Zect</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
