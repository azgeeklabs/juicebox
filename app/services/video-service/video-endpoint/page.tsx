import React from "react";
import styles from "./videoEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/CustomCheckBox/CustomCheckBoxText";

const page = () => {
  return (
    <div>
      <div className={`${styles.videoEndPoint} w-full pt-20`}>
        <div className=" text-center mx-auto mb-[2.271vw]">
          <h2 className=" mb-[1.5vw]">
          Based on everything you told us, the estimated cost of this <hr className=" border-0"/> video is $XXX and would take around 40 Days to finish.
          </h2>
          
        </div>
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
          Book a call with our experts
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
          Let's make this video!
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
  );
};

export default page;
