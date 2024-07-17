"use client";
import React from "react";
import styles from "./analysis-estimate.module.css";
import classNames from "classnames";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

export default function page() {
  return (
    <NextPrevNav
      backLink="/dashboard/services/seo-campaign/keyword-selection"
      nextLink="/dashboard/services/seo-campaign/seo-campaign-endpoint"
    >
      <section className={classNames(styles.analysisEstimate)}>
        <div className={classNames(styles.container)}>
          <div className="text-center">
            <h2>
              Analyzing your page and keywords to give you an estimate of the
              total time and price
            </h2>
            <p>Please wait till the loading ends</p>
          </div>
          {/* Keywords */}
          <div className={classNames(styles.loading)}>
            <svg

              viewBox="0 0 158 252"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.51612 60.33L1.0107 219.275C0.814903 223.465 2.90337 227.433 6.47987 229.639L38.1462 249.206C40.9135 250.916 44.2289 251.542 47.4269 250.955L128.316 236.179C132.153 235.474 135.012 232.211 135.169 228.308L142.178 64.3503C142.309 61.4265 140.599 58.7376 137.897 57.602L98.5812 41.09C96.558 40.2416 94.3129 40.0066 92.1592 40.4504L11.8055 56.5186C9.965 56.8841 8.60749 58.4635 8.51612 60.3431V60.33Z"
                fill="#1D1D1D"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M9.5332 223.648L19.2707 221.899L89.9914 209.172L93.1371 104.501"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M13.5498 225.707L9.1385 240.492C8.98048 241.049 10.7845 241.576 13.8527 241.859L43.0333 244.559C44.9559 244.736 47.2208 244.799 49.4067 244.731L125.545 242.438C128.719 242.343 131.049 241.916 131.168 241.407L135.145 224.433"
                fill="#F8F24B"
              />
              <path
                d="M13.5498 225.707L9.1385 240.492C8.98048 241.049 10.7845 241.576 13.8527 241.859L43.0333 244.559C44.9559 244.736 47.2208 244.799 49.4067 244.731L125.545 242.438C128.719 242.343 131.049 241.916 131.168 241.407L135.145 224.433"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M13.8367 226.512C14.1518 226.495 14.1912 226.493 14.5195 226.477C14.677 226.469 14.8346 226.461 14.9922 226.453C15.1497 226.445 15.3204 226.435 15.478 226.429C16.1345 226.398 16.8041 226.367 17.4869 226.341C18.1696 226.315 18.8524 226.288 19.5483 226.265C20.2442 226.243 20.94 226.221 21.6491 226.201C22.3581 226.181 23.0671 226.163 23.7892 226.147C24.5114 226.131 25.2335 226.117 25.9557 226.103C26.6778 226.089 27.4131 226.078 28.1484 226.068C28.8837 226.058 29.6321 226.048 30.3674 226.04C31.1026 226.032 31.8642 226.025 32.6126 226.019C33.361 226.012 34.1225 226.007 34.8709 226.004C35.6193 226 36.3809 225.996 37.1424 225.992C37.904 225.988 38.6655 225.987 39.4139 225.985C40.1623 225.982 40.937 225.981 41.6985 225.98C42.4601 225.978 43.2216 225.977 43.9831 225.976C44.7447 225.975 45.5062 225.975 46.2546 225.973C47.003 225.972 47.7646 225.971 48.5261 225.97C49.2876 225.968 50.0361 225.967 50.7845 225.964C51.5329 225.962 52.2813 225.961 53.0166 225.957C53.7518 225.953 54.5002 225.951 55.2355 225.946C55.9708 225.941 56.693 225.937 57.4282 225.93C58.1635 225.924 58.8725 225.918 59.5947 225.909C59.8704 225.907 60.133 225.903 60.4087 225.899C60.54 225.898 60.6845 225.895 60.8158 225.894C60.9471 225.893 61.0915 225.889 61.2228 225.889C67.0656 225.808 72.8559 225.679 78.3837 225.478C84.2659 225.266 88.6119 224.888 94.0871 224.632C104.867 224.13 118.824 224.684 128.934 225.107C130.615 225.177 132.322 225.252 133.635 225.375C139.228 225.899 127.7 226.02 124.627 226.111C116.277 226.356 110.395 226.948 103.186 227.377C95.9647 227.808 88.2705 228.186 79.9461 228.375C76.9525 228.443 73.9063 228.484 70.8339 228.494C59.3846 228.534 48.2373 228.217 37.8383 227.776C37.0505 227.742 36.2627 227.708 35.4749 227.674C34.6871 227.64 33.8993 227.604 33.1115 227.569C32.3237 227.533 31.5359 227.497 30.7613 227.459C29.9866 227.421 29.1988 227.385 28.4241 227.347C27.6495 227.309 26.8748 227.27 26.1001 227.231C25.3255 227.192 24.5639 227.153 23.7892 227.113C23.0146 227.073 22.2662 227.032 21.5046 226.991C20.7431 226.949 19.9947 226.908 19.2331 226.866C18.4716 226.825 17.7363 226.782 16.9879 226.739C16.2395 226.696 15.5042 226.652 14.769 226.608C14.5589 226.595 14.3488 226.583 14.1387 226.57C14.0337 226.564 13.9286 226.558 13.8236 226.551C13.7711 226.549 13.1934 226.551 13.1934 226.544C13.1934 226.531 13.8105 226.512 13.863 226.51H13.8367V226.512Z"
                fill="#F8F24B"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                opacity="0.3"
                d="M15.1604 236.63C15.1604 236.63 13.3702 241.414 13.3702 241.423C13.1855 241.91 12.9582 242.374 13.7681 242.853C15.6151 243.941 24.0261 244.286 29.4534 244.758L15.1462 236.628H15.1604V236.63Z"
                fill="white"
                stroke="#1D1D1D"
                stroke-width="0.0913704"
                stroke-miterlimit="10"
              />
              <path
                d="M42.9258 251.098L50.1179 79.2173"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M9.77225 59.8856L27.7592 111.275L50.2885 79.3605L11.3517 58.4236C10.4118 57.9668 9.39371 58.9066 9.7853 59.8725L9.77225 59.8856Z"
                fill="#1D1D1D"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M28.4609 110.165V69.4401C28.4609 68.8919 28.9047 68.4742 29.4399 68.4611C33.8257 68.3175 51.5515 64.1797 52.896 63.8665C61.8503 61.7389 70.8307 59.7157 79.8241 57.7969"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M70.5607 220.906C70.5607 220.906 70.6521 220.946 70.7043 220.959C74.2155 222.277 78.04 219.901 78.6666 216.207L79.2409 207.005L109.158 44.0916C109.158 42.8255 109.576 42.0815 109.563 41.7029L110.372 38.2961C110.372 37.5913 110.685 36.9386 111.221 36.4948L156.018 10.2063C156.827 9.56666 157.088 8.47022 156.684 7.51735C155.966 5.78132 154.269 3.15768 150.405 1.66965C149.622 1.36943 148.722 1.48691 148.069 2.02208L103.558 24.8647C101.326 26.0133 99.6687 28.0365 98.99 30.4513C98.4548 32.3962 97.9588 34.3803 97.9327 34.6935L97.0712 44.3918C97.0581 44.5746 97.032 44.7443 97.0059 44.927L68.7594 203.194L66.932 214.289C66.4752 217.069 67.9501 219.849 70.5607 220.893V220.906Z"
                fill="white"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M103.011 25.9344C103.011 25.9344 102.88 25.8952 102.815 25.8691C102.645 25.8169 102.45 25.7517 102.267 25.8039C102.058 25.8691 101.914 26.0519 101.797 26.2477C101.51 26.7567 101.353 27.3572 101.366 27.9445C100.701 27.4094 99.6302 27.4616 99.0167 28.049C98.4033 28.6363 98.3119 29.7067 98.821 30.3854C98.1553 30.2549 97.3851 30.2288 96.8891 30.6857C96.3017 31.2469 96.4192 32.2259 96.7455 32.9569C97.0719 33.6878 97.5809 34.4057 97.6201 35.215C97.0327 35.1236 96.2234 35.3978 95.9624 36.0504C95.623 36.9119 95.3358 37.5123 95.871 38.3086C96.3148 38.9612 97.3982 39.9663 98.1291 40.2665C100.466 41.2194 102.802 42.1853 105.126 43.1381C105.635 43.347 106.157 43.5558 106.705 43.6603C107.136 43.7386 107.593 43.7516 108.023 43.6864C108.532 43.608 109.081 43.4122 109.329 42.9554C109.577 42.4985 109.407 42.2897 108.846 41.7415C109.42 41.9373 110.138 41.637 110.334 41.0627C110.529 40.4884 109.981 40.3579 109.485 39.7444C110.138 39.9402 110.934 39.7052 111.26 39.1048C111.587 38.5043 109.785 37.7081 109.511 37.1207C109.942 37.3296 110.464 38.6088 111.404 37.9953C111.521 37.917 112.031 37.3687 112.109 37.2513C112.422 36.703 112.592 36.0112 112.357 35.4239C112.148 34.9017 111.665 34.5493 111.221 34.2099C109.211 32.6436 107.984 30.3593 106.339 28.4144C105.922 27.9184 104.225 26.4696 103.533 26.0519C102.92 25.6864 102.985 25.9083 102.985 25.9083L103.011 25.9344Z"
                fill="white"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M101.234 27.5791C102.461 29.6545 105.085 32.4739 106.586 34.3536C107.448 35.4239 108.309 36.4942 109.536 37.1469"
                fill="white"
              />
              <path
                d="M101.234 27.5791C102.461 29.6545 105.085 32.4739 106.586 34.3536C107.448 35.4239 108.309 36.4942 109.536 37.1469"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M98.4395 29.915C100.189 32.121 102.251 35.7366 104.848 37.4335C106.454 38.4908 108.086 39.5611 109.743 39.8222"
                fill="white"
              />
              <path
                d="M98.4395 29.915C100.189 32.121 102.251 35.7366 104.848 37.4335C106.454 38.4908 108.086 39.5611 109.743 39.8222"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M97.4082 34.7188C99.9796 37.5382 105.305 40.449 108.869 41.7673Z"
                fill="white"
              />
              <path
                d="M97.4082 34.7188C99.9796 37.5382 105.305 40.449 108.869 41.7673"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M156.124 10.1067C157.161 9.17948 156.316 6.54116 154.236 4.21382C152.156 1.88648 149.629 0.751432 148.591 1.67861C147.554 2.60579 148.399 5.2441 150.479 7.57144C152.559 9.89878 155.087 11.0338 156.124 10.1067Z"
                fill="black"
                stroke="#1D1D1D"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M51.1758 79.2166L140.771 59.833"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M84.9824 71.9336L103.009 68.0308"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M95.4629 59.3632C98.6478 59.5199 101.846 59.4677 105.031 59.2196C106.114 59.1413 107.224 59.0239 108.203 58.5539C109.181 58.084 109.991 57.1834 110.043 56.1392"
                stroke="black"
                stroke-width="1.30529"
                stroke-miterlimit="10"
              />
              <path
                d="M80.1873 142.97L90.4286 138.21L79.5439 213.16C79.1853 215.59 77.9724 217.807 76.1266 218.922C74.6605 219.811 72.8886 219.962 71.4014 217.431C70.2413 215.465 69.8826 212.984 70.2307 210.617L80.1873 142.958V142.97Z"
                fill="white"
              />
              <g opacity="0.42">
                <path
                  opacity="0.3"
                  d="M52.168 211.755L52.3899 231.152"
                  stroke="white"
                  stroke-width="0.978968"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  opacity="0.3"
                  d="M56.3594 214.548L56.516 228.253"
                  stroke="white"
                  stroke-width="0.978968"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  opacity="0.3"
                  d="M60.457 217.865L60.5354 224.848"
                  stroke="white"
                  stroke-width="0.978968"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </g>
              <path
                opacity="0.11"
                d="M128.148 121.992C129.244 122.044 130.092 122.984 130.04 124.08L125.185 223.087C125.132 224.183 124.193 225.032 123.096 224.98C122 224.927 121.151 223.988 121.203 222.891L126.059 123.885C126.111 122.788 127.051 121.94 128.148 121.992Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>
    </NextPrevNav>
  );
}
