import classNames from "classnames";
import styles from "./additional-features.module.css";
import CustomCheckBox from "@/app/_components/customCheckBox/CustomCheckBox";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import { title } from "process";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

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
    {
      title: "Cart",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53259 1.64844L4.68652 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5488 1.64844L15.3949 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.17871 6.24771C2.17871 4.79322 2.95706 4.67529 3.92409 4.67529H16.1575C17.1245 4.67529 17.9028 4.79322 17.9028 6.24771C17.9028 7.93805 17.1245 7.82012 16.1575 7.82012H3.92409C2.95706 7.82012 2.17871 7.93805 2.17871 6.24771Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M8.28027 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.8965 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3.3584 7.93799L4.46695 14.7308C4.71854 16.2561 5.32392 17.3725 7.57247 17.3725H12.3133C14.7584 17.3725 15.1201 16.3032 15.4031 14.8252L16.7239 7.93799"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Chat Support",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7696 8.55915V11.704C14.7696 11.9084 14.7618 12.1049 14.7382 12.2936C14.5574 14.4164 13.3073 15.4699 11.0037 15.4699H10.6892C10.4927 15.4699 10.304 15.5642 10.186 15.7215L9.24262 16.9794C8.82593 17.5376 8.14978 17.5376 7.73309 16.9794L6.78963 15.7215C6.68742 15.5878 6.45944 15.4699 6.28647 15.4699H5.97199C3.46399 15.4699 2.20605 14.8488 2.20605 11.704V8.55915C2.20605 6.25556 3.26744 5.0055 5.38234 4.82467C5.57103 4.80108 5.76758 4.79321 5.97199 4.79321H11.0037C13.5117 4.79321 14.7696 6.05115 14.7696 8.55915Z"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.915 5.41438V8.5592C17.915 10.8707 16.8536 12.1129 14.7387 12.2937C14.7623 12.105 14.7701 11.9084 14.7701 11.704V8.5592C14.7701 6.0512 13.5122 4.79327 11.0042 4.79327H5.97247C5.76805 4.79327 5.5715 4.80113 5.38281 4.82472C5.56364 2.70982 6.81371 1.64844 9.1173 1.64844H14.149C16.657 1.64844 17.915 2.90638 17.915 5.41438Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2441 10.4932H11.2511"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.4921 10.4932H8.49918"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.74015 10.4932H5.74723"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Cart",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53259 1.64844L4.68652 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5488 1.64844L15.3949 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.17871 6.24771C2.17871 4.79322 2.95706 4.67529 3.92409 4.67529H16.1575C17.1245 4.67529 17.9028 4.79322 17.9028 6.24771C17.9028 7.93805 17.1245 7.82012 16.1575 7.82012H3.92409C2.95706 7.82012 2.17871 7.93805 2.17871 6.24771Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M8.28027 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.8965 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3.3584 7.93799L4.46695 14.7308C4.71854 16.2561 5.32392 17.3725 7.57247 17.3725H12.3133C14.7584 17.3725 15.1201 16.3032 15.4031 14.8252L16.7239 7.93799"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Chat Support",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7696 8.55915V11.704C14.7696 11.9084 14.7618 12.1049 14.7382 12.2936C14.5574 14.4164 13.3073 15.4699 11.0037 15.4699H10.6892C10.4927 15.4699 10.304 15.5642 10.186 15.7215L9.24262 16.9794C8.82593 17.5376 8.14978 17.5376 7.73309 16.9794L6.78963 15.7215C6.68742 15.5878 6.45944 15.4699 6.28647 15.4699H5.97199C3.46399 15.4699 2.20605 14.8488 2.20605 11.704V8.55915C2.20605 6.25556 3.26744 5.0055 5.38234 4.82467C5.57103 4.80108 5.76758 4.79321 5.97199 4.79321H11.0037C13.5117 4.79321 14.7696 6.05115 14.7696 8.55915Z"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.915 5.41438V8.5592C17.915 10.8707 16.8536 12.1129 14.7387 12.2937C14.7623 12.105 14.7701 11.9084 14.7701 11.704V8.5592C14.7701 6.0512 13.5122 4.79327 11.0042 4.79327H5.97247C5.76805 4.79327 5.5715 4.80113 5.38281 4.82472C5.56364 2.70982 6.81371 1.64844 9.1173 1.64844H14.149C16.657 1.64844 17.915 2.90638 17.915 5.41438Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2441 10.4932H11.2511"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.4921 10.4932H8.49918"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.74015 10.4932H5.74723"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Cart",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53259 1.64844L4.68652 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5488 1.64844L15.3949 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.17871 6.24771C2.17871 4.79322 2.95706 4.67529 3.92409 4.67529H16.1575C17.1245 4.67529 17.9028 4.79322 17.9028 6.24771C17.9028 7.93805 17.1245 7.82012 16.1575 7.82012H3.92409C2.95706 7.82012 2.17871 7.93805 2.17871 6.24771Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M8.28027 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.8965 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3.3584 7.93799L4.46695 14.7308C4.71854 16.2561 5.32392 17.3725 7.57247 17.3725H12.3133C14.7584 17.3725 15.1201 16.3032 15.4031 14.8252L16.7239 7.93799"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
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
    {
      title: "Chat Support",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7696 8.55915V11.704C14.7696 11.9084 14.7618 12.1049 14.7382 12.2936C14.5574 14.4164 13.3073 15.4699 11.0037 15.4699H10.6892C10.4927 15.4699 10.304 15.5642 10.186 15.7215L9.24262 16.9794C8.82593 17.5376 8.14978 17.5376 7.73309 16.9794L6.78963 15.7215C6.68742 15.5878 6.45944 15.4699 6.28647 15.4699H5.97199C3.46399 15.4699 2.20605 14.8488 2.20605 11.704V8.55915C2.20605 6.25556 3.26744 5.0055 5.38234 4.82467C5.57103 4.80108 5.76758 4.79321 5.97199 4.79321H11.0037C13.5117 4.79321 14.7696 6.05115 14.7696 8.55915Z"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.915 5.41438V8.5592C17.915 10.8707 16.8536 12.1129 14.7387 12.2937C14.7623 12.105 14.7701 11.9084 14.7701 11.704V8.5592C14.7701 6.0512 13.5122 4.79327 11.0042 4.79327H5.97247C5.76805 4.79327 5.5715 4.80113 5.38281 4.82472C5.56364 2.70982 6.81371 1.64844 9.1173 1.64844H14.149C16.657 1.64844 17.915 2.90638 17.915 5.41438Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2441 10.4932H11.2511"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.4921 10.4932H8.49918"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.74015 10.4932H5.74723"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Chat Support",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.7696 8.55915V11.704C14.7696 11.9084 14.7618 12.1049 14.7382 12.2936C14.5574 14.4164 13.3073 15.4699 11.0037 15.4699H10.6892C10.4927 15.4699 10.304 15.5642 10.186 15.7215L9.24262 16.9794C8.82593 17.5376 8.14978 17.5376 7.73309 16.9794L6.78963 15.7215C6.68742 15.5878 6.45944 15.4699 6.28647 15.4699H5.97199C3.46399 15.4699 2.20605 14.8488 2.20605 11.704V8.55915C2.20605 6.25556 3.26744 5.0055 5.38234 4.82467C5.57103 4.80108 5.76758 4.79321 5.97199 4.79321H11.0037C13.5117 4.79321 14.7696 6.05115 14.7696 8.55915Z"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.915 5.41438V8.5592C17.915 10.8707 16.8536 12.1129 14.7387 12.2937C14.7623 12.105 14.7701 11.9084 14.7701 11.704V8.5592C14.7701 6.0512 13.5122 4.79327 11.0042 4.79327H5.97247C5.76805 4.79327 5.5715 4.80113 5.38281 4.82472C5.56364 2.70982 6.81371 1.64844 9.1173 1.64844H14.149C16.657 1.64844 17.915 2.90638 17.915 5.41438Z"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.2441 10.4932H11.2511"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.4921 10.4932H8.49918"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M5.74015 10.4932H5.74723"
            stroke="white"
            stroke-opacity="0.88"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Cart",
      image: (
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53259 1.64844L4.68652 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5488 1.64844L15.3949 4.50237"
            stroke="white"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.17871 6.24771C2.17871 4.79322 2.95706 4.67529 3.92409 4.67529H16.1575C17.1245 4.67529 17.9028 4.79322 17.9028 6.24771C17.9028 7.93805 17.1245 7.82012 16.1575 7.82012H3.92409C2.95706 7.82012 2.17871 7.93805 2.17871 6.24771Z"
            stroke="white"
            stroke-width="1.5"
          />
          <path
            d="M8.28027 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M11.8965 11.0828V13.8738"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M3.3584 7.93799L4.46695 14.7308C4.71854 16.2561 5.32392 17.3725 7.57247 17.3725H12.3133C14.7584 17.3725 15.1201 16.3032 15.4031 14.8252L16.7239 7.93799"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <NextPrevNav
      nextLink="/services/web-design/host-selection"
      backLink="/services/web-design/custom-ecommerce"
    >
      <div
        className={classNames(
          "flex flex-col gap-16 justify-center mx-auto items-center h-full",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-4 text-center w-[60%]">
          <h1 className="text-3xl font-bold">
            Do you have any additional features in mind?
          </h1>
          <p className="text-lg">
            Here are some common features that would go well with your project!
          </p>
        </div>
        <div
          className={classNames(
            "flex flex-col justify-center gap-8",
            styles.cards
          )}
        >
          <div className={classNames("flex flex-col justify-center gap-7")}>
            <h2 className="font-bold">Additional Features:</h2>
            <div className="flex flex-wrap gap-y-3 gap-x-2">
              {data.map((item, i) => (
                <>
                  <CustomCheckBoxText btnSize="sm" inputType="checkbox">
                    <div
                      className={classNames(
                        "flex items-center text-sm font-bold gap-3",
                        styles.card
                      )}
                    >
                      {item.image}
                      <span>{item.title}</span>
                    </div>
                  </CustomCheckBoxText>
                </>
              ))}
            </div>
          </div>
          <div className={classNames("flex flex-col justify-center gap-7")}>
            <h2 className="font-bold">Have more features in mind?</h2>
            <textarea
              className="w-full p-4 bg-[--dark-gray-3] rounded-lg resize-none"
              placeholder="Features..."
              rows={4}
            />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default page;
