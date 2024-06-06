import React from "react";
import styles from "./footageEdit.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className={`${styles.footageEdit} w-full pt-16`}>
        <div className=" text-center mx-auto mb-[3vw] mt-14">
          <h2 className=" mb-[1.5vw]">
          Do you have footage that you want us to edit?
          </h2>
          <h4 className="text-center">
          You're welcome to upload your own footage to include in your video, or we can <hr className="border-0"/> enhance your project using selections from our extensive footage library!

          </h4>
        </div>
        <div className="mx-auto w-fit">
          <div className=" flex gap-[1vw] items-start mb-[1.5vw]">
            <input
              type="text"
              placeholder="Upload Footage"
              className="h-full mb-[1vw] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
            />
            <button className=" bg-[#F8F24B] px-[1.892vw] py-[0.4vw] text-black rounded-[33px]">
            Upload Footage
            </button>
          </div>
          <Link href={""} className=" underline block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200">I’ll do this later</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
