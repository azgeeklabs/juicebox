"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = ["", "#", "#"];
  const [currentPath, setCurrentPath] = useState(0);

  useEffect(() => {
    const getCurrentPath = () => {
      const moduleName = window.location.pathname.split("/")[2];
      if (moduleName === "seo-campaign") {
        setCurrentPath(0);
        return;
      }
      const Path = window.location.pathname.split("/").pop();
      path.findIndex((p, i) => {
        if (p === Path) {
          console.log(i);
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
        title={"SEO Campaign"}
        currentStep={currentPath + 1}
        steps={path.length}
      />

      <div className="grow">{children}</div>

      <div className="w-[100%] pt-2 relative">
        {currentPath > 0 && (
          <Link
            href={`/services/seo-campaign/${getPreviousPath()}`}
            onClick={() =>
              setCurrentPath(currentPath > 0 ? currentPath - 1 : currentPath)
            }
          >
            <button className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] cursor-pointer absolute left-0 bottom-0">
              Back
            </button>
          </Link>
        )}
        {currentPath === 0 && (
          <Link
            href={`/services/seo-campaign/${getNextPath()}`}
            onClick={() =>
              setCurrentPath(
                currentPath < path.length - 1 ? currentPath + 1 : currentPath
              )
            }
          >
            <button className=" bg-[#F8F24B] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] text-[var(--primary-black)] cursor-pointer absolute right-0 bottom-0">
              Next
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default layout;
