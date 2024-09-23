"use client"
import NextPrevNav from '@/app/_components/NextPrevNav/NextPrevNav'
import { globalContext } from "@/app/_context/GlobalContext";
import classNames from 'classnames'
import React, { useContext, useEffect } from 'react'
import styles from "./pressRelease.module.css"
import CustomCheckBoxText from '@/app/_components/customCheckBox/CustomCheckBoxText';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/Store/store';
import { useRouter } from 'next/navigation';
import { addOption } from '@/app/reducers/serviceSlice';

const Page = () => {
    const { step, setStep } = useContext(globalContext);
    const all = useSelector((state:RootState)=>state.service)
    const dispatch = useDispatch();
    const route = useRouter();
    const nextFunc = () => {
      const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];
      if (document.querySelector("input[type='radio']:checked")) {
        itemsArray.push({
          name: "press release niche",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        });
        localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
          dispatch(addOption({
            name: "press release niche",
            choice: (
              document.querySelector(
                "input[type='radio']:checked"
              ) as HTMLInputElement
            ).value,
          }))
        route.push("/dashboard/services/press-release/release-publishing");
      }
    };
    useEffect(()=>{
  console.log(all);
  
    },[all])


  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/press-release/release-publishing" nextOnClick={() => setStep(step + 1)} nextFunc={nextFunc}>
        <div className="flex flex-col gap-[var(--55px)] justify-center items-center h-full mb-[--sy-50px]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--18px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
            What is your press release niche?
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC]">
            Select the niche that best describes the focus of your press release.
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
                value={"Music"}
              >
                Music
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Finance"}
              >
                Finance
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Tech"}
              >
                Tech
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Other"}
              >
                Other
              </CustomCheckBoxText>
            </div>
        </div>
      </NextPrevNav>
    </>
  )
}

export default Page