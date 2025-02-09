"use client"

import { FaDiscord } from "react-icons/fa";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname()
  return (
    <footer
      className={`flex justify-center items-center ${
        pathname === "/tech" ? "layerfootertech" : "layerfooter"
      } spacer`}
    >
      <div
        className="w-full mx-8 big:mx-20 xl:mx-36 xxl:mx-40
        flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center py-8 space-y-5">
          <div className="flex items-center justify-center space-x-2">logo</div>

          <div
            className={`flex space-x-4 text-xl ${
              pathname === "/tech" ? "text-[#4c566a]" : "text-[#D8DEE9]"
            }`}
          >
            <Link
              href="https://discordapp.com/"
              aria-label="Discord"
              className="hover:text-[#88C0D0] text-[1.55rem]"
            >
              <FaDiscord />
            </Link>

            <Link
              href="https://github.com/FagamBy"
              aria-label="Github"
              className="hover:text-[#88C0D0] text-[1.35rem]"
            >
              <Github />
            </Link>

            <Link
              href="https://instagram.com/fagamby.id"
              aria-label="Instagram"
              className="hover:text-[#88C0D0] text-[1.45rem]"
            >
              <Instagram />
            </Link>
          </div>

          <div>
            <h1
              className={`font-medium ${
                pathname === "/tech" ? "text-[#4c566a]" : "text-[#D8DEE9]"
              }`}
            >
              &copy; <span className="text-[#88C0D0]">2024</span> - Zect
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
