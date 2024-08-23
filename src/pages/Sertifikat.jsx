import * as React from "react";
import { motion } from "framer-motion";
import { Expe } from "@/constants";

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Sertifikat = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000 })
  );
  return (
    <section className="bg-[#292e39] flex flex-col">
      <div className="spacer layer3 absolute"></div>

      <div
        className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Experience</h1>
            <motion.div
              className="w-[150px] bg-[#808691] py-[1px]"
              initial={{ width: "0px" }}
              whileInView={{ width: "150px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            ></motion.div>
          </div>

          <div className="w-full flex justify-center my-5">
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-xs"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.play}
            >
              <CarouselContent>
                {Expe.map((exp) => (
                  <CarouselItem key={exp.id}>
                    <div className="p-1">
                      <div className="bg-[#434C5E] rounded-md">
                        <div className="px-7 py-5">
                          <h1 className="text-[#ECEFF4] text-base font font-medium">{exp.title}</h1>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sertifikat;
