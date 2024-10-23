import React from "react";
import styles from "./caseStudy.module.css";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full pt-[--sy-100px] px-[--64px]">
      <h1 className=" [font-family:Alfa_Slab_One] text-[--102px] w-fit mx-auto text-[#F8F24B] mb-[--sy-40px]">
        Machine Genius
      </h1>
      <p className=" text-[--32px] font-bold text-center mb-[--sy-90px]">
        Web Development - UX/UI{" "}
      </p>
      <div className=" w-full border-[3px] border-[#353535] grid grid-cols-4">
        <div className=" col-span-3 w-full py-[--sy-64px] px-[--60px] border-r-[3px] border-[#353535]">
          <h3
            className=" font-semibold text-[--40px] mb-[--sy-35px]"
            id="Project-Overview"
          >
            Project overview
          </h3>
          <p className=" text-[--24px] mb-[--sy-40px]">
            Machine Genius is an innovative platform offering AI-powered
            services designed to enhance productivity and efficiency across
            multiple business functions. From content creation to customer
            service, Machine Genius empowers users to automate complex tasks,
            saving time and resources while maintaining high-quality output. By
            integrating state-of-the-art artificial intelligence, we aim to
            provide versatile tools that cater to a wide range of industries and
            business needs.
          </p>
          <div className=" w-full flex flex-col justify-center items-center h-[570px] mb-[--sy-80px]">
            <svg
              className=" w-[--366px]"
              viewBox="0 0 129 59"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.11719 23.6576V14.0262C1.11719 12.7537 1.42652 11.5867 2.04518 10.5321C2.66384 9.47056 3.55669 8.62693 4.72371 8.00827C5.89073 7.38257 7.29679 7.07324 8.9489 7.07324C9.74332 7.07324 10.4745 7.16464 11.1494 7.34039C11.8243 7.52318 12.45 7.7833 13.0264 8.12075C13.6029 8.4582 14.1091 8.86596 14.538 9.32996H14.5731C15.023 8.86596 15.5363 8.4582 16.1127 8.12075C16.6892 7.7833 17.3219 7.52318 18.0109 7.34039C18.6928 7.15761 19.431 7.07324 20.2254 7.07324C21.8705 7.07324 23.2836 7.38257 24.4506 8.00827C25.6176 8.63396 26.5105 9.47759 27.1292 10.5321C27.7478 11.5867 28.0571 12.7607 28.0571 14.0262V23.6576H23.6562V14.0262C23.6562 13.4356 23.5015 12.8943 23.1922 12.4022C22.8829 11.9101 22.4681 11.5234 21.9549 11.2281C21.4417 10.9329 20.8652 10.7852 20.2184 10.7852C19.5716 10.7852 19.0233 10.9329 18.503 11.2281C17.9758 11.5234 17.561 11.9171 17.2516 12.4022C16.9423 12.8873 16.7876 13.4286 16.7876 14.0262V23.6576H12.3867V14.0262C12.3867 13.4356 12.232 12.8943 11.9227 12.4022C11.6134 11.9171 11.1986 11.5234 10.6854 11.2281C10.1722 10.9329 9.59568 10.7852 8.9489 10.7852C8.30211 10.7852 7.75375 10.9329 7.23351 11.2281C6.70624 11.5234 6.29146 11.9171 5.98213 12.4022C5.6728 12.8873 5.51813 13.4286 5.51813 14.0262V23.6576H1.11719Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M38.456 24.0375C36.9585 24.0375 35.6509 23.6578 34.5401 22.8915C33.4294 22.1323 32.5646 21.1058 31.953 19.8263C31.3414 18.5468 31.0391 17.1267 31.0391 15.5801C31.0391 14.0334 31.3835 12.55 32.0795 11.2564C32.7755 9.96287 33.7738 8.94349 35.0815 8.19125C36.3891 7.43901 37.9498 7.06641 39.7706 7.06641C41.5915 7.06641 43.1663 7.44604 44.4247 8.21234C45.6901 8.97161 46.6533 10.0051 47.3141 11.2986C47.975 12.5922 48.3124 14.0193 48.3124 15.5871V23.6649H43.9115V20.9652H43.8482C43.5248 21.5347 43.1241 22.0549 42.646 22.526C42.1609 22.9899 41.5774 23.3626 40.8955 23.6367C40.2136 23.9109 39.398 24.0515 38.456 24.0515V24.0375ZM39.7074 20.3184C40.5651 20.3184 41.3032 20.1075 41.9219 19.6857C42.5406 19.2639 43.0186 18.6874 43.349 17.9563C43.6795 17.2251 43.8482 16.4167 43.8482 15.5238C43.8482 14.631 43.6795 13.8365 43.349 13.1265C43.0186 12.4164 42.5406 11.847 41.9219 11.4252C41.3032 11.0034 40.5651 10.7924 39.7074 10.7924C38.8497 10.7924 38.0764 11.0034 37.4436 11.4252C36.8109 11.847 36.3328 12.4164 35.9954 13.1265C35.665 13.8365 35.4962 14.638 35.4962 15.5238C35.4962 16.4096 35.665 17.2251 35.9954 17.9563C36.3258 18.6874 36.8109 19.2639 37.4436 19.6857C38.0764 20.1075 38.8286 20.3184 39.7074 20.3184Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M60.1308 23.6585C58.4365 23.6585 56.932 23.2999 55.6033 22.5758C54.2746 21.8587 53.2271 20.8885 52.4537 19.6653C51.6804 18.449 51.3008 17.0711 51.3008 15.5455C51.3008 14.02 51.6874 12.6491 52.4537 11.4258C53.2271 10.2096 54.2746 9.23939 55.6033 8.51528C56.932 7.79116 58.4365 7.43262 60.1308 7.43262H62.1836V11.1516H60.1308C59.2309 11.1516 58.4576 11.3414 57.8038 11.7211C57.15 12.1007 56.6508 12.628 56.2923 13.2959C55.9408 13.9637 55.765 14.7089 55.765 15.5385C55.765 16.3681 55.9408 17.1133 56.2923 17.7812C56.6438 18.449 57.15 18.9763 57.8038 19.3559C58.4576 19.7356 59.2309 19.9254 60.1308 19.9254H62.1836V23.6444H60.1308V23.6585Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M65.0078 23.6581V0.451172H69.4088V8.59221C70.0907 8.04385 70.8289 7.65016 71.6233 7.41816C72.4177 7.18616 73.1981 7.06665 73.9644 7.06665C75.5462 7.06665 76.8608 7.39707 77.8943 8.05088C78.9348 8.7047 79.7081 9.59051 80.2213 10.6872C80.7345 11.791 80.9946 13.0072 80.9946 14.343V23.6581H76.5937V14.343C76.5937 13.6892 76.432 13.0846 76.1156 12.5503C75.7922 12.0089 75.3634 11.5801 74.815 11.2637C74.2667 10.9474 73.6621 10.7857 73.0012 10.7857C72.3404 10.7857 71.7639 10.9403 71.2226 11.2497C70.6742 11.559 70.2383 11.9738 69.9079 12.487C69.5775 13.0072 69.4088 13.5837 69.4088 14.2164V23.6581H65.0078Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M87.1621 5.50568C86.4099 5.50568 85.7631 5.23853 85.2218 4.6972C84.6804 4.15587 84.4062 3.51611 84.4062 2.7709C84.4062 2.0257 84.6804 1.38594 85.2218 0.844613C85.7701 0.303283 86.4169 0.0361328 87.1621 0.0361328C87.9073 0.0361328 88.5611 0.303283 89.1025 0.844613C89.6508 1.38594 89.918 2.0257 89.918 2.7709C89.918 3.51611 89.6438 4.15587 89.1025 4.6972C88.5611 5.23853 87.9073 5.50568 87.1621 5.50568ZM84.9476 23.6578V7.44603H89.3766V23.6578H84.9476Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M93.3008 23.6578V14.3427C93.3008 13.007 93.6171 11.7907 94.2499 10.687C94.8826 9.58324 95.7965 8.70446 96.9987 8.05064C98.2009 7.39683 99.6351 7.06641 101.301 7.06641C102.967 7.06641 104.43 7.39683 105.618 8.05064C106.806 8.70446 107.713 9.59027 108.346 10.687C108.978 11.7907 109.295 13.007 109.295 14.3427V23.6578H104.894V14.3427C104.894 13.6889 104.732 13.0843 104.416 12.55C104.092 12.0087 103.663 11.5798 103.115 11.2635C102.567 10.9471 101.962 10.7854 101.301 10.7854C100.64 10.7854 100.036 10.9471 99.4874 11.2635C98.9391 11.5798 98.5102 12.0087 98.1868 12.55C97.8634 13.0913 97.7088 13.6889 97.7088 14.3427V23.6578H93.3078H93.3008Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M121.49 23.657C119.627 23.657 118.003 23.3055 116.625 22.5955C115.247 21.8854 114.172 20.9152 113.412 19.6849C112.653 18.4546 112.273 17.0767 112.273 15.5511C112.273 13.8358 112.625 12.3383 113.335 11.0658C114.045 9.79337 115.008 8.80913 116.224 8.1061C117.448 7.40308 118.826 7.05859 120.365 7.05859C122.207 7.05859 123.698 7.43823 124.844 8.20453C125.989 8.96379 126.826 9.99021 127.36 11.2697C127.895 12.5492 128.162 13.9764 128.162 15.5441C128.162 15.755 128.148 16.0081 128.127 16.2893C128.106 16.5776 128.07 16.7955 128.028 16.9431H116.949C117.117 17.597 117.413 18.1523 117.834 18.5953C118.249 19.0382 118.776 19.3756 119.409 19.5935C120.042 19.8185 120.752 19.924 121.546 19.924H126.109V23.643H121.483L121.49 23.657ZM116.927 14.0256H123.768C123.726 13.6249 123.648 13.2452 123.543 12.8937C123.437 12.5422 123.283 12.2329 123.093 11.9587C122.903 11.6845 122.678 11.4525 122.418 11.2627C122.158 11.0729 121.863 10.9252 121.518 10.8198C121.174 10.7143 120.801 10.6581 120.393 10.6581C119.859 10.6581 119.381 10.7565 118.966 10.9463C118.551 11.1361 118.2 11.3892 117.926 11.7056C117.645 12.022 117.427 12.3805 117.265 12.7883C117.103 13.189 116.991 13.6038 116.927 14.0256Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M17.2663 58.9568C16.022 58.9568 14.9604 58.7388 14.0746 58.303C13.1888 57.8671 12.5139 57.2414 12.0499 56.4118C11.5859 55.5823 11.3609 54.6121 11.3609 53.4872C11.3609 53.2131 11.3679 52.9318 11.3961 52.6436C11.4171 52.3554 11.4523 52.0671 11.4945 51.7719C9.73691 51.7719 8.1551 51.4836 6.74202 50.9001C5.32894 50.3166 4.11973 49.5151 3.11441 48.4817C2.10908 47.4553 1.33575 46.2601 0.80145 44.9033C0.26715 43.5464 0 42.1052 0 40.5797C0 39.0541 0.26715 37.5848 0.80145 36.242C1.33575 34.8992 2.10908 33.7111 3.11441 32.6847C4.11973 31.6583 5.32894 30.8498 6.74202 30.2663C8.1551 29.6828 9.72988 29.3945 11.4593 29.3945C13.1888 29.3945 14.7635 29.6757 16.1766 30.2382C17.5897 30.8006 18.7989 31.5809 19.8042 32.5933C20.8096 33.5986 21.5829 34.7586 22.1172 36.0592C22.6515 37.3598 22.9187 38.7659 22.9187 40.2703V52.9248C22.9187 54.0286 22.7148 55.0409 22.307 55.9619C21.8993 56.8829 21.2806 57.614 20.444 58.1553C19.6074 58.6967 18.5529 58.9638 17.2663 58.9638V58.9568ZM11.4523 47.7646C11.7546 47.7646 12.0428 47.7505 12.317 47.7154C12.5982 47.6873 12.8724 47.6381 13.1536 47.5748C13.5192 47.0264 13.948 46.471 14.4402 45.9227C14.9323 45.3743 15.5017 44.833 16.1415 44.2987C16.7812 43.7714 17.5124 43.2582 18.3279 42.7731V40.2633C18.3279 39.2861 18.1592 38.3862 17.8147 37.5426C17.4702 36.706 16.9921 35.9819 16.3735 35.3632C15.7548 34.7516 15.0237 34.2665 14.1871 33.915C13.3505 33.5635 12.4436 33.3877 11.4593 33.3877C10.4751 33.3877 9.56818 33.5705 8.73158 33.9291C7.89498 34.2876 7.17087 34.7938 6.54517 35.4406C5.92651 36.0873 5.44142 36.8536 5.10397 37.7324C4.75949 38.6112 4.59076 39.5603 4.59076 40.5797C4.59076 41.5991 4.75949 42.5482 5.10397 43.4269C5.44845 44.3057 5.92651 45.072 6.54517 45.7188C7.16384 46.3656 7.89498 46.8718 8.73158 47.2303C9.56818 47.5888 10.4751 47.7716 11.4593 47.7716L11.4523 47.7646ZM16.9781 54.8863C17.428 54.8863 17.7655 54.7105 17.9904 54.359C18.2154 54.0075 18.3279 53.5505 18.3279 52.974V47.3779C17.8569 47.7787 17.4491 48.1864 17.1046 48.6012C16.7601 49.016 16.486 49.4519 16.268 49.9018C16.0571 50.3588 15.8954 50.8368 15.79 51.35C15.6845 51.8562 15.6283 52.3975 15.6283 52.974C15.6283 53.3748 15.6845 53.7192 15.804 54.0075C15.9235 54.2957 16.0852 54.5137 16.3032 54.6613C16.5141 54.8089 16.739 54.8863 16.9781 54.8863Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M37.0409 52.0242C35.1779 52.0242 33.5539 51.6727 32.1759 50.9627C30.798 50.2526 29.7224 49.2824 28.9631 48.0521C28.2039 46.8218 27.8242 45.4439 27.8242 43.9183C27.8242 42.203 28.1757 40.7055 28.8858 39.433C29.5958 38.1606 30.559 37.1763 31.7752 36.4733C32.9915 35.7703 34.3764 35.4258 35.916 35.4258C37.758 35.4258 39.2484 35.8054 40.3943 36.5717C41.5403 37.331 42.3769 38.3574 42.9112 39.6369C43.4455 40.9164 43.7126 42.3436 43.7126 43.9113C43.7126 44.1222 43.6985 44.3753 43.6775 44.6565C43.6564 44.9377 43.6212 45.1627 43.579 45.3103H32.4993C32.6681 45.9712 32.9633 46.5195 33.3852 46.9624C33.807 47.4053 34.3272 47.7428 34.9599 47.9607C35.5927 48.1857 36.3027 48.2912 37.0971 48.2912H41.6598V52.0102H37.0339L37.0409 52.0242ZM32.4783 42.3928H39.3187C39.2765 41.992 39.1992 41.6124 39.0937 41.2679C38.9883 40.9164 38.8336 40.6071 38.6438 40.3329C38.454 40.0587 38.229 39.8267 37.9689 39.6299C37.7088 39.433 37.4135 39.2924 37.069 39.187C36.7245 39.0815 36.3519 39.0253 35.9442 39.0253C35.4099 39.0253 34.9318 39.1237 34.517 39.3135C34.1022 39.5033 33.7507 39.7564 33.4765 40.0728C33.1953 40.3891 32.9774 40.7547 32.8157 41.1554C32.654 41.5562 32.5415 41.971 32.4783 42.3928Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M49.0234 52.025V42.7099C49.0234 41.3742 49.3398 40.1579 49.9725 39.0542C50.6052 37.9504 51.5192 37.0716 52.7214 36.4178C53.9235 35.764 55.3577 35.4336 57.0239 35.4336C58.6901 35.4336 60.1523 35.764 61.3405 36.4178C62.5286 37.0716 63.4355 37.9575 64.0682 39.0542C64.7009 40.1579 65.0173 41.3742 65.0173 42.7099V52.025H60.6163V42.7099C60.6163 42.0561 60.4546 41.4515 60.1383 40.9102C59.8149 40.3688 59.386 39.94 58.8377 39.6236C58.2893 39.3073 57.6847 39.1456 57.0239 39.1456C56.363 39.1456 55.7584 39.3073 55.2101 39.6236C54.6617 39.94 54.2329 40.3688 53.9095 40.9102C53.5861 41.4515 53.4314 42.0491 53.4314 42.7099V52.025H49.0305H49.0234Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M73.584 33.8729C72.8317 33.8729 72.185 33.6057 71.6436 33.0644C71.0953 32.5231 70.8281 31.8833 70.8281 31.1381C70.8281 30.3929 71.1023 29.7531 71.6436 29.2118C72.185 28.6705 72.8388 28.4033 73.584 28.4033C74.3292 28.4033 74.983 28.6705 75.5243 29.2118C76.0657 29.7531 76.3398 30.3929 76.3398 31.1381C76.3398 31.8833 76.0657 32.5231 75.5243 33.0644C74.976 33.6057 74.3292 33.8729 73.584 33.8729ZM71.3695 52.025V35.8132H75.7985V52.025H71.3695Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M90.1137 52.4117C88.4476 52.4117 87.0134 52.0813 85.8112 51.4275C84.609 50.7737 83.6951 49.8949 83.0624 48.7911C82.4296 47.6874 82.1133 46.4712 82.1133 45.1354V35.8203H86.5142V45.1354C86.5142 45.7892 86.6759 46.3938 86.9923 46.9281C87.3157 47.4695 87.7445 47.8983 88.2929 48.2147C88.8412 48.531 89.4458 48.6927 90.1067 48.6927C90.7675 48.6927 91.3721 48.531 91.9205 48.2147C92.4689 47.8983 92.8977 47.4695 93.2211 46.9281C93.5445 46.3868 93.6992 45.7892 93.6992 45.1354V35.8203H98.1001V45.1354C98.1001 46.4712 97.7837 47.6874 97.151 48.7911C96.5183 49.8949 95.6114 50.7737 94.4233 51.4275C93.2352 52.0813 91.7939 52.4117 90.1067 52.4117H90.1137Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M104.531 52.0253V48.3063H112.525C112.785 48.3063 113.01 48.25 113.214 48.1446C113.417 48.0391 113.579 47.8915 113.699 47.7017C113.818 47.5118 113.874 47.3009 113.874 47.0689C113.874 46.8158 113.818 46.5909 113.699 46.401C113.579 46.2112 113.417 46.0566 113.214 45.9371C113.01 45.8175 112.778 45.7613 112.525 45.7613H109.445C108.398 45.7613 107.449 45.5996 106.605 45.2692C105.761 44.9388 105.087 44.4115 104.58 43.6803C104.081 42.9492 103.828 41.9931 103.828 40.805C103.828 39.891 104.06 39.0615 104.517 38.3092C104.974 37.557 105.6 36.9524 106.38 36.4954C107.16 36.0384 108.025 35.8135 108.967 35.8135H116.644V39.5325H109.389C109.066 39.5325 108.784 39.6379 108.538 39.8488C108.292 40.0598 108.166 40.3339 108.166 40.6784C108.166 41.0229 108.285 41.2971 108.517 41.522C108.749 41.747 109.045 41.8525 109.382 41.8525H112.461C113.635 41.8525 114.655 42.0282 115.512 42.3797C116.37 42.7313 117.031 43.2726 117.502 44.0178C117.973 44.763 118.205 45.7332 118.205 46.9424C118.205 47.8774 117.966 48.7281 117.502 49.5014C117.031 50.2747 116.398 50.8864 115.611 51.3433C114.816 51.8003 113.931 52.0253 112.946 52.0253H104.531Z"
                fill="#FFFFFB"
              ></path>
              <path
                d="M126.011 52.4123C125.196 52.4123 124.5 52.117 123.909 51.5405C123.319 50.957 123.023 50.261 123.023 49.4595C123.023 48.6581 123.319 47.9621 123.909 47.3786C124.5 46.7951 125.196 46.5068 126.011 46.5068C126.827 46.5068 127.523 46.7951 128.113 47.3786C128.704 47.9621 128.999 48.6581 128.999 49.4595C128.999 49.9868 128.866 50.4789 128.598 50.9359C128.331 51.3929 127.973 51.7514 127.523 52.0186C127.073 52.2857 126.567 52.4193 126.011 52.4193V52.4123Z"
                fill="#FFFFFB"
              ></path>
            </svg>
            <p className=" text-[--32px] font-bold w-fit text-[#FFFFFB] mt-[--sy-26px]">
              The Last Software You Will Ever Buy..
            </p>
          </div>
          <h3
            id="Project-Objectives"
            className=" font-semibold text-[--40px] mb-[--sy-80px]"
          >
            Project objectives
          </h3>
          <div className=" w-full flex flex-col gap-[--sy-15px] mb-[--sy-100px]">
            <div
              className={`${styles.objective} rounded-[--19px] bg-[#1d1d1d] flex items-center gap-[--60px]`}
            >
              <span className=" font-bold text-[--33px]">
                REVENUE <br />
                GROWTH
              </span>
              <p className=" pl-[--60px] py-[--sy-7px] border-l-[1px] border-white text-[--24px]">
                Increase Subscription Rates: Expand the user base by 20% in the
                next 12 months through targeted marketing campaigns and
                strategic partnerships, offering businesses a clear ROI from
                AI-powered automation.
              </p>
            </div>
            <div
              className={`${styles.objective} rounded-[--19px] bg-[#1d1d1d] flex items-center gap-[--60px]`}
            >
              <span className=" font-bold text-[--33px]">
                CUSTOMER <br />
                TRUST
              </span>
              <p className=" pl-[--60px] py-[--sy-7px] border-l-[1px] border-white text-[--24px]">
                Positive Customer Feedback Loop: Actively collect user feedback
                and integrate suggested improvements into quarterly updates,
                showing customers that their input shapes the platform’s
                evolution.
              </p>
            </div>
            <div
              className={`${styles.objective} rounded-[--19px] bg-[#1d1d1d] flex items-center gap-[--60px]`}
            >
              <span className=" font-bold text-[--33px]">
                SCORE <br />
                UPLIFT
              </span>
              <p className=" pl-[--60px] py-[--sy-7px] border-l-[1px] border-white text-[--24px]">
                Improve AI Accuracy & Relevance: Continuously refine AI
                algorithms based on customer feedback and real-time data,
                leading to a 15% uplift in AI-generated content quality.
              </p>
            </div>
          </div>
          <h3
            id="Project-Timeline"
            className=" font-semibold text-[--40px] mb-[--sy-64px]"
          >
            Project Timeline:
          </h3>
          <div className=" rounded-[--35px] border-[3px] border-[#353535] overflow-hidden mb-[--sy-80px]">
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 1
              </span>
              <p className=" flex flex-col gap-[--sy-10px] justify-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Content Writing Module
                {/* <ul className="pl-[--51px] list-disc">
                  <li className=" text-[--17px]">
                    Set up the platform's architecture for content creation.
                  </li>
                  <li className=" text-[--17px]">
                    Develop and integrate AI-powered content writing tools (blog
                    posts, articles, product descriptions).
                  </li>
                  <li className=" text-[--17px]">
                    Implement quality assurance features for grammar, tone, and
                    style consistency.
                  </li>
                </ul> */}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 2
              </span>
              <p className=" flex flex-col gap-[--sy-10px] justify-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Video Creation Module
                {/* <ul className="pl-[--51px] list-disc">
                  <li className=" text-[--17px]">
                    Build the video generation module, allowing users to create
                    videos from text or templates.
                  </li>
                  <li className=" text-[--17px]">
                    Integrate features for adding animations, voiceovers, and
                    editing options.
                  </li>
                  <li className=" text-[--17px]">
                    Implement video rendering and export functionalities.
                  </li>
                </ul> */}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 3
              </span>
              <p className=" flex flex-col gap-[--sy-10px] justify-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Accounting Module
                {/* <ul className="pl-[--51px] list-disc">
                  <li className=" text-[--17px]">
                    Design the back-end for automated accounting services,
                    including invoicing, expense tracking, and tax calculations.
                  </li>
                  <li className=" text-[--17px]">
                    Integrate with accounting software (e.g., QuickBooks, Xero)
                    for data sync and reporting.
                  </li>
                  <li className=" text-[--17px]">
                    Develop dashboards for financial insights and compliance
                    checks.
                  </li>
                </ul> */}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 4
              </span>
              <p className=" flex flex-col gap-[--sy-10px] justify-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Finance Module
                {/* <ul className="pl-[--51px] list-disc">
                  <li className=" text-[--17px]">
                    Build financial planning and analysis tools (budgeting,
                    forecasting, and investment analysis).
                  </li>
                  <li className=" text-[--17px]">
                    Develop financial dashboards and reporting tools for
                    businesses.
                  </li>
                  <li className=" text-[--17px]">
                    Ensure secure data handling and integration with external
                    financial systems.
                  </li>
                </ul> */}
              </p>
            </div>
            <div className=" flex border-b-[3px] border-b-[#353535]">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 5
              </span>
              <p className=" flex flex-col gap-[--sy-10px] justify-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Human Resource Management Module
                {/* <ul className="pl-[--51px] list-disc">
                  <li className=" text-[--17px]">
                    Set up the HR management system for employee data, payroll,
                    and benefits.
                  </li>
                  <li className=" text-[--17px]">
                    Integrate employee self-service portals for onboarding and
                    leave management.
                  </li>
                  <li className=" text-[--17px]">
                    Add features for performance tracking, recruitment, and
                    talent management.
                  </li>
                </ul> */}
              </p>
            </div>
            <div className=" flex">
              <span className=" font-bold text-[--32px] shrink-0 w-[25%] text-center py-[--sy-40px]">
                Week 6
              </span>
              <p className=" flex flex-col gap-[--sy-10px] justify-center text-[--24px] px-[--44px] border-l-[3px] border-l-[#353535]">
                Social Media Management Module
                {/* <ul className="pl-[--51px] list-disc">
                  <li className=" text-[--17px]">
                    Develop tools for scheduling, posting, and monitoring social
                    media content across platforms.
                  </li>
                  <li className=" text-[--17px]">
                    Integrate social listening and analytics to track engagement
                    and performance metrics.
                  </li>
                  <li className=" text-[--17px]">
                    Build automation features for social media campaigns and
                    reporting.
                  </li>
                </ul> */}
              </p>
            </div>
          </div>
          <h3
            id="Service-Process"
            className=" font-semibold text-[--40px] mb-[148px]"
          >
            Service Process
          </h3>
          <div className=" bg-[#7272722B] w-full rounded-[--25px] h-[31px] relative mb-[231px]">
            <div className=" absolute left-0 top-0 w-1/4 bg-[#F8F24B] h-full rounded-[--25px]"></div>
            <span className=" absolute bottom-full -translate-y-3/4 left-[10%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#F8F24B] font-semibold text-black text-[--26px]">
              Brief
              <svg
                className=" absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/4 w-[--27px] h-[--24px]"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8385 22.5632C14.814 24.3376 12.2529 24.3376 11.2284 22.5632L0.85577 4.59729C-0.168688 2.82288 1.11188 0.604857 3.1608 0.604857L23.9061 0.604855C25.955 0.604855 27.2356 2.82287 26.2111 4.59729L15.8385 22.5632Z"
                  fill="#F8F24B"
                />
              </svg>
            </span>
            <span className=" absolute bottom-full -translate-y-3/4 left-[35%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Brief
              <svg
                className="w-[--27px] h-[--24px] absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/4"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8385 22.5632C14.814 24.3376 12.2529 24.3376 11.2284 22.5632L0.85577 4.59729C-0.168688 2.82288 1.11188 0.604857 3.1608 0.604857L23.9061 0.604855C25.955 0.604855 27.2356 2.82287 26.2111 4.59729L15.8385 22.5632Z"
                  fill="#484848"
                />
              </svg>
            </span>
            <span className=" absolute top-full translate-y-3/4 left-[25%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Research
              <svg
                className="w-[--27px] h-[--24px] absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/4"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9955 1.99243C12.02 0.218021 14.5811 0.218018 15.6056 1.99243L25.9782 19.9584C27.0027 21.7328 25.7221 23.9508 23.6732 23.9508H2.9279C0.878983 23.9508 -0.401594 21.7328 0.622864 19.9584L10.9955 1.99243Z"
                  fill="#484848"
                />
              </svg>
            </span>
            <span className=" absolute top-full translate-y-3/4 left-[55%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Research
              <svg
                className="w-[--27px] h-[--24px] absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/4"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9955 1.99243C12.02 0.218021 14.5811 0.218018 15.6056 1.99243L25.9782 19.9584C27.0027 21.7328 25.7221 23.9508 23.6732 23.9508H2.9279C0.878983 23.9508 -0.401594 21.7328 0.622864 19.9584L10.9955 1.99243Z"
                  fill="#484848"
                />
              </svg>
            </span>
            <span className=" absolute top-full translate-y-3/4 left-[80%] rounded-3xl py-[--sy-7px] px-[--39px] bg-[#484848] font-semibold text-[--26px]">
              Research
              <svg
                className="w-[--27px] h-[--24px] absolute left-1/2 bottom-full -translate-x-1/2 translate-y-1/4"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9955 1.99243C12.02 0.218021 14.5811 0.218018 15.6056 1.99243L25.9782 19.9584C27.0027 21.7328 25.7221 23.9508 23.6732 23.9508H2.9279C0.878983 23.9508 -0.401594 21.7328 0.622864 19.9584L10.9955 1.99243Z"
                  fill="#484848"
                />
              </svg>
            </span>
          </div>
          {/* <h3 id="Goals&Revenue" className=" font-semibold text-[--40px] mb-[--sy-60px]">
            Goals & Revenue
          </h3>
          <div className=" w-full grid grid-cols-2 gap-[--26px] mb-[--sy-64px]">
            <div className=" col-span-1">
              <div className="h-[320px] rounded-[--25px] bg-[#2b2b2b] relative mb-[--sy-26px]">
                <div className="bg-[#1d1d1d] rounded-[--25px] text-[--33px] w-fit font-bold p-4 absolute left-[25%] top-full -translate-y-1/2 z-10">
                  <span className=" text-[--80px]">50%</span> <br /> INCREASE{" "}
                  <br /> IN TRUST
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-full top-1/2 -translate-y-full"
                    style={{ boxShadow: "-10px 10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-full top-1/2 translate-y-full"
                    style={{ boxShadow: "-10px -10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-full top-1/2 translate-y-full"
                    style={{ boxShadow: "10px -10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-full top-1/2 -translate-y-full"
                    style={{ boxShadow: "10px 10px 0 #1d1d1d" }}
                  ></span>
                </div>
              </div>
              <div className="h-[600px] rounded-[--25px] bg-[#2b2b2b] relative">
                <div className="bg-[#1d1d1d] rounded-tl-[--25px] text-[--33px] w-fit font-bold p-4 absolute right-0 top-full -translate-y-full z-10">
                  <span className=" text-[--80px]">50%</span> <br /> INCREASE{" "}
                  <br /> IN TRUST
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-full top-full -translate-y-full"
                    style={{ boxShadow: "10px 10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute right-0 bottom-full"
                    style={{ boxShadow: "10px 10px 0 #1d1d1d" }}
                  ></span>
                </div>
              </div>
            </div>
            <div className=" col-span-1 flex h-full w-full gap-[--sy-26px] flex-col">
              <div className="h-[460px] rounded-[--25px] bg-[#2b2b2b] relative">
                <div className="bg-[#1d1d1d] rounded-tr-[--25px] text-[--33px] w-fit font-bold p-4 absolute left-0 top-full -translate-y-full z-10 pt-[--sy-30px]">
                  <span className=" text-[--35px]">
                    15% REVENUE <br /> INCREASE
                  </span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-0 bottom-full "
                    style={{ boxShadow: "-10px 10px 0 #1d1d1d" }}
                  ></span>
                  <span
                    className=" w-[--28px] h-[--28px] rounded-full bg-transparent absolute left-full bottom-0 "
                    style={{ boxShadow: "-10px 10px 0 #1d1d1d" }}
                  ></span>
                </div>
              </div>
              <div className=" rounded-[--25px] bg-[#2b2b2b] relative grow"></div>
            </div>
          </div> */}
          <Link
            id="Live-Project"
            href={""}
            className=" bg-[#F8F24B] rounded-[--71px] px-[--55px] py-[--sy-35px] text-black flex justify-between items-center"
          >
            <span className=" [font-family:Alfa_Slab_One] text-[--71px]">
              LIVE WEBSITE
            </span>
            <svg
              className="w-[--75px] h-[--75px]"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="76" height="76" rx="38" fill="#1D1D1D" />
              <g clip-path="url(#clip0_3249_53303)">
                <path
                  d="M41.2767 53.4115L56.9896 38.6277L42.2875 22.8382C42.1561 22.6533 41.9865 22.4988 41.7902 22.3852C41.5939 22.2715 41.3755 22.2013 41.1498 22.1794C40.924 22.1575 40.6962 22.1843 40.4817 22.2581C40.2672 22.3319 40.0711 22.4509 39.9066 22.6071C39.7421 22.7633 39.6131 22.953 39.5283 23.1634C39.4435 23.3738 39.4049 23.5999 39.4151 23.8265C39.4253 24.0531 39.484 24.2748 39.5874 24.4768C39.6907 24.6787 39.8362 24.856 40.0141 24.9968L51.0127 36.8459L20.7401 35.845C20.3204 35.8311 19.9124 35.9845 19.6058 36.2715C19.2992 36.5585 19.1192 36.9555 19.1053 37.3752C19.0914 37.7948 19.2448 38.2029 19.5318 38.5095C19.8188 38.816 20.2158 38.9961 20.6354 39.0099L50.9081 40.0108L39.1508 51.1075C38.8451 51.3957 38.6663 51.7936 38.6539 52.2136C38.6415 52.6335 38.7965 53.0412 39.0847 53.347C39.3729 53.6527 39.7707 53.8315 40.1907 53.8439C40.6107 53.8563 41.0184 53.7013 41.3241 53.4131L41.2767 53.4115Z"
                  fill="#F8F24B"
                />
              </g>
              <defs>
                <clipPath id="clip0_3249_53303">
                  <rect
                    width="57"
                    height="57"
                    fill="white"
                    transform="translate(67.4238 10.458) rotate(91.8936)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="col-span-1 w-full px-[--34px] py-[--sy-28px]">
          <h4 className=" font-semibold text-[--20px] mb-[--sy-35px]">
            Quick Index
          </h4>
          <div className=" w-full border-t-[1px] border-t-white">
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link
                href={"#Project-Overview"}
                className="text-[--20px] font-semibold"
              >
                Project overview
              </Link>
              <svg
                className="w-[--8px] h-[--16px]"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link
                href={"#Project-Objectives"}
                className="text-[--20px] font-semibold"
              >
                Project Objectives
              </Link>
              <svg
                className="w-[--8px] h-[--16px]"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link
                href={"#Project-Timeline"}
                className="text-[--20px] font-semibold"
              >
                Project Timeline
              </Link>
              <svg
                className="w-[--8px] h-[--16px]"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link
                href={"#Service-Process"}
                className="text-[--20px] font-semibold"
              >
                Service Process
              </Link>
              <svg
                className="w-[--8px] h-[--16px]"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link
                href={"#Goals&Revenue"}
                className="text-[--20px] font-semibold"
              >
                Goals & Revenue
              </Link>
              <svg
                className="w-[--8px] h-[--16px]"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div className=" flex justify-between items-center py-[--sy-35px] border-b-[1px] border-b-[#353535]">
              <Link
                href={"#Live-Project"}
                className="text-[--20px] font-semibold"
              >
                Live Project
              </Link>
              <svg
                className="w-[--8px] h-[--16px]"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5.96222 6.09634C7.09634 7.2611 7.09634 9.11727 5.96223 10.282L1.36842 15"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
