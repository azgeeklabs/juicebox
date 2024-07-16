"use client";
import React, { useEffect, useRef } from "react";
import "./ourWork.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function OurWork() {
  const ourWorkRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const caseStudyRef = useRef(null);
  const numberRef = useRef(null);
  const descriptionRef = useRef(null);

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

  useEffect(() => {
    const totalSections = data.length;

    const scrollTrigger = ScrollTrigger.create({
      trigger: ourWorkRef.current,
      pin: true,
      start: "top top",
      end: `+=${100 * totalSections}%`,
      scrub: true,
      // markers: true,
      snap: {
        snapTo: 1 / (totalSections - 1), // Snap to each section
        duration: 0, // Immediate snapping
        ease: "none", // No easing for immediate effect
      },
      onUpdate: (self) => {
        const progress = self.progress * totalSections;
        const index = Math.min(Math.floor(progress), totalSections - 1);

        leftImgRef.current.src = data[index].img1;
        rightImgRef.current.src = data[index].img2;
        caseStudyRef.current.textContent = data[index].caseStudy;
        numberRef.current.textContent = data[index].number;
        descriptionRef.current.textContent = data[index].description;
      },
    });

    return () => {
      scrollTrigger.kill(); // Cleanup on unmount
    };
  }, []);

  return (
    <section className="home_ourWork" ref={ourWorkRef}>
      <div className="home_ourWork_leftImg">
        <img ref={leftImgRef} src="/home/06our-work/1-1.svg" />
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

      <div className="home_ourWork_rightImg">
        <img ref={rightImgRef} src="/home/06our-work/1-2.svg" />
      </div>
    </section>
  );
}
