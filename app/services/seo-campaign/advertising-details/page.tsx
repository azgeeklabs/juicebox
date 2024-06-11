import React from "react";
import styles from "./advertising-details.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const page = () => {
  return (
    <NextPrevNav
      backLink="/services/seo-campaign"
      nextLink="/services/seo-campaign/rank-selection"
    >
      <div className={`${styles.advertisingDetails} w-full `}>
        <div className=" text-center mx-auto mb-[3vw]">
          <h2 className=" mb-[1.5vw]">
            What product/service are you advertising?
          </h2>
          <h4>
            Please provide the product link, name, and a brief description of
            the product or service you are advertising.
          </h4>
        </div>
        <div className="mx-auto w-fit">
          <h3 className=" mb-[0.6vw]">
            Product Link <span>(if exists)</span>
          </h3>
          <div className=" flex gap-[1vw] items-start mb-[1.5vw]">
            <input
              type="text"
              placeholder="Product Link"
              className="h-full mb-[1vw] w-[28.477vw] bg-[var(--dark-gray-3)] outline-none rounded-[var(--71px)] px-[1.088vw] py-[0.5vw] placeholder:text-[#FFFFFF80]"
            />
            <button className=" bg-[var(--highlight-yellow)] px-[1.892vw] py-[0.4vw] text-black rounded-[var(--33px)]">
              Paste Link
            </button>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default page;
