import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import loremseries from "../public/loremseries.webp";
import indicom from "../public/indicom.webp";
import pancarimaimg from "../public/pancarimaimg.webp";
import kasirappimg from "../public/kasirappimg.webp";
import inditechimg from "../public/inditechimg.webp";
import zabod from "../public/zabod.webp";
import zentra from "../public/zentra.webp";
import Image from "next/image";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function CardP() {
  return (
    <div className="grid lg:grid-cols-3 xs:grid-rows-1 sm:grid-cols-2 gap-6">
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Pancarima
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Image
            src={pancarimaimg}
            alt="pancarima"
            className="rounded-md mb-4"
          />
          <p className="text-[#D8DEE9]">
            Ini adalah website dari kegiatan lomba Sagasitas February 2024.
          </p>
          <Badge variant="production">Production</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button variant="linknot" size="linkbtn">
              <Github size={18} /> Github
            </Button>
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://pancarima.vercel.app/"
                aria-label="pancarima"
                className="flex items-center gap-1"
              >
                <SquareArrowOutUpRight size={18} /> Demo
              </Link>
            </Button>
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
          <Image src={kasirappimg} alt="kasirapp" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Ini adalah applikasi kasir yang saya buat, untuk tugas sekolah.
          </p>
          <Badge variant="production">Production</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://github.com/IRTIDEATH/IRTI-KasirApp"
                aria-label="kasir app"
                className="flex items-center gap-1"
              >
                <Github size={18} /> Github
              </Link>
            </Button>
            <Button variant="linknot" size="linkbtn">
              <SquareArrowOutUpRight size={18} /> Demo
            </Button>
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
          <Image src={inditechimg} alt="inditech" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Website dari kegiatan pra-PKL yang dibuat oleh 6 orang.
          </p>
          <Badge variant="production">Production</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button variant="linknot" size="linkbtn">
              <Github size={18} /> Github
            </Button>
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://web.indi.tech/"
                aria-label="inditech"
                className="flex items-center gap-1"
              >
                <SquareArrowOutUpRight size={18} /> Demo
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            Indicom
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Image src={indicom} alt="indicom" className="rounded-md mb-4 h-[170px]" />
          <p className="text-[#D8DEE9]">
            Website dari kegiatan pra-PKL yang dibuat oleh 3 orang.
          </p>
          <Badge variant="production">Production</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button variant="linknot" size="linkbtn">
              <Github size={18} /> Github
            </Button>
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://indicom.vercel.app/"
                aria-label="indicom"
                className="flex items-center gap-1"
              >
                <SquareArrowOutUpRight size={18} /> Demo
              </Link>
            </Button>
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
          <Image src={zabod} alt="zabod" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Website e-commerce, untuk membeli kostum keyboard.
          </p>
          <Badge variant="development">Development</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button variant="linknot" size="linkbtn">
              <Github size={18} /> Github
            </Button>
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://zabod.vercel.app/"
                aria-label="zabod"
                className="flex items-center gap-1"
              >
                <SquareArrowOutUpRight size={18} /> Demo
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            ZentraHealth
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Image src={zentra} alt="zentrahealth" className="rounded-md mb-4" />
          <p className="text-[#D8DEE9]">
            Ini adalah website dari kegiatan lomba Sagasitas Agustus 2024.
          </p>
          <Badge variant="production">Production</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button variant="linknot" size="linkbtn">
              <Github size={18} /> Github
            </Button>
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://zentrahealth.vercel.app/"
                aria-label="zentrahealth"
                className="flex items-center gap-1"
              >
                <SquareArrowOutUpRight size={18} /> Demo
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Card className="rounded-lg bg-[#292e39] text-[#2e3440]">
        <CardHeader className="p-4">
          <CardTitle className="text-xl font-semibold text-[#88C0D0]">
            LoremSeries
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <Image
            src={loremseries}
            alt="loremseries"
            className="rounded-md mb-4 h-[170px]"
          />
          <p className="text-[#D8DEE9]">
            Ini adalah website kontribusi dari Hacktoberfest 2024.
          </p>
          <Badge variant="development">Development</Badge>
        </CardContent>
        <CardFooter className="p-4">
          <div className="flex items-center space-x-4 text-sm font-medium">
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://github.com/IRTIDEATH/LoremSeries"
                aria-label="loremseries"
                className="flex items-center gap-1"
              >
                <Github size={18} /> Github
              </Link>
            </Button>
            <Button asChild variant="link" size="linkbtn">
              <Link
                href="https://loremseries.vercel.app/"
                aria-label="loremseries"
                className="flex items-center gap-1"
              >
                <SquareArrowOutUpRight size={18} /> Demo
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
