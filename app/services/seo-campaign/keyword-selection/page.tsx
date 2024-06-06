"use client";
import React from "react";
import styles from "./keyword-selection.module.css";
import classNames from "classnames";

export default function page() {
  return (
    <section className={styles.keywordSelection}>
      <h2 className="text-center">
        What keywords do you want the user to search by when<br />finding your
        product?
      </h2>
      <p className="text-center">
        Please add the desired keywords for your product to appear in the<br />search
        engine results.
      </p>
      {/* Keywords */}
      <div className={classNames(styles.keywords, "self-start")}>
        <label htmlFor="">
          Keywords <span>(Max 5)</span>
        </label>
        <div>
          <input type="text" />
          <button>Add</button>
        </div>
      </div>
      {/* Suggestions */}
      <div className={styles.suggestions}>
        <span>Suggestions</span>
      </div>
    </section>
  );
}
