"use client";
import React, { useEffect } from "react";
// import Home from "../_components/home/Home";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("./_components/NavBar/NavBar"), {
  ssr: false,
});

const Home = dynamic(() => import("./_components/home/Home"), { ssr: false });

export default function Page() {
  useEffect(() => {
    // Reload the page when the window is resized
    let resizeTimeout; // Explicitly type the variable

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

  useEffect(() => {
    // Key to use in localStorage
    const reloadFlagKey = "pageReloaded";

    // Get the value of the flag from localStorage
    const hasReloaded = sessionStorage.getItem(reloadFlagKey);

    if (!hasReloaded) {
      // If the flag is not set, set it to true and reload the page
      sessionStorage.setItem(reloadFlagKey, "true");
      window.location.reload();
    }
  }, []); // Empty dependency array ensures this runs only on mount

  return (
    <div className="pt-[--sy-100px]">
      <NavBar />
      <Home />
    </div>
  );
}
