"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import { useEffect } from "react";
import { it } from "node:test";
const RemovalReason = () => {
  const data = ["Fake", "Defamation"];

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
        name: "removing reason",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "removing reason",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/orm-negative-press-removal/reason-proof");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-negative-press-removal"
      nextLink="/dashboard/services/orm-negative-press-removal/reason-proof" nextFunc={nextFunc}
    >
      <div
        className={classNames(
          "flex flex-col gap-[var(--45px)] mx-auto items-center h-[50%]",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-[60%]">
          <h1 className="text-[--30px] font-bold">
            Why would you want those links removed?
          </h1>
          <p className="text-[--18px] font-light text-[#FFFFFFCC]">
            Understanding your reasons helps us address your needs effectively.
          </p>
        </div>

        <div
          className={classNames(
            "flex justify-center flex-wrap gap-[--10px]",
            styles.cards
          )}
        >
          {data.map((item, i) => (
            <div className={`relative grow ${styles.customCheckBoxText}`}>
              <input
                type="radio"
                name="removalReason"
                id={`removalReason-${i}`}
                className="opacity-0 w-full h-full absolute" 
                value={item}
              />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
};

export default RemovalReason;
