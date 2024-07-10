import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import styles from "./customBtn.module.css";
import "./customBtn.module.css";

type Iprops = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  paddingVal?: string;
  children?: React.ReactNode;
};

const CustomBtn = (props: Iprops) => {
  return (
    <button
      className={`${styles.customBtn} ${
        props.paddingVal ? props.paddingVal : "py-[0.2vw] px-[0.946vw]"
      } rounded-[var(--58px)] text-white`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default CustomBtn;
