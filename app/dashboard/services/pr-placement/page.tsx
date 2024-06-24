import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import React from "react";
import styles from "./prPlacement.module.css"

const page = () => {
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/pr-placement/create-article">
        <div className={`${styles.scroller} w-full `}>
          <ul className=" flex w-full py-[--sy-22px] font-semibold">
            <li className=" w-[14.285%] flex justify-center items-center">
            Site Name
            </li>
            <li className=" w-[14.285%] flex justify-center items-center">
            DA/DR
            </li>
            <li className=" w-[14.285%] flex justify-center items-center">
            Type
            </li>
            <li className=" w-[14.285%] flex justify-center items-center">
            Niche
            </li>
            <li className=" w-[14.285%] flex justify-center items-center">
            Restrictions
            </li>
            <li className=" w-[14.285%] flex justify-center items-center">
            Cost
            </li>
            <li className=" w-[14.285%] flex justify-center items-center">
            Get Started
            </li>
          </ul>
          <div className={`${styles.scroller} w-full relative max-h-[60vh] overflow-y-scroll`}>
            {Array(30)
              .fill(0)
              .map((_, i) => (
                <ul className=" flex w-full py-[--sy-22px] border-b border-b-[#484848]">
                  <li className=" w-[14.285%] flex justify-center items-center">
                    PST Canada
                  </li>
                  <li className=" w-[14.285%] flex justify-center items-center">
                    <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">DA</span>
                  </li>
                  <li className=" w-[14.285%] flex justify-center items-center">
                    <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">200k </span>
                  </li>
                  <li className=" w-[14.285%] flex justify-center items-center">
                    <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">Politics</span>
                  </li>
                  <li className=" w-[14.285%] flex justify-center items-center">
                    <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">Follow</span>
                  </li>
                  <li className=" w-[14.285%] flex justify-center items-center">
                    230$
                  </li>
                  <li className=" w-[14.285%] flex justify-center items-center">
                    <button className=" bg-[--highlight-yellow] rounded-[--36px] px-[--16px] py-[--sy-8px] font-semibold text-black">Get PR</button>
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </NextPrevNav>
    </>
  );
};

export default page;
