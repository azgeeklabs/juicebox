"use client";
import React, { useContext, useState } from "react";
import styles from "./services.module.css";
import ServicesTable from "../_components/Services/ServicesTable";
import CustomCheckBoxText from "../_components/customCheckBox/CustomCheckBoxText";
import { globalContext } from "../_context/GlobalContext";

export default function page() {
  const filters = [
    "Finance",
    "Design",
    "Marketing",
    "Sales",
    "Human Resources",
    "Web Development",
    "UX/UI",
    "Content Creation",
    "Video Editing",
    "Motion Graphics",
    "Finance",
    "Design",
    "Marketing",
    "Sales",
    "Human Resources",
    "Web Development",
    "UX/UI",
    "Content Creation",
    "Video Editing",
    "Motion Graphics",
  ];

  const [isAdvancedFilterActive, setIsAdvancedFilterActive] =
    useState<boolean>(false);

  const { setOpen } = useContext(globalContext);

  function handleToggleAdvancedFilter() {
    setIsAdvancedFilterActive(!isAdvancedFilterActive);
    // close SideNav
    setOpen(false);
  }

  return (
    <section>
      {/* ===== Start Filter Tabs ===== */}
      <div className={styles.filterTabs + " flex"}>
        <div className="flex flex-shrink-0">
          {filters.map((e, idx) => (
            <CustomCheckBoxText key={idx} btnSize="sm" inputType="checkbox">
              {e}
            </CustomCheckBoxText>
          ))}
        </div>
      </div>
      {/* ===== End Filter Tabs ===== */}

      {/* ===== Start Search & Advanced Filters ===== */}
      <div
        className={
          styles.searchAndFilter +
          " flex justify-between items-center gap-[0.85vw]"
        }
      >
        <div className="relative w-[90%]">
          <input type="search" placeholder="Search" className="w-full" />
          <svg
            className="absolute top-1/2 transform -translate-y-1/2"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4446 14.0636C16.4446 14.0636 14.1688 12.0729 13.6244 11.5292C12.8255 10.7344 12.5058 10.3516 12.7879 9.70531C14.0216 7.18915 13.5948 4.06558 11.5023 1.97363C8.87138 -0.657876 4.60461 -0.657876 1.9734 1.97363C-0.657801 4.60546 -0.657801 8.87094 1.9734 11.5031C4.06472 13.5944 7.18926 14.0212 9.70445 12.7878C10.3508 12.5061 10.7345 12.8257 11.529 13.625C12.073 14.169 14.0627 16.4452 14.0627 16.4452C15.095 17.4769 15.8892 16.842 16.366 16.3658C16.8418 15.8894 17.4769 15.0955 16.4446 14.0636ZM9.49667 9.49656C7.97263 11.0196 5.50269 11.0196 3.97929 9.49656C2.45592 7.97348 2.45592 5.50292 3.97929 3.97984C5.50269 2.45677 7.97263 2.45677 9.49667 3.97984C11.0201 5.50292 11.0201 7.97348 9.49667 9.49656Z"
              fill="#F8F24B"
              fill-opacity="0.44"
            />
          </svg>
        </div>

        <span
          className={isAdvancedFilterActive ? styles.active : ""}
          onClick={() => handleToggleAdvancedFilter()}
        >
          Advanced Filter
        </span>
      </div>
      {/* ===== End Search & Advanced Filters ===== */}

      {/* ===== Start Services Table ===== */}
      <ServicesTable isAdvancedFilterActive={isAdvancedFilterActive} />
      {/* ===== End Services Table ===== */}
    </section>
  );
}
