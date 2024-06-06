"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./addToVideo.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const options = ["Maps Video", "Motion Graphics Video", "Video Style 1", "Video Style 2"];

  const slides = [
    {
      head: "Slide 1",
      content:"/assets/ATV1.svg"
    },
    {
      head: "Slide 2",
      content:"/assets/ATV2.svg"},
    {
      head: "Slide 3",
      content:"/assets/ATV3.svg"
    },
    {
      head: "Slide 4",
      content:"/assets/ATV3.svg"
    },
  ];

  return (
    // Main container div with full height, flexbox layout, and content vertically and horizontally centered
<div className="flex items-center justify-center h-full">
  
  {/* // Inner container with full width and custom styles for adding to the video section */}
  <div className={`${styles.addToVideo} w-full `}>
    
    {/* // Header section with padding top, left padding, and bottom margin */}
    <div className=" pl-[4.264vw] mb-[1.5vw]">
      
      {/* // Main heading with bottom margin and embedded horizontal rules */}
      <h2 className="mb-[1.041vw]">Would you like to include some add epic
        <hr className="border-0" />elements to your video?
      </h2>
      
      {/* // Subheading with embedded horizontal rules */}
      <h4>
        We have a variety of video styles, pick the one you think would
        complement <hr className="border-0" /> the video style you want!
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
            onMouseMove={() => { // Mouse move event to highlight button
              document.querySelectorAll(".item").forEach((e) => {
                e.classList.remove("active");
              });
              document.querySelector(`.item${i}`)?.classList.add("active");
            }}
            onClick={() => { // Click event to select button and highlight the corresponding slider item
              document.querySelectorAll(".item").forEach((e) => {
                e.classList.remove("active");
              });
              document.querySelectorAll(".item").forEach((e) => {
                e.classList.remove("selected");
              });
              document.querySelector(`.item${i}`)?.classList.add("active");
              document.querySelector(`.item${i}`)?.classList.add("selected");
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
            >
            </Image>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
