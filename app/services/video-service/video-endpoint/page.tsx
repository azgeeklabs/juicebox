import React from "react";
import styles from "./videoEndPoint.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

const page = () => {
  return (
    <div className=" h-full relative">
      <div className={`${styles.videoEndPoint} w-full h-full flex justify-center items-center`}>
        <div><div className=" text-center mx-auto mb-[2.271vw]">
          <h2 className=" mb-[1.5vw]">
          Based on everything you told us, the estimated cost of this <hr className=" border-0"/> video is <span>$XXX</span> and would take around <span>40 Days</span> to finish.
          </h2>
          
        </div>
        <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
          Book a call with our experts
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="styleAnswer">
          Let's make this video!
          </CustomCheckBoxText>
        </div>
        <Link href={""} className=" block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200">Save my Progress</Link></div>

      </div>
    </div>
  );
};

export default page;
