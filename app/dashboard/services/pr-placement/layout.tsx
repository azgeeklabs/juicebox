"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import Link from "next/link";
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
        title={"Video Editing"}
        // currentStep={step}
        steps={11}
      />

      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default layout;
