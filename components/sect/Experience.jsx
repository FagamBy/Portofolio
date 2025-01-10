"use client";

import * as React from "react";

import Line from "../ui/Line";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BriefcaseBusiness, Rewind, Swords } from "lucide-react";
import { Card } from "../ui/card";
import { TLcontainer, TLcontent, TLicon, TLiconContainer } from "../ui/timelinecard";
import { Expe, Intern } from "@/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import Swatch from "../icon/Swatch";

const Experience = () => {
  return (
    <section className="bg-[#292e39] flex flex-col">
      <div className="spacer layer3 absolute"></div>

      <div className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">
              Pengalaman Saya
            </h1>
            <Line />
          </div>

          <div className="w-full flex sm:flex-row flex-col space-y-12 sm:space-y-0 justify-between items-center mt-20 mb-16 px-8 big:px-20 xl:px-36 xxl:px-40">
            <Tabs
              defaultValue="competition"
              className="w-full flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0"
            >
              <TabsList className="sm:absolute bg-[#2e3440]">
                <TabsTrigger value="competition">
                  <Swords
                    color="#d8dee9"
                    className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
                  />
                </TabsTrigger>
                <TabsTrigger value="internship">
                  <BriefcaseBusiness
                    color="#d8dee9"
                    className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
                  />
                </TabsTrigger>
              </TabsList>
              <div className="ml-0 sm:ml-24 sm:w-[70%]">
                <TabsContent value="competition">
                  <Card className="bg-[#2e3440]">
                    <div className="flex items-center space-x-5 py-3 pl-5 bg-[#434c5e] rounded-t-xl">
                      <Rewind fill="#fff" size={20} stroke="none" />
                      <span className="font-medium text-white">
                        Competition
                      </span>
                    </div>
                    <ScrollArea className="h-[30rem]">
                      <div className="w-full flex p-7">
                        <div className="relative flex flex-col gap-12">
                          <div className="absolute z-0 h-full w-2 ml-[0.68rem] rounded-full bg-[#eceff4]"></div>
                          {Expe.map((experience) => (
                            <div className="relative" key={experience.id}>
                              <TLcontainer>
                                <TLiconContainer>
                                  <TLicon variant={`${experience.icon}`}/>
                                </TLiconContainer>
                                <TLcontent variant={`${experience.bgcolor}`}>
                                  <h1 className="text-[#eceff4]">
                                    {experience.content}
                                  </h1>
                                </TLcontent>
                              </TLcontainer>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </Card>
                </TabsContent>
                <TabsContent value="internship">
                  <Card className="bg-[#2e3440]">
                    <div className="flex items-center space-x-5 py-3 pl-5 bg-[#434c5e] rounded-t-xl">
                      <Rewind fill="#fff" size={20} stroke="none" />
                      <span className="font-medium text-white">Internship</span>
                    </div>
                    <ScrollArea className="h-[30rem]">
                      <div className="w-full flex p-7">
                        <div className="relative flex flex-col gap-12">
                          <div className="absolute z-0 h-full w-2 ml-[0.68rem] rounded-full bg-[#eceff4]"></div>
                          {Intern.map((inter) => (
                            <div className="relative" key={inter.id}>
                              <TLcontainer>
                                <TLiconContainer>
                                  <TLicon variant={`${inter.icon}`}/>
                                </TLiconContainer>
                                <TLcontent variant={`${inter.bgcolor}`}>
                                  <h1 className="text-[#eceff4]">
                                    {inter.content}
                                  </h1>
                                </TLcontent>
                              </TLcontainer>
                            </div>
                          ))}
                        </div>
                      </div>
                    </ScrollArea>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
            <div
              className="flex flex-col space-y-5 sm:w-[55vw] ss:w-[50vw] xs:items-center sm:items-start
                  xs:w-[70vw] text-wrap text-[#ECEFF4] xs:text-center sm:text-start relative"
            >
              <h1 className="text-3xl font-semibold">
                Sedikit Pengalaman Saya.
              </h1>
              <p className="text-lg font-normal text-[#D8DEE9]">
                Dimulai dari mencoba mengikuti lomba, hingga menjalankan
                kegiatan magang di suatu Perusahaan.
              </p>
              <Swatch />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
