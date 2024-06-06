import classNames from "classnames";
import styles from "./additional-features.module.css";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

function page() {
  const data = [
    {
      title: "Notifications",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0289 2.36377C7.42658 2.36377 5.31168 4.47867 5.31168 7.08101V9.35315C5.31168 9.83274 5.10726 10.5639 4.86354 10.9727L3.9594 12.4744C3.4012 13.4021 3.78644 14.432 4.80851 14.778C8.19706 15.9101 11.8529 15.9101 15.2415 14.778C16.1928 14.4635 16.6095 13.3392 16.0906 12.4744L15.1864 10.9727C14.9506 10.5639 14.7462 9.83274 14.7462 9.35315V7.08101C14.7462 4.48653 12.6234 2.36377 10.0289 2.36377Z"
            stroke="white"
            stroke-width="1.17931"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M11.4842 2.59218C11.2404 2.52142 10.9889 2.46639 10.7294 2.43494C9.97464 2.3406 9.25133 2.39563 8.5752 2.59218C8.8032 2.01039 9.36926 1.60156 10.0297 1.60156C10.6901 1.60156 11.2562 2.01039 11.4842 2.59218Z"
            stroke="white"
            stroke-width="1.17931"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.3881 15.0608C12.3881 16.358 11.3268 17.4194 10.0295 17.4194C9.38483 17.4194 8.78731 17.1521 8.36276 16.7276C7.93821 16.303 7.6709 15.7055 7.6709 15.0608"
            stroke="white"
            stroke-width="1.17931"
            stroke-miterlimit="10"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-16 justify-center mx-auto items-center h-full w-[60%]">
      <div
        className={classNames(
          "flex flex-col items-center gap-4 text-center w-[60%]",
          styles.container
        )}
      >
        <h1 className="text-3xl font-bold">
          Do you have any additional features in mind?
        </h1>
        <p className="text-lg">
          Here are some common features that would go well with your project!
        </p>
      </div>
      <div className={classNames("flex justify-center gap-20", styles.cards)}>
        <div className={classNames("flex flex-col justify-center gap-2")}>
          <h2 className="font-bold">Additional Features:</h2>
          <div className="flex flex-wrap gap-2 w-[60%]">
            {Array(10)
              .fill(0)
              .map((_, i) => (
                <>
                  <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                    <div className="flex items-center gap-2">
                      {data[0].image}
                      <span>{data[0].title}</span>
                    </div>
                  </CustomCheckBoxText>
                </>
              ))}
          </div>
        </div>
        {/* {data.map((item, i) => (
          <div
            key={i}
            className={classNames(
              "flex flex-col justify-end items-center gap-2 group relative",
              styles.card
            )}
          >
            <div className="flex items-center grow justify-center relative">
              {item.image}
            </div>
            <div>{item.title}</div>

            <input
              type="radio"
              name="project"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default page;
