"use client";
import classNames from "classnames";
import styles from "./prCreation.module.css";
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
        name: "wikipedia type",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "wikipedia type",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/pr-creation/wikipedia-copy");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/pr-creation/wikipedia-copy" nextFunc={nextFunc} nextOnClick={() => setStep(step + 1)}>
        <div className="flex flex-col gap-[var(--sy-50px)] justify-center items-center h-full">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--8px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
            What is the type of Wikipedia page do you want?
            </h2>
            <p className="text-[--18px] text-[#FFFFFFCC]">
            Please select the option that best describes your Wiki page. <br /> This helps us understand the specific requirements for your page.
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
                value={"Healthcare"}
              >
                Healthcare
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"commerce"}
              >
                E-commerce
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
                value={"Educational"}
              >
                Educational
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="styleAnswer"
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
