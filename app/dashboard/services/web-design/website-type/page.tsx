"use client"
import classNames from "classnames";
import styles from "./website-type.module.css";
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
        name: "website type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "website type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/web-design/domain-selection");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <NextPrevNav
      nextLink="/dashboard/services/web-design/domain-selection" nextFunc={()=>nextFunc()}
      backLink="/dashboard/services/web-design"
    >
      <div className="flex flex-col gap-[var(--sy-50px)] justify-center items-center h-full mb-[--sy-40px]">
        <div
          className={classNames(
            "flex flex-col items-center text-center",
            styles.container
          )}
        >
          <h2 className="font-semibold">What is the type of your website?</h2>
          <p className="text-center text-[#FFFFFFCC]">
            Please select the option that best describes your project type.{" "}
            <br /> This helps us understand the specific requirements for your
            project.
          </p>
        </div>
        <div
          className={`${styles.btns} flex w-fit mx-auto gap-[--8px] mb-[1.5vw]`}
        >
          {/* CustomCheckBoxText component for selecting options */}
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Health Care"}>
            Health Care
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Shipping"}>
            Shipping
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Company"}>
            Company
          </CustomCheckBoxText>
          <CustomCheckBoxText btnSize="xl" inputType="radio" name="typeAnswer" value={"Other"}>
            Other
          </CustomCheckBoxText>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default Page;
