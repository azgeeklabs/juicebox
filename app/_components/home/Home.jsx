"use client";
import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./home.css";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, useGSAP);
// }
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Hero = dynamic(() => import("./01hero/Hero"), { ssr: false });
const AboutUs = dynamic(() => import("./02about-us/AboutUs"), { ssr: false });
const Services = dynamic(() => import("./03services/Services"), { ssr: false });
const InfinityServices = dynamic(
  () => import("./04infinity-services/InfinityServices"),
  { ssr: false }
);
const WhiteLabel = dynamic(() => import("./05white-label/WhiteLabel"), {
  ssr: false,
});
const OurWork = dynamic(() => import("./06our-work/OurWork"), { ssr: false });

export default function Home() {
  const horizontalScrollRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      horizontalScrollRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: horizontalScrollRef.current,
          start: "-10% top",
          end: "bottom top",
          markers: true,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <main className="home_main">
      {/* <section className="home_hero"></section> */}
      <div
        className="home_horizontal_scroll relative"
        ref={horizontalScrollRef}
      >
        <Hero />
        <AboutUs />
      </div>
      <Services />
      <InfinityServices />
      <WhiteLabel />
      <OurWork />
      {/* <div className="h-screen"></div> */}
    </main>
  );
}
