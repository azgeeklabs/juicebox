"use client";
import React from "react";
import styles from "./ServicesTable.module.css";


/**
 * Renders a table component displaying missing papers for employees.
 *
 * @return {JSX.Element} The table component.
 */
export default function ServicesTable() {
  // An array of objects representing the rows of the table body.
  const bodyRow = [
    {
      service: "Application Design",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
    {
      service: "Application Design",
      information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      clientProjects: "656 Projects",
      getStarted: "Start Now!",
    },
  ];

  return (
    <div className={`${styles.tableContainer} h-[68vh] flex`}>
      {/* Start Table */}
      <div className={styles.table + " max-w-full"} id="table">
        {/* Table Header */}
        <ul className={styles.table_header}>
          <li className="w-[25%]">
            <span>Service</span>
          </li>
          <li className="w-[25%]">
            <span>Information</span>
          </li>
          <li className="w-[25%]">
            <span>Client Projects</span>
          </li>
          <li className="w-[25%]">
            <span>Get Started</span>
          </li>
        </ul>

        {/* Table Body */}
        <div className={styles.table_body}>
          {bodyRow.map((e, idx) => (
            <ul key={idx}>
              <li className="w-[25%]">
                <span>{e.service}</span>
              </li>
              <li className="w-[25%]">
                <span>{e.information}</span>
              </li>
              <li className="w-[25%]">
                <span>{e.clientProjects}</span>
              </li>
              <li className="w-[25%]">
                <span>{e.getStarted}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div>
        <h1>hi</h1>
      </div>
      {/* End Table */}
    </div>
  );
}
