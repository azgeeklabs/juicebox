"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const NavBar = dynamic(() => import("./_components/NavBar/NavBar"), {
  ssr: false,
});

const Home = dynamic(() => import("./_components/home/Home"), { ssr: false });

export default function Page() {
  useEffect(() => {
    // ===== Start Reload the page when the window is resized =====
    let resizeTimeout; // Explicitly type the variable
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.location.reload();
      }, 500); // Adjust the timeout as needed
    };
    window.addEventListener("resize", handleResize);
    // ===== End Reload the page when the window is resized =====

    // ===== Start Scroll to top when the page is unloaded =====
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.onbeforeunload = handleBeforeUnload;
    // ===== End Scroll to top when the page is unloaded =====

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.onbeforeunload = null; // Clean up the event listener
    };
  }, []);

  return (
    <>
      <div className="pt-[--sy-100px]">
        <NavBar />
        <Home />
      </div>
    </>
  );
}
