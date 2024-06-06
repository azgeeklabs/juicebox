import React from "react";
import styles from "./videoStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

const page = () => {
  return (
    <div>
      <div className={`${styles.videoStyle} w-full pt-16`}>
        <div className=" text-center mx-auto mb-[2.271vw]">
          <h2 className=" mb-[1.5vw]">
            Would you like this video to match the style of the videos{" "}
            <hr className=" border-0" /> you've already published on your
            channel?
          </h2>
          <h4>
            This helps ensure consistency with your existing content, or we can
            let our <hr className=" border-0" /> creative juices flow to create
            an exceptional video for your channel!
          </h4>
        </div>
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">Yes!</CustomCheckBoxText>
            <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">Nah, impress me!</CustomCheckBoxText>
        </div>
      </div>
    </div>
  );
};

export default page;
