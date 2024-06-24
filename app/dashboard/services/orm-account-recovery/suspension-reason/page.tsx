"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { accountRecoveryContext } from "../_accountRecoveryContext/_accountRecoveryContext";
import { useContext } from "react";
const SuspensionReason = () => {
  const data = ["Hacked", "Spam", "Impersonation", "Sexual", "Misinformation"];

  const { isSexual, setIsSexual } = useContext(accountRecoveryContext);

  return (
    <NextPrevNav
      backLink="/services/orm-account-recovery"
      nextLink="/services/orm-account-recovery/suspended-date"
    >
      <div
        className={classNames(
          "flex flex-col gap-[var(--45px)] justify-center mx-auto items-center h-full",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-[60%]">
          <h1 className="text-[--30px] font-bold">
            What is the reason for your account’s suspension?
          </h1>
          <p className="text-[--18px] font-light">
            We’d love to hear the story behind your account’s suspension so we
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
                  setIsSexual(!isSexual);
                }
              }}
            >
              <CustomCheckBoxText key={i} btnSize="md" inputType="checkbox">
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
