import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

export const IconHtml = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/html.svg"} alt="htmlsvg" width={20} height={20} className="ss:w-[78px] xs:w-[55px] h-auto object-contain"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>HTML</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconCss = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/css.svg"} alt="csssvg" width={20} height={20} className="ss:w-[78px] xs:w-[55px] h-auto object-contain"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>CSS</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconJs = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/js.svg"} alt="jssvg" width={20} height={20} className="ss:w-[78px] xs:w-[58px] h-auto object-contain p-2"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Javascript</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconTs = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/ts.svg"} alt="tssvg" width={20} height={20} className="ss:w-[78px] xs:w-[58px] h-auto object-contain p-2"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Typescript</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconReact = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/react.svg"} alt="reactsvg" width={20} height={20} className="ss:w-[75px] xs:w-[50px] h-auto object-contain"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>React Js</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconTailwind = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/telwin.svg"} alt="telwinsvg" width={20} height={20} className="ss:w-[75px] xs:w-[50px] h-auto object-contain"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Tailwindcss</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconNextjs = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/next.svg"} alt="nextsvg" width={20} height={20} className="ss:w-[75px] xs:w-[50px] h-auto object-contain"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Next Js</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const IconThreejs = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger>
          <Image src={"/skillicon/vuejs.svg"} alt="threesvg" width={20} height={20} className="ss:w-[80px] xs:w-[50px] h-auto object-contain"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Vue Js</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
