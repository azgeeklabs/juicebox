"use client";
import React from "react";
import styles from "./SEOLinkBuildingTable.module.css";
import classNames from "classnames";

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

  return (
    <div className={`${styles.tableContainer} w-full`}>
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
                <span>{e.getStarted}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* ===== End Table ===== */}
    </div>
  );
}
