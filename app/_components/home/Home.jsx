"use client";
import React, { useEffect, useRef } from "react";
import "./home.css";
import Hero from "./01hero/Hero";
import AboutUs from "./02about-us/AboutUs";
import Services from "./03services/Services";
import InfinityServices from "./04infinity-services/InfinityServices";
import WhiteLabel from "./05white-label/WhiteLabel";
import Footer from "../../Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const horizontalScrollRef = useRef(null);
  const ourWorkRef = useRef(null);
  const leftImgWrapperRef = useRef(null);
  const rightImgWrapperRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const caseStudyRef = useRef(null);
  const numberRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (!horizontalScrollRef.current) return;
    const horizontalScrollTween = gsap.fromTo(
      horizontalScrollRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-101vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          id: "home_horizontal_scroll",
          trigger: horizontalScrollRef.current,
          start: "-10% top",
          end: "bottom top",
          // markers: true,
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      const scrollTriggerInstance = ScrollTrigger.getById(
        "home_horizontal_scroll"
      );
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        // console.log("01 killed");
      }
      if (horizontalScrollTween) {
        horizontalScrollTween.kill();
        // console.log("02 killed");
      }
    };
  }, []);

  // ===== Start Our Work =====
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
    if (!ourWorkRef.current) return;
    const totalSections = data.length;
    const ourWorkScrollTrigger = ScrollTrigger.create({
      id: "home_ourWork_scroll",
      trigger: ourWorkRef.current,
      pin: true,
      start: "top top",
      end: `+=${100 * totalSections}%`,
      scrub: true,
      snap: {
        snapTo: 1 / (totalSections - 1), // Snap to each section
        duration: 0.25, // Snapping duration for smooth effect
        // ease: "power1.inOut", // Easing function
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
          if (leftImgRef.current) {
            leftImgRef.current.src = data[index].img1;
          }
          if (rightImgRef.current) {
            rightImgRef.current.src = data[index].img2;
          }
          if (caseStudyRef.current) {
            caseStudyRef.current.textContent = data[index].caseStudy;
          }
          if (numberRef.current) {
            numberRef.current.textContent = data[index].number;
          }
          if (descriptionRef.current) {
            descriptionRef.current.textContent = data[index].description;
          }
        }
      },
    });

    return () => {
      const scrollTriggerInstance = ScrollTrigger.getById(
        "home_ourWork_scroll"
      );
      if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
        // console.log("03 killed");
      }
      if (ourWorkScrollTrigger) {
        ourWorkScrollTrigger.kill();
        // console.log("04 killed");
      }
    };
  }, []);

  // ===== End Our Work =====

  return (
    <main className="home_main">
      <div className="home_horizontal_scroll_container">
        <div
          className="home_horizontal_scroll relative"
          ref={horizontalScrollRef}
        >
          <Hero />
          <AboutUs />
        </div>
      </div>
      <Services />
      <InfinityServices />
      <WhiteLabel />
      {/* ===== Start Our Work ===== */}
      <div className="home_ourWork_container">
        <section className="home_ourWork" ref={ourWorkRef} id="our-work">
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
        </section>
      </div>
      {/* ===== End Our Work ===== */}
      <Footer />
    </main>
  );
}
