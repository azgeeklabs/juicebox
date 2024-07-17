import styles from "./CustomCheckBoxText.module.css";

type Size = "sm" | "md" | "lg" | "xl";

interface IProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  btnSize: Size;
  inputType: string;
}

function CustomCheckBoxText({
  btnSize,
  inputType,
  children,
  ...props
}: IProps) {
  const sizeClass = styles[`size-${btnSize}`];

  return (
    <div className={`relative ${styles.customCheckBoxText} ${sizeClass}`}>
      <input
        type={inputType}
        className="opacity-0 w-full h-full absolute"
        {...props}
      />
      <div>{children}</div>
    </div>
  );
}

export default CustomCheckBoxText;
