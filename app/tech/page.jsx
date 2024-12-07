import Techs from "../../components/Techs";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";

const Tech = () => {
  return (
    <div className="w-full px-6 py-12 bg-[#F8F9FB] min-h-screen space-y-5">
      <Link
        href="/"
        aria-label="backtohome"
        className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border-2 border-[#d8dee9] bg-[#eceff4] font-medium text-secondary-foreground"
      >
        <div className="translate-x-0 transition group-hover:-translate-x-[300%]">
          <ArrowBigLeft />
        </div>
        <div className="absolute translate-x-[300%] transition group-hover:translate-x-0">
          <ArrowBigLeft />
        </div>
      </Link>

      <Techs />
    </div>
  );
};

export default Tech;
