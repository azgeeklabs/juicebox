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
            <div className="flex flex-col gap-[0.7vw]">
              {Array.from({ length: 3 }).map((_, i) => (
                <ServiceCard
                  title="Web Design"
                  phase="Ideation Phase"
                  timeleft="26 Days Left"
                >
                  <div className="flex items-center gap-[0.5vw]">
                    <span className={`!font-normal ${styles.progress_text}`}>
                      83% Progress
                    </span>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1488_16938"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="-11"
                        y="-11"
                        width="45"
                        height="45"
                      >
                        <path
                          d="M11.5 3C16.1946 3 20 6.80543 20 11.5C20 16.1946 16.1946 20 11.5 20C6.80545 20 3 16.1946 3 11.5C3 6.80545 6.80545 3 11.5 3Z"
                          stroke="white"
                          stroke-width="27"
                        />
                      </mask>
                      <g mask="url(#mask0_1488_16938)">
                        <path
                          d="M21.9329 9.25543C22.149 9.21221 22.2887 9.00027 22.2348 8.78659C21.0719 4.17152 17.0109 0.708686 12.1002 0.446352C11.8794 0.434561 11.6978 0.613371 11.6978 0.834425V4.79418C11.6978 5.0078 11.8679 5.18148 12.0807 5.20084C14.7031 5.43948 16.8631 7.27872 17.5757 9.73354C17.6355 9.93974 17.84 10.074 18.0505 10.0319L21.9329 9.25543Z"
                          fill="#F8F24B"
                        />
                      </g>
                      <mask
                        id="mask1_1488_16938"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="-11"
                        y="-11"
                        width="45"
                        height="45"
                      >
                        <path
                          d="M11.5 3C16.1946 3 20 6.80543 20 11.5C20 16.1946 16.1946 20 11.5 20C6.80545 20 3 16.1946 3 11.5C3 6.80545 6.80545 3 11.5 3Z"
                          stroke="white"
                          stroke-width="27"
                        />
                      </mask>
                      <g mask="url(#mask1_1488_16938)">
                        <path
                          d="M5.54592 20.3529C5.41928 20.534 5.46522 20.7843 5.65272 20.9012C7.34952 21.9588 9.35347 22.5698 11.5001 22.5698C17.6138 22.5698 22.5699 17.6137 22.5699 11.5001C22.5699 11.0881 22.5474 10.6813 22.5036 10.281C22.4795 10.0618 22.2745 9.9119 22.0567 9.94699L18.1484 10.5767C17.9365 10.6108 17.7919 10.8077 17.8079 11.0217C17.8197 11.1796 17.8257 11.3391 17.8257 11.5001C17.8257 14.9936 14.9937 17.8256 11.5001 17.8256C10.3585 17.8256 9.2875 17.5232 8.36289 16.9941C8.17739 16.8879 7.93848 16.9328 7.81597 17.1079L5.54592 20.3529Z"
                          fill="#F8F24B"
                        />
                      </g>
                      <mask
                        id="mask2_1488_16938"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="-11"
                        y="-11"
                        width="45"
                        height="45"
                      >
                        <path
                          d="M11.5 3C16.1946 3 20 6.80543 20 11.5C20 16.1946 16.1946 20 11.5 20C6.80545 20 3 16.1946 3 11.5C3 6.80545 6.80545 3 11.5 3Z"
                          stroke="white"
                          stroke-width="27"
                        />
                      </mask>
                      <g mask="url(#mask2_1488_16938)">
                        <path
                          d="M7.71691 21.9066L8.37647 22.123C8.15362 22.0576 7.93368 21.9854 7.71691 21.9066ZM1.3617 8.18281C1.15229 8.10803 0.921717 8.22042 0.860248 8.43413C0.580201 9.40773 0.430176 10.4364 0.430176 11.5001C0.430176 14.963 2.02026 18.0545 4.51014 20.0844C4.68377 20.2259 4.9394 20.1851 5.06782 20.0015L7.3428 16.7495C7.46238 16.5786 7.42761 16.3451 7.27248 16.2056C5.98441 15.0477 5.17436 13.3685 5.17436 11.5001C5.17436 10.9859 5.2357 10.4861 5.35146 10.0075C5.40116 9.8021 5.29455 9.5873 5.09551 9.51621L1.3617 8.18281Z"
                          fill="#353535"
                        />
                      </g>
                      <mask
                        id="mask3_1488_16938"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="-11"
                        y="-11"
                        width="45"
                        height="45"
                      >
                        <path
                          d="M11.5 3C16.1946 3 20 6.80543 20 11.5C20 16.1946 16.1946 20 11.5 20C6.80545 20 3 16.1946 3 11.5C3 6.80545 6.80545 3 11.5 3Z"
                          stroke="white"
                          stroke-width="27"
                        />
                      </mask>
                      <g mask="url(#mask3_1488_16938)">
                        <path
                          d="M11.1048 0.846628C11.1048 0.622846 10.919 0.442974 10.6958 0.459002C6.51058 0.759509 2.96951 3.38675 1.35937 7.05396C1.26972 7.25816 1.37597 7.49265 1.58573 7.5684L5.31665 8.91566C5.5144 8.98707 5.7323 8.89048 5.82542 8.70198C6.75043 6.82955 8.5749 5.48085 10.7344 5.22029C10.9418 5.19526 11.1048 5.02375 11.1048 4.81485L11.1048 0.846628Z"
                          fill="#353535"
                        />
                      </g>
                    </svg>
                  </div>
                </ServiceCard>
              ))}
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
