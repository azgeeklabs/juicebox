import Link from "next/link";
import React from "react";
import styles from "./subscriptions.module.css";
import ServiceCard from "@/app/_components/serviceCard/ServiceCard";

const billing = () => {
  return (
    <div className={`${styles.subscriptions} w-full h-full subscriptions`}>
      <h1 className=" text-[--32px] font-semibold mb-[--sy-19px]">
        Subscriptions
      </h1>
      <div className=" flex gap-[--18px] w-full mb-[--sy-28px]">
        <div className=" w-1/3 h-full">
          <div className=" flex justify-between items-center mb-[--sy-11px]">
            <h3>On going Services</h3>
            <span>(8)</span>
          </div>
          <div className={`${styles.services} px-[--20px] py-[--sy-16px] rounded-[--7px] bg-[#353535] w-full overflow-x-scroll services`}>
            <div className=" flex gap-[--8px] w-full">
              <div className=" w-[250px]">
              <ServiceCard
                title="Web Design"
                phase="Ideation Phase"
                timeleft="26 Days Left"
              />
              </div>
              <ServiceCard
                title="Web Design"
                phase="Ideation Phase"
                timeleft="26 Days Left"
              />
              <ServiceCard
                title="Web Design"
                phase="Ideation Phase"
                timeleft="26 Days Left"
              />
            </div>
          </div>
        </div>
        <div className=" w-1/3 h-full ">
          <div className=" flex justify-between items-center mb-[--sy-11px]">
            <h3>Services Completed</h3>
            <span>(8)</span>
          </div>
          <div className={`${styles.services} px-[--20px] py-[--sy-16px] rounded-[--7px] bg-[#353535] w-full overflow-x-scroll services h-full`}>
            <div className=" flex gap-[--8px] w-full">
              <span className=" bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0">Web Design</span>
              <span className=" bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0">Web Design</span>
              <span className=" bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0">Web Design</span>
              <span className=" bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0">Web Design</span>
              <span className=" bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0">Web Design</span>
              <span className=" bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0">Web Design</span>
            </div>
          </div>
        </div>
        <div className=" w-1/3 py-[--sy-18px] px-[--19px] bg-[--highlight-yellow] text-black rounded-[--7px]">
        <div className=" flex items-center justify-between">
          <div className=" flex flex-col gap-[--sy-24px]">
            <h2 className=" font-semibold">Total Services</h2>
            <span className=" text-[--32px] font-semibold">26</span>
          </div>
          <div className=" flex flex-col gap-[--sy-24px]">
            <h2 className=" font-semibold">Infinity Services</h2>
            <span className=" text-[--32px] font-semibold">-</span>
          </div>
          <div className=" flex flex-col gap-[--sy-24px]">
            <h2 className=" font-semibold">WhiteLabel</h2>
            <span className=" text-[--32px] font-semibold">-</span>
          </div>
        </div>
        </div>
      </div>
      <div className=" w-full  ">
        <ul className=" w-full flex justify-between items-center py-[--sy-6px] font-bold">
          <li className=" w-[20%] text-center">Service</li>
          <li className=" w-[20%] text-center">Start Date</li>
          <li className=" w-[20%] text-center">End Date</li>
          <li className=" w-[20%] text-center">Price</li>
          <li className=" w-[20%] text-center">Plan Status</li>
        </ul>
        <div className={`${styles.tableBody} overflow-y-scroll h-[53vh]`}>
          {Array(10)
            .fill(0)
            .map((e) => (
              <ul className=" w-full flex justify-between items-center py-[--sy-16px] border-b-[1px] border-[#3f3f3f]">
                <li className=" w-[20%] text-center">SEO</li>
                <li className=" w-[20%] text-center">07 January 2025</li>
                <li className=" w-[20%] text-center">07 January 2025</li>
                <li className=" w-[20%] text-center">$200</li>
                <li className=" w-[20%] text-center">
                  <button className=" px-[--24px] py-[--sy-8px] rounded-[--26px] text-[#b1b1b1] bg-[#1d1d1d] font-semibold">
                    Cancel Plan
                  </button>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
};

export default billing;
