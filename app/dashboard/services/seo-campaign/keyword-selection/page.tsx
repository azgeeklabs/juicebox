"use client";
import React, { useState } from "react";
import styles from "./keyword-selection.module.css";
import classNames from "classnames";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

export default function Page() {
  const [addedKeywords, setAddedKeywords] = useState<any[]>([]);
  const [keyword, setKeyword] = useState("");
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/rank-selection"
      nextLink="/dashboard/services/seo-campaign/analysis-estimate"
    >
      <section className={classNames(styles.keywordSelection, "w-full")}>
        <div className={classNames(styles.container, "w-full ")}>
          <div className="text-center w-full">
            <h2 className=" w-full">
              What keywords do you want the user to search by when <br />{" "}
              finding your product?
            </h2>
            <p>
              Please add the desired keywords for your product to appear in the{" "}
              <br />
              search engine results.
            </p>
          </div>
          {/* Keywords */}
          <div className={classNames(styles.keywords, "pl-16")}>
            <div>
              <label htmlFor="keyword" className="font-semibold text-[--20px]">
                Keywords{" "}
                <span className="font-normal text-[--16px]">(Max 5)</span>
              </label>
              <div className=" flex items-center gap-[--16px] flex-wrap">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Add a keyword"
                  name="keyword"
                  id="keyword"
                />
                <div
                  className={`${styles.chosen} flex gap-[--16px] items-center flex-wrap`}
                >
                  {addedKeywords?.map((e, i) => {
                    return (
                      <div className=" flex py-[--10px] text-black font-semibold px-[--24px] rounded-[--32px] bg-[#F8F24B] w-fit">
                        <span
                          onClick={(e) => {
                            console.log((e.target as any)?.innerText);

                            setAddedKeywords(
                              addedKeywords.filter((k, idx) => i !== idx)
                            );
                          }}
                          className="cursor-pointer w-[--22px] h-[--22px] flex justify-center items-start rounded-full bg-black text-white mr-[--8px] font-normal relative z-[100]"
                        >
                          x
                        </span>
                        {e}
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={() => {
                    if (keyword && addedKeywords.length < 5) {
                      setAddedKeywords((prev: any) => {
                        const updated = [keyword, ...prev];
                        return updated;
                      });
                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          {/* Suggestions */}
          <div className={`${styles.suggestions} pl-16`}>
            <span className="font-semibold text-[--20px]">Suggestions</span>
            <div>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                Automotive
              </CustomCheckBoxText>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                Engineering
              </CustomCheckBoxText>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                Vehicle
              </CustomCheckBoxText>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                Auto
              </CustomCheckBoxText>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                Automotive
              </CustomCheckBoxText>
              <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                Automotive
              </CustomCheckBoxText>
            </div>
          </div>
        </div>
      </section>
    </NextPrevNav>
  );
}
