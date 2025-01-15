import {
  IconCss,
  IconHtml,
  IconJs,
  IconNextjs,
  IconReact,
  IconTailwind,
  IconThreejs,
  IconTs,
} from "@/components/icon/Skill";
import { Game } from "@/components/icon/Game";
import Link from "next/link";
import Line from "../ui/Line";

const Skills = () => {
  return (
    <section className="bg-[#2e3440] flex flex-col">
      <div className="spacer layer2 absolute"></div>

      <div
        id="skills"
        className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">Kemampuan</h1>
            <Line />
          </div>

          <div className="flex flex-col mx-8 big:mx-20 xl:mx-36 xxl:mx-40 my-10 space-y-6 sm:space-y-0">
            <div className="flex sm:justify-end justify-center">
              <div className="flex items-center justify-between p-[0.80rem] bg-[#292e39] w-[450px] rounded-md card-shadow">
                <IconHtml />
                <IconCss />
                <IconJs />
                <IconTs />
              </div>
            </div>

            <div className="flex sm:justify-start justify-center">
              <div
                className="flex flex-col space-y-5 sm:w-[35vw] ss:w-[50vw] xs:items-center sm:items-start
                  xs:w-[70vw] text-wrap text-[#ECEFF4] xs:text-center sm:text-start"
              >
                <h1 className="text-3xl font-semibold">Zect Technology.</h1>
                <p className="text-lg font-normal text-[#D8DEE9]">
                  Saya mencoba membuat kumpulan teknologi yang nanti akan saya
                  gunakan untuk membuat suatu proyek.
                </p>
                <Link
                  href="/tech"
                  aria-label="tech"
                  className="text-base text-start transition duration-150 font-normal text-[#ECEFF4] border-[#4c566a] hover:text-[#88C0D0] py-[0.3rem] px-[1rem] border-[1px] hover:border-[#88C0D0] rounded-sm"
                >
                  Tech Selengkapnya
                </Link>
              </div>
            </div>

            <div className="flex sm:justify-end justify-center xs:space-x-0 sm:space-x-16 md:mr-24 xs:mr-0 relative">
              <Game />
              <div className="flex items-center justify-between w-[450px] p-4 bg-[#292e39] rounded-md card-shadow">
                <IconTailwind />
                <IconReact />
                <IconNextjs />
                <IconThreejs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
