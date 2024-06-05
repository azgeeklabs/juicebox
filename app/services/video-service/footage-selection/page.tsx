"use client";
import React, { useState } from "react";
import styles from "./footageSelection.module.css";
import Image from "next/image";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";

const page = () => {
  const [checked, setChecked] = useState(false);
  const platforms = [
    {
      img: "/assets/frame 0.svg",
      title: "YouTube",
    },
    {
      img: "/assets/frame 1.svg",
      title: "Facebook reel",
    },
    {
      img: "/assets/frame 2.svg",
      title: "Instagram reel",
    },
    {
      img: "/assets/frame 3.svg",
      title: "Instagram Post",
    },
    {
      img: "/assets/frame 4.svg",
      title: "Facebook Post",
    },
    {
      img: "/assets/frame 5.svg",
      title: "Twitter Post",
    },
  ];

  return (
    <div className=" flex flex-col justify-between h-full">
      <div className={`${styles.footage} w-full `}>
        <div className=" text-center mx-auto mb-[2.271vw]">
          <h2 className=" mb-[1.041vw]">
            {" "}
            What platform are you running your ad on?{" "}
          </h2>
          <h4>
            Please select the option that best describes your project type.{" "}
            <hr className=" border-0" />
            This helps us understand the specific requirements for your project.
          </h4>
        </div>
        <div className=" flex gap-[4vw] px-[2.129vw] justify-between mb-[2vw]">
          {platforms.map((e, i) => (
            <div className=" relative w-[16.6667%] max-w-fit flex flex-col transition-all duration-300">
              <input
                type="radio"
                className=" opacity-0  w-full h-full absolute"
                name="platform"
              />
              <div
                className="mb-[1vw] py-[0.899vw] px-[1vw] bg-[#484848] mx-[0.615vw] h-[85%] transition-all duration-200"
                style={{
                  borderRadius: "clamp(4px,calc(0.653vw + 0.1rem), 100px)",
                }}
              >
                <Image src={e.img} alt="" width={100} height={100} />
              </div>
              <button
                className="w-[100%] py-[0.4vw] block text-center bg-[#484848] transition-all duration-200"
                style={{
                  borderRadius: "clamp(4px,calc(1.742vw + 0.1rem), 100px)",
                }}
              >
                {e.title}
              </button>
            </div>
          ))}
        </div>
        <div
          className={`${styles.checking} flex px-[3vw] gap-[1vw] ${
            checked ? "text-white" : "text-[var(--dark-gray-3)]"
          } transition-all duration-300`}
        >
          <CustomCheckBox onClick={() => setChecked(!checked)} />
          <p>I want specific dimensions:</p>
          <input
            type="number"
            className=" w-[4vw] bg-[#353535] outline-none border-none rounded-[22px] caret-[var(--highlight-yellow)]"
            disabled={checked ? false : true}
          />
          X
          <input
            type="number"
            className=" w-[4vw] bg-[#353535] outline-none border-none rounded-[22px] caret-[var(--highlight-yellow)]"
            disabled={checked ? false : true}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
