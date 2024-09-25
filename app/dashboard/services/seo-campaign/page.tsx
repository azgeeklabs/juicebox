"use client"
import classNames from "classnames";
import styles from "./seo-campaign.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useEffect } from "react";
import { addOption } from "@/app/reducers/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";

function Page() {
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "What is the product you are trying to rank?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "What is the product you are trying to rank?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/seo-campaign/advertising-details");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <NextPrevNav nextLink="/dashboard/services/seo-campaign/advertising-details" nextFunc={()=>nextFunc()}>
      <div className="flex flex-col gap-[var(--sy-48px)] justify-center items-center h-full mb-[--sy-40px]">
        <div
          className={classNames(
            "flex flex-col items-center text-center",
            styles.container
          )}
        >
          <h2 className="font-semibold">
            What is the product you are trying to rank?
          </h2>
          <p className=" text-[#FFFFFFCC]">
            Please select the option that best describes your project type. <br /> This
            helps us understand the specific requirements for your project.
          </p>
        </div>
        <div
              className={`${styles.btns} flex w-fit mx-auto gap-[--12px] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Product"}
              >
                Product
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Service"}
              >
                Service
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Content"}
              >
                Content
              </CustomCheckBoxText>
            </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
