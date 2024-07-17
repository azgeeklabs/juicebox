"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
  // const [currentPath, setCurrentPath] = useState(0);
  // const [module, setModule] = useState("");

  // useEffect(() => {
  //   setModule(window.location.pathname.split("/")[2]);
  //   const moduleName = window.location.pathname.split("/").pop();
  //   const getCurrentPath = () => {
  //     if (moduleName === module) {
  //       setCurrentPath(0);
  //       return;
  //     }
  //     const Path = window.location.pathname.split("/").pop();
  //     path.findIndex((p, i) => {
  //       if (p === Path) {
  //         setCurrentPath(i);
  //       }
  //     });
  //   };

  //   getCurrentPath();
  // }, []);

  // const getPreviousPath = () => {
  //   if (currentPath === 0) {
  //     return path[currentPath];
  //   } else {
  //     return path[currentPath - 1];
  //   }
  // };

  // const getNextPath = () => {
  //   if (currentPath === path.length - 1) {
  //     return path[currentPath];
  //   } else {
  //     return path[currentPath + 1];
  //   }
  // };

  return (
    <div className="flex flex-col h-full">
      <StepProgress
        title={"Content Blog"}
        // currentStep={step}
        steps={6}
      />
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default layout;
