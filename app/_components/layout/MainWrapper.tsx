"use client";
import "../../globals.css";
import React, { useContext } from "react";
import SideNav from "../SideNav/SideNav";
import SubscribedServices from "../SubscribedServices/SubscribedServices";
import { globalContext } from "@/app/_context/GlobalContext";

export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const { open, setOpen } = useContext(globalContext);

  return (
    <div className={"mainWrapper h-[100vh] w-[100vw] flex overflow-hidden"}>
      <SideNav open={open} setOpen={setOpen} />
      {/* dynamic width */}
      <div className={` ${open && "navOpened"} pageWrapper`}>
        {/* header */}
        <SubscribedServices />
        <div className="pageContent">{children}</div>
      </div>
    </div>
  );
}
