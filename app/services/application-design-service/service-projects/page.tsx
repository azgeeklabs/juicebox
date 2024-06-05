import classNames from "classnames";
import styles from "./service-projects.module.css";

function page() {
  return (
    <div className="flex flex-col gap-16 justify-center items-center h-full">
      <div
        className={classNames(
          "flex flex-col items-center gap-4 text-center",
          styles.container
        )}
      >
        <h1 className="text-3xl font-bold">
          What type of project are you working on?
        </h1>
        <p className="text-lg w-[60%]">
          Please select the option that best describes your project type. This
          helps us understand the specific requirements for your project.
        </p>
      </div>
      <div className={classNames("flex gap-20", styles.cards)}>
        {Array(5)
          .fill(0)
          .map((_, i: number) => (
            <div
              key={i}
              className={classNames("flex flex-col gap-2 group", styles.card)}
            >
              <div className="flex items-center justify-center relative">
                <svg
                  width="90"
                  height="89"
                  viewBox="0 0 90 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1031_1224"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="20"
                    y="78"
                    width="22"
                    height="7"
                  >
                    <path
                      d="M20.5938 78.209H41.7578V84.0489H20.5938V78.209Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_1031_1224)">
                    <path
                      d="M21.0898 78.3347H41.0039V84.049H21.0898V78.3347Z"
                      fill="#F8F24B"
                    />
                  </g>
                  <path
                    d="M12.9686 40.765L15.8423 49.4225C16.54 48.5792 17.4362 47.9773 18.4018 47.607L14.5361 35.9502C14.1657 34.8226 13.3555 33.9363 12.2874 33.437C11.206 32.9343 10.0122 32.9079 8.90113 33.351L8.60352 33.4634L9.5559 36.7802C11.1498 37.6202 12.3866 39.0223 12.9686 40.765Z"
                    fill="#F8F24B"
                  />
                  <mask
                    id="mask1_1031_1224"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="4"
                    y="38"
                    width="35"
                    height="38"
                  >
                    <path
                      d="M4 38.4204H38.3717V75.6691H4V38.4204Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_1031_1224)">
                    <path
                      d="M23.9368 72.6201V75.4773H38.1597V64.1347C38.1597 62.7491 37.4917 61.4495 36.3674 60.6492L22.4421 50.6492C21.0334 49.6505 19.0856 49.9217 18.0175 51.2775C17.3495 52.1075 17.1511 53.179 17.4057 54.1512L17.4785 54.3794L17.5214 54.5083C17.7199 55.0209 18.0605 55.4938 18.5168 55.8641L29.0856 64.3628C29.7106 64.8489 29.8098 65.7484 29.3105 66.3635C28.8277 66.9918 27.9315 67.0943 27.3197 66.5917L16.7377 58.1062C15.7159 57.263 15.0181 56.1651 14.6775 54.9647L10.2662 41.6776C9.86933 40.4772 8.97316 39.5215 7.83559 39.0652C6.79723 38.6485 5.65967 38.6485 4.63453 39.0652L4.33691 39.1776L10.5638 60.4508C10.8085 61.3205 11.3177 62.0645 12.0287 62.6201L23.3812 71.4925C23.7351 71.7636 23.9368 72.177 23.9368 72.6201Z"
                      fill="#F8F24B"
                    />
                  </g>
                  <mask
                    id="mask2_1031_1224"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="51"
                    y="38"
                    width="36"
                    height="38"
                  >
                    <path
                      d="M51.917 38.4204H86.54V75.6691H51.917V38.4204Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_1031_1224)">
                    <path
                      d="M85.908 39.0652C84.8828 38.6485 83.7453 38.6485 82.7069 39.0652C81.5693 39.5215 80.6732 40.4772 80.2764 41.6776L75.8517 54.9944C75.5244 56.1783 74.8266 57.2795 73.8048 58.1062L63.2228 66.5917C62.611 67.0943 61.7148 66.9918 61.2287 66.3635C60.7327 65.7484 60.8319 64.8489 61.4569 64.3628L72.0257 55.8641C72.4655 55.507 72.8094 55.0506 73.0078 54.5348C73.0211 54.4786 73.0343 54.4223 73.064 54.3628C73.064 54.3496 73.1203 54.2074 73.1203 54.1776V54.1512C73.3914 53.179 73.193 52.1075 72.525 51.2775C71.4437 49.9217 69.5091 49.6505 68.1004 50.6492L54.1751 60.6492C53.0508 61.4495 52.3828 62.7491 52.3828 64.1347V75.4773H66.6057V72.6201C66.6057 72.177 66.8041 71.7636 67.1613 71.4925L78.5105 62.6201C79.2215 62.0645 79.734 61.3205 79.9754 60.4508L86.2056 39.1776L85.908 39.0652Z"
                      fill="#F8F24B"
                    />
                  </g>
                  <path
                    d="M74.7015 49.4225L77.5719 40.765C78.1572 39.0223 79.394 37.6202 80.9879 36.7637L81.9403 33.4634L81.6426 33.351C80.5315 32.9079 79.3378 32.9343 78.2564 33.437C77.1883 33.9363 76.3781 34.8226 76.0077 35.9634L72.1387 47.607C73.1076 47.9773 74.0038 48.5792 74.7015 49.4225Z"
                    fill="#F8F24B"
                  />
                  <mask
                    id="mask3_1031_1224"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="49"
                    y="78"
                    width="21"
                    height="7"
                  >
                    <path
                      d="M49.377 78.209H69.6944V84.0489H49.377V78.209Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask3_1031_1224)">
                    <path
                      d="M49.5391 78.3347H69.4498V84.049H49.5391V78.3347Z"
                      fill="#F8F24B"
                    />
                  </g>
                  <mask
                    id="mask4_1031_1224"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="18"
                    y="4"
                    width="54"
                    height="47"
                  >
                    <path
                      d="M18.9004 4.04883H71.3872V50.2724H18.9004V4.04883Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask4_1031_1224)">
                    <path
                      d="M70.8746 20.3352V18.6785C70.8746 10.5931 64.3435 4.04883 56.3077 4.04883H55.5835C51.7145 4.04883 48.0174 5.59314 45.2859 8.33455C42.5544 5.59314 38.8408 4.04883 34.9883 4.04883H34.2608C26.2118 4.04883 19.6973 10.6064 19.6973 18.6785V20.3352C19.6973 24.5217 21.4731 28.4933 24.5881 31.2777L45.2991 49.7632L66.0101 31.2777C69.1252 28.5065 70.901 24.5217 70.901 20.3352H70.8746ZM53.8044 26.906H48.1166V32.6203H42.4255V26.906H36.7376V21.1917H42.4255V15.4774H48.1166V21.1917H53.8044V26.906Z"
                      fill="#F8F24B"
                    />
                  </g>
                </svg>
              </div>
              <div>Game</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default page;
