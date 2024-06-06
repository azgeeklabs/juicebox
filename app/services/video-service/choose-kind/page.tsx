"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./chooseKind.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

export default function page() {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

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
    <div className="flex flex-col justify-between h-full">
      {/* Inner container with full width and custom styles for choosing video kind */}
      <div className={`${styles.chooseKind} w-full`}>
        {/* Header section with top padding, left padding, and bottom margin */}
        <div className="pt-[1.5vw] pl-[4.264vw] mb-[1.5vw]">
          {/* Main heading with bottom margin and embedded horizontal rule */}
          <h2 className="mb-[1.041vw]">
            What kind of video do you want to be published
            <hr className="border-0" /> on your channel?
          </h2>

          {/* Subheading with embedded horizontal rule */}
          <h4>
            We have a variety of video styles, pick the one you think would
            complement
            <hr className="border-0" /> the video style you want!
          </h4>
        </div>

        {/* Container for buttons and slider with flexbox layout, padding, and justified content */}
        <div className="flex items-center justify-between pl-[4.021vw] pr-[1vw]">
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
                    i === Math.floor(slides.length / 2 - 1) ||
                    i === Math.ceil(slides.length / 2 - 1)
                      ? `active ${styles.right}`
                      : i > Math.floor((slides.length - 1) / 2)
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
  );
}
