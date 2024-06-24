"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import { globalContext } from "@/app/_context/GlobalContext";
import { useContext } from "react";

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

  const { step } = useContext(globalContext);

  return (
    <>
      <div className="flex flex-col h-full">
        <StepProgress title={"Web Design"} steps={5} currentStep={step} />

        <div className="flex flex-col grow">{children}</div>
      </div>
    </>
  );
};

export default layout;
