"use client";
import React, { useEffect, useRef, useContext } from "react";
import "./ourWork.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { globalContext } from "@/app/_context/GlobalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function OurWork() {
  const ourWorkRef = useRef(null);
  const leftImgWrapperRef = useRef(null);
  const rightImgWrapperRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const caseStudyRef = useRef(null);
  const numberRef = useRef(null);
  const descriptionRef = useRef(null);
  const { viewOurWork } = useContext(globalContext);

  const data = [
    {
      img1: "/home/06our-work/1-1.svg",
      img2: "/home/06our-work/1-2.svg",
      caseStudy: "CASE STUDY",
      number: "NUMBER ONE",
      description: "Web Development",
    },
    {
      img1: "/home/06our-work/2-1.svg",
      img2: "/home/06our-work/2-2.svg",
      caseStudy: "CASE STUDY",
      number: "NUMBER TWO",
      description: "App Development",
    },
    {
      img1: "/home/06our-work/3-1.svg",
      img2: "/home/06our-work/3-2.svg",
      caseStudy: "CASE STUDY",
      number: "NUMBER THREE",
      description: "UX/UI",
    },
  ];

  useGSAP(
    () => {
      const totalSections = data.length;

      ScrollTrigger.create({
        trigger: ourWorkRef.current,
        pin: true,
        start: "top top",
        end: `+=${100 * totalSections}%`,
        scrub: true,
        snap: {
          snapTo: 1 / (totalSections - 1), // Snap to each section
          duration: 0.5, // Snapping duration for smooth effect
          ease: "power1.inOut", // Easing function
        },
        onUpdate: (self) => {
          const progress = self.progress * (totalSections - 1);
          const index = Math.floor(progress);
          const sectionProgress = progress - index;

          gsap.to(leftImgWrapperRef.current, {
            xPercent: -120 * sectionProgress,
            duration: 0.2,
          });

          gsap.to(rightImgWrapperRef.current, {
            xPercent: 120 * sectionProgress,
            duration: 0.2,
          });

          // Update content based on scroll direction
          if (sectionProgress === 0) {
            leftImgRef.current.src = data[index].img1;
            rightImgRef.current.src = data[index].img2;
            caseStudyRef.current.textContent = data[index].caseStudy;
            numberRef.current.textContent = data[index].number;
            descriptionRef.current.textContent = data[index].description;
          }
        },
      });
    },
    { scope: ourWorkRef }
  );

  return (
    <section
      className="home_ourWork custom-hidden"
      ref={ourWorkRef}
      id="our-work"
    >
      {viewOurWork && (
        <>
          <div className="home_ourWork_leftImg" ref={leftImgWrapperRef}>
            <img
              ref={leftImgRef}
              src="/home/06our-work/1-1.svg"
              alt="Left Img"
            />
          </div>

          <div className="home_ourWork_content">
            <h2>Our Work</h2>
            <div className="home_ourWork_caseStudy">
              <p>
                <span ref={caseStudyRef}>CASE STUDY</span>
                <br />
                <span ref={numberRef}>NUMBER ONE</span>
              </p>
              <h3 ref={descriptionRef}>Web Development</h3>
            </div>
          </div>

          <div className="home_ourWork_rightImg" ref={rightImgWrapperRef}>
            <img
              ref={rightImgRef}
              src="/home/06our-work/1-2.svg"
              alt="Right Img"
            />
          </div>
        </>
      )}
    </section>
  );
}
