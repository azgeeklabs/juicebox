"use client";
import React from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";
import dynamic from "next/dynamic";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

const AboutUs = dynamic(() => import('./02about-us/AboutUs'), { ssr: false });
const Services = dynamic(() => import('./03services/Services'), { ssr: false });
const InfinityServices = dynamic(() => import('./04infinity-services/InfinityServices'), { ssr: false });
const WhiteLabel = dynamic(() => import('./05white-label/WhiteLabel'), { ssr: false });

export default function Home() { 
  return (
    <main className="home_main">
      {/* <section className="home_hero"></section> */}
      <AboutUs />
      <Services />
      <InfinityServices />
      <WhiteLabel />
    </main>
  );
}
