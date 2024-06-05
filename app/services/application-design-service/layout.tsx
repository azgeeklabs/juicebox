"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = ["", "service-projects"];
  const [currentPath, setCurrentPath] = useState(0);

  useEffect(() => {
    const getCurrentPath = () => {
      const moduleName = window.location.pathname.split("/").pop();
      if (moduleName === "application-design-service") {
        setCurrentPath(0);
        return;
      }
      const Path = window.location.pathname.split("/").pop();
      path.findIndex((p, i) => {
        if (p === Path) {
          setCurrentPath(i);
        }
      });
    };

    getCurrentPath();
  }, []);

  const getPreviousPath = () => {
    if (currentPath === 0) {
      return path[currentPath];
    } else {
      return path[currentPath - 1];
    }
  };

  const getNextPath = () => {
    if (currentPath === path.length - 1) {
      return path[currentPath];
    } else {
      return path[currentPath + 1];
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <StepProgress
        title={"Video Editing"}
        currentStep={currentPath + 1}
        steps={path.length}
      />

      <div className="grow">{children}</div>

      <div className="w-[100%] pt-2">
        {currentPath > 0 && (
          <Link
            href={`/services/application-design-service/${getPreviousPath()}`}
            className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] cursor-pointer float-start"
            onClick={() =>
              setCurrentPath(currentPath > 0 ? currentPath - 1 : currentPath)
            }
          >
            Back
          </Link>
        )}
        {currentPath === 0 && (
          <Link
            href={`/services/application-design-service/${getNextPath()}`}
            className="bg-[#F8F24B] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] text-[var(--primary-black)] cursor-pointer float-end"
            onClick={() =>
              setCurrentPath(
                currentPath < path.length - 1 ? currentPath + 1 : currentPath
              )
            }
          >
            Next
          </Link>
        )}
      </div>
    </div>
  );
};

export default layout;
