"use client"
import classNames from "classnames";
import styles from "./content-website.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";



function ContentWebsite() {
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "website niche",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "website niche",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/content-website/rewrite-website");
    }
  };
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/content-website/rewrite-website" nextFunc={nextFunc}>
        <div className="flex flex-col gap-[var(--55px)] justify-center items-center h-full mb-[--sy-50px]">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--sy-24px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--32px] font-bold">
              Please select you website niche:
            </h2>
            <p className="text-[--18px] text-center text-[#FFFFFFCC]">
              Select the option that best describes your project type. <br /> This
              helps us understand the specific requirements for your project.
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
                value={"E-commerce"}
              >
                E-commerce
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Landing Page"}
              >
                Landing Page
              </CustomCheckBoxText>
              <CustomCheckBoxText
                btnSize="xl"
                inputType="radio"
                name="pressAnswer"
                value={"Company site"}
              >
                Company site
              </CustomCheckBoxText>
            </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default ContentWebsite;
