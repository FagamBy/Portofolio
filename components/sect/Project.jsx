import CardP from "@/components/CardP";
import Line from "../ui/Line";
import Compass from "../icon/Compass";

const Project = () => {
  return (
    <section className="bg-[#2e3440] flex flex-col mb-16">
      <div className="spacer layer4 absolute">
        <Compass/>
      </div>

      <div id="project" className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">Proyek</h1>
            <Line/>
          </div>

          <div className="mx-8 big:mx-20 xl:mx-36 xxl:mx-40 mt-10">
            <CardP/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;