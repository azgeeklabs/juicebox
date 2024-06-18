"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "",
    "service-projects",
    "app-style",
    "custom-ecommerce",
    "additional-features",
    "app-wrapup",
  ];

  return (
    <div className="flex flex-col h-full">
      <StepProgress
        title={"Application Design"}
        // currentStep={currentPath + 1}
        steps={path.length}
      />

      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default layout;
