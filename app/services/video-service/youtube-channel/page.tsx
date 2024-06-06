import React from "react";
import styles from "./youtubeChannel.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className={`${styles.youtubeChannel} w-full `}>
        <div className=" text-center mx-auto mb-[3vw] mt-14">
          <h2 className=" mb-[1.5vw]">
            Do you have an existing YouTube channel ?
          </h2>
          <h4>
            Almost done! Please provide the product link, name, and a brief
            description of the <hr className=" border-0" /> product or service
            you are advertising.
          </h4>
        </div>
        <div className="mx-auto w-fit">
          <h3 className=" mb-[0.6vw]">Channel URL</h3>
          <div className=" flex gap-[1vw] items-start mb-[1.5vw]">
            <input
              type="text"
              placeholder="Channel"
              className="h-full mb-[1vw] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[71px] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
            />
            <button className=" bg-[#F8F24B] px-[1.892vw] py-[0.4vw] text-black rounded-[33px]">
              Paste Link
            </button>
          </div>
          <Link href={""} className=" underline block w-fit mx-auto px-[0.52vw] py-[0.3vw] hover:bg-[#484848] rounded-[32px] transition-all duration-200">I dont have a channel</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
