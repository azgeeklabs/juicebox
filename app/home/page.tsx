"use client";
import React from "react";
// import Home from "../_components/home/Home";
import dynamic from "next/dynamic";

const Home = dynamic(() => import('../_components/home/Home'), { ssr: false });

export default function page() {
  return (
    <>
      <Home />
    </>
  );
}