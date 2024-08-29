"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "", // Root folder
    "advertising-details",
    "rank-selection",
    "keyword-selection",
    "analysis-estimate",
    "seo-campaign-endpoint",
  ];

  const [currentPath, setCurrentPath] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const pathname = window.location.pathname;
      if (pathname === currentLocation) return;
      setCurrentLocation(pathname);
    });

    observer.observe(document, { subtree: true, childList: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    const moduleName = pathname.split("/")[3];
    const Path = pathname.split("/")[4];
    console.log(moduleName);
    console.log(Path);

    const getCurrentPath = () => {
      if (moduleName && !path) {
        setCurrentPath(0);
        return;
      }
      const index = path.findIndex((p) => p === Path);
      if (index !== -1) {
        setCurrentPath(index);
      }
    };

    getCurrentPath();
  }, [currentLocation]);

  return (
    <div className="flex flex-col h-full">
      <StepProgress
        title={"Application Design"}
        steps={path.length}
        currentStep={currentPath}
      />
      <div className="flex flex-col grow">{children}</div>
    </div>
  );
};

export default layout;
