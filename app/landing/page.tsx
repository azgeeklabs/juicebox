"use client";
import React from "react";
import Landing from "../_components/landing/Landing";
import "./landingpage.css";

export default function Page() {
  return (
    <>
      <div id="landing-overlay">
        <div id="landing-overlay-content">
          Sorry, this site is currently not available for mobile phones.
        </div>
      </div>
      <Landing />
    </>
  );
}
