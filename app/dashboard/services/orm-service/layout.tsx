"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import { changeOption } from "@/app/reducers/serviceSlice";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }: { children: React.ReactNode }) => {
  const path = [
    "",
    "remove-reviews",
    "estimated-cost"
  ];
  const all = useSelector((state: RootState) => state.service.options);
  const dispatch = useDispatch();
  const route = useRouter()

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
    const page = pathname.split("/")[4];
    const index = path.findIndex((p) => p === page);
    console.log(route);
    console.log(index);
    console.log(localStorage.getItem("selectedOption"));
    const selectedOption = localStorage.getItem("selectedOption");
    const parsed = selectedOption ? JSON.parse(selectedOption) : [];
    console.log(parsed);
    console.log(parsed.length);
    console.log(Boolean(parsed.length == index));
    console.log("//////////////////ad////////////////ad/////////////");
    console.log(parsed.length);

    if (Boolean(parsed.length > index)) {
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(path.filter((p, i) => i < parsed.length));

      const pushedRoute = path.filter((p, i) => i <= parsed.length);
      route.push(
        `/dashboard/services/orm-service/${
          pushedRoute[pushedRoute.length - 1]
        }`
      );
    } else if (Boolean(parsed.length < index)) {
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(path.filter((p, i) => i >= parsed.length));
      const pushedRoute = path.filter((p, i) => i >= parsed.length);
      route.push(
        `/dashboard/services/orm-service/${pushedRoute[0]}`
      );
    }
  }, [currentLocation]);

  useEffect(()=>{
console.log(all);

  },[currentLocation,all])

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
