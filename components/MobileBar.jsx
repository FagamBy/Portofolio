"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { navLinks } from "@/constants";
import Link from "next/link";

const MobileBar = () => {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button
          variant="icon"
          size="icon"
          className="sm:hidden hover:bg-[#4c566a]"
        >
          <MenuIcon size={30} color="#ECEFF4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="sm:hidden bg-[#2e3440] shadownav">
        <VisuallyHidden>
          <SheetTitle>Nav Content</SheetTitle>
        </VisuallyHidden>
        <SheetDescription className="flex flex-col space-y-4 pt-20 pb-7 justify-center items-center text-center w-full">
          {navLinks.map((nav) => (
            <SheetTrigger asChild key={nav.id}>
              <Link
                className="font-medium text-[#ECEFF4] hover:bg-[#4c566a] w-full rounded-md py-1"
                href={`#${nav.id}`}
                aria-label="navlink"
              >
                {nav.title}
              </Link>
            </SheetTrigger>
          ))}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileBar;
