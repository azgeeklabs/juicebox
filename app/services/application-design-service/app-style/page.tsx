"use client";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import React, { useEffect } from "react";
import styles from "./app-style.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

export default function page() {
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
    <NextPrevNav
      nextLink="/services/application-design-service/custom-ecommerce"
      backLink="/services/application-design-service/service-projects"
    >
      <div className=" flex flex-col items-center justify-center h-full">
        <div className={`${styles.editing} w-full `}>
          <div className="flex flex-col justify-center items-center text-center mb-[3.5vw]">
            <h2 className=" mb-[1.041vw]">
              What type of video would you like to create?
            </h2>
            <h4>
              Our talented video editors possess a wide range of skills that can
              create <hr className="border-0" /> different genres of videos
              depending on your needs!
            </h4>
          </div>
          <div className=" flex items-center justify-center gap-[10vw]">
            <div
              className={`${styles.btns} w-1/2 flex flex-col items-end  gap-[1.041vw]`}
            >
              <CustomCheckBoxText
                btnSize="sm"
                inputType="radio"
                name="type"
                onMouseMove={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelector(`.item0`)?.classList.add("active");
                }}
                onClick={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("selected");
                  });
                  document.querySelector(`.item0`)?.classList.add("active");
                  document.querySelector(`.item0`)?.classList.add("selected");
                }}
              >
                Explainer
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="type"
                onMouseMove={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelector(`.item1`)?.classList.add("active");
                }}
                onClick={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("selected");
                  });
                  document.querySelector(`.item1`)?.classList.add("active");
                  document.querySelector(`.item1`)?.classList.add("selected");
                }}
              >
                Educational
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="type"
                onMouseMove={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelector(`.item2`)?.classList.add("active");
                }}
                onClick={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("selected");
                  });
                  document.querySelector(`.item2`)?.classList.add("active");
                  document.querySelector(`.item2`)?.classList.add("selected");
                }}
              >
                YouTube
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="type"
                onMouseMove={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelector(`.item3`)?.classList.add("active");
                }}
                onClick={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("selected");
                  });
                  document.querySelector(`.item3`)?.classList.add("active");
                  document.querySelector(`.item3`)?.classList.add("selected");
                }}
              >
                Social Media Ad
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="type"
                onMouseMove={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelector(`.item4`)?.classList.add("active");
                }}
                onClick={() => {
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("active");
                  });
                  document.querySelectorAll(".item").forEach((e) => {
                    e.classList.remove("selected");
                  });
                  document.querySelector(`.item4`)?.classList.add("active");
                  document.querySelector(`.item4`)?.classList.add("selected");
                }}
              >
                Short Film
              </CustomCheckBoxText>
            </div>
            <div className="w-1/2 flex">
              <div className={`${styles.slider}  slider`}>
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
    </NextPrevNav>
  );
}
