"use client"

import * as React from "react";

import Line from "../ui/Line";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { BriefcaseBusiness, Rewind, School, Swords} from "lucide-react";
import { Card } from "../ui/card";
import { TLcontainer, TLcontent, TLicon } from "../ui/timelinecard";
import { Expe } from "@/constants";

const Experience = () => {
  return (
    <section className="bg-[#292e39] flex flex-col">
      <div className="spacer layer3 absolute"></div>

      <div
        className="w-full z-10 pt-16 ss:mt-20 md:mt-40 sm:mt-32 xs:mt-16 lg:mt-48 xl:mt-60"
      >
        <div className="flex flex-col justify-center">
          <div className="flex flex-col items-center space-y-3">
            <h1 className="text-3xl text-[#ECEFF4] font-medium">My Experience</h1>
            <Line/>
          </div>

          <div className="w-full flex justify-between items-center mt-20 mb-16 px-8 big:px-20 xl:px-36 xxl:px-40">
          <Tabs defaultValue="competition" className="w-full">
              <TabsList className="absolute bg-[#2e3440]">
                <TabsTrigger value="competition">
                  <Swords size={45} color="#d8dee9" />
                </TabsTrigger>
                <TabsTrigger value="internship">
                  <BriefcaseBusiness size={45} color="#d8dee9" />
                </TabsTrigger>
              </TabsList>
              <div className="ml-24">
                <TabsContent value="competition">
                  <Card className="bg-[#2e3440] h-[70vh] w-[90%]">
                    <div className="flex items-center space-x-5 py-3 pl-5 bg-[#434c5e] rounded-t-xl">
                      <Rewind fill="#fff" size={20} stroke="none" />
                      <h4 className="font-medium text-white">Competition</h4>
                    </div>
                    <div className="relative flex flex-col ml-7 mt-6 gap-12">
                      <div className="absolute left-[0.73rem] z-0 h-full w-2 rounded-full bg-[#eceff4]"></div>
                      {Expe.map((experience) => (
                        <TLcontainer key={experience.id}>
                          <TLicon>
                            {experience.icon}
                          </TLicon>
                          <TLcontent variant={`${experience.bgcolor}`}>
                            <h1 className="text-[#eceff4]">{experience.content}</h1>
                          </TLcontent>
                        </TLcontainer>
                      ))}
                    </div>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
