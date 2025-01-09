import pancarimaimg from "../public/pancarimaimg.webp";
import kasirappimg from "../public/kasirappimg.webp";
import geoporimg from "../public/geoporimg.webp";
import inditechimg from "../public/inditechimg.webp";
import zabodimg from "../public/zabodimg.webp";
import zentraimg from "../public/zentraimg.webp";

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
    content: "Mengikuti lomba website statis Sagasitas February 2024.",
    icon: <div className="bg-[#bf616a] rounded-full w-[30px] h-[30px] p-3" />,
    bgcolor: "red",
  },
  {
    id: "expe2",
    content: "Juara Harapan 1 LKS Jakarta Timur 2024.",
    icon: <div className="bg-[#a3be8c] rounded-full w-[30px] h-[30px] p-3" />,
    bgcolor: "green",
  },
  {
    id: "expe3",
    content: "Mengikuti lomba website statis Sagasitas Agustus 2024.",
    icon: <div className="bg-[#bf616a] rounded-full w-[30px] h-[30px] p-3" />,
    bgcolor: "red",
  },
];

export const Intern = [
  {
    id: "intern1",
    content: "INDI Technology | September 2024 - November 2024.",
    icon: <div className="bg-[#5e81ac] rounded-full w-[30px] h-[30px] p-3" />,
    bgcolor: "default",
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

export const dataProject = [
  {
    id: "1",
    title: "Pancarima",
    img: pancarimaimg,
    desc: "Pancarima adalah sebuah website yang memberikan informasi terkait tempat wisata yang ada di indonesia. Dibuat pada saat kegiatan lomba Sagasitas Februari 2024.",
    badge: "production",
    badgetext: "Production",
    githublink: "#home",
    demolink: "https://pancarima.vercel.app/",
  },
  {
    id: "2",
    title: "Kasir Festo",
    img: kasirappimg,
    desc: "Ini adalah applikasi kasir yang saya buat, untuk tugas sekolah. Kasir Festo merupakan sebuah platfrom kasir sederhana yang dibuat karena tugas sekolah.",
    badge: "production",
    badgetext: "Production",
    githublink: "https://github.com/IRTIDEATH/IRTI-KasirApp",
    demolink: "#home",
  },
  {
    id: "3",
    title: "Zabod",
    img: zabodimg,
    desc: "Zabod merupakan sebuah platfrom toko online keyboard yang dimana pembeli bisa kostumisasi keyboard sesuai yang di inginkan.",
    badge: "development",
    badgetext: "Development",
    githublink: "#home",
    demolink: "https://zabod.vercel.app/",
  },
  {
    id: "4",
    title: "INDI Technology",
    img: inditechimg,
    desc: "INDI Tech merupakan website company profile PT. Indi Technology berbasis 3D yang unik dan interaktif. Dibuat pada saat kegiatan pra-PKL.",
    badge: "production",
    badgetext: "Production",
    githublink: "#home",
    demolink: "https://web.indi.tech/",
  },
  {
    id: "5",
    title: "ZentraHealth",
    img: zentraimg,
    desc: "ZentraHealth adalah sebuah website yang memberikan informasi terkait pola hidup sehat. Dibuat pada saat kegiatan lomba Sagasitas Agustus 2024.",
    badge: "production",
    badgetext: "Production",
    githublink: "#home",
    demolink: "https://zentrahealth.vercel.app/",
  },
  {
    id: "6",
    title: "Geoportal Laut Berkah",
    img: geoporimg,
    desc: "Merupakan platform terkait perizinan surat pemanfaatan ruang laut untuk provinsi Kalimantan Tengah berbasis 3D yang interaktif. Dibuat pada saat kegiatan PKL.",
    badge: "production",
    badgetext: "Production",
    githublink: "#home",
    demolink: "https://web.geoportal-lautberkah.kalteng.go.id/",
  },
];
