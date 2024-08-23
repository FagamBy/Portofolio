/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dZE5rlqQrUo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import pancarimaimg from "/pancarimaimg.png";
import kasirappimg from "/kasirappimg.png";
import inditechimg from "/inditechimg.png";
import irtitodo from "/irtitodo.png";
import dhafaart from "/dhafaart.png";
import zabod from "/zabod.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function CardP() {
  return (
    <div className="grid lg:grid-cols-3 xs:grid-rows-1 sm:grid-cols-2 gap-6">
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Dhaffa Art
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img src={dhafaart} alt="" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Ini adalah website art portfolio milik Muhammad Dhaffa.
          </p>
        </CardContent>
        <CardFooter className="p-4">
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
          </div>
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Pancarima
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img src={pancarimaimg} alt="" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Ini adalah website dari kegiatan lomba Sagasitas AWS 2024.
          </p>
        </CardContent>
        <CardFooter className="p-4">
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
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Kasir App
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img src={kasirappimg} alt="" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Ini adalah applikasi kasir yang saya buat, untuk tugas sekolah.
          </p>
        </CardContent>
        <CardFooter className="p-4">
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
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Inditech
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img src={inditechimg} alt="" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Website dari kegiatan pra-PKL yang dibuat oleh 6 orang.
          </p>
        </CardContent>
        <CardFooter className="p-4">
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
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Todo App
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img src={irtitodo} alt="" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Ini adalah applikasi website TodoList sederhana.
          </p>
        </CardContent>
        <CardFooter className="p-4">
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
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Zabod
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <img src={zabod} alt="" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Website e-commerce, untuk membeli kostum keyboard.
          </p>
        </CardContent>
        <CardFooter className="p-4">
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
        </CardFooter>
      </Card>
    </div>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
