"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";

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
  );
};

export default layout;
