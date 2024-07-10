"use client";
import classNames from "classnames";
import styles from "./suspension-reason.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
const RemovalReason = () => {
  const data = ["Fake", "Defamation"];

  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-negative-press-removal"
      nextLink="/dashboard/services/orm-negative-press-removal/reason-proof"
    >
      <div
        className={classNames(
          "flex flex-col gap-[var(--45px)] justify-center mx-auto items-center h-full",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-[60%]">
          <h1 className="text-[--30px] font-bold">
            Why would you want those links removed?
          </h1>
          <p className="text-[--18px] font-light">
            Understanding your reasons helps us address your needs effectively.
          </p>
        </div>

        <div
          className={classNames(
            "flex justify-center flex-wrap gap-[--10px]",
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
              />
              <div>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
};

export default RemovalReason;
