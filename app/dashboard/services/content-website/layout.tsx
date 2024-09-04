"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import React, { useEffect, useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "", // Root folder
    "rewrite-website",
    "live-website",
    "website-niche",
    "custom-ecommerce",
    "content-style",
    "reference-sources",
    "word-count",
    "sections-number",
    "select-pages",
    "estimated-cost",
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
      const index = path.findIndex((p) => {
        if (Array.isArray(p)) {
          return p.includes(Path);
        }
        return p === Path;
      });
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
