"use client";
import React, { useEffect } from "react";
// import Home from "../_components/home/Home";
import dynamic from "next/dynamic";

const Home = dynamic(() => import("../_components/home/Home"), { ssr: false });

export default function page() {
  useEffect(() => {
    // Reload the page when the window is resized
    let resizeTimeout: NodeJS.Timeout; // Explicitly type the variable

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.location.reload();
      }, 500); // Adjust the timeout as needed
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Home />
    </>
  );
}
