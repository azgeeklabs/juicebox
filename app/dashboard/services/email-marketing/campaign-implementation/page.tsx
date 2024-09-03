import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import React from "react";
import styles from "./implementation.module.css";

const page = () => {
  return (
    <NextPrevNav
      nextLink="/dashboard/services/email-marketing/campaign-followers"
      backLink="/dashboard/services/email-marketing/email-contacts"
    >
      <div
        className={`${styles.implementation} h-full w-full mb-[--sy-40px] flex justify-center items-center`}
      >
        <div>
          <h2 className=" text-[--32px] font-semibold mb-[--sy-16px] text-center">
            What type of campaign would you like to implement?
          </h2>
          <p className=" text-[#FFFFFF80] text-[--18px] text-center mb-[--sy-50px]">
            Pick the type of campaign that best suits your current needs
          </p>
          <div className=" flex gap-[--31px] items-center">
            <div className={`${styles.wrapper} w-fit relative group`}>
              <div className=" absolute h-[--241px] w-[--220px] bg-[--highlight-yellow] rounded-[--15px] origin-bottom-left group-hover:rotate-[-3deg] transition-all duration-500"></div>
              <input
                type="checkbox"
                className=" absolute inset-0 rounded-[--15px] opacity-0 z-[3] cursor-pointer peer"
              />
              <div
                className={`${styles.textBox} peer-checked:bg-[--highlight-yellow] peer-checked:!text-black h-[--241px] w-[--220px] flex justify-center items-center rounded-[--15px] bg-[#484848] relative z-[2] origin-bottom-left transition-all duration-500 group-hover:rotate-[9deg]`}
              >
                <div>
                  <h3 className=" text-[--16px] font-semibold mb-[--sy-24px] text-center">
                    Warm-Up Campaign
                  </h3>
                  <p className=" text-[--14px] text-center">
                    {" "}
                    Ideal for introducing your <br /> brand to new leads and{" "}
                    <br /> building initial interest.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.wrapper} w-fit relative group`}>
              <div className=" absolute h-[--241px] w-[--220px] bg-[--highlight-yellow] rounded-[--15px] origin-bottom-left group-hover:rotate-[-3deg] transition-all duration-500"></div>
              <input
                type="checkbox"
                className=" absolute inset-0 rounded-[--15px] opacity-0 z-[3] cursor-pointer peer"
              />
              <div
                className={`${styles.textBox} peer-checked:bg-[--highlight-yellow] peer-checked:!text-black h-[--241px] w-[--220px] flex justify-center items-center rounded-[--15px] bg-[#484848] relative z-[2] origin-bottom-left transition-all duration-500 group-hover:rotate-[9deg]`}
              >
                <div>
                  <h3 className=" text-[--16px] font-semibold mb-[--sy-24px] text-center">
                    Warm-Up Campaign
                  </h3>
                  <p className=" text-[--14px] text-center">
                    {" "}
                    Ideal for introducing your <br /> brand to new leads and{" "}
                    <br /> building initial interest.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.wrapper} w-fit relative group`}>
              <div className=" absolute h-[--241px] w-[--220px] bg-[--highlight-yellow] rounded-[--15px] origin-bottom-left group-hover:rotate-[-3deg] transition-all duration-500"></div>
              <input
                type="checkbox"
                className=" absolute inset-0 rounded-[--15px] opacity-0 z-[3] cursor-pointer peer"
              />
              <div
                className={`${styles.textBox} peer-checked:bg-[--highlight-yellow] peer-checked:!text-black h-[--241px] w-[--220px] flex justify-center items-center rounded-[--15px] bg-[#484848] relative z-[2] origin-bottom-left transition-all duration-500 group-hover:rotate-[9deg]`}
              >
                <div>
                  <h3 className=" text-[--16px] font-semibold mb-[--sy-24px] text-center">
                    Warm-Up Campaign
                  </h3>
                  <p className=" text-[--14px] text-center">
                    {" "}
                    Ideal for introducing your <br /> brand to new leads and{" "}
                    <br /> building initial interest.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.wrapper} w-fit relative group`}>
              <div className=" absolute h-[--241px] w-[--220px] bg-[--highlight-yellow] rounded-[--15px] origin-bottom-left group-hover:rotate-[-3deg] transition-all duration-500"></div>
              <input
                type="checkbox"
                className=" absolute inset-0 rounded-[--15px] opacity-0 z-[3] cursor-pointer peer"
              />
              <div
                className={`${styles.textBox} peer-checked:bg-[--highlight-yellow] peer-checked:!text-black h-[--241px] w-[--220px] flex justify-center items-center rounded-[--15px] bg-[#484848] relative z-[2] origin-bottom-left transition-all duration-500 group-hover:rotate-[9deg]`}
              >
                <div>
                  <h3 className=" text-[--16px] font-semibold mb-[--sy-24px] text-center">
                    Warm-Up Campaign
                  </h3>
                  <p className=" text-[--14px] text-center">
                    {" "}
                    Ideal for introducing your <br /> brand to new leads and{" "}
                    <br /> building initial interest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
