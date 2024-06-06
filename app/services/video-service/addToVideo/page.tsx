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
    <div className=" flex flex-col justify-between h-full">
      <div className={`${styles.addToVideo} w-full `}>
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
                <Image
                src={e.content} alt="" width={100} height={100}
                  key={i}
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
