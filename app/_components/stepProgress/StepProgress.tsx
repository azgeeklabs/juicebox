"use client";
import React from "react";
import styles from "./stepProgress.module.css";
import classNames from "classnames";

interface StepProgressProps {
  title: string;
  currentStep?: number;
  steps: number;
}

const StepProgress = ({ title, currentStep, steps }: StepProgressProps) => {
  return (
    <div className="rounded-[--72px] bg-[#353535] p-[--9px] flex items-center justify-between">
      <span
        className={classNames(
          "block relative w-fit font-bold text-[--14px] px-[--19px] py-[--sy-8px] rounded-[var(--26px)] bg-[var(--highlight-yellow)] text-[var(--primary-black)]",
          styles.title
        )}
      >
        {title}
      </span>
      <span className={classNames(styles.divider)}></span>
      <div className="relative rounded-[var(--35px)] bg-[#484848] h-[1.088vw] w-[80%] overflow-hidden">
        <div
          className="bg-[var(--highlight-yellow)] h-full rounded-[--35px] transition-all duration-500 ease-in-out"
          style={{
            width: `${currentStep ? (currentStep / steps) * 100 : 3}%`,
          }}
        ></div>
      </div>

      <span
        className={classNames(
          "block w-fit font-bold text-[--14px] px-[--19px] py-[--sy-8px] rounded-[var(--26px)]",
          styles.horrayIndicator,
          currentStep === steps ? styles.active : ""
        )}
      >
        Horray!
      </span>
    </div>
  );
};

export default StepProgress;
