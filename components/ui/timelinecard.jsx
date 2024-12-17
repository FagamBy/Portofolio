import * as React from "react";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const TLcontainer = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-row items-center gap-3", className)}
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
  "w-full bg-[#5e81ac] max-w-md ml-3 p-3 rounded-lg",
  {
    variants: {
      variant: {
        default: "bg-[#5e81ac]",
        red: "bg-[#bf616a]",
        green: "bg-[#a3be8c]"
      },
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const TLcontent = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    (<div
      className={cn(TLcontentVariants({ variant, className }))}
      ref={ref}
      {...props} />)
  );
})
TLcontent.displayName = "TimeLineContent";

export {TLcontainer, TLicon, TLcontent}