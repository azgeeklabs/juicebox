import React from "react";
import styles from "./serviceCard.module.css";

type Iprops = {
  paddingVal?: string;
  children?:any;
};

const ServiceCard = (props: Iprops) => {
  return (
    <div
      className={`${styles.serviceCard} rounded-[2.75vw] text-white w-fit flex justify-center cursor-pointer`}
    >
      <div className={`flex py-[0.5vw] px-[0.5vw] rounded-[2.75vw]`}>
        <div className={`${styles.card} text-center px-[0.8vw] `}>
          <h3>Web Design</h3>
          <h6>Ideation Phase</h6>
        </div>
        <div
          className={`${styles.card} text-center flex items-center justify-center px-[0.8vw]`}
        >
          <h6>26 Days Left</h6>
        </div>
        {props.children}
        {/* <div
          className={`${styles.card} text-center flex items-center justify-center px-[0.8vw]`}
        >
          <div className=" flex justify-between">
            <h6>83% Progress</h6>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
