"use client";
import React, { use, useEffect, useState } from "react";
import styles from "./ServicesTable.module.css";
import CustomCheckBoxText from "../customCheckBox/CustomCheckBoxText";
import Link from "next/link";
import path from "path";
import Fuse from "fuse.js";

/**
 * Renders a table component displaying services.
 *
 * @return {JSX.Element} The table component.
 */
export default function ServicesTable({
  isAdvancedFilterActive,
  searchQuery,
}: {
  isAdvancedFilterActive: boolean;
  searchQuery: string;
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
        "Struggling to climb the search ranks?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/seo-campaign",
    },
    {
      service: "SEO Link Building",
      information:
        "Need more authority and traffic?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/seo-link-building",
    },
    {
      service: "PR Monetization",
      information:
        "Want to turn PR into profit?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/pr-monetization",
    },
    {
      service: "Website Development",
      information:
        "Is your website outdated or slow?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/web-design",
    },
    {
      service: "Influencer Marketing",
      information:
        "Want to reach a wider audience?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/influencer-marketing",
    },
    {
      service: "Email Marketing",
      information:
        "Need better engagement from your emails?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/email-marketing",
    },
    {
      service: "ORM Account Recovery",
      information:
        "Locked out of your account?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/orm-account-recovery",
    },
    {
      service: "ORM Negative Press Removal",
      information:
        "Are negative reviews hurting your business?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/orm-negative-press-removal",
    },
    {
      service: "ORM Service",
      information:
        "Struggling to get positive reviews?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/orm-service",
    },
    {
      service: "Press Release",
      information:
        "Don’t have time to write press releases? ",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/press-release",
    },
    {
      service: "Social Media",
      information:
        "Too busy to manage social media?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/social-media",
    },
    {
      service: "Content Blog Post",
      information:
        "Struggling to keep your blog updated?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-blog",
    },
    {
      service: "PR Creation Wikipedia",
      information:
        "Want your brand on Wikipedia?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/pr-creation",
    },
    {
      service: "Content Press Release",
      information:
        "Need a press release that stands out?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-press-release",
    },
    {
      service: "Content Scripts",
      information:
        "Need a script that sells? ",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-scripts",
    },
    {
      service: "PR Placement",
      information:
        "Need help getting media coverage?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/pr-placement",
    },
    {
      service: "Content Website Copy",
      information:
        "Is your website copy falling flat?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/content-website",
    },
    {
      service: "Paid Ads",
      information:
        "Need help getting the ROI you want from ads?",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
      path: "/dashboard/services/paid-ads-flow",
    },
  ];

  const [result, setResult] = useState(bodyRow);
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

  useEffect(() => {
    const handleSearch = (text: string) => {
      const fuse = new Fuse(bodyRow, {
        keys: ["service"],
        threshold: 0.2, // Default is 0.6
      });
      const result = fuse.search(text);
      console.log(result);
      setResult(result.map((r) => r.item));
    };

    if (searchQuery === "") {
      setResult(bodyRow);
      return;
    }

    handleSearch(searchQuery);
  }, [searchQuery]);

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
          <li className="w-[calc(50%_-_0.2vw)]">
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
          {result?.map((e, idx) => (
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
