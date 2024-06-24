"use client";
import classNames from "classnames";
import styles from "./service-projects.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useContext } from "react";
import { globalContext } from "@/app/_context/GlobalContext";

function page() {
  const data = [
    {
      title: "Healthcare",
      image: (
        <svg
          width="90"
          height="89"
          viewBox="0 0 90 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1059_1232"
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
          <g mask="url(#mask0_1059_1232)">
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
            id="mask1_1059_1232"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="4"
            y="38"
            width="35"
            height="38"
          >
            <path d="M4 38.4204H38.3717V75.6691H4V38.4204Z" fill="white" />
          </mask>
          <g mask="url(#mask1_1059_1232)">
            <path
              d="M23.9368 72.6201V75.4773H38.1597V64.1347C38.1597 62.7491 37.4917 61.4495 36.3674 60.6492L22.4421 50.6492C21.0334 49.6505 19.0856 49.9217 18.0175 51.2775C17.3495 52.1075 17.1511 53.179 17.4057 54.1512L17.4785 54.3794L17.5214 54.5083C17.7199 55.0209 18.0605 55.4938 18.5168 55.8641L29.0856 64.3628C29.7106 64.8489 29.8098 65.7484 29.3105 66.3635C28.8277 66.9918 27.9315 67.0943 27.3197 66.5917L16.7377 58.1062C15.7159 57.263 15.0181 56.1651 14.6775 54.9647L10.2662 41.6776C9.86933 40.4772 8.97316 39.5215 7.83559 39.0652C6.79723 38.6485 5.65967 38.6485 4.63453 39.0652L4.33691 39.1776L10.5638 60.4508C10.8085 61.3205 11.3177 62.0645 12.0287 62.6201L23.3812 71.4925C23.7351 71.7636 23.9368 72.177 23.9368 72.6201Z"
              fill="#F8F24B"
            />
          </g>
          <mask
            id="mask2_1059_1232"
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
          <g mask="url(#mask2_1059_1232)">
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
            id="mask3_1059_1232"
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
          <g mask="url(#mask3_1059_1232)">
            <path
              d="M49.5391 78.3347H69.4498V84.049H49.5391V78.3347Z"
              fill="#F8F24B"
            />
          </g>
          <mask
            id="mask4_1059_1232"
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
          <g mask="url(#mask4_1059_1232)">
            <path
              d="M70.8746 20.3352V18.6785C70.8746 10.5931 64.3435 4.04883 56.3077 4.04883H55.5835C51.7145 4.04883 48.0174 5.59314 45.2859 8.33455C42.5544 5.59314 38.8408 4.04883 34.9883 4.04883H34.2608C26.2118 4.04883 19.6973 10.6064 19.6973 18.6785V20.3352C19.6973 24.5217 21.4731 28.4933 24.5881 31.2777L45.2991 49.7632L66.0101 31.2777C69.1252 28.5065 70.901 24.5217 70.901 20.3352H70.8746ZM53.8044 26.906H48.1166V32.6203H42.4255V26.906H36.7376V21.1917H42.4255V15.4774H48.1166V21.1917H53.8044V26.906Z"
              fill="#F8F24B"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "E-commerce",
      image: (
        <svg
          width="90"
          height="89"
          viewBox="0 0 90 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.6855 66.6597C66.244 66.6597 65.0713 67.829 65.0713 69.2672C65.0713 70.7087 66.244 71.8781 67.6855 71.8781C69.1304 71.8781 70.3031 70.7087 70.3031 69.2672C70.3031 67.829 69.1304 66.6597 67.6855 66.6597Z"
            fill="#F8F24B"
          />
          <mask
            id="mask0_1059_571"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="15"
            y="4"
            width="46"
            height="81"
          >
            <path
              d="M15.3398 4.04883H60.9044V84.0488H15.3398V4.04883Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1059_571)">
            <path
              d="M18.861 14.4823H60.7124V11.0045C60.7124 7.17719 57.574 4.04883 53.7366 4.04883H22.3489C18.5115 4.04883 15.373 7.17719 15.373 11.0045V77.0965C15.373 80.9205 18.5115 84.0522 22.3489 84.0522H53.7366C57.574 84.0522 60.7124 80.9205 60.7124 77.0965V70.1375H18.861V14.4823ZM33.6392 75.1006H42.4463C43.404 75.1006 44.1835 75.8768 44.1835 76.8344C44.1835 77.7888 43.404 78.565 42.4463 78.565H33.6392C32.6782 78.565 31.9019 77.7888 31.9019 76.8344C31.9019 75.8768 32.6782 75.1006 33.6392 75.1006Z"
              fill="#F8F24B"
            />
          </g>
          <path
            d="M68.2094 52.7451C69.9198 52.7451 71.3848 51.5287 71.6637 49.8251L74.661 31.8748H42.7188L37.6617 25.5711C37.329 25.1578 36.8284 24.9192 36.2975 24.9192H29.325C28.3606 24.9192 27.5811 25.6954 27.5811 26.6564C27.5811 27.6208 28.3606 28.397 29.325 28.397H35.4608L40.2054 34.3144L43.2733 52.7451V57.9635C43.2733 60.8399 45.622 63.182 48.5051 63.182H69.4292C70.3936 63.182 71.1731 62.4024 71.1731 61.4414C71.1731 60.4803 70.3936 59.7041 69.4292 59.7041H48.5051C47.5441 59.7041 46.7612 58.9246 46.7612 57.9635V52.7451H68.2094ZM62.4567 49.2673H51.993C51.0152 49.2673 50.2491 48.5012 50.2491 47.5267C50.2491 46.5556 51.0152 45.7895 51.993 45.7895H62.4567C63.4312 45.7895 64.2007 46.5556 64.2007 47.5267C64.2007 48.5012 63.4312 49.2673 62.4567 49.2673ZM48.5051 38.8338H65.9446C66.9191 38.8338 67.6852 39.5966 67.6852 40.5711C67.6852 41.5455 66.9191 42.3117 65.9446 42.3117H48.5051C47.5273 42.3117 46.7612 41.5455 46.7612 40.5711C46.7612 39.5966 47.5273 38.8338 48.5051 38.8338Z"
            fill="#F8F24B"
          />
        </svg>
      ),
    },
    {
      title: "Educational",
      image: (
        <svg
          width="90"
          height="89"
          viewBox="0 0 90 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.2959 45.6706V63.8112C19.2959 69.169 29.9144 75.1362 45.143 75.1362C60.3716 75.1362 70.9863 69.169 70.9901 63.8065V42.7971L42.3576 58.1393L19.2959 45.6706Z"
            fill="#F8F24B"
          />
          <mask
            id="mask0_1059_1746"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="8"
            width="90"
            height="72"
          >
            <path d="M0 8.49878H90V79.5988H0V8.49878Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1059_1746)">
            <path
              d="M51.6167 33.3104C50.9814 33.3104 50.47 32.6963 50.47 31.9323C50.47 31.1682 50.9814 30.5541 51.6167 30.5541H80.6986C80.5591 30.812 80.4778 31.1213 80.4778 31.4541V33.3104H51.6167ZM89.9845 74.0401C88.7526 61.6557 84.7353 55.8573 83.2709 54.1135V31.4541C83.2709 31.1213 83.1895 30.812 83.0501 30.5541C82.8021 30.0854 82.3683 29.7713 81.8724 29.7713C81.7988 29.7713 81.7291 29.7854 81.6555 29.7995L42.3192 8.52759L0 31.2057L42.3657 54.1135L80.4778 33.6901V54.1135C79.0134 55.8573 74.9961 61.6557 73.7603 74.0401C73.7564 74.0916 73.7526 74.1385 73.7526 74.1854C73.7448 74.4385 73.7642 75.7745 74.8102 77.0729C76.1389 78.7323 78.5175 79.5713 81.8724 79.5713C85.2311 79.5713 87.6059 78.7323 88.9385 77.0729C89.9845 75.7745 90.0039 74.4385 89.9961 74.1854C89.9922 74.1385 89.9922 74.0916 89.9845 74.0401Z"
              fill="#F8F24B"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "E-commerce",
      image: (
        <svg
          width="90"
          height="89"
          viewBox="0 0 90 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.6855 66.6597C66.244 66.6597 65.0713 67.829 65.0713 69.2672C65.0713 70.7087 66.244 71.8781 67.6855 71.8781C69.1304 71.8781 70.3031 70.7087 70.3031 69.2672C70.3031 67.829 69.1304 66.6597 67.6855 66.6597Z"
            fill="#F8F24B"
          />
          <mask
            id="mask0_1059_571"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="15"
            y="4"
            width="46"
            height="81"
          >
            <path
              d="M15.3398 4.04883H60.9044V84.0488H15.3398V4.04883Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1059_571)">
            <path
              d="M18.861 14.4823H60.7124V11.0045C60.7124 7.17719 57.574 4.04883 53.7366 4.04883H22.3489C18.5115 4.04883 15.373 7.17719 15.373 11.0045V77.0965C15.373 80.9205 18.5115 84.0522 22.3489 84.0522H53.7366C57.574 84.0522 60.7124 80.9205 60.7124 77.0965V70.1375H18.861V14.4823ZM33.6392 75.1006H42.4463C43.404 75.1006 44.1835 75.8768 44.1835 76.8344C44.1835 77.7888 43.404 78.565 42.4463 78.565H33.6392C32.6782 78.565 31.9019 77.7888 31.9019 76.8344C31.9019 75.8768 32.6782 75.1006 33.6392 75.1006Z"
              fill="#F8F24B"
            />
          </g>
          <path
            d="M68.2094 52.7451C69.9198 52.7451 71.3848 51.5287 71.6637 49.8251L74.661 31.8748H42.7188L37.6617 25.5711C37.329 25.1578 36.8284 24.9192 36.2975 24.9192H29.325C28.3606 24.9192 27.5811 25.6954 27.5811 26.6564C27.5811 27.6208 28.3606 28.397 29.325 28.397H35.4608L40.2054 34.3144L43.2733 52.7451V57.9635C43.2733 60.8399 45.622 63.182 48.5051 63.182H69.4292C70.3936 63.182 71.1731 62.4024 71.1731 61.4414C71.1731 60.4803 70.3936 59.7041 69.4292 59.7041H48.5051C47.5441 59.7041 46.7612 58.9246 46.7612 57.9635V52.7451H68.2094ZM62.4567 49.2673H51.993C51.0152 49.2673 50.2491 48.5012 50.2491 47.5267C50.2491 46.5556 51.0152 45.7895 51.993 45.7895H62.4567C63.4312 45.7895 64.2007 46.5556 64.2007 47.5267C64.2007 48.5012 63.4312 49.2673 62.4567 49.2673ZM48.5051 38.8338H65.9446C66.9191 38.8338 67.6852 39.5966 67.6852 40.5711C67.6852 41.5455 66.9191 42.3117 65.9446 42.3117H48.5051C47.5273 42.3117 46.7612 41.5455 46.7612 40.5711C46.7612 39.5966 47.5273 38.8338 48.5051 38.8338Z"
            fill="#F8F24B"
          />
        </svg>
      ),
    },
    {
      title: "Other",
      image: (
        <svg
          width="80"
          height="81"
          viewBox="0 0 80 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1059_5414"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="80"
            height="81"
          >
            <path d="M0 0.0488281H80V80.0488H0V0.0488281Z" fill="white" />
          </mask>
          <g mask="url(#mask0_1059_5414)">
            <path
              d="M40 0.0488281C38.6905 0.0488281 37.3843 0.111659 36.0813 0.240627C34.7784 0.369596 33.4821 0.561394 32.1991 0.816024C30.9127 1.07065 29.6429 1.39142 28.3895 1.77171C27.1362 2.152 25.9028 2.59182 24.6925 3.09446C23.4821 3.5938 22.3016 4.15266 21.1442 4.77105C19.9901 5.38944 18.869 6.06073 17.7778 6.78825C16.6898 7.51576 15.6382 8.29618 14.6263 9.12621C13.6144 9.95954 12.6422 10.8359 11.7163 11.7651C10.7903 12.691 9.91071 13.6599 9.08069 14.6718C8.25066 15.6837 7.47024 16.7353 6.74272 17.8266C6.01521 18.9146 5.34061 20.0356 4.72553 21.193C4.10714 22.3471 3.54828 23.531 3.04563 24.7413C2.5463 25.9516 2.10317 27.1818 1.72288 28.4351C1.34259 29.6917 1.02513 30.9582 0.770503 32.2446C0.515873 33.531 0.320767 34.824 0.195106 36.1269C0.0661374 37.4298 0 38.7393 0 40.0488C0 41.3584 0.0661374 42.6646 0.195106 43.9675C0.320767 45.2737 0.515873 46.5667 0.770503 47.8531C1.02513 49.1361 1.34259 50.406 1.72288 51.6593C2.10317 52.9126 2.5463 54.146 3.04563 55.3564C3.54828 56.5667 4.10714 57.7472 4.72553 58.9046C5.34061 60.0587 6.01521 61.1831 6.74272 62.271C7.47024 63.359 8.25066 64.4106 9.08069 65.4225C9.91071 66.4377 10.7903 67.4066 11.7163 68.3326C12.6422 69.2585 13.6144 70.1381 14.6263 70.9681C15.6382 71.7982 16.6898 72.5786 17.7778 73.3061C18.869 74.0336 19.9901 74.7082 21.1442 75.3233C22.3016 75.9417 23.4821 76.5005 24.6925 77.0032C25.9028 77.5058 27.1362 77.9457 28.3895 78.3259C29.6429 78.7062 30.9127 79.0237 32.1991 79.2783C33.4821 79.5363 34.7784 79.7281 36.0813 79.857C37.3843 79.9827 38.6905 80.0488 40 80.0488C41.3128 80.0488 42.619 79.9827 43.922 79.857C45.2249 79.7281 46.5212 79.5363 47.8042 79.2783C49.0906 79.0237 50.3605 78.7062 51.6138 78.3259C52.8671 77.9457 54.0972 77.5058 55.3075 77.0032C56.5179 76.5005 57.7017 75.9417 58.8558 75.3233C60.0132 74.7082 61.1343 74.0336 62.2255 73.3061C63.3135 72.5786 64.3651 71.7982 65.377 70.9681C66.3889 70.1381 67.3578 69.2585 68.287 68.3326C69.213 67.4066 70.0893 66.4377 70.9226 65.4225C71.7526 64.4106 72.5331 63.359 73.2606 62.271C73.9881 61.1831 74.6594 60.0587 75.2778 58.9046C75.8962 57.7472 76.455 56.5667 76.9577 55.3564C77.457 54.146 77.9001 52.9126 78.2804 51.6593C78.6607 50.406 78.9782 49.1361 79.2328 47.8531C79.4874 46.5667 79.6792 45.2737 79.8082 43.9675C79.9372 42.6646 80 41.3584 80 40.0488C80 38.7393 79.9372 37.4298 79.8082 36.1269C79.6792 34.824 79.4874 33.531 79.2328 32.2446C78.9782 30.9582 78.6607 29.6917 78.2804 28.4351C77.9001 27.1818 77.457 25.9516 76.9577 24.7413C76.455 23.531 75.8962 22.3471 75.2778 21.193C74.6594 20.0356 73.9881 18.9146 73.2606 17.8266C72.5331 16.7353 71.7526 15.6837 70.9226 14.6718C70.0893 13.6599 69.213 12.691 68.287 11.7651C67.3578 10.8359 66.3889 9.95954 65.377 9.12621C64.3651 8.29618 63.3135 7.51576 62.2255 6.78825C61.1343 6.06073 60.0132 5.38944 58.8558 4.77105C57.7017 4.15266 56.5179 3.5938 55.3075 3.09446C54.0972 2.59182 52.8671 2.152 51.6138 1.77171C50.3605 1.39142 49.0906 1.07065 47.8042 0.816024C46.5212 0.561394 45.2249 0.369596 43.922 0.240627C42.619 0.111659 41.3128 0.0488281 40 0.0488281ZM37.1429 57.1917H20C19.623 57.1917 19.2593 57.1189 18.9087 56.9734C18.5582 56.8279 18.2474 56.6229 17.9795 56.355C17.7116 56.0872 17.5066 55.7763 17.3611 55.4258C17.2156 55.0786 17.1429 54.7115 17.1429 54.3345C17.1429 53.9543 17.2156 53.5905 17.3611 53.24C17.5066 52.8894 17.7116 52.5819 17.9795 52.314C18.2474 52.0462 18.5582 51.8378 18.9087 51.6957C19.2593 51.5502 19.623 51.4774 20 51.4774H37.1429C37.5231 51.4774 37.8869 51.5502 38.2374 51.6957C38.588 51.8378 38.8955 52.0462 39.1634 52.314C39.4312 52.5819 39.6395 52.8894 39.7851 53.24C39.9272 53.5905 40 53.9543 40 54.3345C40 54.7115 39.9272 55.0786 39.7851 55.4258C39.6395 55.7763 39.4312 56.0872 39.1634 56.355C38.8955 56.6229 38.588 56.8279 38.2374 56.9734C37.8869 57.1189 37.5231 57.1917 37.1429 57.1917ZM60 57.1917H57.1429V60.0488C57.1429 60.4258 57.0701 60.7929 56.9279 61.1401C56.7824 61.4906 56.5741 61.8015 56.3062 62.0693C56.0384 62.3372 55.7308 62.5422 55.3803 62.6877C55.0298 62.8332 54.666 62.906 54.2857 62.906C53.9087 62.906 53.545 62.8332 53.1944 62.6877C52.8439 62.5422 52.5331 62.3372 52.2652 62.0693C51.9974 61.8015 51.7923 61.4906 51.6468 61.1401C51.5013 60.7929 51.4286 60.4258 51.4286 60.0488V57.1917H48.5714C48.1944 57.1917 47.8307 57.1189 47.4802 56.9734C47.1296 56.8279 46.8188 56.6229 46.5509 56.355C46.2831 56.0872 46.078 55.7763 45.9325 55.4258C45.787 55.0786 45.7143 54.7115 45.7143 54.3345C45.7143 53.9543 45.787 53.5905 45.9325 53.24C46.078 52.8894 46.2831 52.5819 46.5509 52.314C46.8188 52.0462 47.1296 51.8378 47.4802 51.6957C47.8307 51.5502 48.1944 51.4774 48.5714 51.4774H51.4286V48.6203C51.4286 48.24 51.5013 47.8762 51.6468 47.5257C51.7923 47.1752 51.9974 46.8676 52.2652 46.5998C52.5331 46.3319 52.8439 46.1236 53.1944 45.9814C53.545 45.8359 53.9087 45.7631 54.2857 45.7631C54.666 45.7631 55.0298 45.8359 55.3803 45.9814C55.7308 46.1236 56.0384 46.3319 56.3062 46.5998C56.5741 46.8676 56.7824 47.1752 56.9279 47.5257C57.0701 47.8762 57.1429 48.24 57.1429 48.6203V51.4774H60C60.3803 51.4774 60.744 51.5502 61.0946 51.6957C61.4451 51.8378 61.7526 52.0462 62.0205 52.314C62.2884 52.5819 62.4967 52.8894 62.6422 53.24C62.7844 53.5905 62.8571 53.9543 62.8571 54.3345C62.8571 54.7115 62.7844 55.0786 62.6422 55.4258C62.4967 55.7763 62.2884 56.0872 62.0205 56.355C61.7526 56.6229 61.4451 56.8279 61.0946 56.9734C60.744 57.1189 60.3803 57.1917 60 57.1917ZM60 42.906H20C19.623 42.906 19.2593 42.8332 18.9087 42.6877C18.5582 42.5422 18.2474 42.3372 17.9795 42.0693C17.7116 41.8015 17.5066 41.4906 17.3611 41.1401C17.2156 40.7929 17.1429 40.4258 17.1429 40.0488C17.1429 39.6685 17.2156 39.3048 17.3611 38.9543C17.5066 38.6037 17.7116 38.2962 17.9795 38.0283C18.2474 37.7605 18.5582 37.5521 18.9087 37.4099C19.2593 37.2644 19.623 37.1917 20 37.1917H60C60.3803 37.1917 60.744 37.2644 61.0946 37.4099C61.4451 37.5521 61.7526 37.7605 62.0205 38.0283C62.2884 38.2962 62.4967 38.6037 62.6422 38.9543C62.7844 39.3048 62.8571 39.6685 62.8571 40.0488C62.8571 40.4258 62.7844 40.7929 62.6422 41.1401C62.4967 41.4906 62.2884 41.8015 62.0205 42.0693C61.7526 42.3372 61.4451 42.5422 61.0946 42.6877C60.744 42.8332 60.3803 42.906 60 42.906ZM60 28.6203H20C19.623 28.6203 19.2593 28.5475 18.9087 28.402C18.5582 28.2565 18.2474 28.0515 17.9795 27.7836C17.7116 27.5158 17.5066 27.2049 17.3611 26.8544C17.2156 26.5072 17.1429 26.1401 17.1429 25.7631C17.1429 25.3828 17.2156 25.0191 17.3611 24.6685C17.5066 24.318 17.7116 24.0105 17.9795 23.7426C18.2474 23.4748 18.5582 23.2664 18.9087 23.1242C19.2593 22.9787 19.623 22.906 20 22.906H60C60.3803 22.906 60.744 22.9787 61.0946 23.1242C61.4451 23.2664 61.7526 23.4748 62.0205 23.7426C62.2884 24.0105 62.4967 24.318 62.6422 24.6685C62.7844 25.0191 62.8571 25.3828 62.8571 25.7631C62.8571 26.1401 62.7844 26.5072 62.6422 26.8544C62.4967 27.2049 62.2884 27.5158 62.0205 27.7836C61.7526 28.0515 61.4451 28.2565 61.0946 28.402C60.744 28.5475 60.3803 28.6203 60 28.6203Z"
              fill="#F8F24B"
            />
          </g>
        </svg>
      ),
    },
  ];

  const { step, setStep } = useContext(globalContext);


  return (
    <NextPrevNav
      nextLink="/dashboard/services/application-design-service/app-style"
      backLink="/dashboard/services/application-design-service/"
    >
      <div className="flex flex-col gap-[var(--64px)] justify-center items-center h-full">
        <div
          className={classNames(
            "flex flex-col items-center gap-[var(--16px)] text-center",
            styles.container
          )}
        >
          <h1 className="text-[--30px] font-bold">
            What type of project are you working on?
          </h1>
          <p className="text-[--18px] w-[60%]">
            Please select the option that best describes your project type. This
            helps us understand the specific requirements for your project.
          </p>
        </div>
        <div className={classNames("flex ", styles.cards)}>
          {data.map((item, i) => (
            <div
              key={i}
              className={classNames(
                "flex flex-col justify-end items-center gap-[var(--8px)] group relative",
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
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
}

export default page;
