import React from "react";
import styles from "./stepProgress.module.css";

interface StepProgressProps {
  title: string;
  currentStep?: number;
  steps: number;
}

const StepProgress = ({ title, currentStep, steps }: StepProgressProps) => {
  return (
    <div className=" mb-[2vw] rounded-[72px] bg-[#353535] p-[0.497vw]  flex items-center justify-between">
      <div className=" w-fit  border-r-[#616161] border-r-[1px] mr-[1.069vw]">
        <button className="font-bold mr-[1.069vw] px-[0.993vw] py-[0.473vw] rounded-[26.06px] bg-[var(--highlight-yellow)] text-black">
          {title}
        </button>
      </div>
      <div className="relative rounded-[35px] bg-[#484848] h-[1.088vw] w-[80%] mr-[1.069vw]">
        <div
          className="bg-[var(--highlight-yellow)] h-full rounded-[35px] transition-all duration-500 ease-in-out"
          style={{ width: `${(currentStep || 5 / steps) * 100}%` }}
        ></div>
      </div>
      <button className="font-bold px-[0.993vw] py-[0.473vw] rounded-[26.06px] bg-[#272727] text-[#626262]">
        Horray!
      </button>
    </div>
  );
};

export default StepProgress;
