"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
import Lenis from "lenis";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import "./landing.css";
import classNames from "classnames";
import NewsLetter from "../newsLetter/NewsLetter";
import dynamic from "next/dynamic";
const MatterComponent = dynamic(() => import("./physicsElements"), {
  ssr: false,
});
const MatterComponent1 = dynamic(() => import("./physicsElements1"), {
  ssr: false,
});

const arrow = (
  <svg
    className="w-[--78px] h-[--78px]"
    viewBox="0 0 78 78"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.453125"
      y="0.563965"
      width="76.7404"
      height="76.7404"
      rx="38.3702"
      fill="#1D1D1D"
    />
    <g clipPath="url(#clip0_4005_34680)">
      <path
        d="M42.1341 54.4962L58.0001 39.5683L43.1547 23.6251C43.0221 23.4384 42.8509 23.2823 42.6527 23.1676C42.4545 23.0528 42.2339 22.9819 42.0059 22.9598C41.778 22.9377 41.5479 22.9648 41.3314 23.0393C41.1148 23.1138 40.9167 23.234 40.7507 23.3917C40.5846 23.5494 40.4543 23.7409 40.3687 23.9534C40.283 24.1658 40.244 24.3941 40.2543 24.6229C40.2646 24.8517 40.324 25.0757 40.4283 25.2795C40.5327 25.4834 40.6796 25.6625 40.8592 25.8047L51.965 37.7692L21.3974 36.7585C20.9736 36.7445 20.5616 36.8994 20.2521 37.1892C19.9425 37.479 19.7607 37.8798 19.7467 38.3036C19.7327 38.7274 19.8876 39.1394 20.1774 39.449C20.4671 39.7585 20.868 39.9403 21.2918 39.9543L51.8593 40.9649L39.9875 52.1698C39.6788 52.4608 39.4983 52.8625 39.4858 53.2866C39.4733 53.7106 39.6297 54.1223 39.9208 54.431C40.2118 54.7398 40.6135 54.9202 41.0376 54.9327C41.4616 54.9453 41.8733 54.7888 42.182 54.4978L42.1341 54.4962Z"
        fill="#F8F24B"
      />
    </g>
    <defs>
      <clipPath id="clip0_4005_34680">
        <rect
          width="57.5553"
          height="57.5553"
          fill="white"
          transform="translate(68.5391 11.1235) rotate(91.8936)"
        />
      </clipPath>
    </defs>
  </svg>
);

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Landing() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    /* ===== Start Lenis ===== */
    // Initialize Lenis
    const lenis = new Lenis({ duration: 1.5 });
    lenisRef.current = lenis;

    // lenis.on("scroll", (e: Event) => {
    //   // console.log(e)
    // });

    // Update ScrollTrigger on scroll
    lenis.on("scroll", ScrollTrigger.update);

    // Add GSAP ticker
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);

    // Disable lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
    /* ===== End Lenis ===== */
  }, []);

  // handleScroll
  // const handleScroll = (toScreen: HTMLElement | any) => {
  //   toScreen.current.scrollIntoView({ behavior: "smooth" });
  // };

  const handleScroll = (toScreen: HTMLElement | any) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(toScreen.current, {
        duration: 2,
        // easing: (t) => t, // Customize easing function if needed
      });
    }
  };

  const swiperRef = useRef<SwiperCore | null>(null);

  const slides = [
    "/assets/landing-slide-1.png",
    "/assets/landing-slide-2.png",
    "/assets/landing-slide-3.png",
    "/assets/landing-slide-4.png",
    "/assets/landing-slide-5.png",
    "/assets/landing-slide-6.png",
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleSlide = (direction: "prev" | "next") => {
    if (direction === "prev" && currentSlide > 0) {
      const newSlide = currentSlide - 1;
      setCurrentSlide(newSlide);
      // console.log(newSlide); // Log the updated slide index
      if (swiperRef.current) {
        swiperRef.current.slideTo(newSlide); // Use updated slide index
      }
    } else if (direction === "next" && currentSlide < slides.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      // console.log(newSlide); // Log the updated slide index
      if (swiperRef.current) {
        swiperRef.current.slideTo(newSlide); // Use updated slide index
      }
    }
  };

  const screen1 = useRef<HTMLElement | any>(null);
  const ref = useRef(null);
  const screen2 = useRef<HTMLElement | any>(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const screen3 = useRef<HTMLElement | any>(null);
  const screen4 = useRef<HTMLElement | any>(null);
  const [matterContainerView, setMatterContainerView] = useState(false);
  const [matterContainerView1, setMatterContainerView1] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const matterContainer = useRef<HTMLDivElement>(null);
  const matterContainer1 = useRef<HTMLDivElement>(null);
  const screen4Col2 = useRef<HTMLDivElement>(null);
  // const screen5 = useRef<HTMLElement | any>(null);
  const screen6 = useRef<HTMLElement | any>(null);
  const waves = useRef<HTMLDivElement>(null);
  const animateMotionRef = useRef<SVGAnimateMotionElement>(null);
  const screen7 = useRef<HTMLElement | any>(null);
  const screen7Span = useRef<HTMLDivElement>(null);
  const screen8 = useRef<HTMLElement | any>(null);

  // ===== Start Screen(1) =====
  useGSAP(
    () => {
      gsap.to(ref.current, {
        // paddingLeft: "+=1000px",
        paddingLeft: "+=51%",
        duration: 2,
        delay: 0.25,
        scrollTrigger: {
          trigger: ref.current,
          start: "-20% 20%",
          // end: "top 20%",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: screen1 }
  );
  // ===== End Screen(1) =====

  // ===== Start Screen(2) =====
  useGSAP(
    () => {
      gsap.to(ref2.current, {
        duration: 3,
        delay: 0.25,
        scrollTrigger: {
          trigger: ref2.current,
          start: "-100% 80%",
          end: "top 65%",
          toggleClass: "active",
          scrub: true,
          //   markers: {startColor:"cyan", endColor:"cyan", fontSize:"12px"},
        },
      });

      gsap.to(ref3.current, {
        duration: 3,
        delay: 0.25,
        scrollTrigger: {
          trigger: ref3.current,
          start: "top 80%",
          // end: "top 20%",
          toggleClass: "active",
          scrub: true,
          //   markers: true,
        },
      });

      gsap.to(screen2.current, {
        scrollTrigger: {
          trigger: screen2.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          //   snap: true,
          //   markers: true,
        },
        yPercent: 100,
        opacity: 0,
        ease: "none",
      });
    },
    { scope: screen2 }
  );
  // ===== End Screen(2) =====

  // ===== Start Screen(3) =====
  useGSAP(
    () => {
      gsap.to(screen3.current, {
        scrollTrigger: {
          trigger: screen3.current,
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          // markers: true,
        },
        yPercent: 100,
        ease: "none",
      });
    },
    { scope: screen3 }
  );
  // ===== End Screen(3) =====

  // ===== Start Screen(4) =====
  useEffect(() => {
    const svg = svgRef.current;
    if (svg) {
      const svgHeight = svg.getBoundingClientRect().height - 3;
      svg.style.top = `-${svgHeight}px`;
    }
    // Reload the page when the window is resized
    let resizeTimeout: NodeJS.Timeout; // Explicitly type the variable

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        window.location.reload();
      }, 500); // Adjust the timeout as needed
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useGSAP(
  // () => {
  //   if (elementsFallingContainer.current) {
  //     const svgs = elementsFallingContainer.current.querySelectorAll("svg");

  //     svgs.forEach((svg) => {
  //       Draggable.create(svg, {
  //         bounds: ".screen4-content",
  //       });
  //     });
  //   }
  // },
  // { scope: screen4 }
  // );

  useGSAP(
    () => {
      gsap.to(matterContainer.current, {
        scrollTrigger: {
          trigger: screen4.current,
          start: "10% 12%",
          // end: "bottom 100%",
          scrub: true,
          // markers: true,
        },
        onStart: () => {
          setMatterContainerView(true);
        },
        ease: "none",
      });
    },
    { scope: screen4 }
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: screen4.current, //screen4
        start: "top top",
        end: "bottom bottom",
        pin: screen4Col2.current, //screen4-col2
        //   scrub: 0.8,
        scrub: true,
      });
    },
    { scope: screen4 }
  );
  // ===== End Screen(4) =====

  // ===== Start Screen(6) =====
  useGSAP(
    () => {
      gsap.to(waves.current, {
        scrollTrigger: {
          trigger: screen6.current,
          start: "-100% top",
          // end: "bottom 100%",
          scrub: true,
          // markers: true,
        },
        display: "block",
        ease: "none",
        onStart: () => {
          if (animateMotionRef.current) {
            animateMotionRef.current.beginElement();
          }
          setTimeout(() => {
            if (animateMotionRef.current) {
              animateMotionRef.current.beginElement();
            }
          }, 250);
        },
      });
    },
    { scope: screen6 }
  );
  // ===== End Screen(6) =====

  // ===== Start Screen(7) =====
  useGSAP(
    () => {
      gsap.to(screen7Span.current, {
        // scale: 30,
        scale: 500,
        duration: 20,
        delay: 0.4,
        scrollTrigger: {
          trigger: screen7.current,
          start: "-10% top",
          // end: "bottom 65%",
          // end: "120% 65%",
          scrub: true,
          // markers: true,
        },
        ease: "none",
        onStart: () => {
          if (animateMotionRef.current) {
            animateMotionRef.current.beginElement();
          }
        },
      });
    },
    { scope: screen7 }
  );

  const [isBlack, setIsBlack] = useState(false);

  useGSAP(
    () => {
      gsap.to(screen7.current, {
        scrollTrigger: {
          trigger: screen7.current,
          start: "top top",
          // end: "bottom 65%",
          // end: "120% 65%",
          toggleClass: "black",
          scrub: true,
          // markers: true,
        },
        ease: "none",
        onStart: () => {
          setIsBlack(true);
        },
        onReverseComplete: () => {
          if (animateMotionRef.current) {
            animateMotionRef.current.beginElement();
          }
          setIsBlack(false);
        },
      });
    },
    { scope: screen7 }
  );

  // ===== End Screen(7) =====

  // ===== Start Screen(8) =====
  useGSAP(
    () => {
      gsap.to(screen8.current, {
        opacity: 1,
        // scale: 1,
        duration: 15,
        // delay: 0.5,
        scrollTrigger: {
          trigger: screen8.current,
          // start: "-10% 50%",
          start: "-10% top",
          // end: "bottom 65%",
          end: "65% 65%",
          scrub: true,
          // markers: true,
        },
      });
    },
    { scope: screen8 }
  );
  // ===== End Screen(8) =====

  return (
    <main className="landing-main overflow-hidden">
      {/* ===== Start Screen(1) ===== */}
      <section className="screen1" ref={screen1}>
        <p>IF WE DONT PROVIDE IT</p>
        <p>IT DOESN’T</p>
        <div className="screen1-span">
          <span ref={ref}>EXIST</span>
        </div>
      </section>
      {/* ===== End Screen(1) ===== */}

      {/* ===== Start Screen(2) ===== */}
      <section className="screen2" ref={screen2}>
        <div className="w-[--411px] max-w-[60%]">
          <img src="/assets/logo.svg" className="w-[--411px]" alt="logo" />
        </div>
        <div>
          <p ref={ref2}>
            At Juice Box, we’re here to turbocharge your business growth with
            innovative solutions.
          </p>
          <p ref={ref3}>
            As a cutting-edge SaaS product and full-service digital agency, we
            transform your digital presence and unlock your potential with a
            wide range of services.
          </p>
          <NewsLetter />
        </div>
      </section>
      {/* ===== End Screen(2) ===== */}

      {/* ===== Start Screen(3) ===== */}
      <section className="screen3" ref={screen3}>
        <h2>WHAT’S THE JUICE?</h2>
        <ul>
          <li>
            <span>Services</span>
            <span onClick={() => handleScroll(screen4)}>{arrow}</span>
          </li>
          <li>
            <span>Infinity Services</span>
            <span onClick={() => handleScroll(screen6)}>{arrow}</span>
          </li>
          <li>
            <span>White Label</span>
            <span onClick={() => handleScroll(screen7)}>{arrow}</span>
          </li>
        </ul>
      </section>
      {/* ===== End Screen(3) ===== */}

      {/* ===== Start Screen(4) =====  */}
      <section className="screen4" ref={screen4}>
        <svg
          className="waveSVG"
          ref={svgRef}
          style={{ width: "100%", height: "auto" }}
          viewBox="0 0 1800 185"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M149.011 106.588C84.5221 96.5947 18.1759 123.316 2.09874 153.206L0 467.41H167.69C532.114 467.41 896.502 465.562 1260.93 465.562C1454.09 465.562 1648.88 469.011 1841.86 463.919C1874.44 463.059 1943.15 464.556 1971.77 452.213C1991 443.919 1986.66 420.292 1987.51 410.114C1991.99 356.54 1987.02 305.111 1963.59 252.601C1935.64 189.979 1893.92 128.519 1873.76 65.1052C1871.38 57.6099 1864.73 54.0477 1859.91 47.444C1846.85 29.5499 1857.01 9.55612 1821.5 7.91003C1816.5 -9.59033 1826.5 2.91005 1757.5 35.91C1738.76 46.679 1695.25 81.0646 1676 92.41C1647 109.5 1605.62 118.459 1566.08 135.955C1524.9 154.18 1469.4 163.955 1413.71 159.572C1365.32 155.763 1329.55 139.444 1291.57 126.098C1227.51 103.588 1150.07 89.4911 1080.43 115.111C1023.82 135.939 987.344 170.426 916.102 180.724C851.591 190.049 810.871 171.679 777.585 146.326C741.797 119.067 728.322 83.7783 685.03 59.1496C668.173 49.5596 648.136 42.9371 624.586 50.5244C551.683 74.0131 550.491 133.321 463.823 147.455C413.385 155.681 350.244 151.979 301.38 142.732C248.55 132.735 203.555 115.041 149.011 106.588Z"
            fill="#1D1D1D"
          />
        </svg>
        <div className="screen4-content">
          <div className="screen4-col1">
            <div className="screen4-col1-content" id="matter-wrapper">
              <div
                ref={matterContainer}
                id="matter-container"
                className="relative"
              >
                <h2 className="absolute top-0 left-0">Services</h2>
                {matterContainerView && <MatterComponent />}
              </div>
            </div>

            <div className="screen4-col1-content">
              <div className="screen4-col1-up">
                <div className="w-[75%]">
                  <p className="join-juicebox">
                    Enter your email below to join Creative Juice Box
                    <br />
                    community and elevate your business.
                  </p>
                  <NewsLetter />
                </div>
              </div>
              <div
                className="screen4-col1-down"
                ref={matterContainer1}
                id="matter-container1"
              >
                {/* {matterContainerView1 && <MatterComponent1 />} */}
                <MatterComponent1 />
                {/* <img src="/assets/services-stack.svg" alt="" /> */}
              </div>
            </div>
          </div>

          <div className="screen4-col2" ref={screen4Col2}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              speed={500}
              initialSlide={0}
              effect={"coverflow"}
              // grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              loop={false}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              allowTouchMove={false} // Disable slide navigation by mouse drag
              // modules={[EffectCoverflow, Pagination]}
              className="mySwiper landingpage-swiper"
            >
              {slides.map((e, i) => (
                <SwiperSlide key={i}>
                  <div>
                    <img
                      loading="lazy"
                      src={e}
                      className={`slide slide${i} `}
                    />
                    {/* or currentSlide state */}
                    {currentSlide === i && (
                      <div className="landingpage-swiper-btns w-[86.5%] ml-auto relative z-40 bottom-[--60px] -left-[--26px]">
                        <button
                          onClick={() => handleSlide("prev")}
                          className={classNames(
                            "bg-[#484848] px-[--30px] py-[--6px] font-semibold rounded-[var(--41px)] cursor-pointer float-start",
                            currentSlide === 0 && "hidden"
                          )}
                        >
                          Back
                        </button>
                        <button
                          onClick={() => handleSlide("next")}
                          className={classNames(
                            "bg-[var(--highlight-yellow)] px-[--30px] py-[--6px] font-bold rounded-[var(--41px)] text-[var(--primary-black)] cursor-pointer float-end",
                            currentSlide === slides.length - 1 && "hidden"
                          )}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* ===== End Screen(4) =====  */}

      {/* ===== Start Screen(6) =====  */}
      <section className="screen6" ref={screen6}>
        <div className="screen6-content">
          <div>
            <h2>
              Infinity
              <br />
              Services
            </h2>
          </div>
          <div>
            <p>
              we believe that your business deserves limitless opportunities for
              growth and success. Our comprehensive suite of solutions is
              designed to meet your unique needs, providing everything you need
              to excel in the digital world with no limits!
            </p>
            <span onClick={() => handleScroll(screen8)}>Start Now!</span>
          </div>
        </div>

        <div className="waves" ref={waves}>
          <svg
            className="absolute bottom-[-5px] left-0"
            width="100%"
            height="100%"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            shapeRendering="auto"
            fill="#ffffff"
          >
            <defs>
              <path
                id="wavepath"
                d="M 0 2000 0 500 Q 116.5 431 233 500 t 233 0 233 0 233 0 233 0 233 0 233 0 233 0 v1000 z"
              />
              <path id="motionpath" d="M -466 0 0 0" />
            </defs>
            <g>
              <use
                xlinkHref="#wavepath"
                y="414"
                fill={isBlack ? "#1d1d1d" : "#f8f24b"}
              >
                <animateMotion
                  ref={animateMotionRef}
                  dur="11s"
                  repeatCount="indefinite"
                  begin="indefinite"
                >
                  <mpath href="#motionpath" />
                </animateMotion>
              </use>
            </g>
          </svg>
        </div>
      </section>
      {/* ===== End Screen(6) =====  */}

      <div className="relative">
        {/* ===== Start Screen(7) =====  */}
        <section className="screen7" ref={screen7}>
          <h2>White Label</h2>
          <p className="text-center w-1/2">
            we provide top-tier, customizable solutions designed to help your
            business thrive without the hassle. Our services are crafted to
            seamlessly integrate with your brand, giving you the power to
            deliver exceptional value to your clients while keeping your brand
          </p>
          <div className="screen7Span flex gap-[--10px]" ref={screen7Span}>
            <span className="w-[--200px] text-right">front</span>
            <span>&</span>
            <span className="w-[--200px] text-left">center</span>
          </div>
        </section>
        {/* ===== End Screen(7) =====  */}

        {/* ===== Start Screen(8) =====  */}
        <section className="screen8" ref={screen8}>
          <div className="screen8-content">
            <div>
              <p>
                DON’T MISS OUT
                <br />
                ON THE JUICE!
              </p>
              <div>
                <p className="join-juicebox">
                  Enter your email below to join Creative Juice Box
                  <br />
                  community and elevate your business.
                </p>
                <NewsLetter />
              </div>
            </div>
            <div className="w-[40%]">
              <img src="/assets/bg-1.svg" alt="" />
            </div>
          </div>
        </section>
        {/* ===== End Screen(8) =====  */}
      </div>
    </main>
  );
}
