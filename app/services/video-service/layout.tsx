import StepProgress from "@/app/_components/stepProgress/StepProgress";
import { usePathname } from "next/navigation";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
    
  return (
    <div className="flex flex-col justify-between h-full">
      <StepProgress/>
      <div className="grow" >
        {children}
      </div>
      
    </div>
  );
};

export default layout;
