"use client"
import React, { useState, useEffect } from "react";
import styles from "./socialMediaTask.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import { setChosenRoute } from "@/app/reducers/routeSlice";



const Page = () => {
  const [answer, setAnswer] = useState("");
  const chosenRoute = useSelector((state: RootState) => state.route.chosenRoute);

  const handleChangeRoute = (route: string) => {
    dispatch(setChosenRoute(route));
  };

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
        name: "task to handle",
        choice: selected.value,
      });
      
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
      dispatch(
        addOption({
          name: "task to handle",
          choice: selected.value,
        })
      );

      const nextRoute =
        answer === "Create"
          ? "/dashboard/services/social-media/creation-frequency"
          : answer === "Audience"
          ? "/dashboard/services/social-media/audience-frequency"
          : answer === "Post"
          ? "/dashboard/services/social-media/post-frequency"
          : "#";

      route.push(nextRoute);
    }
  };

  useEffect(() => {
    console.log(all);
  }, [all]);

  return (
    <NextPrevNav
      nextLink={
        answer === "Create"
          ? "/dashboard/services/social-media/creation-frequency"
          : answer === "Audience"
          ? "/dashboard/services/social-media/audience-frequency"
          : answer === "Post"
          ? "/dashboard/services/social-media/post-frequency"
          : "#"
      }
      backLink="/dashboard/services/social-media" nextFunc={nextFunc}
    >
      <div className="flex items-center justify-center h-full mb-[--sy-50px]">
        <div className={`${styles.socialMediaTask} w-full`}>
          <div className="text-center mx-auto mb-[--sy-50px]">
            <h2 className="mb-[--sy-8px]">
              What do you want us to do for your social media page?
            </h2>
            <h4>
              Select the tasks you want us to handle. You can choose multiple
              options.
            </h4>
          </div>

          <div className={`${styles.btns} flex w-fit mx-auto gap-[--26px]`}>
            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="socialMediaTask"
              value={"Create posts for me"}
              onClick={() => {
                setAnswer("Create");
                handleChangeRoute("create"); // Call handleChangeRoute here
              }}
            >
              Create posts for me
            </CustomCheckBoxText>

            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="socialMediaTask"
              value={"Engage with my audience"}
              onClick={() => {
                setAnswer("Audience");
                handleChangeRoute("audience"); // Call handleChangeRoute here
              }}
            >
              Engage with my audience
            </CustomCheckBoxText>

            <CustomCheckBoxText
              btnSize="xl"
              inputType="radio"
              name="socialMediaTask"
              value={"Post for me"}
              onClick={() => {
                setAnswer("Post");
                handleChangeRoute("post"); // Call handleChangeRoute here
              }}
            >
              Post for me
            </CustomCheckBoxText>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Page;
