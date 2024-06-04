import styles from "./CustomCheckBoxText.module.css";

type Size = "sm" | "md" | "lg" | "xl";

interface IProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  btnSize: Size;
  inputType: string;
}

function CustomCheckBoxText({ btnSize, inputType, children, ...props }: IProps) {
  const sizeClass = styles[`size-${btnSize}`];

  return (
    <div className={`relative ${styles.customCheckBox} ${sizeClass}`}>
      <input
        type={inputType}
        className="opacity-0 w-full h-full absolute"
        {...props}
      />
      <span className={styles.label}>{children}</span>
    </div>
  );
}

export default CustomCheckBoxText;
