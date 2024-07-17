"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import React, { useEffect, useState } from "react";
import AccountRecoveryContextProvider from "./_accountRecoveryContext/_accountRecoveryContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "",
    "website-type",
    "domain-selection",
    "website-technology",
    "brand-selection",
    "website-style",
    "custom-ecommerce",
    "additional-features",
    "host-selection",
    "web-design-endpoint",
  ];

  return (
    <AccountRecoveryContextProvider>
      <>
        <div className="flex flex-col h-full">
          <StepProgress
            title={"Web Design"}
            // currentStep={step}
            steps={9}
          />

          <div className="flex flex-col grow">{children}</div>
        </div>
      </>
    </AccountRecoveryContextProvider>
  );
};

export default layout;
