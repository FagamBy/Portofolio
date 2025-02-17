import { Backpack } from "../icon/Backpack";
import Coffee from "../icon/Coffee";
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
            <h1 className="text-3xl text-[#ECEFF4] font-medium">Tentang</h1>
            <Line />
          </div>

          <div className="flex flex-col-reverse my-7 items-center justify-between relative">
            <div className="flex items-center justify-center flex-col space-y-3 mt-6 mx-8 big:mx-20 xl:mx-36 xxl:mx-40">
              <p className="text-center text-wrap text-[#D8DEE9] text-lg w-full max-w-2xl">
                Cerita sedikit, saya adalah seseorang yang sedang belajar
                tentang bagaimana caranya untuk mempelajari Pemrograman. Awalnya
                saya tidak ingin belajar Pemrograman, karena benar-benar sama
                sekali tidak bisa dan tidak mampu dalam bidang Matematika, akan
                tetapi tiba-tiba saja saya nyangkut ke sekolah Rekayasa
                Perangkat Lunak, jadi Ya Sudahlah saya mencoba belajar saja.
              </p>
              <p className="text-center text-wrap text-[#D8DEE9] text-lg w-full max-w-2xl">
                Saya membuat Website Portfolio ini hanya untuk memperlihatkan
                project yang sudah saya buat dan yang sedang saya kerjakan.
              </p>
              <div className="w-full flex justify-end">
                <Coffee />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
