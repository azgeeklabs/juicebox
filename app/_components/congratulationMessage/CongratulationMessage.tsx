"use client";

import React from "react";
import styles from "./congratsMessage.module.css";

type Iprops = {
  icon?: any;
  data?: any;
};

const CongratulationMessage = (props: Iprops) => {
  const addDays = (date: Date, days: number) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const formatDate = (date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];

    // Get the ordinal suffix for the day
    const getOrdinalSuffix = (n: number) => {
      if (n > 3 && n < 21) return 'th'; // Handle special cases
      switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    const dayWithSuffix = `${day}${getOrdinalSuffix(day)}`;
    
    return `${dayOfWeek}, ${dayWithSuffix} of ${month}`;
  };
  const { data } = props;
  console.log(data);  
  return (
    <div className={`${styles.congrats}  rounded-[2.75vw] w-full text-white`}>
      <div className=" flex items-center justify-between px-[1vw] py-[0.4vw]">
        <div className=" flex flex-col">
          <h4 className={`${styles.congratsDate} !font-normal`}>
            {formatDate(addDays(data?.service?.createdAt.split("T")[0],data?.service?.estimatedDuration))}
          </h4>
          <h3>{data?.service?.type?.replace(/service/gi, "")}</h3>
        </div>
        {props.icon}
      </div>
    </div>
  );
};

export default CongratulationMessage;
