import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const TLcontainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("relative w-full flex items-center", className)}
    {...props}
  />
));
TLcontainer.displayName = "TimeLineContainer";

const TLicon = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("grid shrink-0 place-items-center", className)}
    {...props}
  />
));
TLicon.displayName = "TimeLineIcon";

const TLcontentVariants = cva(
  "w-full border-[#5e81ac] border max-w-md ml-3 p-3 rounded-lg",
  {
    variants: {
      variant: {
        default: "border-[#5e81ac]",
        red: "border-[#bf616a]",
        green: "border-[#a3be8c]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const TLcontent = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      className={cn(TLcontentVariants({ variant, className }))}
      ref={ref}
      {...props}
    />
  );
});
TLcontent.displayName = "TimeLineContent";

export { TLcontainer, TLicon, TLcontent };
