"use client";
import classNames from "classnames";
import styles from "./contentBlog.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useContext } from "react";
import { globalContext } from "@/app/_context/GlobalContext";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { addOption } from "@/app/reducers/serviceSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";



function Page() {
  const { step, setStep } = useContext(globalContext);
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "press releases niche",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "press releases niche",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-press-release/release-content");
    }
  };

  return (
    <>
      <NextPrevNav
        nextLink="/dashboard/services/content-press-release/release-content" nextFunc={nextFunc}
        nextOnClick={() => setStep(step + 1)}
      >
        <div className={`flex flex-col gap-[var(--55px)] justify-center mb-[--sy-40px] items-center h-full ${styles.pressRelease}`}>
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--30px] font-bold w-[73%] mx-auto mb-[--sy-8px]">
            Could you please specify the niche or focus area of your press releases?
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC]">
            Please select the option that best describes your project type. 
            <br />
            This helps us understand the specific requirements for your project.
            </p>
          </div>
          <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
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
                value={"Music"}
              >
                Music
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Fashion"}
              >
                Fashion
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
  );
}

export default Page;
