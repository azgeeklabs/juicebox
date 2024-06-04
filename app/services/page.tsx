"use client";
import React from "react";
import styles from "./services.module.css";
import CustomCheckBoxText from "../_components/CustomCheckBox/CustomCheckBoxText";

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
  ];

  return (
    // Filter Tabs
    <div className={styles.filterTabs + " flex"}>
      {filters.map((e, idx) => (
        <CustomCheckBoxText key={idx} btnSize="sm" inputType="checkbox">
          {e}
        </CustomCheckBoxText>
      ))}
    </div>
  );
}
