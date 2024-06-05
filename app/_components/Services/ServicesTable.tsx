"use client";
import React from "react";
import styles from "./ServicesTable.module.css";
import CustomCheckBoxText from "../CustomCheckBox/CustomCheckBoxText";
import Link from "next/link";

/**
 * Renders a table component displaying services.
 *
 * @return {JSX.Element} The table component.
 */
export default function ServicesTable({
  isAdvancedFilterActive,
}: {
  isAdvancedFilterActive: boolean;
}) {
  // An array of objects representing the rows of the table body.
  const bodyRow = [
    {
      service: "Video Editing",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/services/video-service",
    },
    {
      service: "Application Design",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/services/application-design-service",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Lorem",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
  ];

  const filtersByIndustry = [
    "Marketing",
    "Tech",
    "Content Creation",
    "PR",
    "Web Development",
    "Video Editing",
    "Human Resources",
    "Content Writing",
    "Domain Host",
    "UX/UI",
    "UX Research",
    "SEO Campaigns",
    "SEO Backlinks",
    "Hedge Fund Formation",
    "Post Sale",
    "ORM",
    "Automation & AI",
    "Content",
    "Newsletter",
    "Repurposing",
  ];

  const filtersByNiche = [
    "UX Research",
    "UI Design",
    "User Testing",
    "Front End Development",
    "Domain Host",
    "Back End Development",
  ];

  return (
    <div className={`${styles.tableContainer} flex`}>
      {/* ===== Start Table ===== */}
      <div
        className={
          styles.table + (isAdvancedFilterActive ? " w-3/4" : " w-full")
        }
      >
        {/* Table Header */}
        <ul className={styles.table_header}>
          <li className="w-[16.66%]">
            <span>Service</span>
          </li>
          <li className="w-[50%]">
            <span>Information</span>
          </li>
          <li className={styles.clientProjects + " w-[16.66%]"}>
            <span>Client Projects</span>
          </li>
          <li className={styles.getStarted + " w-[16.66%]"}>
            <span>Get Started</span>
          </li>
        </ul>

        {/* Table Body */}
        <div className={styles.table_body}>
          {bodyRow.map((e, idx) => (
            <ul key={idx}>
              <li className="w-[16.66%] self-start">
                <span>{e.service}</span>
              </li>
              <li className="w-[50%] self-start">
                <span>{e.information}</span>
              </li>
              <li className={styles.clientProjects + " w-[16.66%]"}>
                <span>{e.clientProjects}</span>
              </li>
              <li className={styles.getStarted + " w-[16.66%]"}>
                <Link href={e?.path || "#"}>
                  <span>{e.getStarted}</span>
                </Link>
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* ===== End Table ===== */}

      {/* ===== Start Advanced Filters ===== */}
      <div
        className={
          styles.advancedFilter +
          " flex flex-col items-center space-y-[2vw] " +
          (isAdvancedFilterActive ? styles.isAdvancedFilterActive : "")
        }
      >
        <span className={"text-center"}>Advanced Filter</span>
        {/* Filter By Industry */}
        <div>
          <span>Industry</span>
          <div className="flex flex-wrap gap-2">
            {filtersByIndustry.map((e, idx) => (
              <CustomCheckBoxText key={idx} btnSize="sm" inputType="checkbox">
                {e}
              </CustomCheckBoxText>
            ))}
          </div>
        </div>

        {/* Filter By Niche */}
        <div>
          <span>Niche</span>
          <p>
            Most of our offerings bundle several services, but you can always
            choose the specific ones you need.
          </p>
          <div className="flex flex-wrap gap-2">
            {filtersByNiche.map((e, idx) => (
              <CustomCheckBoxText key={idx} btnSize="sm" inputType="checkbox">
                {e}
              </CustomCheckBoxText>
            ))}
          </div>
        </div>

        {/* Apply Filter Button */}
        <button>Apply Filter</button>
      </div>
      {/* ===== End Advanced Filters ===== */}
    </div>
  );
}
