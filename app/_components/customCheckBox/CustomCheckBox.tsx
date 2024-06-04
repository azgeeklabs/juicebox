import styles from "./CustomCheckBox.module.css";

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  content: React.ReactNode | string;
};

function CustomCheckBox({ content, ...props }: IProps) {
  return (
    <div className={`relative ${styles.customCheckBox}`}>
      <input
        type="checkbox"
        className="opacity-0 w-full h-full absolute"
        {...props}
      />
      <span className="text-center ">{content}</span>
    </div>
  );
}

export default CustomCheckBox;
