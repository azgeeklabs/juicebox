"use client";
import { RootState } from "@/app/Store/store";
import styles from "./follower-range.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
const CustomTypeRange = dynamic(
  () => import("@/app/_components/customTypeRange/CustomTypeRange"),
  { ssr: false }
);

function FollowerRange() {
  const [num,setNum] = useState(0)
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (num) {
      itemsArray.push({
        name: "What is the Follower Range for Influencers in Your Campaign?",
        ans: String(num),
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "What is the Follower Range for Influencers in Your Campaign?",
          ans: String(num),
        }))
      route.push("/dashboard/services/influencer-marketing/influencer-list");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <NextPrevNav
      nextLink="/dashboard/services/influencer-marketing/influencer-list" nextFunc={nextFunc}
      backLink="/dashboard/services/influencer-marketing/niche-selection"
    >
      <div className=" flex justify-center h-[50%] w-full">
        <div
          className={`${styles.videoDuration} flex flex-col items-center justify-center  w-full`}
        >
          {/* Text center alignment and margin bottom */}
          <div className="text-center mx-auto mb-[5.333vh]">
            {/* Main heading with margin bottom */}
            <h2 className="mb-[2.667vh]">
              What is the Follower Range for Influencers in Your Campaign?
            </h2>

            {/* Subheading with embedded horizontal rule */}
            <p>Select the required range of follower you would like.</p>
          </div>

          {/* Container for the duration indicator with custom background, width, height, and margin */}
          <div className="flex flex-col gap-[var(--sy-25px)] w-full md:w-[70%] lg:w-[50%] ">
            <h3 className="text-[--20px] ml-[var(--16px)] font-bold">
              Follower Range
            </h3>
            <CustomTypeRange word="Follower" setNum={setNum}/>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default FollowerRange;
