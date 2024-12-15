import { Award, X } from "lucide-react";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "project",
    title: "Project",
  },
];

export const Expe = [
  {
    id: "expe1",
    content: "Mengikuti lomba website statis Sagasitas February 2024",
    icon: <div className="bg-[#bf616a] rounded-full w-8 h-8" />,
    bgcolor: "red",
  },
  {
    id: "expe2",
    content: "Juara Harapan 1 LKS Jakarta Timur 2024",
    icon: <div className="bg-[#a3be8c] rounded-full w-8 h-8" />,
    bgcolor: "green"
  },
  {
    id: "expe3",
    content: "Mengikuti lomba website statis Sagasitas Agustus 2024",
    icon: <div className="bg-[#bf616a] rounded-full w-8 h-8" />,
    bgcolor: "red"
  },
];

const iconUrl = (id) => `https://skillicons.dev/icons?i=${id}`;
export const Techss = [
  {
    name: "HTML5",
    iconUrl: iconUrl("html"),
  },
  {
    name: "CSS3",
    iconUrl: iconUrl("css"),
  },
  {
    name: "Javascript",
    iconUrl: iconUrl("js"),
  },
  {
    name: "Typescript",
    iconUrl: iconUrl("ts"),
  },
  {
    name: "TailwindCSS",
    iconUrl: iconUrl("tailwind"),
  },
  {
    name: "NodeJS",
    iconUrl: iconUrl("nodejs"),
  },
  {
    name: "ExpressJS",
    iconUrl: iconUrl("express"),
  },
  {
    name: "ReactJS",
    iconUrl: iconUrl("react"),
  },
  {
    name: "NextJS",
    iconUrl: iconUrl("nextjs"),
  },
  {
    name: "ThreeJS",
    iconUrl: iconUrl("threejs"),
  },
  {
    name: "ElectronJS",
    iconUrl: iconUrl("electron"),
  },
  {
    name: "VueJS",
    iconUrl: iconUrl("vue"),
  },
  {
    name: "VSCode",
    iconUrl: iconUrl("vscode"),
  },
  {
    name: "Figma",
    iconUrl: iconUrl("figma"),
  },
  {
    name: "PostgreSQL",
    iconUrl: iconUrl("postgres"),
  },
  {
    name: "Git",
    iconUrl: iconUrl("git"),
  },
  {
    name: "Notion",
    iconUrl: iconUrl("notion"),
  },
];
