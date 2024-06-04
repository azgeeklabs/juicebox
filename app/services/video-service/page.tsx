"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./videoService.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

export default function page() {
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
    <div className=" flex flex-col justify-between h-full">
      <div className={`${styles.editing} w-full `}>
        <div className=" pt-[1.5vw] pl-[4.264vw] mb-[3.5vw]">
          <h2 className=" mb-[1.041vw]">
            {" "}
            What type of video would you like to create?
          </h2>
          <h4>
            Our talented video editors possess a wide range of skills that can
            create <hr className="border-0" /> different genres of videos
            depending on your needs!
          </h4>
        </div>
        <div className=" flex items-center justify-between pl-[4.021vw] pr-[1vw]">
          <div className={`${styles.btns} flex flex-col gap-[1.041vw]`}>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="type">Explainer</CustomCheckBoxText>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="type">Educational</CustomCheckBoxText>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="type">YouTube</CustomCheckBoxText>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="type">Social Media Ad</CustomCheckBoxText>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="type">Short Film</CustomCheckBoxText>
          </div>
          <div>
            <div className={`${styles.slider} slider`}>
              <div className={`${styles.item} item`}>
                <h1>Slide 1</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                magni magnam unde ipsam repudiandae explicabo expedita labore,
                sequi minus neque beatae voluptatum, quasi accusamus quia quis
                voluptas laborum ad! Ab totam doloribus, excepturi possimus rem
                vel quia fugit molestiae officiis!
              </div>
              <div className={`${styles.item} item`}>
                <h1>Slide 2</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                magni magnam unde ipsam repudiandae explicabo expedita labore,
                sequi minus neque beatae voluptatum, quasi accusamus quia quis
                voluptas laborum ad! Ab totam doloribus, excepturi possimus rem
                vel quia fugit molestiae officiis!
              </div>
              <div className={`${styles.item} item`}>
                <h1>Slide 3</h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                magni magnam unde ipsam repudiandae explicabo expedita labore,
                sequi minus neque beatae voluptatum, quasi accusamus quia quis
                voluptas laborum ad! Ab totam doloribus, excepturi possimus rem
                vel quia fugit molestiae officiis!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex justify-between">
        <button className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] cursor-pointer">
          Back
        </button>
        <Link href={"/services/video-service/footage-selection"}><button className=" bg-[#F8F24B] px-[2vw] py-[0.5vw] font-semibold rounded-[41.03px] text-[var(--primary-black)] cursor-pointer">
          Next
        </button></Link>
      </div>
    </div>
  );
}
