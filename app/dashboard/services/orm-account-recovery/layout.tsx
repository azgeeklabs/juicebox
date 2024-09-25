"use client";
import StepProgress from "@/app/_components/stepProgress/StepProgress";
import React, { useEffect, useState } from "react";
import AccountRecoveryContextProvider from "./_accountRecoveryContext/_accountRecoveryContext";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addFile, changeOption } from "@/app/reducers/serviceSlice";

const layout = ({ children }: { children: React.ReactNode }) => {

  const all = useSelector((state: RootState) => state.service.options);
  const dispatch = useDispatch();

  const route = useRouter();

  const path = [
    "", // Root folder
    "suspension-reason",
    "suspended-date",
    "suspended-account",
    "suspension-approvel",
    ["estimated-cost", "reject-recovery"],
  ];
  const editedPath = [
    "", // Root folder
    "suspension-reason",
    "suspended-date",
    "suspended-account",
    "suspension-approvel",
    "estimated-cost",
  ];
  const loadFileFromLocalStorage = () => {
    const fileData = typeof window !== "undefined" && localStorage.getItem('uploadedFile');
    if (fileData) {
      const { name, type, size, base64 } = JSON.parse(fileData);
  
      // Convert Base64 back to a File object (this isn't exact but provides structure)
      const byteString = atob(base64.split(',')[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const blob = new Blob([ab], { type });
      const file = new File([blob], name, { type });
  
      return file;
    }
    return null;
  };

  useEffect(() => {
    // On component mount, load the file from localStorage into Redux
    const storedFile = loadFileFromLocalStorage();
    console.log("yes",storedFile);
    
    if (storedFile) {
      dispatch(addFile(storedFile));
    }
  }, [dispatch]);
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
    console.log([path.flat()]);
    
    const pathname = window.location.pathname;
    const page = pathname.split("/")[4];
    const index = editedPath.findIndex((p) => p === page);
    console.log(route);
    console.log(index);
    
    const selectedOption = typeof window !== "undefined" && localStorage.getItem("selectedOption");
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
      console.log(editedPath.filter((p, i) => i < parsed.length));
      

      const pushedRoute = editedPath.filter((p, i) => i <= parsed.length);
      if (page != "reject-recovery") {
        route.push(
          `/dashboard/services/orm-account-recovery/${
            pushedRoute[pushedRoute.length - 1]
          }`
        );
      }
    } else if (Boolean(parsed.length < index)) {
      let selectedOption = localStorage.getItem("selectedOption");
      let parsed = selectedOption ? JSON.parse(selectedOption) : [];
      parsed = parsed.filter((r: string, idx: number) => idx < index);
      localStorage.setItem("selectedOption", JSON.stringify(parsed));
      dispatch(changeOption(parsed))
      console.log(editedPath.filter((p, i) => i >= parsed.length));
      
      const pushedRoute = editedPath.filter((p, i) => i >= parsed.length);
      route.push(
        `/dashboard/services/orm-account-recovery/${pushedRoute[0]}`
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
      <AccountRecoveryContextProvider>
        <div className="flex flex-col grow">{children}</div>
      </AccountRecoveryContextProvider>
    </div>
  );
};

export default layout;
