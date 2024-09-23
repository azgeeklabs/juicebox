"use client";
import classNames from "classnames";
import styles from "./contentBlog.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useContext, useEffect } from "react";
import { globalContext } from "@/app/_context/GlobalContext";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";


function Page() {
  const { step, setStep } = useContext(globalContext);

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "project type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "project type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-blog/create-website");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <>
      <NextPrevNav
        nextLink="/dashboard/services/content-blog/create-website" nextFunc={nextFunc}
        nextOnClick={() => setStep(step + 1)}
      >
        <div className={`flex flex-col gap-[var(--64px)] justify-center items-center h-full ${styles.contentBlog}`}>
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--30px] font-bold">
              What type of project are you working on?
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC]">
              Please select the option that best describes your project type.{" "}
              <br />
              This helps us understand the specific requirements for your
              project.
            </p>
          </div>
          <div
              className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw] mb-[1.5vw]`}
            >
              {/* CustomCheckBoxText component for selecting options */}
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Same Tone"}
              >
                Same Tone
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Improve Style"}
              >
               Improve Style
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Improve Style"}
              >
                Improve Style
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Improve Style"}
              >
                Improve Style
              </CustomCheckBoxText>
            </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default Page;
