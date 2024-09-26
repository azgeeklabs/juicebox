"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
const RewriteWebsite = () => {
  const data = ["Re-write copy", "Write a new copy"];
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "Would you like us to rewrite your existing website copy?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Would you like us to rewrite your existing website copy?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-website/live-website");
    }
  };

  return (
    <NextPrevNav
      backLink="/dashboard/services/content-website/" nextFunc={nextFunc}
      nextLink="/dashboard/services/content-website/live-website"
    >
      <div
        className={classNames(
          "flex flex-col gap-[--55px] justify-center mx-auto items-center h-full pb-[--sy-60px]",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--sy-24px)] text-center w-full md:w-[70%]">
          <h1 className="text-[--32px] font-bold">
            Would you like us to rewrite your existing website copy?
          </h1>
          <p className="text-[--18px] md:w-[80%] font-light text-[#FFFFFFCC]">
            Our content team can write new content for your website in no time, <br />
            or you can rewrite your old content
          </p>
        </div>

        <div
          className={classNames(
            "flex justify-center flex-wrap gap-[--16px]",
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

export default RewriteWebsite;
