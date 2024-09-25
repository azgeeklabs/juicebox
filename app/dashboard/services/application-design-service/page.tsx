"use client";
import classNames from "classnames";
import styles from "./application-design-service.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
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
        name: "What type of digital product are you looking to create?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "What type of digital product are you looking to create?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/application-design-service/service-projects");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/application-design-service/service-projects" nextFunc={()=>nextFunc()}>
        <div className="flex flex-col gap-[var(--64px)] items-center h-[50%]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--30px] font-bold">
              What type of digital product are you looking to create?
            </h2>
            <p className="text-[--18px] w-[60%] text-[#FFFFFFCC]">
              Please choose whether you want to develop a regular app or a
              gamified app. This helps us tailor our recommendations to your
              project.
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
              <div>Game</div>
              <input
                type="radio"
                name="type"
                value="game"
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
              <div className="">Application</div>
              <input
                type="radio"
                name="type"
                value="app"
                className="absolute opacity-0 inset-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default Page;
