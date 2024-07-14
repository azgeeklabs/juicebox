import classNames from "classnames";
import styles from "./content-website.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

const gameSVG = (
  <svg viewBox="0 0 150 118" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M51.9741 11.4335C51.9741 11.4335 51.7047 9.21882 50.6279 8.51022C49.3172 7.64759 43.9136 6.90239 38.3977 9.47631C34.7539 11.1767 32.135 13.3681 31.3165 15.2719C31.0436 15.9065 31.5532 16.518 31.5781 17.0781C31.6774 19.3184 51.9741 11.4335 51.9741 11.4335Z"
      fill="#444541"
    />
    <path
      d="M51.9741 11.4335C51.9741 11.4335 51.7047 9.21882 50.6279 8.51022C49.3172 7.64759 43.9136 6.90239 38.3977 9.47631C34.7539 11.1767 32.135 13.3681 31.3165 15.2719C31.0436 15.9065 31.5532 16.518 31.5781 17.0781C31.6774 19.3184 51.9741 11.4335 51.9741 11.4335Z"
      stroke="#2C2D2B"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M109.017 22.8907C109.017 22.8907 110.259 20.7985 111.646 20.5645C113.333 20.2797 119.055 21.9115 123.43 26.9061C126.32 30.2055 127.971 33.545 127.951 35.8053C127.944 36.5587 127.167 36.9449 126.896 37.4932C125.811 39.6861 109.017 22.8907 109.017 22.8907Z"
      fill="#444541"
    />
    <path
      d="M109.017 22.8907C109.017 22.8907 110.259 20.7985 111.646 20.5645C113.333 20.2797 119.055 21.9115 123.43 26.9061C126.32 30.2055 127.971 33.545 127.951 35.8053C127.944 36.5587 127.167 36.9449 126.896 37.4932C125.811 39.6861 109.017 22.8907 109.017 22.8907Z"
      stroke="#2C2D2B"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M135.823 87.7356C136.525 61.1906 130.039 42.5647 124.362 32.2805C118.577 21.5799 108.196 22.7292 81.4478 16.0025C55.3918 9.4578 44.3902 2.79659 32.5235 10.0452C20.5495 17.1538 13.6175 34.9293 6.55483 56.0157C-0.598263 77.3379 7.70854 89.122 16.5142 92.2572C23.64 94.7733 28.1451 91.0071 34.2437 84.5804C42.4961 75.7091 44.2998 68.5012 48.7286 66.4352C53.7342 64.2037 70.809 68.6975 75.266 69.7695C79.723 70.8414 91.3149 72.4597 96.2939 76.5184C98.8979 78.6492 98.6866 87.9872 101.956 97.0932C104.721 104.753 108.618 110.153 115.926 110.779C125.878 111.652 134.903 108.395 135.823 87.7356Z"
      fill="url(#paint0_linear_855_6838)"
    />
    <path
      d="M135.823 87.7356C136.717 61.1846 130.038 42.5647 124.362 32.2805C118.577 21.5799 108.196 22.7292 81.4475 16.0025C55.3914 9.45779 44.3898 2.79658 32.5232 10.0452C20.5491 17.1538 13.4577 34.8693 6.55449 56.0157C0.913424 73.7481 5.8306 83.8286 16.5516 87.9303C21.7005 90.0106 27.3536 88.9567 33.1096 82.2624C40.5113 73.4917 43.0015 65.5952 47.4303 63.5292C52.4359 61.2977 72.0194 65.6043 76.4764 66.6763C80.9333 67.7483 94.645 70.4096 99.624 74.4684C102.228 76.5991 102.282 86.2778 105.551 95.3838C108.317 103.044 111.069 106.632 118.406 106.991C125.673 107.267 134.677 104.436 135.823 87.7356Z"
      stroke="#2C2D2B"
      stroke-width="4.4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.8837 41.7834L38.0131 29.4397L61.7584 14.4624C61.7584 14.4624 76.4195 18.4805 100.644 23.5461L117.956 47.3973L103.601 54.0507L87.4033 51.6943L61.0375 45.7022L49.8837 41.7834Z"
      fill="#333333"
    />
    <path
      d="M42.2811 7.4115L40.4868 21.3685L119.067 39.5922L120.879 25.7409C120.879 25.7409 117.851 25.4397 82.2629 16.0673C47.952 7.051 42.2811 7.4115 42.2811 7.4115Z"
      fill="url(#paint1_linear_855_6838)"
    />
    <path
      d="M135.823 87.7356C136.525 61.1906 130.039 42.5647 124.362 32.2805C118.577 21.5799 108.196 22.7292 81.4478 16.0025C55.3918 9.4578 44.3901 2.79659 32.5235 10.0452C20.5495 17.1538 13.6175 34.9293 6.55484 56.0157C-0.598262 77.3379 7.70854 89.122 16.5142 92.2572C23.64 94.7733 28.1451 91.0071 34.2437 84.5804C42.4961 75.7091 44.2998 68.5012 48.7286 66.4352C53.7342 64.2037 70.809 68.6975 75.266 69.7695C79.723 70.8414 91.3149 72.4597 96.2939 76.5184C98.8979 78.6492 98.6866 87.9872 101.956 97.0932C104.721 104.753 108.618 110.153 115.926 110.779C125.878 111.652 134.903 108.395 135.823 87.7356Z"
      stroke="#2C2D2B"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M118.772 47.6809L101.649 54.0211L88.7133 51.492L66.7563 46.3764L50.5681 42.0074L38.4307 29.8005"
      stroke="#161616"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M69.5226 26.4626C67.4258 33.4408 55.4369 35.8522 44.2945 32.2181C33.1521 28.5839 27.1072 21.2166 29.3341 14.2893C30.6437 9.60509 44.2872 5.60076 52.9709 8.43833C64.06 12.2126 71.6194 19.4845 69.5226 26.4626Z"
      fill="url(#paint2_linear_855_6838)"
    />
    <path
      d="M69.5226 26.4626C67.4258 33.4408 55.4369 35.8522 44.2945 32.2181C33.1521 28.5839 27.1072 21.2166 29.3341 14.2893C30.6437 9.60509 44.2872 5.60076 52.9709 8.43833C64.06 12.2126 71.6194 19.4845 69.5226 26.4626Z"
      stroke="#161616"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.1">
      <path
        d="M29.1346 15.002C29.1914 14.764 29.2579 14.5265 29.3343 14.2892C30.6438 9.60517 44.2873 5.60085 52.971 8.43841C64.0601 12.2127 71.6196 19.4845 69.5227 26.4627"
        stroke="white"
        stroke-width="8.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M68.4038 21.4905C67.0221 27.2473 57.2776 28.9223 48.0067 26.2284C38.7359 23.5345 33.1562 17.6316 34.7528 11.9369C36.3494 6.24218 45.3775 4.43219 54.6483 7.12615C63.9191 9.8201 69.7421 15.9055 68.4038 21.4905Z"
      fill="#232323"
    />
    <path
      d="M68.4037 21.4905C67.0221 27.2473 57.2776 28.9223 48.0067 26.2284C38.7359 23.5345 33.1562 17.6316 34.7528 11.9369C36.3494 6.24218 45.3775 4.43219 54.6483 7.12615C63.9191 9.8201 69.7421 15.9055 68.4037 21.4905Z"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.475 9.42815L56.352 10.8833L55.3563 16.2797L51.2403 17.4029L48.0231 14.3958L49.475 9.42815Z"
      fill="black"
    />
    <path
      d="M49.475 9.42815L56.352 10.8833L55.3563 16.2797L51.2403 17.4029L48.0231 14.3958L49.475 9.42815Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.5983 17.5412L38.8719 12.9337L47.3945 14.9796L50.0982 18.4071L45.8717 19.7455L36.5983 17.5412Z"
      fill="black"
    />
    <path
      d="M36.5983 17.5412L38.8719 12.9337L47.3945 14.9796L50.0982 18.4071L45.8717 19.7455L36.5983 17.5412Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M63.9254 23.7397L64.6496 18.8281L56.5157 16.8933L52.4341 18.2393L55.1848 21.5982L63.9254 23.7397Z"
      fill="black"
    />
    <path
      d="M63.9254 23.7397L64.6496 18.8281L56.5157 16.8933L52.4341 18.2393L55.1848 21.5982L63.9254 23.7397Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35.898 9.70164C38.9794 5.81106 46.7251 4.82399 54.6483 7.12604C58.289 8.18417 61.3981 9.76522 63.7505 11.6335"
      stroke="#5D5B1C"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M68.4036 21.4903C67.022 27.2471 57.2775 28.9221 48.0066 26.2282C45.8491 25.6014 43.8917 24.8005 42.1779 23.8692"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M126.741 41.3226C125.285 48.8153 116.23 49.5603 107.39 47.1719C98.507 44.7707 88.5749 35.8248 90.3707 28.4062C92.2772 20.5613 100.039 20.5375 110.988 24.0251C122.094 27.569 128.196 33.83 126.741 41.3226Z"
      fill="url(#paint3_linear_855_6838)"
    />
    <path
      d="M126.741 41.3226C125.285 48.8153 116.23 49.5603 107.39 47.1719C98.507 44.7707 88.5749 35.8248 90.3707 28.4062C92.2772 20.5613 100.039 20.5375 110.988 24.0251C122.094 27.569 128.196 33.83 126.741 41.3226Z"
      stroke="#161616"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.1">
      <path
        d="M90.325 28.6069C90.3393 28.5401 90.3546 28.4732 90.3706 28.4061C92.2773 20.5613 100.039 20.5375 110.989 24.0251C122.094 27.569 128.196 33.83 126.741 41.3227"
        stroke="white"
        stroke-width="8.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M124.944 36.23C123.235 41.9062 116.309 43.5648 107.325 40.5261C98.2275 37.4436 91.6239 30.8071 93.2606 25.5364C95.0462 19.8892 103.71 19.4509 112.679 22.5279C120.896 25.3101 126.301 31.5097 124.944 36.23Z"
      fill="#232323"
    />
    <path
      d="M124.944 36.23C123.235 41.9062 116.309 43.5648 107.325 40.5261C98.2275 37.4436 91.6239 30.8071 93.2606 25.5364C95.0462 19.8892 103.71 19.4509 112.679 22.5279C120.896 25.3101 126.301 31.5097 124.944 36.23Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M114.303 28.5147C113.798 30.2777 111.042 30.9878 108.147 30.101C105.251 29.2142 103.313 27.0664 103.818 25.3034C104.323 23.5405 107.079 22.8301 109.975 23.717C112.87 24.6038 114.808 26.7518 114.303 28.5147Z"
      fill="black"
    />
    <path
      d="M114.303 28.5147C113.798 30.2777 111.042 30.9878 108.147 30.101C105.251 29.2142 103.313 27.0664 103.818 25.3034C104.323 23.5405 107.079 22.8301 109.975 23.717C112.87 24.6038 114.808 26.7518 114.303 28.5147Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M116.407 37.885C113.465 36.9583 111.496 34.7561 112.008 32.966C112.52 31.176 115.32 30.4758 118.261 31.4025C121.203 32.3291 123.172 34.5314 122.66 36.3214C122.148 38.1115 119.349 38.8116 116.407 37.885Z"
      fill="black"
    />
    <path
      d="M116.407 37.885C113.465 36.9583 111.496 34.7561 112.008 32.966C112.52 31.176 115.32 30.4758 118.261 31.4025C121.203 32.3291 123.172 34.5314 122.66 36.3214C122.148 38.1115 119.349 38.8116 116.407 37.885Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99.4459 33.227C96.5827 32.2516 94.7044 30.0438 95.2509 28.2959C95.7974 26.5479 98.5615 25.9219 101.425 26.8974C104.288 27.8728 106.166 30.0806 105.62 31.8285C105.073 33.5765 102.309 34.2025 99.4459 33.227Z"
      fill="black"
    />
    <path
      d="M99.4459 33.227C96.5827 32.2516 94.7044 30.0438 95.2509 28.2959C95.7974 26.5479 98.5615 25.9219 101.425 26.8974C104.288 27.8728 106.166 30.0806 105.62 31.8285C105.073 33.5765 102.309 34.2025 99.4459 33.227Z"
      stroke="black"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.25">
      <path
        d="M124.944 36.2299C123.235 41.9062 116.309 43.5647 107.325 40.5261C104.556 39.5879 102.018 38.3206 99.8731 36.8627"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M83.9244 37.9827C83.3007 39.8903 80.6485 40.6673 78.0006 39.7187C75.3527 38.7701 73.7114 36.4546 74.335 34.547C74.9587 32.6394 77.6109 31.8623 80.2591 32.811C82.9072 33.7597 84.548 36.0751 83.9244 37.9827Z"
      fill="#43443F"
    />
    <path
      d="M83.9244 37.9827C83.3007 39.8903 80.6485 40.6673 78.0006 39.7187C75.3527 38.7701 73.7114 36.4546 74.335 34.547C74.9587 32.6394 77.6109 31.8623 80.2591 32.811C82.9072 33.7597 84.548 36.0751 83.9244 37.9827Z"
      stroke="#1A1A1A"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M82.2769 34.8827C82.0106 35.7985 80.6498 36.1882 79.2383 35.7532C77.8267 35.3182 76.8983 34.2235 77.1647 33.3077C77.431 32.3919 78.7913 32.002 80.2031 32.4371C81.6148 32.8722 82.5433 33.9669 82.2769 34.8827Z"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M70.0119 44.4784C68.8543 48.0982 63.1484 49.4909 57.6135 47.5474C52.0786 45.6038 48.9858 42.2137 50.1434 38.5939C51.301 34.9741 56.726 33.6153 62.2609 35.5588C67.7959 37.5023 71.1695 40.8586 70.0119 44.4784Z"
      fill="#252828"
    />
    <path
      d="M70.0119 44.4784C68.8543 48.0982 63.1484 49.4909 57.6135 47.5474C52.0786 45.6038 48.9858 42.2137 50.1434 38.5939C51.301 34.9741 56.726 33.6153 62.2609 35.5588C67.7959 37.5023 71.1695 40.8586 70.0119 44.4784Z"
      stroke="#161616"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M106.526 53.609C105.666 57.1493 101.771 58.3597 96.0607 56.7583C89.8198 54.9956 86.5029 51.095 87.3625 47.5547C88.2219 44.0142 92.8801 42.3263 98.535 44.0982C104.361 45.9299 107.385 50.0686 106.526 53.609Z"
      fill="#252828"
    />
    <path
      d="M106.526 53.609C105.666 57.1493 101.771 58.3597 96.0607 56.7583C89.8198 54.9956 86.5029 51.095 87.3625 47.5547C88.2219 44.0142 92.8801 42.3263 98.535 44.0982C104.361 45.9299 107.385 50.0686 106.526 53.609Z"
      stroke="#161616"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M114.648 26.9408C114.143 28.7037 111.387 29.4138 108.491 28.527C105.596 27.6402 103.658 25.4924 104.163 23.7294C104.668 21.9665 107.424 21.2561 110.319 22.143C113.215 23.0298 115.153 25.1778 114.648 26.9408Z"
      fill="#DD5900"
    />
    <path
      d="M114.648 26.9408C114.143 28.7037 111.387 29.4138 108.491 28.527C105.596 27.6402 103.658 25.4924 104.163 23.7294C104.668 21.9665 107.424 21.2561 110.319 22.143C113.215 23.0298 115.153 25.1778 114.648 26.9408Z"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M114.881 25.4826C114.392 27.0832 111.654 27.6532 108.766 26.7558C105.879 25.8583 103.934 23.8335 104.424 22.233C104.913 20.6325 107.651 20.0624 110.538 20.9598C113.426 21.8572 115.371 23.8821 114.881 25.4826Z"
      fill="#DD5900"
    />
    <path
      d="M114.881 25.4826C114.392 27.0832 111.654 27.6532 108.766 26.7558C105.879 25.8583 103.934 23.8335 104.424 22.233C104.913 20.6325 107.651 20.0624 110.538 20.9598C113.426 21.8572 115.371 23.8821 114.881 25.4826Z"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M116.752 36.311C113.81 35.3843 111.841 33.1821 112.353 31.392C112.865 29.602 115.664 28.9018 118.606 29.8285C121.548 30.7552 123.517 32.9574 123.005 34.7474C122.493 36.5375 119.693 37.2376 116.752 36.311Z"
      fill="#DD5900"
    />
    <path
      d="M116.752 36.311C113.81 35.3843 111.841 33.1821 112.353 31.392C112.865 29.602 115.664 28.9018 118.606 29.8285C121.548 30.7552 123.517 32.9574 123.005 34.7474C122.493 36.5375 119.693 37.2376 116.752 36.311Z"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M117.448 34.4035C114.5 33.5052 112.506 31.4153 112.993 29.7359C113.481 28.0566 116.266 27.4234 119.214 28.3217C122.162 29.22 124.156 31.3099 123.668 32.9893C123.18 34.6687 120.395 35.3019 117.448 34.4035Z"
      fill="#DD5900"
    />
    <path
      d="M117.448 34.4036C114.5 33.5052 112.506 31.4153 112.993 29.7359C113.481 28.0566 116.266 27.4234 119.214 28.3217C122.162 29.22 124.156 31.3099 123.668 32.9893C123.18 34.6687 120.395 35.3019 117.448 34.4036Z"
      stroke="#F8F24B"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99.7907 31.6531C96.9274 30.6776 95.0491 28.4698 95.5956 26.7219C96.1421 24.974 98.9062 24.3479 101.769 25.3234C104.633 26.2988 106.511 28.5066 105.964 30.2545C105.418 32.0025 102.654 32.6285 99.7907 31.6531Z"
      fill="#878784"
    />
    <path
      d="M99.7907 31.6531C96.9274 30.6776 95.0491 28.4698 95.5956 26.7219C96.1421 24.974 98.9062 24.3479 101.769 25.3234C104.633 26.2988 106.511 28.5066 105.964 30.2545C105.418 32.0025 102.654 32.6285 99.7907 31.6531Z"
      stroke="#60605E"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M100.306 30.1957C97.4378 29.2432 95.5431 27.1108 96.0741 25.4333C96.6052 23.7558 99.3609 23.1682 102.229 24.1207C105.097 25.0732 106.992 27.2057 106.461 28.8831C105.93 30.5606 103.174 31.1482 100.306 30.1957Z"
      fill="#878784"
    />
    <path
      d="M100.306 30.1957C97.4378 29.2432 95.5431 27.1108 96.0741 25.4333C96.6052 23.7558 99.3609 23.1682 102.229 24.1207C105.097 25.0732 106.992 27.2057 106.461 28.8831C105.93 30.5606 103.174 31.1482 100.306 30.1957Z"
      stroke="#60605E"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M114.876 38.8967C114.409 40.4857 111.664 40.9701 108.746 39.9789C105.828 38.9877 103.841 36.8959 104.308 35.307C104.775 33.718 107.52 33.2336 110.438 34.2248C113.356 35.216 115.343 37.3078 114.876 38.8967Z"
      fill="#878784"
    />
    <path
      d="M114.876 38.8967C114.409 40.4857 111.664 40.9701 108.746 39.9789C105.828 38.9877 103.841 36.8959 104.308 35.307C104.775 33.718 107.52 33.2336 110.438 34.2248C113.356 35.216 115.343 37.3078 114.876 38.8967Z"
      stroke="#60605E"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M115.57 36.9231C115.102 38.5121 112.357 38.9964 109.439 38.0053C106.521 37.0141 104.534 34.9223 105.001 33.3333C105.469 31.7444 108.213 31.26 111.131 32.2512C114.05 33.2424 116.037 35.3342 115.57 36.9231Z"
      fill="#878784"
    />
    <path
      d="M115.57 36.9231C115.102 38.5121 112.357 38.9964 109.439 38.0053C106.521 37.0141 104.534 34.9223 105.001 33.3333C105.469 31.7444 108.213 31.26 111.131 32.2512C114.05 33.2424 116.037 35.3342 115.57 36.9231Z"
      stroke="#60605E"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M49.8192 7.85394L56.6962 9.30911L55.7005 14.7055L51.5845 15.8286L48.3674 12.8216L49.8192 7.85394Z"
      fill="#626760"
    />
    <path
      d="M49.8192 7.85394L56.6962 9.30911L55.7005 14.7055L51.5845 15.8286L48.3674 12.8216L49.8192 7.85394Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.0837 7.8738L56.6994 9.26715L55.8079 14.2622L51.8621 15.1466L48.6971 12.3972L50.0837 7.8738Z"
      fill="#626760"
    />
    <path
      d="M50.0837 7.8738L56.6994 9.26715L55.8079 14.2622L51.8621 15.1466L48.6971 12.3972L50.0837 7.8738Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.2">
      <path
        d="M49.7386 9.44791C49.7386 9.44791 53.1555 10.1674 55.0779 10.5723"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M36.9426 15.967L39.2161 11.3595L47.7387 13.4054L50.4424 16.8329L46.2159 18.1712L36.9426 15.967Z"
      fill="#626760"
    />
    <path
      d="M36.9426 15.967L39.2161 11.3595L47.7387 13.4054L50.4424 16.8329L46.2159 18.1712L36.9426 15.967Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.5421 16.3356L38.8072 11.3612L47.4342 13.4176L50.2157 17.0206L45.8633 18.5385L36.5421 16.3356Z"
      fill="#626760"
    />
    <path
      d="M36.5421 16.3356L38.8072 11.3612L47.4342 13.4176L50.2157 17.0206L45.8633 18.5385L36.5421 16.3356Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.2">
      <path
        d="M40.8667 13.5081C43.4195 14.1167 47.0894 14.9916 47.0894 14.9916L49.8709 18.5945C49.8709 18.5945 49.6375 18.6759 49.2789 18.8009"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M64.2696 22.1655L64.9938 17.2539L56.8599 15.3191L52.7784 16.6651L55.5291 20.024L64.2696 22.1655Z"
      fill="#626760"
    />
    <path
      d="M64.2696 22.1655L64.9938 17.2539L56.8599 15.3191L52.7784 16.6651L55.5291 20.024L64.2696 22.1655Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M64.4158 21.5183L65.4173 15.6526L56.9287 13.6697L52.467 15.497L55.4293 19.3668L64.4158 21.5183Z"
      fill="#626760"
    />
    <path
      d="M64.4158 21.5183L65.4173 15.6526L56.9287 13.6697L52.467 15.497L55.4293 19.3668L64.4158 21.5183Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.2">
      <path
        d="M63.6685 16.8985C61.2566 16.3352 56.584 15.2437 56.584 15.2437L52.1223 17.0709C52.1223 17.0709 52.3762 17.4027 52.7353 17.8719"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M46.0059 23.7461L53.7799 25.5625L54.8742 19.8784L51.715 16.7579L47.472 18.3197L46.0059 23.7461Z"
      fill="#626760"
    />
    <path
      d="M46.0059 23.7461L53.7799 25.5625L54.8742 19.8784L51.715 16.7579L47.472 18.3197L46.0059 23.7461Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M46.0772 22.6897L53.8514 24.5062L54.9457 18.8221L51.7865 15.7015L47.5435 17.2634L46.0772 22.6897Z"
      fill="#626760"
    />
    <path
      d="M46.0772 22.6897L53.8514 24.5062L54.9457 18.8221L51.7865 15.7015L47.5435 17.2634L46.0772 22.6897Z"
      stroke="#161616"
      stroke-width="5.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <g opacity="0.2">
      <path
        d="M54.5169 20.8333C54.5694 20.5604 54.6011 20.3962 54.6011 20.3962L51.4418 17.2757C51.4418 17.2757 49.5674 17.9656 48.31 18.4285"
        stroke="white"
        stroke-width="5.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <path
      d="M70.1638 34.2781L61.5064 30.9987C61.5064 30.9987 60.3153 34.5929 59.0169 38.3617C60.2541 40.8318 63.9515 42.47 67.3142 41.1961C68.4851 37.8785 70.1638 34.2781 70.1638 34.2781Z"
      fill="#1B1D1D"
    />
    <path
      d="M70.1638 34.2781L61.5064 30.9987C61.5064 30.9987 60.3153 34.5929 59.0169 38.3617C60.2541 40.8318 63.9515 42.47 67.3142 41.1961C68.4851 37.8785 70.1638 34.2781 70.1638 34.2781Z"
      stroke="#161616"
      stroke-width="8.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67.4172 27.588C63.6007 26.3857 60.177 26.7143 59.7852 28.3202C59.3933 29.926 62.1798 32.2105 65.9963 33.4129C69.8127 34.6153 73.2366 34.287 73.6285 32.6812C74.0203 31.0753 71.2336 28.7904 67.4172 27.588Z"
      fill="url(#paint4_radial_855_6838)"
    />
    <path
      d="M65.4339 35.7682C60.3762 34.1129 56.7665 30.6837 57.3874 28.124C58.0085 25.5643 62.6285 24.8285 67.6862 26.4837C72.7439 28.139 76.3535 31.5683 75.7327 34.128C75.1115 36.6877 70.4916 37.4234 65.4339 35.7682ZM67.4173 27.5879C63.6008 26.3855 60.1771 26.7142 59.7853 28.32C59.3934 29.9259 62.1799 32.2104 65.9963 33.4128C69.8128 34.6152 73.2367 34.2869 73.6286 32.6811C74.0204 31.0752 71.2337 28.7903 67.4173 27.5879Z"
      fill="url(#paint5_linear_855_6838)"
    />
    <path
      d="M100.369 38.995C96.7446 37.4181 93.0732 38.0216 92.1846 40.3407C91.2959 42.6598 93.5215 45.8295 97.1456 47.4064C100.77 48.9833 104.441 48.38 105.33 46.0609C106.218 43.7417 103.993 40.5719 100.369 38.995Z"
      fill="url(#paint6_radial_855_6838)"
    />
    <path
      d="M96.0789 49.8067C91.2642 47.7117 88.4449 43.2398 89.7945 39.8384C91.1441 36.437 96.1595 35.374 100.974 37.469C105.789 39.564 108.608 44.0363 107.258 47.4377C105.909 50.8391 100.894 51.9017 96.0789 49.8067ZM100.369 38.9947C96.7447 37.4177 93.0734 38.0212 92.1847 40.3404C91.2961 42.6595 93.5217 45.8292 97.1458 47.4061C100.77 48.983 104.441 48.3797 105.33 46.0605C106.218 43.7414 103.993 40.5716 100.369 38.9947Z"
      fill="url(#paint7_linear_855_6838)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_855_6838"
        x1="-1.02527"
        y1="43.0262"
        x2="142.489"
        y2="75.029"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2E2E2E" />
        <stop offset="0.09" stop-color="#393938" />
        <stop offset="0.19" stop-color="#444541" />
        <stop offset="0.34" stop-color="#343432" />
        <stop offset="0.5" stop-color="#232323" />
        <stop offset="0.66" stop-color="#343432" />
        <stop offset="0.81" stop-color="#444541" />
        <stop offset="0.93" stop-color="#393938" />
        <stop offset="1" stop-color="#2E2E2E" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_855_6838"
        x1="84.3125"
        y1="5.99036"
        x2="80.07"
        y2="25.3576"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" stop-opacity="0.5" />
        <stop offset="0.41" stop-color="white" stop-opacity="0.25" />
        <stop offset="0.88" stop-color="white" stop-opacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_855_6838"
        x1="51.8281"
        y1="2.17354"
        x2="42.4289"
        y2="45.0816"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#898B89" />
        <stop offset="0.41" stop-color="#525353" />
        <stop offset="0.76" stop-color="#1A1C1C" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_855_6838"
        x1="116.048"
        y1="16.2411"
        x2="106.648"
        y2="59.1492"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#898B89" />
        <stop offset="0.41" stop-color="#525353" />
        <stop offset="0.76" stop-color="#1A1C1C" />
      </linearGradient>
      <radialGradient
        id="paint4_radial_855_6838"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(67.374 37.9874) rotate(12.3557) scale(9.27805)"
      >
        <stop offset="0.24" stop-color="#595C5A" />
        <stop offset="0.52" stop-color="#525552" />
        <stop offset="1" stop-color="#4B4F4A" />
      </radialGradient>
      <linearGradient
        id="paint5_linear_855_6838"
        x1="59.8335"
        y1="28.883"
        x2="54.7051"
        y2="52.2947"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B3B3B3" />
        <stop offset="0.37" stop-color="#727270" />
        <stop offset="1" stop-color="#31322E" />
      </linearGradient>
      <radialGradient
        id="paint6_radial_855_6838"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(103.577 47.5254) rotate(12.3557) scale(11.7247)"
      >
        <stop offset="0.24" stop-color="#595C5A" />
        <stop offset="0.52" stop-color="#525552" />
        <stop offset="1" stop-color="#4B4F4A" />
      </radialGradient>
      <linearGradient
        id="paint7_linear_855_6838"
        x1="96.6577"
        y1="35.4779"
        x2="91.8112"
        y2="57.6025"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#B3B3B3" />
        <stop offset="0.37" stop-color="#727270" />
        <stop offset="1" stop-color="#31322E" />
      </linearGradient>
    </defs>
  </svg>
);

function ContentWebsite() {
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/content-website/rewrite-website">
        <div className="flex flex-col gap-[var(--64px)] justify-center items-center h-full">
          <div
            className={classNames(
              "flex flex-col items-center gap-[var(--16px)] text-center",
              styles.container
            )}
          >
            <h2 className="text-[--30px] font-bold">
              Please select you website niche:
            </h2>
            <p className="text-[--18px] w-[60%]">
              Select the option that best describes your project type. This
              helps us understand the specific requirements for your project.
            </p>
          </div>
          <div
            className={classNames(
              "flex justify-center items-center",
              styles.cards
            )}
          >
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <>
                  <div
                    className={classNames(
                      "flex flex-col items-center gap-[--16px] group",
                      styles.card
                    )}
                  >
                    <div className="flex items-center justify-center relative">
                      <img
                        src="/assets/application-design-service-gamecard.gif"
                        alt="/assets/application-design-service-gamecard.gif"
                        className="w-full"
                      />
                      {gameSVG}
                    </div>
                    <div>E-commerce</div>
                    <input
                      type="radio"
                      name="type"
                      value="game"
                      className="absolute opacity-0 inset-0 cursor-pointer"
                    />
                  </div>
                </>
              ))}
          </div>
        </div>
      </NextPrevNav>
    </>
  );
}

export default ContentWebsite;