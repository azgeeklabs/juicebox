"use client";
import React, { useEffect } from "react";
import styles from "./SEOLinkBuildingTable.module.css";
import classNames from "classnames";
import Link from "next/link";
import { addOption } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";

export default function SEOLinkBuildingTable() {
  // An array of objects representing the rows of the table body.
  const bodyRow = [
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
    {
      siteName: "PST Canada",
      DA_DR: "DA",
      traffic: "200k",
      niche: "Politics",
      followUnfollow: "Follow",
      cost: "230$",
      getStarted: "Get Back Link",
    },
  ];
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    
      itemsArray.push({
        name: "PST Canada",
       
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "PST Canada",
          
        }))
      route.push("/dashboard/services/seo-link-building/article-selection");
    
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <div className={`${styles.tableContainer} w-full `}>
      {/* ===== Start Table ===== */}
      <div className={styles.table + " w-full"}>
        {/* Table Header */}
        <ul className={styles.table_header}>
          <li className={classNames("w-[14.28%]")}>
            <span>Site Name</span>
          </li>
          <li className={classNames(styles.center, "w-[14.28%]")}>
            <span>DA/DR</span>
          </li>
          <li className={classNames(styles.center, "w-[14.28%]")}>
            <span>Traffic</span>
          </li>
          <li className={classNames(styles.center, "w-[14.28%]")}>
            <span>Niche</span>
          </li>
          <li className={classNames(styles.center, "w-[14.28%]")}>
            <span>follow/unfollow</span>
          </li>
          <li className={classNames(styles.center, "w-[14.28%]")}>
            <span>Cost</span>
          </li>
          <li className={classNames(styles.center, "w-[14.28%]")}>
            <span>Get Started</span>
          </li>
        </ul>

        {/* Table Body */}
        <div className={styles.table_body}>
          {bodyRow.map((e, idx) => (
            <ul key={idx}>
              <li className="w-[14.28%]">
                <span>{e.siteName}</span>
              </li>
              <li
                className={classNames(
                  styles.center,
                  styles.badge,
                  "w-[14.28%]"
                )}
              >
                <span>{e.DA_DR}</span>
              </li>
              <li
                className={classNames(
                  styles.center,
                  styles.badge,
                  "w-[14.28%]"
                )}
              >
                <span>{e.traffic}</span>
              </li>
              <li
                className={classNames(
                  styles.center,
                  styles.badge,
                  "w-[14.28%]"
                )}
              >
                <span>{e.niche}</span>
              </li>
              <li
                className={classNames(
                  styles.center,
                  styles.badge,
                  "w-[14.28%]"
                )}
              >
                <span>{e.followUnfollow}</span>
              </li>
              <li className={classNames(styles.center, "w-[14.28%]")}>
                <span className="font-bold">{e.cost}</span>
              </li>
              <li
                className={classNames(
                  styles.button,
                  styles.center,
                  "w-[14.28%]"
                )}
              >
                <Link href={"/dashboard/services/seo-link-building/article-selection"} onClick={(e)=>{
                  e.preventDefault()
                  nextFunc()
                }}>
                <span>{e.getStarted}</span></Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* ===== End Table ===== */}
    </div>
  );
}
