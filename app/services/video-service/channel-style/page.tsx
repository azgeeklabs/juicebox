"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./channelStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

export default function page() {
  const options = [
    "Maps Video",
    "Motion Graphics Video",
    "Video Style 1",
    "Video Style 2",
  ];

  const slides = [
    {
      head: "Slide 1",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Faceremagni magnam unde ipsam repudiandae explicabo expedita labore,sequi minus neque beatae voluptatum, quasi accusamus quia quisvoluptas laborum ad! Ab totam doloribus, excepturi possimus remvel quia fugit molestiae officiis!",
    },
    {
      head: "Slide 2",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Faceremagni magnam unde ipsam repudiandae explicabo expedita labore,sequi minus neque beatae voluptatum, quasi accusamus quia quisvoluptas laborum ad! Ab totam doloribus, excepturi possimus remvel quia fugit molestiae officiis!",
    },
    {
      head: "Slide 3",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Faceremagni magnam unde ipsam repudiandae explicabo expedita labore,sequi minus neque beatae voluptatum, quasi accusamus quia quisvoluptas laborum ad! Ab totam doloribus, excepturi possimus remvel quia fugit molestiae officiis!",
    },
    {
      head: "Slide 4",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Faceremagni magnam unde ipsam repudiandae explicabo expedita labore,sequi minus neque beatae voluptatum, quasi accusamus quia quisvoluptas laborum ad! Ab totam doloribus, excepturi possimus remvel quia fugit molestiae officiis!",
    },
  ];

  return (
    // Main container div with flexbox layout, column direction, and full height
    <NextPrevNav nextLink="/services/video-service/footage-edit" backLink="/services/video-service/choose-kind">
      <div className="flex items-center justify-center h-full w-full">
      {/* Inner container with full width and custom styles for channel style selection */}
      <div className={`${styles.channelStyle} w-full `}>
        {/* Header section with top padding, left padding, and bottom margin */}
        <div className="pt-[1.5vw] pl-[4.264vw] mb-[1.5vw]">
          {/* Main heading with bottom margin and embedded horizontal rules */}
          <h2 className="mb-[1.041vw]">
            Gotcha! <hr className="border-0" />
            We can match your channel's style exactly, or if you want to mix
            <hr className="border-0" /> things up, we have other YouTube video
            styles to choose from.
          </h2>

          {/* Subheading with embedded horizontal rules */}
          <h4>
            We have a variety of video styles, pick the one you think would
            complement <hr className="border-0" /> the video style you want!
          </h4>
        </div>

        {/* Container for buttons and slider with flexbox layout, padding, and justified content */}
        <div className="flex items-center justify-between pl-[4.021vw] pr-[1vw] w-full">
          {/* Buttons container with custom styles, flexbox layout, column direction, and gap between buttons */}
          <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
            {/* Mapping through options to create custom checkbox buttons */}
            {options.map((e, i) => (
              <CustomCheckBoxText
                btnSize="xl" // Large button size
                inputType="radio" // Radio input type
                name="type" // Name attribute for the input
                onMouseMove={() => {
                  // Remove 'active' class from all items on mouse move
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  // Add 'active' class to the current item
                  document.querySelector(`.item${i}`)?.classList.add("active");
                }}
                onClick={() => {
                  // Remove 'active' and 'selected' classes from all items on click
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                    e.classList.remove("selected");
                  });
                  // Add 'active' and 'selected' classes to the current item
                  document.querySelector(`.item${i}`)?.classList.add("active");
                  document
                    .querySelector(`.item${i}`)
                    ?.classList.add("selected");
                }}
              >
                {e}
              </CustomCheckBoxText>
            ))}
          </div>

          {/* Slider container */}
          <div>
            <div className={`${styles.slider} slider`}>
              {/* Mapping through slides to create individual slide items */}
              {slides.map((e, i) => (
                <div
                  key={i} // Unique key for each item
                  className={`item${i} ${styles.item} item ${
                    // Conditional classes based on the position of the slide
                    i == slides.length / 2 - 1 ||
                    i == slides.length / 2 + 0.5 - 1
                      ? `active ${styles.right}`
                      : i > (slides.length - 1) / 2
                      ? styles.right
                      : styles.left
                  }`}
                >
                  <h1>{e.head}</h1> 
                  {e.content} 
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </NextPrevNav>
  );
}
