"use client"
import classNames from "classnames";
import styles from "./influencer-marketing.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import { useEffect } from "react";

function InfluencerMarketing() {
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    console.log("//////////////////////");
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "campaign type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "campaign type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/influencer-marketing/niche-selection");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/influencer-marketing/niche-selection" nextFunc={nextFunc}>
        <div className="flex flex-col gap-[var(--64px)] items-center h-[50%]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
              What type of campaign would you like to run?
            </h2>
            <p className="text-[--18px] m-auto text-center text-[#FFFFFFCC]">
              Please select the option that best describes your campaign type. <br />
              This helps us understand the specific requirements for your
              campaign.
            </p>
          </div>
          <div className={classNames("flex ", styles.cards)}>
            <div
              className={classNames(
                "flex flex-col gap-[var(--8px)] group",
                styles.card
              )}
            >
              {/* <div className="flex items-center justify-center relative">
                <img
                  src="/assets/application-design-service-gamecard.gif"
                  alt="/assets/application-design-service-gamecard.gif"
                  className="w-full"
                />
                {gameSVG}
              </div> */}
              <div>Music</div>
              <input
                type="radio"
                name="type"
                value="Music"
                className="absolute opacity-0 inset-0 cursor-pointer"
              />
            </div>
            <div
              className={classNames(
                "flex flex-col gap-[var(--sy-8px)]",
                styles.card
              )}
            >
              {/* <div className="flex items-center justify-center relative">
                <img
                  src="/assets/application-design-service-applicationcard.gif"
                  alt="/assets/application-design-service-applicationcard.gif"
                  className="w-full"
                />
                {appSVG}
              </div> */}
              <div className="">Fashion</div>
              <input
                type="radio"
                name="type"
                value="Fashion"
                className="absolute opacity-0 inset-0 cursor-pointer"
              />
            </div>
            <div
              className={classNames(
                "flex flex-col gap-[var(--sy-8px)]",
                styles.card
              )}
            >
              {/* <div className="flex items-center justify-center relative">
                <img
                  src="/assets/application-design-service-applicationcard.gif"
                  alt="/assets/application-design-service-applicationcard.gif"
                  className="w-full"
                />
                {appSVG}
              </div> */}
              <div className="">Finance</div>
              <input
                type="radio"
                name="type"
                value="Finance"
                className="absolute opacity-0 inset-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default InfluencerMarketing;
