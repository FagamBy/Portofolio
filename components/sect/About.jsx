import { Backpack } from "../icon/Backpack";
import Line from "../ui/Line";

const About = () => {
  return (
    <section className="bg-[#292e39] flex flex-col">
      <div className="spacer layer1 flex items-center justify-start px-8 big:px-20 xl:px-36 xxl:px-40 absolute">
        <Backpack />
      </div>

      <div
        id="about"
        className="w-full pt-16
        z-10 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">Tentang Saya</h1>
            <Line />
          </div>

          <div className="flex flex-col-reverse my-7 items-center justify-between">
            <div className="flex items-center justify-center flex-col space-y-3 mt-8 mx-8 big:mx-20 xl:mx-36 xxl:mx-40">
              <p className="text-center text-wrap text-[#D8DEE9] text-lg w-full max-w-2xl">
                Halo, saya adalah seorang npc yang sedang belajar tentang
                bagaimana caranya untuk mempelajari Pemrograman. Awalnya saya tidak ingin
                belajar coding karena sama sekali tidak bisa matematika, akan tetapi
                tiba-tiba saja saya masuk ke sekolah SMK dengan jurusan rekayasa
                perangkat lunak, jadi Ya Sudahlah saya mencoba belajar saja.
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg w-full max-w-2xl">
                Saya membuat Website Portfolio ini hanya untuk memperlihatkan
                project yang sudah kubuat dan yang sedang kubuat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
