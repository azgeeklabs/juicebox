"use client";
import React, { useEffect } from "react";
import styles from "./blogWriteStyle.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

const Page = () => {
  const all = useSelector((state: RootState) => state.service);
  const dispatch = useDispatch();
  const route = useRouter();

  const nextFunc = () => {
    const selected = document.querySelector(
      "input[type='radio']:checked"
    ) as HTMLInputElement;

    if (selected) {
      const storedItems =
        typeof window !== "undefined" && localStorage.getItem("selectedOption");
      const itemsArray = storedItems ? JSON.parse(storedItems) : [];

      itemsArray.push({
        name: "blog write style",
        choice: selected.value,
      });

      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "blog write style",
          choice: selected.value,
        })
      );

      route.push("/dashboard/services/content-blog/word-count");
    }
  };

  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    // Main outer container div
    <NextPrevNav
      nextLink="/dashboard/services/content-blog/word-count"
      nextFunc={nextFunc}
      backLink="/dashboard/services/content-blog/create-website"
    >
      <div className=" h-full flex items-center justify-center">
        {/* Inner container with full width, custom video style styles, and top padding */}
        <div className={`${styles.blogWriteStyle} w-full mb-[--sy-40px]`}>
          {/* Header section with centered text, auto margins for centering, and bottom margin */}
          <div className="text-center mx-auto mb-[--sy-48px]">
            {/* Main heading with bottom margin */}
            <h2 className="mb-[--sy-32px] w-[60%] mx-auto">
              Would you like you blog to match your existing tone or should we
              enhance the current writing style
            </h2>

            {/* Subheading with horizontal rule (line) */}
            <h4 className=" w-[50%] mx-auto text-[#FFFFFFCC]">
              Our expert writers can craft a blog in the same tone, or we can
              enhance your current writing style!
            </h4>
          </div>

          {/* Buttons container with custom styles, flexbox layout, width fit to content, auto margins for centering, and gap */}
          <div className={`${styles.btns} flex w-fit mx-auto gap-[1.041vw]`}>
            {/* Yes option with large button size and radio input type */}
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="styleAnswer"
              value={"Same Tone"}
            >
              Same Tone
            </CustomCheckBoxText>

            {/* No option with large button size and radio input type */}
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
      </div>
    </NextPrevNav>
  );
};

export default Page;
