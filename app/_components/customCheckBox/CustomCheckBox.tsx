import styles from "./CustomCheckBox.module.css";

type IProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

function CustomCheckBox(props: IProps) {
  return (
    <div className={`relative ${styles.customCheckBox}`}>
      <input
        type="checkbox"
        className="opacity-0 w-full h-full absolute"
        {...props}
      />
      <span>
        <svg
          viewBox="0 0 11 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.758 0.95616C11.0807 1.27865 11.0807 1.8015 10.758 2.12399L4.56523 8.31346C4.22108 8.65743 3.66307 8.65743 3.31891 8.31346L0.241995 5.23816C-0.080665 4.91572 -0.080665 4.39284 0.241995 4.07035C0.564649 3.74785 1.08778 3.74785 1.41044 4.07035L3.94208 6.60064L9.58956 0.95616C9.91223 0.633672 10.4354 0.633672 10.758 0.95616Z"
          />
        </svg>
      </span>
    </div>
  );
}

export default CustomCheckBox;
