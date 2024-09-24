"use client"
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { addOption } from "@/app/reducers/serviceSlice";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const Questionnaire = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems =
      typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];

    itemsArray.push({
      name: "questionnair",
    });
    localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
    dispatch(
      addOption({
        name: "questionnair",
      })
    );
    route.push(`/dashboard/services/pr-placement/artical-brand`);
  };
  return (
    <NextPrevNav
      backLink="/dashboard/services/pr-placement/create-article" nextFunc={nextFunc}
      nextLink="/dashboard/services/pr-placement/artical-brand"
    >
      <div className="w-full h-full flex flex-col ">
        {/* Text center alignment and margin bottom */}
        <div className="flex flex-col justify-center pt-[--sy-30px]">
          <div className="flex flex-col gap-[--28px] w-full sm:w-[40%] md:w-[45%] lg:w-[35%] pt-[--30px]">
            <h1 className="text-[--32px] font-bold">
              Here’s a quick questionnaire to help us know more about your PR
              topic:
            </h1>
            <p className="text-[--18px] w-[95%] text-[#FFFFFFCC]">
              Please fill out this short questionnaire so we can better
              understand your PR needs and tailor our services to your topic.
            </p>
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
};

export default Questionnaire;
