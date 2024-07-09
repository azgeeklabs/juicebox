"use client";
import React from "react";
import styles from "./message.module.css";

const page = () => {
  return (
    <div
      className={`${styles.message} flex w-full h-full justify-center items-center`}
    >
      <div className=" w-full">
        <h1 className=" text-[--40px] font-semibold mb-[--sy-16px] text-center">
          You’ve got the juice!
        </h1>
        <p className=" mx-auto text-center text-[#FFFFFFCC] text-[--18px] mb-[--sy-50px] w-3/5">
          Your transaction was successful. We are setting up your account and
          preparing your services. If you have any questions or need assistance,
          please do not hesitate to contact our support team. Welcome aboard!
        </p>
        <div className=" bg-[#484848] rounded-[--15px] w-fit mx-auto h-full mb-[--sy-32px] flex gap-[--102px] items-stretch">
          <div className="px-[--46px] py-[--sy-32px]">
            <h2 className=" text-[--24px] font-bold mx-auto mb-[--sy-19px]">
              Successful Payment!
            </h2>
            <h4 className=" text-[--14px] font-bold mb-[--sy-32px]">
              What to expect now:
            </h4>
            <div className=" flex gap-[--13px] items-center mb-[--sy-50px]">
              <span
                className={`${styles.indicator} ${styles.completed} bg-[#272727] rounded-[--29px] px-[--28px] py-[--sy-8px] text-white relative`}
              >
                1
              </span>
              <p className=" text-[--15px] font-medium">
                Successful Subscription
              </p>
            </div>
            <div className=" flex gap-[--13px] items-center mb-[--sy-50px]">
              <span
                className={`${styles.indicator} bg-[#272727] rounded-[--29px] px-[--28px] py-[--sy-8px] text-white relative`}
              >
                2
              </span>
              <p className=" text-[--15px] font-medium">Sales Call</p>
            </div>
            <div className=" flex gap-[--13px] items-center">
              <span
                className={` bg-[#272727] rounded-[--29px] px-[--28px] py-[--sy-8px] text-white relative`}
              >
                3
              </span>
              <p className=" text-[--15px] font-medium">Start Service</p>
            </div>
          </div>
          <div className=" bg-[--highlight-yellow] h-auto px-[--28px] py-[--sy-33px] rounded-[--15px] text-black flex flex-col justify-between">
            <div>
              <h2 className=" text-[--24px] font-bold mx-auto mb-[--sy-24px]">
                SEO Service
              </h2>
              <p>Subscription: Monthly</p>
              <p className="mb-[153px]">Duration: 26 Days</p>
            </div>
            <p className=" flex items-center text-[--20px] gap-[--8px]">
              <span className="text-[--32px] font-bold">$200</span> /month
            </p>
          </div>
        </div>
        <button className="bg-[--highlight-yellow] px-[--71px] py-[--sy-16px] font-bold rounded-[--40px] text-black block w-fit mx-auto">
          Dashboard
        </button>
      </div>
    </div>
  );
};

export default page;
