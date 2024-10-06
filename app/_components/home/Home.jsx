"use client";
import React, { useEffect, useRef, useState } from "react";
import "./home.css";
import Hero from "./01hero/Hero";
import AboutUs from "./02about-us/AboutUs";
import Services from "./03services/Services";
import InfinityServices from "./04infinity-services/InfinityServices";
import WhiteLabel from "./05white-label/WhiteLabel";
import ClientReviews from "./06client-reviews/ClientReviews";
import Footer from "../../Footer";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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

const exploreBtn = (
  <svg
    className="w-[--111px] h-[--37px]"
    viewBox="0 0 111 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="110.514" height="36.6464" rx="18.3232" fill="#F8F24B" />
    <path
      d="M25.0499 14.3781C25.0499 14.4732 25.0024 14.5207 24.9073 14.5207H19.8426C19.8046 14.5207 19.7856 14.5398 19.7856 14.5778V17.6451C19.7856 17.6832 19.8046 17.7022 19.8426 17.7022H23.3237C23.4188 17.7022 23.4663 17.7497 23.4663 17.8449V18.7437C23.4663 18.8388 23.4188 18.8863 23.3237 18.8863H19.8426C19.8046 18.8863 19.7856 18.9053 19.7856 18.9434V22.082C19.7856 22.1201 19.8046 22.1391 19.8426 22.1391H24.9073C25.0024 22.1391 25.0499 22.1867 25.0499 22.2818V23.1806C25.0499 23.2757 25.0024 23.3232 24.9073 23.3232H18.5586C18.4635 23.3232 18.416 23.2757 18.416 23.1806V13.4793C18.416 13.3842 18.4635 13.3366 18.5586 13.3366H24.9073C25.0024 13.3366 25.0499 13.3842 25.0499 13.4793V14.3781ZM26.2577 23.3232C26.2006 23.3232 26.1626 23.309 26.1436 23.2804C26.1245 23.2424 26.1293 23.1996 26.1578 23.152L28.5261 19.7423C28.5451 19.7138 28.5451 19.6853 28.5261 19.6567L26.1578 16.2327L26.1293 16.1614C26.1293 16.0948 26.1721 16.0615 26.2577 16.0615H27.4133C27.4894 16.0615 27.5465 16.0901 27.5845 16.1471L29.2537 18.5867C29.2632 18.5962 29.2775 18.601 29.2965 18.601C29.3155 18.601 29.3298 18.5962 29.3393 18.5867L30.9942 16.1471C31.0323 16.0901 31.0893 16.0615 31.1654 16.0615H32.4066C32.4637 16.0615 32.5017 16.0806 32.5207 16.1186C32.5398 16.1471 32.535 16.1852 32.5065 16.2327L30.1382 19.6567C30.1287 19.6853 30.1287 19.7138 30.1382 19.7423L32.5065 23.152L32.535 23.2234C32.535 23.29 32.4922 23.3232 32.4066 23.3232H31.2368C31.1607 23.3232 31.1036 23.2947 31.0656 23.2376L29.4106 20.798C29.4011 20.779 29.3868 20.7695 29.3678 20.7695C29.3488 20.7695 29.3345 20.779 29.325 20.798L27.6558 23.2376C27.6178 23.2947 27.5607 23.3232 27.4846 23.3232H26.2577ZM39.7828 17.8877C39.9635 18.4013 40.0539 19.01 40.0539 19.7138C40.0539 20.3796 39.9778 20.955 39.8256 21.44C39.6259 22.0773 39.2977 22.5719 38.8412 22.9238C38.3847 23.2662 37.7997 23.4374 37.0864 23.4374C36.763 23.4374 36.4539 23.3756 36.1591 23.2519C35.8737 23.1188 35.6265 22.9333 35.4172 22.6955C35.3982 22.6765 35.3792 22.6717 35.3601 22.6812C35.3506 22.6908 35.3459 22.705 35.3459 22.724V25.9055C35.3459 26.0006 35.2983 26.0482 35.2032 26.0482H34.1189C34.0238 26.0482 33.9763 26.0006 33.9763 25.9055V16.2042C33.9763 16.1091 34.0238 16.0615 34.1189 16.0615H35.2032C35.2983 16.0615 35.3459 16.1091 35.3459 16.2042V16.675C35.3459 16.694 35.3506 16.7083 35.3601 16.7178C35.3792 16.7273 35.3982 16.7225 35.4172 16.7035C35.6265 16.4657 35.8737 16.2803 36.1591 16.1471C36.4444 16.014 36.7535 15.9474 37.0864 15.9474C37.7712 15.9474 38.3371 16.1186 38.7841 16.461C39.2407 16.7939 39.5736 17.2694 39.7828 17.8877ZM38.2135 21.5684C38.5178 21.1119 38.67 20.4842 38.67 19.6853C38.67 18.9529 38.5511 18.3632 38.3133 17.9162C38.0375 17.3931 37.5857 17.1315 36.958 17.1315C36.4064 17.1315 35.9879 17.3883 35.7025 17.9019C35.4743 18.3109 35.3601 18.9101 35.3601 19.6995C35.3601 20.4984 35.4838 21.1072 35.7311 21.5256C36.0069 22.0107 36.4111 22.2532 36.9437 22.2532C37.5144 22.2532 37.9376 22.025 38.2135 21.5684ZM41.9887 23.3232C41.8936 23.3232 41.846 23.2757 41.846 23.1806V13.4793C41.846 13.3842 41.8936 13.3366 41.9887 13.3366H43.0729C43.168 13.3366 43.2156 13.3842 43.2156 13.4793V23.1806C43.2156 23.2757 43.168 23.3232 43.0729 23.3232H41.9887ZM48.1711 23.4374C47.4673 23.4374 46.8538 23.2614 46.3307 22.9095C45.8076 22.5481 45.4414 22.0488 45.2322 21.4115C45.061 20.8979 44.9754 20.3177 44.9754 19.671C44.9754 18.9957 45.0562 18.425 45.2179 17.959C45.4272 17.3313 45.7934 16.8414 46.3165 16.4895C46.8396 16.1281 47.4626 15.9474 48.1854 15.9474C48.8702 15.9474 49.4646 16.1281 49.9687 16.4895C50.4823 16.8414 50.8485 17.3265 51.0673 17.9447C51.2385 18.4298 51.3241 19.0005 51.3241 19.6567C51.3241 20.3225 51.2385 20.9074 51.0673 21.4115C50.858 22.0488 50.4966 22.5481 49.983 22.9095C49.4694 23.2614 48.8654 23.4374 48.1711 23.4374ZM48.1711 22.2532C48.5516 22.2532 48.8845 22.1486 49.1698 21.9394C49.4551 21.7206 49.6596 21.4163 49.7833 21.0263C49.8879 20.6649 49.9402 20.2179 49.9402 19.6853C49.9402 19.1526 49.8926 18.7104 49.7975 18.3585C49.6739 17.9685 49.4694 17.6689 49.1841 17.4597C48.8987 17.2409 48.5516 17.1315 48.1426 17.1315C47.7526 17.1315 47.415 17.2409 47.1297 17.4597C46.8443 17.6689 46.6398 17.9685 46.5162 18.3585C46.4116 18.6913 46.3593 19.1336 46.3593 19.6853C46.3593 20.2369 46.4116 20.6839 46.5162 21.0263C46.6303 21.4163 46.8301 21.7206 47.1154 21.9394C47.4102 22.1486 47.7622 22.2532 48.1711 22.2532ZM56.2986 15.9902C56.603 15.9902 56.8788 16.052 57.1261 16.1757C57.1927 16.2042 57.2165 16.2613 57.1974 16.3469L56.9692 17.4169C56.9597 17.5025 56.9026 17.531 56.798 17.5025C56.6363 17.4359 56.4461 17.4026 56.2273 17.4026L56.0276 17.4169C55.5806 17.4359 55.2096 17.5928 54.9148 17.8877C54.6295 18.173 54.4868 18.5487 54.4868 19.0147V23.1806C54.4868 23.2757 54.4392 23.3232 54.3441 23.3232H53.2599C53.1647 23.3232 53.1172 23.2757 53.1172 23.1806V16.2042C53.1172 16.1091 53.1647 16.0615 53.2599 16.0615H54.3441C54.4392 16.0615 54.4868 16.1091 54.4868 16.2042V16.9603C54.4868 16.9889 54.4915 17.0079 54.5011 17.0174C54.5201 17.0174 54.5343 17.0079 54.5439 16.9889C54.9719 16.3231 55.5568 15.9902 56.2986 15.9902ZM64.1778 18.7865C64.2159 19.1764 64.2302 19.6139 64.2206 20.099C64.2206 20.1941 64.1731 20.2417 64.078 20.2417H59.5269C59.4889 20.2417 59.4699 20.2607 59.4699 20.2987C59.4699 20.6221 59.4984 20.8694 59.5555 21.0406C59.6601 21.421 59.8693 21.7206 60.1832 21.9394C60.5066 22.1486 60.9108 22.2532 61.3958 22.2532C62.0997 22.2532 62.6418 21.9632 63.0222 21.383C63.0698 21.2879 63.1316 21.2736 63.2077 21.3402L64.0209 21.8823C64.0875 21.9394 64.1018 22.0012 64.0637 22.0678C63.7974 22.4958 63.417 22.8334 62.9224 23.0807C62.4373 23.328 61.8857 23.4516 61.2675 23.4516C60.5731 23.4516 59.9882 23.2995 59.5127 22.9951C59.0371 22.6908 58.6804 22.258 58.4427 21.6968C58.2144 21.1357 58.1003 20.4556 58.1003 19.6567C58.1003 18.9624 58.1526 18.4345 58.2572 18.0731C58.4284 17.4169 58.7708 16.8985 59.2844 16.5181C59.798 16.1376 60.421 15.9474 61.1533 15.9474C62.1139 15.9474 62.832 16.1899 63.3076 16.675C63.7831 17.1505 64.0732 17.8544 64.1778 18.7865ZM61.1533 17.1315C60.7443 17.1315 60.4067 17.2361 60.1404 17.4454C59.8741 17.6451 59.6934 17.9162 59.5983 18.2586C59.5317 18.4678 59.4889 18.7341 59.4699 19.0575C59.4699 19.0956 59.4889 19.1146 59.5269 19.1146H62.794C62.832 19.1146 62.851 19.0956 62.851 19.0575C62.832 18.7437 62.8035 18.5106 62.7654 18.3585C62.6703 17.9875 62.4801 17.6927 62.1948 17.4739C61.919 17.2457 61.5718 17.1315 61.1533 17.1315Z"
      fill="#1D1D1D"
    />
    <rect
      x="73.8672"
      y="8.62256"
      width="19.401"
      height="19.401"
      rx="9.70052"
      fill="#1D1D1D"
    />
    <g clip-path="url(#clip0_3274_49938)">
      <path
        d="M84.4034 22.2574L88.4145 18.4834L84.6614 14.4528C84.6279 14.4056 84.5846 14.3661 84.5345 14.3371C84.4844 14.3081 84.4286 14.2902 84.371 14.2846C84.3134 14.279 84.2552 14.2858 84.2005 14.3047C84.1457 14.3235 84.0956 14.3539 84.0536 14.3938C84.0117 14.4336 83.9787 14.482 83.9571 14.5358C83.9354 14.5895 83.9256 14.6472 83.9282 14.705C83.9308 14.7629 83.9458 14.8195 83.9722 14.871C83.9985 14.9226 84.0357 14.9678 84.0811 15.0038L86.8888 18.0286L79.1609 17.7731C79.0537 17.7695 78.9496 17.8087 78.8713 17.882C78.7931 17.9552 78.7471 18.0566 78.7436 18.1637C78.74 18.2708 78.7792 18.375 78.8524 18.4533C78.9257 18.5315 79.027 18.5775 79.1342 18.581L86.8621 18.8365L83.8607 21.6692C83.7827 21.7428 83.737 21.8444 83.7339 21.9516C83.7307 22.0588 83.7703 22.1629 83.8438 22.2409C83.9174 22.319 84.019 22.3646 84.1262 22.3678C84.2334 22.3709 84.3375 22.3314 84.4155 22.2578L84.4034 22.2574Z"
        fill="#F8F24B"
      />
    </g>
    <defs>
      <clipPath id="clip0_3274_49938">
        <rect
          width="14.5508"
          height="14.5508"
          fill="white"
          transform="translate(91.0781 11.2925) rotate(91.8936)"
        />
      </clipPath>
    </defs>
  </svg>
);
// ===== End Our Work =====

export default function Home() {
  const horizontalScrollRef = useRef(null);
  const ourWorkRef = useRef(null);
  const leftImgWrapperRef = useRef(null);
  const rightImgWrapperRef = useRef(null);

  useEffect(() => {
    // console.log(`ScrollTrigger.getAll() on mount:`, ScrollTrigger.getAll());
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
      ScrollTrigger.killAll();
    };
  }, []);

  // ===== Start Our Work =====
  const [indexState, setIndexState] = useState(0);

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
        setIndexState(index);
        const sectionProgress = progress - index;

        gsap.to(leftImgWrapperRef.current, {
          xPercent: -120 * sectionProgress,
          duration: 0.2,
        });

        gsap.to(rightImgWrapperRef.current, {
          xPercent: 120 * sectionProgress,
          duration: 0.2,
        });
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
      // console.log(`ScrollTrigger.getAll() on unmount:`, ScrollTrigger.getAll());
      ScrollTrigger.killAll();
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
      <ClientReviews />
      {/* ===== Start Our Work ===== */}
      <div className="home_ourWork_container">
        <section className="home_ourWork" ref={ourWorkRef} id="our-work">
          <div className="home_ourWork_leftImg" ref={leftImgWrapperRef}>
            <img src={data[indexState].img1} alt="Left Img" />
          </div>

          <div className="home_ourWork_content">
            <h2>Our Work</h2>
            <div className="home_ourWork_caseStudy">
              <p>
                <span>{data[indexState].caseStudy}</span>
                <br />
                <span>{data[indexState].number}</span>
              </p>
              <h3>{data[indexState].description}</h3>
            </div>
            <div className="flex justify-center items-center mt-[--sy-30px] cursor-pointer">
              <Link href="/case-study" target="_blank">
                {exploreBtn}
              </Link>
            </div>
          </div>

          <div className="home_ourWork_rightImg" ref={rightImgWrapperRef}>
            <img src={data[indexState].img2} alt="Right Img" />
          </div>
        </section>
      </div>
      {/* ===== End Our Work ===== */}
      <Footer />
    </main>
  );
}
