"use client";
import React from "react";
import styles from "./keyword-selection.module.css";
import classNames from "classnames";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

export default function Page() {
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/rank-selection"
      nextLink="/dashboard/services/seo-campaign/analysis-estimate"
    >
      <section className={classNames(styles.keywordSelection, "w-full")}>
        <div className={classNames(styles.container , "w-full ")}>
          <div className="text-center w-full">
            <h2 className=" w-full">
              What keywords do you want the user to search by when <br /> finding your
              product?
            </h2>
            <p>
              Please add the desired keywords for your product to appear in the <br />
              search engine results.
            </p>
          </div>
          {/* Keywords */}
          <div className={classNames(styles.keywords,"pl-16")}>
            <div>
              <label htmlFor="keyword" className="">
                Keywords <span>(Max 5)</span>
              </label>
              <div>
                <input
                  type="text"
                  placeholder="Add a keyword"
                  name="keyword"
                  id="keyword"
                />
                <button>Add</button>
              </div>
            </div>
          </div>
          {/* Suggestions */}
          <div className={`${styles.suggestions} pl-16`}>
            <span>Suggestions</span>
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
