"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import { changeOption } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }: { children: React.ReactNode }) => {
  const all = useSelector((state: RootState) => state.service.options);
  const dispatch = useDispatch();
  const route = useRouter();
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
  useEffect(() => {
    const pathname = window.location.pathname;
    const page = pathname.split("/")[4];
    const index = path.findIndex((p) => p === page);
    console.log(index);
    
    const selectedOption = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const parsed = selectedOption ? JSON.parse(selectedOption) : [];
    console.log(parsed);
    console.log(parsed.length);
    console.log(Boolean(parsed.length == index));
    console.log("//////////////////ad////////////////ad/////////////");
    console.log(parsed.length);

    if (Boolean(parsed.length > index)) {
      console.log("back");
      
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(path.filter((p, i) => i < parsed.length));

      const pushedRoute = path.filter((p, i) => i <= parsed.length);
      route.push(
        `/dashboard/services/seo-campaign/${
          pushedRoute[pushedRoute.length - 1]
        }`
      );
    } else if (Boolean(parsed.length < index)) {
      console.log("forward");

      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      console.log(parsed,index);
      
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(path.filter((p, i) => i >= parsed.length));
      const pushedRoute = path.filter((p, i) => i >= parsed.length);
      route.push(
        `/dashboard/services/seo-campaign/${pushedRoute[0]}`
      );
    }
  }, [currentLocation]);

  useEffect(()=>{
console.log(all);

  },[currentLocation,all])

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
