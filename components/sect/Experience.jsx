"use client";

import * as React from "react";

import Line from "../ui/Line";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BriefcaseBusiness, Rewind, Swords } from "lucide-react";
import { Card } from "../ui/card";
import { TLcontainer, TLcontent, TLicon } from "../ui/timelinecard";
import { Expe } from "@/constants";

const Experience = () => {
  return (
    <section className="bg-[#292e39] flex flex-col">
      <div className="spacer layer3 absolute"></div>

      <div className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">
              My Experience
            </h1>
            <p>Under Construction</p>
            <Line />
          </div>

          <div className="w-full flex sm:flex-row flex-col space-y-12 sm:space-y-0 justify-between items-center mt-20 mb-16 px-8 big:px-20 xl:px-36 xxl:px-40">
            <Tabs defaultValue="competition" className="w-full flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0">
              <TabsList className="sm:absolute bg-[#2e3440]">
                <TabsTrigger value="competition">
                  <Swords color="#d8dee9" className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]" />
                </TabsTrigger>
                <TabsTrigger value="internship">
                  <BriefcaseBusiness color="#d8dee9" className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]" />
                </TabsTrigger>
              </TabsList>
              <div className="ml-0 sm:ml-24 w-[75%]">
                <TabsContent value="competition">
                  <Card className="bg-[#2e3440]">
                    <div className="flex items-center space-x-5 py-3 pl-5 bg-[#434c5e] rounded-t-xl">
                      <Rewind fill="#fff" size={20} stroke="none" />
                      <h4 className="font-medium text-white">Competition</h4>
                    </div>
                    <div className="w-full flex p-7">
                      <div className="relative flex flex-col gap-12">
                        <div className="absolute z-0 h-full w-2 ml-[0.68rem] rounded-full bg-[#eceff4]"></div>
                        {Expe.map((experience) => (
                          <div className="relative" key={experience.id}>
                            <TLcontainer>
                              <TLicon>{experience.icon}</TLicon>
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
                  </Card>
                </TabsContent>
                <TabsContent value="internship">
                  <Card className="bg-[#2e3440] h-[70vh] w-[85%]">
                    <div className="flex items-center space-x-5 py-3 pl-5 bg-[#434c5e] rounded-t-xl">
                      <Rewind fill="#fff" size={20} stroke="none" />
                      <h4 className="font-medium text-white">Internship</h4>
                    </div>
                    <div className="w-full flex flex-col items-start">
                      <div className="relative flex flex-col space-y-10">
                        <div className="absolute z-0 h-full w-2 ml-5 rounded-full bg-red-300"></div>
                        <div className="relative">
                          <div className="flex flex-row-reverse items-center gap-6">
                            <div className="relative w-full max-w-sm">afd</div>
                            <div className="grid size-14 shrink-0 place-items-center rounded-full bg-stone-800 text-2xl text-white">
                              asf
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
            <div
              className="flex flex-col space-y-5 sm:w-[55vw] ss:w-[50vw] xs:items-center sm:items-start
                  xs:w-[70vw] text-wrap text-[#ECEFF4] xs:text-center sm:text-start"
            >
              <h1 className="text-3xl font-semibold">Lorem Ipsum.</h1>
              <p className="text-lg font-normal text-[#D8DEE9]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam velit exercitationem amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
