"use client";
import React, { useEffect, useRef } from "react";
import "./infinityServices.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function InfinityServices() {
  // ===== Start Shape(1) =====
  const shape1 = useRef(null);
  const shape1Active = useRef(null);

  useEffect(() => {
    const shape1Wrapper = document.querySelector(
      ".home_infinityServicesWrapper_shape1"
    );

    const tl = gsap.timeline({ paused: true });

    tl.to(shape1.current, { autoAlpha: 0, duration: 0 }).fromTo(
      shape1Active.current,
      { yPercent: 50.5, autoAlpha: 0 },
      { yPercent: 13.5, autoAlpha: 1, duration: 1 }
    );

    const handleMouseOver = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    shape1Wrapper.addEventListener("mouseover", handleMouseOver);
    shape1Wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      shape1Wrapper.removeEventListener("mouseover", handleMouseOver);
      shape1Wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ===== End Shape(1) =====

  // ===== Start Shape(2) =====
  const shape2 = useRef(null);
  const shape2Active = useRef(null);

  useEffect(() => {
    const shape2Wrapper = document.querySelector(
      ".home_infinityServicesWrapper_shape2"
    );

    const tl = gsap.timeline({ paused: true });

    tl.to(shape2.current, { autoAlpha: 0, duration: 0 }).fromTo(
      shape2Active.current,
      { yPercent: 50.5, autoAlpha: 0 },
      { yPercent: 13.5, autoAlpha: 1, duration: 1 }
    );

    const handleMouseOver = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    shape2Wrapper.addEventListener("mouseover", handleMouseOver);
    shape2Wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      shape2Wrapper.removeEventListener("mouseover", handleMouseOver);
      shape2Wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ===== End Shape(2) =====

  // ===== Start Shape(3) =====
  const shape3 = useRef(null);
  const shape3Active = useRef(null);

  useEffect(() => {
    const shape3Wrapper = document.querySelector(
      ".home_infinityServicesWrapper_shape3"
    );

    const tl = gsap.timeline({ paused: true });

    tl.to(shape3.current, { autoAlpha: 0, duration: 0 }).fromTo(
      shape3Active.current,
      { yPercent: 50.5, autoAlpha: 0 },
      { yPercent: 13.5, autoAlpha: 1, duration: 1 }
    );

    const handleMouseOver = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    shape3Wrapper.addEventListener("mouseover", handleMouseOver);
    shape3Wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      shape3Wrapper.removeEventListener("mouseover", handleMouseOver);
      shape3Wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ===== End Shape(3) =====

  return (
    <section className="home_infinityServices">
      <div className="home_infinityServices_title">
        <svg
          width="78"
          height="39"
          viewBox="0 0 78 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M76.4096 11.9123C74.9226 8.40783 72.4523 5.43398 69.338 3.32898C67.7882 2.28279 66.0735 1.45062 64.2332 0.883159C62.4053 0.303367 60.4519 0.000608532 58.4356 0.000608532C55.8507 0.000608532 53.3677 0.505358 51.0992 1.42612C50.9096 1.50101 50.7336 1.5762 50.5576 1.66479C48.5155 2.55967 46.6495 3.82018 45.0492 5.32058C44.5323 5.81178 44.0411 6.3287 43.5487 6.9085C42.6797 7.9043 41.7848 9.05155 40.9146 10.211C40.7385 10.4497 40.549 10.702 40.373 10.9422C39.8941 11.5971 35.3176 18.3031 34.5113 19.5008C34.1076 20.1051 33.6287 20.7858 33.1117 21.5293C32.9984 21.6931 32.873 21.8703 32.7474 22.0463C31.8895 23.2687 30.9318 24.555 30.0492 25.6899C29.6085 26.2561 29.1667 26.7854 28.7887 27.2273C28.3986 27.6803 28.0453 28.0459 27.7929 28.2858C26.7097 29.3062 25.4357 30.1384 24.0374 30.7059C22.6379 31.2733 21.1127 31.5884 19.4989 31.5884C18.3899 31.5884 17.3189 31.4368 16.3109 31.1599C15.794 31.021 15.2892 30.8448 14.798 30.6307C12.6293 29.7223 10.7766 28.1849 9.47806 26.256C8.82323 25.2861 8.30615 24.2274 7.95301 23.0925C7.61311 21.9575 7.41142 20.7611 7.41142 19.5006C7.41142 17.8241 7.75239 16.2485 8.35669 14.7983C9.27744 12.6308 10.8148 10.7906 12.7437 9.47959C13.7136 8.82353 14.7722 8.32 15.9071 7.96671C17.0408 7.61341 18.2384 7.41294 19.4989 7.41294C21.1127 7.42512 22.6379 7.72803 24.0374 8.29428C25.4358 8.87392 26.7097 9.69376 27.7929 10.7142C28.0453 10.9543 28.3986 11.3321 28.7887 11.7739C29.4694 12.5679 30.2757 13.5884 31.0832 14.6606C31.3983 15.0889 31.7134 15.5173 32.0285 15.9579C33.2384 14.194 35.3556 11.0932 36.4647 9.49176C36.2764 9.23939 36.0869 8.98839 35.8984 8.73601C35.3937 8.09213 34.8891 7.4755 34.3857 6.90804C33.881 6.32825 33.4021 5.81132 32.8852 5.32012C31.1459 3.68044 29.0916 2.34505 26.8352 1.42551C24.5665 0.50475 22.0827 0 19.4989 0C16.8143 0 14.2429 0.542803 11.8992 1.5386C8.39489 3.01328 5.432 5.48375 3.327 8.59673C2.28081 10.1478 1.44986 11.8735 0.87007 13.7015C0.302759 15.5422 0 17.4834 0 19.5009C0 22.1856 0.541586 24.757 1.52521 27.0883C3.01206 30.6051 5.48253 33.568 8.58334 35.6729C10.1466 36.7192 11.8613 37.55 13.7015 38.1298C15.5293 38.6972 17.4828 39 19.4991 39C22.0828 39 24.5668 38.4952 26.8353 37.5759C29.0918 36.6551 31.1338 35.3194 32.8731 33.6934L32.8853 33.6811C33.4024 33.2022 33.8813 32.6717 34.3859 32.092C35.2549 31.0962 36.1497 29.9501 37.02 28.7905C37.1961 28.5505 37.3856 28.3104 37.5616 28.0716C38.0404 27.4032 44.3058 18.2144 44.8217 17.471C44.9361 17.3072 45.0617 17.1312 45.1871 16.954C46.0452 15.7439 47.0028 14.4455 47.8853 13.3118C48.326 12.7443 48.7679 12.2149 49.1458 11.7743C49.5361 11.32 49.8894 10.9544 50.1416 10.7145C51.2248 9.69406 52.4989 8.87422 53.8973 8.29458C54.2382 8.15667 54.578 8.04358 54.9311 7.92896C56.0402 7.60169 57.2119 7.42558 58.4356 7.41325C60.112 7.42543 61.7 7.753 63.1364 8.37084C65.3041 9.27805 67.1579 10.8154 68.4553 12.7443C69.1113 13.7155 69.6282 14.7741 69.9803 15.9077C70.3336 17.0426 70.5231 18.2403 70.5231 19.5008C70.5231 21.1773 70.1822 22.7652 69.5779 24.2017C68.6571 26.3692 67.1197 28.2231 65.1908 29.5204C64.2209 30.1765 63.1624 30.6935 62.0275 31.0333C60.9061 31.3866 59.6961 31.5886 58.4356 31.5886C56.8218 31.5886 55.2966 31.2735 53.8971 30.706C52.4987 30.1386 51.2247 29.3064 50.1415 28.2859C49.8891 28.0459 49.5358 27.6681 49.1457 27.2274C48.465 26.4458 47.6576 25.4118 46.8512 24.3409C46.5239 23.9125 46.2087 23.4706 45.8936 23.0299C45.7927 23.1812 45.6917 23.3328 45.5785 23.4964C43.4983 26.5467 42.1873 28.4754 41.4696 29.5206C41.6578 29.7729 41.8475 30.013 42.0358 30.2654C42.5406 30.9079 43.0452 31.5259 43.5485 32.092C44.0408 32.6716 44.5322 33.2022 45.0491 33.6811C46.7883 35.3194 48.8428 36.6551 51.0991 37.5759C53.3677 38.4952 55.8505 39 58.4355 39C61.1199 39 63.6915 38.4584 66.0228 37.4749C69.5395 35.9879 72.5012 33.5175 74.6072 30.4033C75.6524 28.8535 76.4979 27.1388 77.0642 25.2985C77.6319 23.4706 77.9348 21.5172 77.9348 19.5009C77.9348 16.8163 77.3933 14.2449 76.4096 11.9123Z"
            fill="#F8F24B"
          />
        </svg>
        <h2>Services</h2>
      </div>
      <div className="home_infinityServicesWrapper">
        <div className="home_infinityServicesWrapper_shape1">
          <img src="/home/04infinity-services/shape-1.png" ref={shape1} />
          <img
            src="/home/04infinity-services/shape-1-active.png"
            ref={shape1Active}
          />
        </div>
        <div className="home_infinityServicesWrapper_shape2">
          <img src="/home/04infinity-services/shape-2.png" ref={shape2} />
          <img
            src="/home/04infinity-services/shape-2-active.png"
            ref={shape2Active}
          />
        </div>
        <div className="home_infinityServicesWrapper_shape3">
          <img src="/home/04infinity-services/shape-3.png" ref={shape3} />
          <img
            src="/home/04infinity-services/shape-3-active.png"
            ref={shape3Active}
          />
        </div>
      </div>
    </section>
  );
}
