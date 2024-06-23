"use client";
import classNames from "classnames";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { CustomEase } from "gsap/all";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      ".hero__title",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 0.5,
        stagger: 0.5,
        ease: CustomEase.create("custom", "M0,0 C0.671,0 0.57,1.337 1,0.933"),
      }
    );

    // gsap.fromTo(
    //   ".hero__starp",
    //   {
    //     y: "-100%",
    //     x: "-110%",
    //   },
    //   {
    //     y: 0,
    //     x: "-50%",
    //     duration: 1,
    //     delay: 0.5,
    //     ease: CustomEase.create("custom", "M0,0 C0.671,0 0.57,1.337 1,0.933"),
    //   }
    // );

    // Add scroll trigger

    // gsap.fromTo(
    //   ".hero__title",
    //   {
    //     y: 0,
    //   },
    //   {
    //     y: 200,
    //     scrollTrigger: {
    //       trigger: ".hero__title",
    //       start: "20% top",
    //       end: "bottom bottom",
    //       scrub: 1,
    //     },
    //   }
    // );

    // gsap.to("#starp", {
    //   x: "120%",
    //   scrollTrigger: {
    //     trigger: "#starp",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: 1,
    //     markers: true,
    //   },
    // });

    gsap.fromTo(
      ".hero__starp",
      {
        x: "-110%",
        y: -100,
      },
      {
        scrollTrigger: {
          trigger: ".hero__starp",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
        x: "120%", // Ending x position
        y: 500,
        duration: 3,
      }
    );
  });

  return (
    <header
      className={classNames(
        "overflow-hidden flex flex-col h-[200%] items-center gap-[--252px] pt-[25vh] md:pt-[20vh] lg:pt-[--50px]",
        styles.hero
      )}
    >
      <div
        className={classNames(
          "flex flex-col  text-[--highlight-yellow] text-[--111px] justify-center items-center",
          styles.hero__title
        )}
      >
        <h1 className="hero__title opacity-0">IF WE DONT PROVIDE IT</h1>
        <h1 className="hero__title opacity-0 text-[--252px]">IT DOESN'T</h1>
      </div>
      <div className="relative">
        <h1 className=" text-[--primary-black] py-[--50px] leading-[--252px]">
          EXIST
        </h1>
        <div
          className={classNames(
            "hero__starp absolute text-[--252px] px-[--252px] bottom-0 rotate-12 left-1/2 -translate-x-1/2 w-[110vw] z-10  bg-[--highlight-yellow]",
            styles.hero__starp
          )}
        >
          <h1 id="starp" className="text-[--primary-black] leading-[--252px]">
            EXIST
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;
