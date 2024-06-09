"use client";
import React from "react";
import styles from "./dashboard.module.css";
import CustomCheckBoxText from "../_components/customCheckBox/CustomCheckBoxText";
import CustomCheckBox from "../_components/customCheckBox/CustomCheckBox";
import ServiceCard from "../_components/serviceCard/ServiceCard";
import CircularProgressBar from "../_components/progressBar/CircularProgressBar";

export default function page() {
  return (
    <div className="flex gap-[1vw]">
      <div className="w-2/3 flex flex-col gap-[1vw]">
        <div className={styles.card}>
          <div className={styles.header}>
            <h6>Application Design </h6>
            <span>26 Days Left</span>
          </div>
          <div className={styles.body}>
            <div className={styles.service_phases_part}>
              <h6>Service Phases</h6>
              <div className={styles.service_phases}>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                  <p>Sales Call</p>
                  <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                  <p>Brief Approval</p>
                  <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                  <p>Testing</p>
                  <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                  <p>Development</p>
                  <p>Phase 1</p>
                </CustomCheckBoxText>
                <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                  <p>Handover</p>
                  <p>Phase 1</p>
                </CustomCheckBoxText>
              </div>
            </div>
            <div className={styles.current_phase_part}>
              <h6>Current Phase Milestones</h6>
              <div className={styles.current_phases + " flex gap-[1.5vw]"}>
                <div className="flex items-center gap-[0.7vw]">
                  <CustomCheckBox type="checkbox" name="current_phases" />
                  <label>UX Research</label>
                </div>
                <div className="flex items-center gap-[0.7vw]">
                  <CustomCheckBox type="checkbox" name="current_phases" />
                  <label>Wireframing</label>
                </div>
                <div className="flex items-center gap-[0.7vw]">
                  <CustomCheckBox type="checkbox" name="current_phases" />
                  <label>UI Design</label>
                </div>
                <div className="flex items-center gap-[0.7vw]">
                  <CustomCheckBox type="checkbox" name="current_phases" />
                  <label>Design System</label>
                </div>
                <div className="flex items-center gap-[0.7vw]">
                  <CustomCheckBox type="checkbox" name="current_phases" />
                  <label>Prototyping</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-[1vw]">
          <div className={`w-1/2 ${styles.card}`}>
            <div className={styles.header}>
              <h6>On Going Projects</h6>
            </div>
            <div>
              <ServiceCard
                title="Web Design"
                phase="Ideation Phase"
                timeleft="26 Days Left"
              >
                <div className="flex items-center gap-[0.5vw]">
                  <h6>83% Progress</h6>
                  {/* <CircularProgressBar /> */}
                </div>
              </ServiceCard>
            </div>
          </div>
          <div className={`w-1/2 ${styles.card}`}>
            <div className={styles.header}>
              <h6>This Week Deliverables</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
}
