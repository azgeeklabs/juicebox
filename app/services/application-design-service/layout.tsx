"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import { globalContext } from "@/app/_context/GlobalContext";
import React, { useContext, useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "",
    "service-projects",
    "app-style",
    "custom-ecommerce",
    "additional-features",
    "app-wrapup",
  ];

  const { step } = useContext(globalContext);

  return (
    <div className="flex flex-col h-full">
      <StepProgress
        title={"Application Design"}
        steps={5}
        currentStep={step}
      />

      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default layout;
