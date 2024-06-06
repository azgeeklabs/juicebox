"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./channelStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

export default function page() {
  const options = ["Maps Video", "Motion Graphics Video", "Video Style 1", "Video Style 2"];

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
    <div className=" flex flex-col justify-between h-full">
      <div className={`${styles.channelStyle} w-full `}>
        <div className=" pt-[1.5vw] pl-[4.264vw] mb-[1.5vw]">
          <h2 className=" mb-[1.041vw]">
            Gotcha! <hr className="border-0" />
            We can match your channel's style exactly, or if you want to mix
            <hr className="border-0" /> things up, we have other YouTube video
            styles to choose from.
          </h2>
          <h4>
            we have a variety of video styles, pick the one you think would
            complement <hr className="border-0" /> the video style you want!
          </h4>
        </div>
        <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw]">
          <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
            {options.map((e, i) => (
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="type"
                onMouseMove={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelector(`.item${i}`)?.classList.add("active");
                }}
                onClick={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("selected");
                  });
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
          <div>
            <div className={`${styles.slider} slider`}>
              {slides.map((e, i) => (
                <div
                  key={i}
                  className={`item${i} ${styles.item} item ${
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
  );
}
