"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = ["", "service-projects"];
  const [currentPath, setCurrentPath] = useState(0);

  useEffect(() => {
    const getCurrentPath = () => {
      const Path = window.location.pathname.split("/").pop();
      console.log(Path);
    };

    getCurrentPath();
  }, []);

  return (
    <div className="flex flex-col justify-between h-full">
      <StepProgress />

      <div className="grow">{children}</div>

      <div className="w-[100%] pt-2 flex justify-between">
        <Link
          href={`/services/application-design-service/${path[currentPath - 1]}`}
          onClick={() => setCurrentPath(currentPath - 1)}
        >
          <button className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] cursor-pointer">
            Back
          </button>
        </Link>
        <Link
          href={`/services/application-design-service/${path[currentPath + 1]}`}
          onClick={() => setCurrentPath(currentPath + 1)}
        >
          <button className=" bg-[#F8F24B] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] text-[var(--primary-black)] cursor-pointer">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default layout;
