"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./website-style.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import Image from "next/image";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

export default function page() {
  const options = [
    "Light Mode",
    "Dark Mode",
    "Playful",
    "Playful",
    "Dark Mode",
  ];

  const slides = [
    {
      head: "Slide 1",
      content: "/assets/ATV1.svg",
    },
    {
      head: "Slide 2",
      content: "/assets/ATV2.svg",
    },
    {
      head: "Slide 3",
      content: "/assets/ATV3.svg",
    },
    {
      head: "Slide 4",
      content: "/assets/ATV3.svg",
    },
    {
      head: "Slide 5",
      content: "/assets/ATV1.svg",
    },
  ];

  return (
    <NextPrevNav
      backLink="/services/web-design/brand-selection"
      nextLink="/services/web-design/custom-ecommerce"
    >
      {/* // Main container div with full height, flexbox layout, and content vertically and horizontally centered */}
      <div className="flex flex-col justify-between h-full">
        {/* // Inner container with full width and custom styles for adding to the video section */}
        <div className={`${styles.websiteStyle} w-full `}>
          {/* // Header section with padding top, left padding, and bottom margin */}
          <div className="pt-[1.5vw] pl-[4.264vw] mb-[1.5vw] mx-auto text-center">
            {/* // Main heading with bottom margin and embedded horizontal rules */}
            <h2 className="mb-[1.041vw]">
              What style do you want for your website?
            </h2>

            {/* // Subheading with embedded horizontal rules */}
            <h4>
              Choose your preferred style options below. You can also upload or
              add references for specific design elements.
            </h4>
          </div>

          {/* // Container for buttons and slider with flexbox layout, padding left, and padding right */}
          <div className="flex items-center justify-between pl-[4.021vw] pr-[1vw]">
            {/* // Container for buttons with flexbox layout, column direction, and gap between buttons */}
            <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
              {/* // Mapping through options array to create CustomCheckBoxText components */}
              {options.map((e, i) => (
                <CustomCheckBoxText
                  btnSize="xl" // Extra large button size
                  inputType="radio" // Radio input type for selection
                  name="type" // Name attribute for radio buttons to group them
                  onMouseMove={() => {
                    // Mouse move event to highlight button
                    document.querySelectorAll(".item").forEach((e) => {
                      e.classList.remove("active");
                    });
                    document
                      .querySelector(`.item${i}`)
                      ?.classList.add("active");
                  }}
                  onClick={() => {
                    // Click event to select button and highlight the corresponding slider item
                    document.querySelectorAll(".item").forEach((e) => {
                      e.classList.remove("active");
                    });
                    document.querySelectorAll(".item").forEach((e) => {
                      e.classList.remove("selected");
                    });
                    document
                      .querySelector(`.item${i}`)
                      ?.classList.add("active");
                    document
                      .querySelector(`.item${i}`)
                      ?.classList.add("selected");
                  }}
                >
                  {e}
                </CustomCheckBoxText>
              ))}
            </div>

            {/* // Container for the slider */}
            <div>
              <div className={`${styles.slider} slider`}>
                {/* // Mapping through slides array to create Image components */}
                {slides.map((e, i) => (
                  <Image
                    src={e.content} // Image source from slides array
                    alt="" // Alternative text for the image
                    width={100} // Width of the image
                    height={100} // Height of the image
                    key={i} // Unique key for each item
                    className={`relative item${i} ${styles.item} item ${
                      i == slides.length / 2 - 1 ||
                      i == slides.length / 2 + 0.5 - 1
                        ? `active ${styles.right}`
                        : i > (slides.length - 1) / 2
                        ? styles.right
                        : styles.left
                    }`}
                  ></Image>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}
