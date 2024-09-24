"use client";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import React, { useState } from "react";
import styles from "./prPlacement.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const [name, setName] = useState("");
  const nextFunc = () => {
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];

    itemsArray.push({
      name,
    });
    localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
    dispatch(
      addOption({
        name,
      })
    );
    route.push("/dashboard/services/pr-placement/create-article");
  };
  return (
    <>
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
        <div
          className={`${styles.scroller} w-full relative max-h-[68vh] overflow-y-scroll`}
        >
          {Array(30)
            .fill(0)
            .map((_, i) => (
              <ul className=" flex w-full py-[--sy-22px] border-b border-b-[#484848]">
                <li className=" w-[14.285%] flex justify-center items-center">
                  PST Canada
                </li>
                <li className=" w-[14.285%] flex justify-center items-center">
                  <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">
                    DA
                  </span>
                </li>
                <li className=" w-[14.285%] flex justify-center items-center">
                  <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">
                    200k{" "}
                  </span>
                </li>
                <li className=" w-[14.285%] flex justify-center items-center">
                  <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">
                    Politics
                  </span>
                </li>
                <li className=" w-[14.285%] flex justify-center items-center">
                  <span className="px-[--16px] py-[--sy-8px] bg-[#484848] rounded-[--36px]">
                    Follow
                  </span>
                </li>
                <li className=" w-[14.285%] flex justify-center items-center">
                  230$
                </li>
                <li className=" w-[14.285%] flex justify-center items-center">
                  <Link
                    href={"/dashboard/services/pr-placement/create-article"}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log((e.target as HTMLElement).innerText);
                      setName((e.target as HTMLElement).innerText);
                      nextFunc()
                    }}
                    className=" bg-[--highlight-yellow] rounded-[--36px] px-[--16px] py-[--sy-8px] font-semibold text-black"
                  >
                    Get PR
                  </Link>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
};

export default Page;
