"use client"
import classNames from "classnames";
import styles from "./socialMedia.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/Store/store";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";
import { useEffect } from "react";

function AccountRecovery() {
  const data = [
    {
      title: "Google Ads",
      image: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="#FFC107"
          />
          <path
            d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
            fill="#FF3D00"
          />
          <path
            d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.5719 17.5745 13.3039 18.0014 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
            fill="#4CAF50"
          />
          <path
            d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
            fill="#1976D2"
          />
        </svg>
      ),
    },
    {
      title: "Facebook Ads",
      image: (
        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.4199 10C20.4199 4.48 15.9399 0 10.4199 0C4.89992 0 0.419922 4.48 0.419922 10C0.419922 14.84 3.85992 18.87 8.41992 19.8V13H6.41992V10H8.41992V7.5C8.41992 5.57 9.98992 4 11.9199 4H14.4199V7H12.4199C11.8699 7 11.4199 7.45 11.4199 8V10H14.4199V13H11.4199V19.95C16.4699 19.45 20.4199 15.19 20.4199 10Z"
            fill="#1877F2"
          />
        </svg>
      ),
    },
    {
      title: "LinkedIn Ads",
      image: (
        <svg viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.9199 0C17.4504 0 17.9591 0.210714 18.3341 0.585786C18.7092 0.960859 18.9199 1.46957 18.9199 2V16C18.9199 16.5304 18.7092 17.0391 18.3341 17.4142C17.9591 17.7893 17.4504 18 16.9199 18H2.91992C2.38949 18 1.88078 17.7893 1.50571 17.4142C1.13064 17.0391 0.919922 16.5304 0.919922 16V2C0.919922 1.46957 1.13064 0.960859 1.50571 0.585786C1.88078 0.210714 2.38949 0 2.91992 0H16.9199ZM16.4199 15.5V10.2C16.4199 9.33539 16.0765 8.5062 15.4651 7.89483C14.8537 7.28346 14.0245 6.94 13.1599 6.94C12.3099 6.94 11.3199 7.46 10.8399 8.24V7.13H8.04992V15.5H10.8399V10.57C10.8399 9.8 11.4599 9.17 12.2299 9.17C12.6012 9.17 12.9573 9.3175 13.2199 9.58005C13.4824 9.8426 13.6299 10.1987 13.6299 10.57V15.5H16.4199ZM4.79992 5.56C5.24549 5.56 5.6728 5.383 5.98786 5.06794C6.30292 4.75288 6.47992 4.32556 6.47992 3.88C6.47992 2.95 5.72992 2.19 4.79992 2.19C4.35171 2.19 3.92185 2.36805 3.60491 2.68499C3.28797 3.00193 3.10992 3.43178 3.10992 3.88C3.10992 4.81 3.86992 5.56 4.79992 5.56ZM6.18992 15.5V7.13H3.41992V15.5H6.18992Z"
            fill="#0076B2"
          />
        </svg>
      ),
    },
    {
      title: "YouTube Ads",
      image: (
        <svg viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4199 0C11.2749 0 12.1519 0.0220001 13.0019 0.0580001L14.0059 0.106L14.9669 0.163L15.8669 0.224L16.6889 0.288C17.581 0.356278 18.4204 0.736947 19.0594 1.36304C19.6985 1.98913 20.0963 2.82054 20.1829 3.711L20.2229 4.136L20.2979 5.046C20.3679 5.989 20.4199 7.017 20.4199 8C20.4199 8.983 20.3679 10.011 20.2979 10.954L20.2229 11.864C20.2099 12.01 20.1969 12.151 20.1829 12.289C20.0963 13.1796 19.6984 14.0112 19.0591 14.6373C18.4198 15.2634 17.5801 15.6439 16.6879 15.712L15.8679 15.775L14.9679 15.837L14.0059 15.894L13.0019 15.942C12.1418 15.9794 11.2809 15.9987 10.4199 16C9.55894 15.9987 8.69809 15.9794 7.83792 15.942L6.83392 15.894L5.87292 15.837L4.97292 15.775L4.15092 15.712C3.25887 15.6437 2.41947 15.2631 1.78039 14.637C1.14132 14.0109 0.743496 13.1795 0.656922 12.289L0.616922 11.864L0.541922 10.954C0.465459 9.97114 0.424766 8.98582 0.419922 8C0.419922 7.017 0.471922 5.989 0.541922 5.046L0.616922 4.136C0.629922 3.99 0.642922 3.849 0.656922 3.711C0.743463 2.8207 1.14114 1.98942 1.78001 1.36334C2.41889 0.737271 3.25805 0.356503 4.14992 0.288L4.97092 0.224L5.87092 0.163L6.83292 0.106L7.83692 0.0580001C8.69742 0.0206329 9.55861 0.00129529 10.4199 0ZM8.41992 5.575V10.425C8.41992 10.887 8.91992 11.175 9.31992 10.945L13.5199 8.52C13.6113 8.46739 13.6872 8.39162 13.74 8.30033C13.7928 8.20904 13.8206 8.10545 13.8206 8C13.8206 7.89455 13.7928 7.79096 13.74 7.69967C13.6872 7.60838 13.6113 7.53261 13.5199 7.48L9.31992 5.056C9.22868 5.00332 9.12518 4.9756 9.01983 4.97562C8.91447 4.97563 8.81098 5.00339 8.71976 5.0561C8.62853 5.1088 8.5528 5.1846 8.50016 5.27587C8.44753 5.36713 8.41985 5.47065 8.41992 5.576V5.575Z"
            fill="#FF0000"
          />
        </svg>
      ),
    },
    {
      title: "Reddit Ads",
      image: (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.4727 21C17.4432 21 21.4727 16.9706 21.4727 12C21.4727 7.02944 17.4432 3 12.4727 3C7.50209 3 3.47266 7.02944 3.47266 12C3.47266 16.9706 7.50209 21 12.4727 21Z"
            fill="#FF4500"
          />
          <path
            d="M20.4539 12.1139C20.4539 11.1412 19.6673 10.3686 18.7086 10.3686C18.2557 10.3679 17.8201 10.5422 17.4926 10.855C16.2909 9.99656 14.6456 9.43875 12.8145 9.36722L13.6155 5.619L16.2192 6.17681C16.248 6.83494 16.7915 7.36434 17.464 7.36434C18.1507 7.36434 18.7086 6.80653 18.7086 6.11953C18.7086 5.43291 18.1508 4.875 17.464 4.875C16.9777 4.875 16.5483 5.16113 16.348 5.57606L13.444 4.96088C13.3582 4.94644 13.2723 4.96088 13.215 5.00381C13.1435 5.04675 13.1006 5.11819 13.0865 5.20406L12.1992 9.38137C10.3395 9.43875 8.66559 9.99656 7.44966 10.8694C7.12215 10.5566 6.68651 10.3823 6.23363 10.383C5.26078 10.383 4.48828 11.1697 4.48828 12.1283C4.48828 12.8436 4.91738 13.4443 5.51841 13.7164C5.48922 13.8913 5.47486 14.0684 5.47547 14.2457C5.47547 16.935 8.60859 19.1241 12.4712 19.1241C16.3339 19.1241 19.467 16.9494 19.467 14.2457C19.4669 14.0684 19.4525 13.8914 19.4241 13.7164C20.0248 13.4443 20.4539 12.8291 20.4539 12.1139ZM8.46534 13.3584C8.46534 12.6718 9.02316 12.1139 9.71016 12.1139C10.3968 12.1139 10.9547 12.6717 10.9547 13.3584C10.9547 14.0452 10.3969 14.6032 9.71016 14.6032C9.02325 14.6173 8.46534 14.0452 8.46534 13.3584ZM15.4326 16.6632C14.5742 17.5217 12.9432 17.579 12.4712 17.579C11.9848 17.579 10.3539 17.5072 9.50963 16.6632C9.38109 16.5345 9.38109 16.3342 9.50963 16.2054C9.63844 16.0769 9.83869 16.0769 9.9675 16.2054C10.5113 16.7492 11.6558 16.935 12.4712 16.935C13.2867 16.935 14.4454 16.7491 14.9747 16.2054C15.1035 16.0769 15.3038 16.0769 15.4326 16.2054C15.5469 16.3342 15.5469 16.5345 15.4326 16.6632ZM15.2035 14.6174C14.5168 14.6174 13.959 14.0596 13.959 13.3729C13.959 12.6862 14.5168 12.1283 15.2035 12.1283C15.8904 12.1283 16.4483 12.6862 16.4483 13.3729C16.4483 14.0451 15.8904 14.6174 15.2035 14.6174Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: "Instagram Ads",
      image: (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1992 0H4.63672C2.30677 0 0.417969 1.8888 0.417969 4.21875V13.7812C0.417969 16.1112 2.30677 18 4.63672 18H14.1992C16.5292 18 18.418 16.1112 18.418 13.7812V4.21875C18.418 1.8888 16.5292 0 14.1992 0Z"
            fill="url(#paint0_radial_1080_63004)"
          />
          <path
            d="M14.1992 0H4.63672C2.30677 0 0.417969 1.8888 0.417969 4.21875V13.7812C0.417969 16.1112 2.30677 18 4.63672 18H14.1992C16.5292 18 18.418 16.1112 18.418 13.7812V4.21875C18.418 1.8888 16.5292 0 14.1992 0Z"
            fill="url(#paint1_radial_1080_63004)"
          />
          <path
            d="M9.4186 1.96875C7.50905 1.96875 7.26936 1.97712 6.51941 2.01122C5.77086 2.04553 5.2599 2.16401 4.81285 2.33789C4.35034 2.51747 3.95806 2.75773 3.56727 3.14866C3.17612 3.53953 2.93586 3.9318 2.75572 4.39411C2.58134 4.8413 2.46273 5.35247 2.42905 6.10066C2.39551 6.85069 2.38672 7.09045 2.38672 9.00007C2.38672 10.9097 2.39516 11.1486 2.42919 11.8986C2.46364 12.6471 2.58212 13.1581 2.75586 13.6051C2.93558 14.0676 3.17584 14.4599 3.56677 14.8507C3.9575 15.2419 4.34977 15.4827 4.81194 15.6622C5.25934 15.8361 5.77037 15.9546 6.51877 15.9889C7.2688 16.023 7.50828 16.0314 9.41776 16.0314C11.3275 16.0314 11.5664 16.023 12.3164 15.9889C13.0649 15.9546 13.5765 15.8361 14.0239 15.6622C14.4862 15.4827 14.8779 15.2419 15.2685 14.8507C15.6597 14.4599 15.8999 14.0676 16.0801 13.6053C16.2529 13.1581 16.3716 12.647 16.4067 11.8987C16.4404 11.1488 16.4492 10.9097 16.4492 9.00007C16.4492 7.09045 16.4404 6.85083 16.4067 6.1008C16.3716 5.35226 16.2529 4.84137 16.0801 4.39432C15.8999 3.9318 15.6597 3.53953 15.2685 3.14866C14.8775 2.75759 14.4863 2.51733 14.0234 2.33796C13.5752 2.16401 13.064 2.04546 12.3154 2.01122C11.5654 1.97712 11.3266 1.96875 9.41642 1.96875H9.4186ZM8.78783 3.23585C8.97507 3.23557 9.18397 3.23585 9.4186 3.23585C11.296 3.23585 11.5185 3.2426 12.2599 3.27628C12.9454 3.30764 13.3175 3.42218 13.5654 3.51844C13.8935 3.64584 14.1274 3.79821 14.3734 4.04437C14.6195 4.29047 14.7718 4.52482 14.8995 4.85297C14.9958 5.10047 15.1105 5.47256 15.1417 6.15811C15.1754 6.89934 15.1827 7.12195 15.1827 8.99845C15.1827 10.875 15.1754 11.0976 15.1417 11.8388C15.1103 12.5243 14.9958 12.8964 14.8995 13.144C14.7721 13.4722 14.6195 13.7058 14.3734 13.9518C14.1273 14.1979 13.8936 14.3501 13.5654 14.4776C13.3178 14.5743 12.9454 14.6886 12.2599 14.7199C11.5186 14.7536 11.296 14.7609 9.4186 14.7609C7.54112 14.7609 7.31858 14.7536 6.57741 14.7199C5.89187 14.6883 5.51977 14.5737 5.27171 14.4775C4.94363 14.35 4.70921 14.1977 4.46312 13.9516C4.21702 13.7055 4.06473 13.4717 3.93697 13.1434C3.84071 12.8959 3.72603 12.5238 3.69481 11.8382C3.66113 11.097 3.65438 10.8744 3.65438 8.9967C3.65438 7.11907 3.66113 6.89759 3.69481 6.15635C3.72617 5.4708 3.84071 5.09871 3.93697 4.85086C4.06445 4.52271 4.21702 4.28836 4.46319 4.04227C4.70928 3.79617 4.94363 3.6438 5.27178 3.51612C5.51963 3.41944 5.89187 3.30518 6.57741 3.27368C7.22605 3.24436 7.47741 3.23557 8.78783 3.23409V3.23585ZM13.1719 4.40332C12.7061 4.40332 12.3281 4.7809 12.3281 5.24679C12.3281 5.71261 12.7061 6.09054 13.1719 6.09054C13.6377 6.09054 14.0156 5.71261 14.0156 5.24679C14.0156 4.78097 13.6377 4.40304 13.1719 4.40304V4.40332ZM9.4186 5.38917C7.42454 5.38917 5.80777 7.00594 5.80777 9.00007C5.80777 10.9942 7.42454 12.6102 9.4186 12.6102C11.4127 12.6102 13.0289 10.9942 13.0289 9.00007C13.0289 7.00601 11.4126 5.38917 9.41846 5.38917H9.4186ZM9.4186 6.65627C10.713 6.65627 11.7624 7.70555 11.7624 9.00007C11.7624 10.2945 10.713 11.3439 9.4186 11.3439C8.12415 11.3439 7.07488 10.2945 7.07488 9.00007C7.07488 7.70555 8.12415 6.65627 9.4186 6.65627Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1080_63004"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(5.19922 19.3864) rotate(-90) scale(17.8393 16.592)"
            >
              <stop stop-color="#FFDD55" />
              <stop offset="0.1" stop-color="#FFDD55" />
              <stop offset="0.5" stop-color="#FF543E" />
              <stop offset="1" stop-color="#C837AB" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_1080_63004"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-2.5971 1.29663) rotate(78.681) scale(7.97428 32.8702)"
            >
              <stop stop-color="#3771C8" />
              <stop offset="0.128" stop-color="#3771C8" />
              <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Pinterest Ads",
      image: (
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.363281 9.00014C0.363281 12.6855 2.57939 15.8515 5.75056 17.2435C5.72524 16.6151 5.74605 15.8606 5.90721 15.1768C6.08025 14.4462 7.06526 10.2727 7.06526 10.2727C7.06526 10.2727 6.77775 9.69799 6.77775 8.84869C6.77775 7.51493 7.55077 6.51881 8.51348 6.51881C9.33213 6.51881 9.72764 7.1337 9.72764 7.87001C9.72764 8.69295 9.20276 9.92391 8.93283 11.064C8.70734 12.0187 9.41152 12.7974 10.3534 12.7974C12.0586 12.7974 13.2071 10.6073 13.2071 8.01232C13.2071 6.03977 11.8785 4.56335 9.46207 4.56335C6.73198 4.56335 5.03119 6.59932 5.03119 8.87351C5.03119 9.65763 5.26237 10.2106 5.62448 10.6388C5.79098 10.8354 5.81412 10.9145 5.75386 11.1404C5.71069 11.306 5.61155 11.7046 5.57048 11.8626C5.51058 12.0906 5.32587 12.1721 5.11985 12.0879C3.86238 11.5746 3.27675 10.1975 3.27675 8.64949C3.27675 6.09286 5.43295 3.02723 9.70908 3.02723C13.1453 3.02723 15.4069 5.51377 15.4069 8.1829C15.4069 11.7135 13.444 14.3511 10.5506 14.3511C9.579 14.3511 8.66501 13.8259 8.35191 13.2293C8.35191 13.2293 7.82941 15.303 7.71874 15.7034C7.52791 16.3973 7.15441 17.0909 6.81291 17.6314C7.64102 17.8763 8.50008 18.0006 9.36363 18.0005C14.3336 18.0005 18.3634 13.971 18.3634 9.00014C18.3634 4.02954 14.3336 0 9.36363 0C4.39317 0 0.363281 4.02954 0.363281 9.00014Z"
            fill="#CB1F27"
          />
        </svg>
      ),
    },
  ];

  const all = useSelector((state:RootState)=>state.service)
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    const checkedValues = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map((e)=>(e as HTMLInputElement).value)
    if (document.querySelector("input[type='checkbox']:checked")) {
      itemsArray.push({
        name: "Which social media account would you like to recover?",
        choice: checkedValues.join(","),
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "Which social media account would you like to recover?",
          choice: checkedValues.join(","),
        }))
      route.push("/dashboard/services/social-media/social-media-task");
    }
  };
  useEffect(()=>{
console.log(all);

  },[all])

  return (
    <NextPrevNav nextLink="/dashboard/services/social-media/social-media-task" nextFunc={nextFunc}>
      <div
        className={classNames(
          "flex flex-col gap-[var(--55px)] justify-center mx-auto items-center h-full mb-[--sy-40px]",
          styles.container
        )}
      >
        <div className="flex flex-col items-center gap-[var(--16px)] text-center w-[80%]">
          <h1 className="text-[--32px] font-bold">
            Which social media account would you like to recover?
          </h1>
          <p className="text-[--18px] font-light text-[#FFFFFFCC] text-center">
          Select the social media platforms you want us to manage for you. <br /> Choose as many as you need.
          </p>
        </div>

        <div
          className={classNames(
            "flex justify-center flex-wrap gap-y-[var(--sy-20px)] gap-x-[var(--16px)] w-full",
            styles.cards
          )}
        >
          {data.map((item, i) => (
            <>
              <CustomCheckBoxText btnSize="md" inputType="checkbox" value={item.title}>
                <div
                  className={classNames(
                    "flex items-center font-bold gap-[var(--12px)]",
                    styles.card
                  )}
                >
                  {item.image}
                  <span className="text-[--20px] font-medium group-checked:font-bold">{item.title}</span>
                </div>
              </CustomCheckBoxText>
            </>
          ))}
        </div>
      </div>
    </NextPrevNav>
  );
}

export default AccountRecovery;
