"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./subscriptions.module.css";
import ServiceCard from "@/app/_components/serviceCard/ServiceCard";
import { useAuth } from "@/app/_context/AuthContext";

const Billing = () => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { user } = useAuth();
  const [services, setServices] = useState<any>([]);
  const [ongoingServices, setOngoingServices] = useState<any>([]);

  const addDaysAndFormat = (dateString: string, daysToAdd: any) => {
    console.log(daysToAdd);

    const date = new Date(dateString); // Convert the input string to a Date object
    date.setDate(date.getDate() + daysToAdd); // Add the specified number of days

    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  async function getOngoingServices() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/get-all-services-process`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    setOngoingServices(data.data);
  }

  useEffect(() => {
    getOngoingServices();
  }, []);

  async function getSubscriptions() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/services/get-purchased-services`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    console.log(data);
    setServices(data.data);
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    getSubscriptions();
  }, []);

  return (
    <div className={`${styles.subscriptions} w-full h-full subscriptions`}>
      <h1 className=" text-[--32px] font-semibold mb-[--sy-19px]">
        Subscriptions
      </h1>
      <div className=" flex gap-[--18px] w-full mb-[--sy-28px]">
        <div className=" w-1/3 h-full">
          <div className=" flex justify-between items-center mb-[--sy-11px]">
            <h3>On going Services</h3>
            <span>
              (
              {
                ongoingServices.filter((s: any) =>
                  s?.processes?.some(
                    (p: any) => p?.totalProgressPercentage != 100
                  )
                ).length
              }
              )
            </span>
          </div>
          <div
            className={`${styles.services} px-[--20px] py-[--sy-16px] rounded-[--7px] bg-[#353535] w-full overflow-x-hidden services cursor-pointer`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className=" flex gap-[--8px] w-full">
              {ongoingServices && ongoingServices.length > 0 ? (
                ongoingServices?.filter((s: any) =>
                  s?.processes?.some(
                    (p: any) => p?.totalProgressPercentage != 100
                  )
                ).length > 0 ? (
                  ongoingServices
                    .filter((s: any) =>
                      s?.processes?.some(
                        (p: any) => p?.totalProgressPercentage != 100
                      )
                    )
                    .map((s: any, i: any) => (
                      <ServiceCard
                        key={i}
                        title={s?.service?.type.replace(/service/gi, "")}
                        phase={`${
                          s?.processes[0]?.options[
                            s?.processes[0]?.options?.length - 1
                          ]?.name
                        } Phase`}
                        timeleft={`${s?.service.estimatedDuration} Days Left`}
                      />
                    ))
                ) : (
                  <h2 className="text-[--24px] font-semibold">
                    Currently no ongoing services
                  </h2>
                )
              ) : null}
            </div>
          </div>
        </div>
        <div className=" w-1/3 h-full ">
          <div className=" flex justify-between items-center mb-[--sy-11px]">
            <h3>Services Completed</h3>
            <span>
              (
              {
                ongoingServices.filter((s: any) =>
                  s?.processes?.every(
                    (p: any) => p?.totalProgressPercentage == 100
                  )
                ).length
              }
              )
            </span>
          </div>
          <div
            className={`${styles.services} px-[--20px] py-[--sy-16px] rounded-[--7px] bg-[#353535] w-full overflow-x-hidden cursor-pointer services h-full`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className=" flex gap-[--8px] w-full">
              {ongoingServices && ongoingServices.length > 0 ? (
                ongoingServices.filter((s: any) =>
                  s?.processes?.every(
                    (p: any) => p?.totalProgressPercentage == 100
                  )
                ).length > 0 ? (
                  ongoingServices
                    .filter((s: any) =>
                      s?.processes?.every(
                        (p: any) => p?.totalProgressPercentage == 100
                      )
                    )
                    .map((s: any, i: any) => (
                      <span
                        key={i}
                        className="bg-[#484848] w-[180px] rounded-[--28px] flex justify-center items-center py-[--sy-14px] font-bold shrink-0"
                      >
                        {s?.service?.type.replace(/service/gi, "")}
                      </span>
                    ))
                ) : (
                  <h2 className="text-[--24px] font-semibold">
                    Currently no completed services
                  </h2>
                )
              ) : null}
            </div>
          </div>
        </div>
        <div className=" w-1/3 py-[--sy-18px] px-[--19px] bg-[--highlight-yellow] text-black rounded-[--7px]">
          <div className=" flex items-center justify-between">
            <div className=" flex flex-col gap-[--sy-24px]">
              <h2 className=" font-semibold">Total Services</h2>
              <span className=" text-[--32px] font-semibold">
                {services?.length > 0 ? services?.length : 0}
              </span>
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
          <div className=" flex items-center justify-between">
            <div className=" flex flex-col gap-[--sy-24px]">
              <h2 className=" font-semibold">Total Services</h2>
              <span className=" text-[--32px] font-semibold">
                {services?.length > 0 ? services?.length : 0}
              </span>
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
        <div
          className={`${styles.tableBody} overflow-y-scroll h-[43vh] overflow-y-hidden`}
        >
          {services?.map((s: any, idx: any) => {
            return (
              <ul
                key={idx}
                className=" w-full flex justify-between items-center py-[--sy-16px] border-b-[1px] border-[#3f3f3f] hover:bg-[#1d1d1d] group"
              >
                <li className=" w-[20%] text-center">
                  {(s?.service?.type as string).replace(/service/gi, "")}
                </li>
                <li className=" w-[20%] text-center">
                  {addDaysAndFormat(s?.service?.createdAt.split("T")[0], 0)}
                </li>
                <li className=" w-[20%] text-center">
                  {addDaysAndFormat(
                    s?.service?.createdAt.split("T")[0],
                    s?.service?.estimatedDuration
                  )}
                </li>
                <li className=" w-[20%] text-center">
                  ${s?.service?.totalPrice}
                </li>
                <li className=" w-[20%] text-center">
                  <button className=" px-[--24px] py-[--sy-8px] rounded-[--26px] text-[#b1b1b1] bg-[#1d1d1d] font-semibold group-hover:bg-[#353535]">
                    Cancel Plan
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Billing;
