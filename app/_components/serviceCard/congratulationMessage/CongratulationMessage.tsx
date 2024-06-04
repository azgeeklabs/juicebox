import React from "react";
import styles from "./congratsMessage.module.css";

type Iprops = {
  icon?: any;
};

const CongratulationMessage = (props: Iprops) => {
  return (
    <div
      className={`${styles.congrats} ${styles.active} rounded-[2.75vw] w-fit text-white`}
    >
      <div className=" flex gap-[6.8vw] items-center px-[1vw] py-[0.4vw]">
        <div className=" flex flex-col">
          <h4 className={`${styles.congratsDate}`}>Saturday, 24th of Jan</h4>
          <h3>Phase 1 has been completed! </h3>
        </div>
        {props.icon}
      </div>
    </div>
  );
};

export default CongratulationMessage;
