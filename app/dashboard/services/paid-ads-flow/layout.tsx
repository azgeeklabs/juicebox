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
  const paidAdsRoute = useSelector(
    (state: RootState) => state.paidAds.paidAdsRoute
  );
  const path = [
    "", // Root folder
    [
      "facebook-type",
      "google-type",
      "instagram-type",
      "pinterest-type",
      "youtube-type",
      "reddit-type",
      "linkedin-type",
    ],
    "create-account",
    "trying-paid-ads",
    "create-content",
    "estimated-cost",
  ];
  const routes = [
    "", // Root folder
    `${
      paidAdsRoute == "google"
        ? "google-type"
        : paidAdsRoute == "facebook"
        ? "facebook-type"
        : paidAdsRoute == "instagram"
        ? "instagram-type"
        : paidAdsRoute == "pinterest"
        ? "pinterest-type"
        : paidAdsRoute == "youtube"
        ? "youtube-type"
        : paidAdsRoute == "reddit"
        ? "reddit-type"
        : paidAdsRoute == "linkedin"
        ? "linkedin-type"
        : ""
    }`,
    "create-account",
    "trying-paid-ads",
    "create-content",
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

  useEffect(() => {
    const pathname = window.location.pathname;
    const page = pathname.split("/")[4];
    const index = routes.findIndex((p) => p === page);

    const selectedOption =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const parsed = selectedOption ? JSON.parse(selectedOption) : [];

    if (Boolean(parsed.length > index)) {
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed));
      console.log(routes.filter((p, i) => i < parsed.length));

      const pushedRoute = routes.filter((p, i) => i <= parsed.length);
      route.push(
        `/dashboard/services/paid-ads-flow/${
          pushedRoute[pushedRoute.length - 1]
        }`
      );
    } else if (Boolean(parsed.length < index)) {
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed));
      console.log(routes.filter((p, i) => i >= parsed.length));
      const pushedRoute = routes.filter((p, i) => i >= parsed.length);
      route.push(`/dashboard/services/paid-ads-flow/${pushedRoute[0]}`);
    }
  }, [currentLocation]);

  useEffect(() => {
    console.log(all);
  }, [currentLocation, all]);
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
