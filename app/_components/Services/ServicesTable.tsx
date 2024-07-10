"use client";
import React from "react";
import styles from "./ServicesTable.module.css";
import CustomCheckBoxText from "../customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import path from "path";

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
      path: "/dashboard/services/video-service",
    },
    {
      service: "Application Design",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/application-design-service",
    },
    {
      service: "SEO Campaign",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/seo-campaign",
    },
    {
      service: "SEO Link Building",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/seo-link-building",
    },
    {
      service: "PR Monetization",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/pr-monetization",
    },
    {
      service: "Web Design",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/web-design",
    },
    {
      service: "Influencer Marketing",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/influencer-marketing",
    },
    {
      service: "Email Marketing",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/email-marketing",
    },
    {
      service: "ORM Account Recovery",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/orm-account-recovery",
    },
    {
      service: "ORM Negative Press Removal/Reviewed",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/orm-negative-press-removal",
    },
    {
      service: "ORM Service",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/orm-service",
    },
    {
      service: "Press Release",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/press-release",
    },
    {
      service: "Social Media",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/social-media",
    },
    {
      service: "Content Blog",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-blog",
    },
    {
      service: "PR Creation Wikipedia",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/pr-creation",
    },
    {
      service: "Content Press Release",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-press-release",
    },
    {
      service: "Content Scripts",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-scripts",
    },
    {
      service: "PR Placement",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/pr-placement",
    },
    {
      service: "Content Website",
      information:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-website",
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
        <div
          className={
            styles.filtersContainer +
            " flex flex-col items-center space-y-[2vw]"
          }
        >
          {/* Filter By Industry */}
          <div className={styles.filtersByIndustry}>
            <span>Industry</span>
            <div className="flex flex-wrap gap-[var(--8px)]">
              {filtersByIndustry.map((e, idx) => (
                <CustomCheckBoxText key={idx} btnSize="sm" inputType="checkbox">
                  {e}
                </CustomCheckBoxText>
              ))}
            </div>
          </div>

          {/* Filter By Niche */}
          <div className={styles.filtersByNiche}>
            <span>Niche</span>
            <p>
              Most of our offerings bundle several services, but you can always
              choose the specific ones you need.
            </p>
            <div className="flex flex-wrap gap-[var(--8px)]">
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
      </div>
      {/* ===== End Advanced Filters ===== */}
    </div>
  );
}
