"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./videoService.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

export default function page() {

  const options = ["Explainer","Educational","YouTube","Social Media Ad","Short Film"]


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
    {
      head: "Slide 5",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Faceremagni magnam unde ipsam repudiandae explicabo expedita labore,sequi minus neque beatae voluptatum, quasi accusamus quia quisvoluptas laborum ad! Ab totam doloribus, excepturi possimus remvel quia fugit molestiae officiis!",
    },
  ];

  // useEffect(() => {
  //   let items = document.getElementsByClassName("item") as any;
  //   let next = document.getElementById("next");
  //   let prev = document.getElementById("prev");

  //   let active = 3;
  //   function loadShow() {
  //     let stt = 0;
  //     items[active].style.transform = `none`;
  //     items[active].style.zIndex = 1;
  //     items[active].style.filter = "none";
  //     items[active].style.opacity = 1;
  //     for (var i = active + 1; i < items.length; i++) {
  //       stt++;
  //       items[i].style.transform = `translateX(${120 * stt}px) scale(${
  //         1 - 0.2 * stt
  //       }) perspective(16px) rotateY(-1deg)`;
  //       items[i].style.zIndex = -stt;
  //       items[i].style.filter = "blur(5px)";
  //       items[i].style.opacity = stt > 2 ? 0 : 0.6;
  //     }
  //     stt = 0;
  //     for (var i = active - 1; i >= 0; i--) {
  //       stt++;
  //       items[i].style.transform = `translateX(${-120 * stt}px) scale(${
  //         1 - 0.2 * stt
  //       }) perspective(16px) rotateY(1deg)`;
  //       items[i].style.zIndex = -stt;
  //       items[i].style.filter = "blur(5px)";
  //       items[i].style.opacity = stt > 2 ? 0 : 0.6;
  //     }
  //   }

  //   console.log(items);

  //   // loadShow();
  // }, []);

  return (
    // Main container div with full height, column flex direction, and space-between alignment
<div className="flex flex-col justify-between h-full">
  
  {/* Inner container with full width and custom editing styles */}
  <div className={`${styles.editing} w-full`}>
    
    {/* Header section with padding and bottom margin */}
    <div className="pt-[1.5vw] pl-[4.264vw] mb-[3.5vw]">
      
      {/* Main heading with bottom margin */}
      <h2 className="mb-[1.041vw]">
        {" "}
        What type of video would you like to create?
      </h2>
      
      {/* Subheading with horizontal rule (line) */}
      <h4>
        Our talented video editors possess a wide range of skills that can
        create <hr className="border-0" /> different genres of videos
        depending on your needs!
      </h4>
    </div>
    
    {/* Container for options and slider with padding */}
    <div className="flex items-center justify-between pl-[4.021vw] pr-[1vw]">
      
      {/* Options container with custom button styles and vertical gap */}
      <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
        {/* Iterate over options array and create CustomCheckBoxText components */}
        {options.map((e, i) => (
          <CustomCheckBoxText
            btnSize="xl"
            inputType="radio"
            name="type"
            
            // Mouse move event to highlight the hovered item
            onMouseMove={() => {
              document.querySelectorAll(".item").forEach((e) => {
                e.classList.remove("active");
              });
              document.querySelector(`.item${i}`)?.classList.add("active");
            }}
            
            // Click event to select the clicked item
            onClick={() => {
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
      
      {/* Slider container */}
      <div>
        <div className={`${styles.slider} slider`}>
          {/* Iterate over slides array and create slide items */}
          {slides.map((e, i) => (
            <div
              key={i}
              className={`item${i} ${styles.item} item ${
                i == (slides.length / 2 - 1) ||
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

  );
}
