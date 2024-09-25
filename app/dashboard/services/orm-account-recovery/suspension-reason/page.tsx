"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { accountRecoveryContext } from "../_accountRecoveryContext/_accountRecoveryContext";
import { useContext, useEffect } from "react";
import { addOption } from "@/app/reducers/serviceSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
const SuspensionReason = () => {
  const data = ["Hacked", "Spam", "Impersonation", "Sexual", "Misinformation"];

  const { isSexual, setIsSexual } = useContext(accountRecoveryContext);

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    if (document.querySelector("input[type='radio']:checked")) {
      itemsArray.push({
        name: "What is the reason for your account’s suspension?",
        choice: (
          document.querySelector(
            "input[type='radio']:checked"
          ) as HTMLInputElement
        ).value,
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "What is the reason for your account’s suspension?",
          choice: (
            document.querySelector(
              "input[type='radio']:checked"
            ) as HTMLInputElement
          ).value,
        }))
      route.push("/dashboard/services/orm-account-recovery/suspended-date");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-account-recovery"
      nextLink="/dashboard/services/orm-account-recovery/suspended-date" nextFunc={nextFunc}
    >
      <div
        className={classNames(
          "flex flex-col gap-[var(--45px)] mx-auto items-center h-[50%]",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-[60%]">
          <h1 className="text-[--30px] font-bold">
            What is the reason for your account’s suspension?
          </h1>
          <p className="text-[--18px] font-light text-center">
            We’d love to hear the story behind your account’s suspension so we <br />
            can swiftly and effectively help you get back on track.
          </p>
        </div>

        <div
          className={classNames(
            "flex justify-center flex-wrap gap-[--8px]",
            styles.cards
          )}
        >
          {data.map((item, i) => (
            <div
              onClick={() => {
                if (item === "Sexual") {
                  setIsSexual(true);
                }
              }}
            >
              <CustomCheckBoxText key={i} btnSize="md" inputType="radio" name="suspension reason" value={item}>
                <div className={classNames("flex items-center", styles.card)}>
                  <span className="text-[--16px] px-[--50px]">{item}</span>
                </div>
              </CustomCheckBoxText>
            </div>
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
};

export default SuspensionReason;
