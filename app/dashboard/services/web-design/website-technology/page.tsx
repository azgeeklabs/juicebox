"use client"
import classNames from "classnames";
import styles from "./website-technology.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

function Page() {
  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;
    const storedItems = localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "website technology",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "website technology",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/brand-selection");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/domain-selection"
      nextLink="/dashboard/services/web-design/brand-selection" nextFunc={nextFunc}
    >
      <div className="flex flex-col gap-[var(--sy-40px)] justify-center items-center h-full mb-[--sy-40px]">
        <div
          className={classNames(
            "flex flex-col items-center gap-[var(--16px)] text-center",
            styles.container
          )}
        >
          <h1 className="text-[--32px] font-semibold">
          How would you like to build your website?
          </h1>
          <p className="text-[--18px] text-[#FFFFFFCC]">
          Choose the technology you want your website to be build with 
          </p>
        </div>
        <div
          className={`${styles.btns} flex w-fit mx-auto gap-[--16px]`}
        >
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Custom"}>
          Custom
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Shopify"}>
          Shopify
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"WordPress"}>
          WordPress
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Webflow"}>
          Webflow
          </CustomCheckBoxText>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
