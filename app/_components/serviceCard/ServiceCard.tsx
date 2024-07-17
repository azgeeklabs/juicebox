import React, { Children } from "react";
import styles from "./serviceCard.module.css";
import Link from "next/link";

type Iprops = {
  paddingVal?: string;
  children?: any;
  href?: string;
  title?: string; // Title for h3
  phase?: string; // Text for span
  timeleft?: string; // Text for h6
};

const ServiceCard = (props: Iprops) => {
  return (
    <Link href={props.href || ""}>
      <div
        className={`${styles.serviceCard} rounded-[2.75vw] text-white w-full flex justify-center cursor-pointer`}
      >
        <div className={`flex py-[0.4vw] px-[0.5vw] rounded-[2.75vw] w-full`}>
          <div className={`${styles.card} text-center px-[0.8vw] `}>
            <h3>{props.title || "Title"}</h3>
            <span>{props.phase || "Phase"}</span>
          </div>
          <div
            className={`text-center flex items-center justify-center px-[0.8vw] ${styles.card}`}
          >
            <h6>{props.timeleft || "Timeleft"}</h6>
          </div>
          {Children.map(props.children, (child) => {
            return (
              <div
                className={`${styles.card} text-center flex items-center justify-center px-[0.8vw]`}
              >
                {child}
              </div>
            );
          })}

          {/* <div
          className={`${styles.card} text-center flex items-center justify-center px-[0.8vw]`}
        >
          <div className=" flex justify-between">
            <h6>83% Progress</h6>
          </div>
        </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
