"use client";
import React from "react";
import styles from "./keyword-selection.module.css";
import classNames from "classnames";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

export default function page() {
  return (
    <section className={classNames(styles.keywordSelection)}>
      <div className={classNames(styles.container)}>
        <div className="text-center">
          <h2 className="">
            What keywords do you want the user to search by when finding your
            product?
          </h2>
          <p>
            Please add the desired keywords for your product to appear in the
            search engine results.
          </p>
        </div>
        {/* Keywords */}
        <div className={classNames(styles.keywords)}>
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
        <div className={styles.suggestions}>
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
  );
}
