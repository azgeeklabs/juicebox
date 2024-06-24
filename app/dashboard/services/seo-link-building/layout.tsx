"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "",
    "advertising-details",
    "rank-selection",
    "keyword-selection",
    "analysis-estimate",
    "seo-campaign-endpoint",
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
        title={"SEO Link Building"}
        // currentStep={step}
        steps={2}
      />

      <div className="flex flex-col grow">{children}</div>

      {/* <div className="w-[100%] pt-2">
        {currentPath > 0 && (
          <Link
            href={`/services/${module}/${getPreviousPath()}`}
            className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] cursor-pointer float-start"
            onClick={() =>
              setCurrentPath(currentPath > 0 ? currentPath - 1 : currentPath)
            }
          >
            Back
          </Link>
        )}
        {currentPath < path.length - 1 && (
          <Link
            href={`/services/${module}/${getNextPath()}`}
            className="bg-[var(--highlight-yellow)] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] text-[var(--primary-black)] cursor-pointer float-end"
            onClick={() =>
              setCurrentPath(
                currentPath < path.length - 1 ? currentPath + 1 : currentPath
              )
            }
          >
            Next
          </Link>
        )}
      </div> */}
    </div>
  );
};

export default layout;
