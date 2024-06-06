import React from "react";
import styles from "./videoScript.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

const page = () => {
  return (
    <div>
      <div className={`${styles.videoScript} w-full pt-20`}>
        <div className=" text-center mx-auto mb-[2.271vw]">
          <h2 className=" mb-[1.5vw]">
            Do you already have a script for this video, or would
            <hr className=" border-0" />
            you like us to create one for you?
          </h2>
          <h4>
            Our talented scriptwriters can create a script for your video in no
            time, <hr className=" border-0" /> or you can provide your own!
          </h4>
        </div>
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
            I’ve got my own script
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
            Make one for me!
          </CustomCheckBoxText>
        </div>
      </div>
    </div>
  );
};

export default page;
