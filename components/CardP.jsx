import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

import Image from "next/image";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { dataProject } from "@/constants";

export default function CardP() {
  return (
    <div className="grid lg:grid-cols-3 xs:grid-rows-1 sm:grid-cols-2 gap-6">
      {dataProject.map((item) => (
        <Card key={item.id} className="rounded-lg bg-[#292e39] text-[#2e3440] flex flex-col">
          <CardHeader className="p-4">
            <CardTitle className="text-xl font-semibold text-[#88C0D0]">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-6 flex-grow flex flex-col justify-between">
            <Image
              src={item.img}
              alt="geoportalimg"
              className="rounded-md object-cover"
            />
            <CardDescription className="text-[#D8DEE9] flex flex-col items-start">
              {item.desc}
              <Badge variant={item.badge}>{item.badgetext}</Badge>
            </CardDescription>
            <div className="flex items-center space-x-4 text-sm font-medium">
              <Button asChild variant="link" size="linkbtn">
                <Link
                  href={item.githublink}
                  aria-label="githublink"
                  className="flex items-center gap-1"
                >
                  <Github size={18} /> Github
                </Link>
              </Button>
              <Button asChild variant="link" size="linkbtn">
                <Link
                  href={item.demolink}
                  aria-label="demolink"
                  className="flex items-center gap-1"
                >
                  <SquareArrowOutUpRight size={18} /> Demo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
