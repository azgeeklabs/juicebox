import classNames from "classnames";
import styles from "./website-technology.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";

function page() {
  const customCard = (
    <svg
      viewBox="0 0 68 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--78px)] w-[var(--78px)]"
    >
      <path
        d="M36.9763 0.82019L43.3463 2.12019L31.1913 59.3202L24.8213 58.0202L36.9763 0.82019ZM58.7513 30.0702L47.0838 18.4027V9.20519L67.9488 30.0702L47.0838 50.9027V41.7052L58.7513 30.0702ZM0.21875 30.0702L21.0838 9.20519V18.4027L9.41625 30.0702L21.0838 41.7052V50.9027L0.21875 30.0702Z"
        fill="#F8F24B"
      />
    </svg>
  );
  const shopifyCard = (
    <svg
      viewBox="0 0 37 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--58px)] w-[var(--58px)]"
    >
      <path
        d="M25.1458 5.68747C25.1458 5.68747 24.6875 5.82498 23.9083 6.07706C23.7708 5.66456 23.5875 5.13747 23.3125 4.63331C22.4417 2.96039 21.1583 2.08956 19.6 2.06664C19.4854 2.06664 19.3937 2.06664 19.2792 2.08956C19.2333 2.04372 19.1875 1.97497 19.1417 1.92914C18.4771 1.19581 17.6062 0.852058 16.575 0.874975C14.5812 0.943725 12.5875 2.38748 10.9604 4.95414C9.81458 6.76456 8.96667 9.03331 8.71458 10.775C6.42292 11.4854 4.81875 11.9896 4.77292 11.9896C3.60417 12.3562 3.58125 12.4021 3.42083 13.4791C3.30625 14.3041 0.28125 37.7708 0.28125 37.7708L25.4437 42.125V5.64164C25.3292 5.64164 25.2146 5.66456 25.1458 5.68747ZM19.325 7.49789C17.9958 7.91039 16.5292 8.36873 15.0854 8.80414C15.4979 7.22289 16.2771 5.66456 17.2396 4.63331C17.6062 4.24372 18.0875 3.83122 18.6833 3.57914C19.2333 4.74789 19.3479 6.37497 19.325 7.49789ZM16.5979 2.20414C17.0562 2.20414 17.4687 2.29581 17.8125 2.52497C17.2625 2.79997 16.7583 3.21248 16.2542 3.73956C14.9938 5.09164 14.0083 7.22289 13.6187 9.26248C12.4042 9.62914 11.2354 9.99581 10.1354 10.3396C10.8229 7.10831 13.5271 2.29581 16.5979 2.20414ZM12.7021 20.5146C12.8396 22.6458 18.4771 23.1271 18.7979 28.1458C19.05 32.0875 16.7125 34.7916 13.3208 34.9979C9.2875 35.25 7.04167 32.8666 7.04167 32.8666L7.88958 29.2229C7.88958 29.2229 10.1354 30.9187 11.9229 30.8041C13.0917 30.7354 13.5042 29.7729 13.4812 29.1083C13.2979 26.3125 8.71458 26.4729 8.43958 21.8896C8.1875 18.0166 10.7312 14.1208 16.3229 13.7541C18.5 13.6166 19.6 14.1666 19.6 14.1666L18.3167 18.9562C18.3167 18.9562 16.8958 18.3146 15.2 18.4062C12.725 18.5666 12.6792 20.125 12.7021 20.5146ZM20.6542 7.08539C20.6312 6.07706 20.5167 4.65622 20.0354 3.44164C21.5479 3.73956 22.3042 5.43539 22.625 6.46664C22.0521 6.64998 21.3875 6.85623 20.6542 7.08539ZM26.2687 42.0333L36.7188 39.4437C36.7188 39.4437 32.2271 9.05623 32.2042 8.84998C32.1812 8.64373 31.9979 8.52914 31.8375 8.50623C31.6771 8.48331 28.7437 8.43748 28.7437 8.43748C28.7437 8.43748 26.9562 6.69581 26.2687 6.03123V42.0333Z"
        fill="#F8F24B"
      />
    </svg>
  );
  const wordpressCard = (
    <svg
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--77px)] w-[var(--77px)]"
    >
      <path
        d="M33.0013 0.417236C15.3234 0.417236 0.917969 14.8227 0.917969 32.5006C0.917969 50.1785 15.3234 64.5839 33.0013 64.5839C50.6792 64.5839 65.0846 50.1785 65.0846 32.5006C65.0846 14.8227 50.6792 0.417236 33.0013 0.417236ZM4.15839 32.5006C4.15839 28.3297 5.05672 24.3514 6.66089 20.7581L20.4246 58.456C10.7996 53.7718 4.15839 43.9222 4.15839 32.5006ZM33.0013 61.3435C30.178 61.3435 27.4509 60.9264 24.8521 60.1564L33.5146 35.0031L42.3696 59.2902C42.4338 59.4185 42.498 59.5789 42.5621 59.6752C39.5784 60.766 36.3701 61.3435 33.0013 61.3435ZM36.9796 18.9614C38.7121 18.8652 40.2842 18.6727 40.2842 18.6727C41.8242 18.4802 41.6638 16.2022 40.0917 16.2985C40.0917 16.2985 35.4076 16.6514 32.3917 16.6514C29.5684 16.6514 24.788 16.2985 24.788 16.2985C23.248 16.2343 23.0555 18.6085 24.6276 18.7047C24.6276 18.7047 26.1034 18.8972 27.6434 18.9935L32.1351 31.3135L25.8146 50.2427L15.3234 18.9614C17.0559 18.8972 18.628 18.7047 18.628 18.7047C20.168 18.5122 20.0076 16.2343 18.4355 16.3306C18.4355 16.3306 13.7513 16.6835 10.7355 16.6835C10.1901 16.6835 9.54839 16.6835 8.87464 16.6514C14.0721 8.82307 22.9271 3.65765 33.0013 3.65765C40.5088 3.65765 47.3426 6.51307 52.4759 11.2293C52.3476 11.2293 52.2192 11.1972 52.0909 11.1972C49.2676 11.1972 47.2463 13.6677 47.2463 16.3306C47.2463 18.7047 48.6259 20.726 50.0696 23.1002C51.1605 25.0252 52.4438 27.4956 52.4438 31.0568C52.4438 33.5272 51.4813 36.3827 50.2621 40.3931L47.3746 50.0181L36.9796 18.9614ZM58.3151 18.6727C61.9187 25.2678 62.8052 33.0093 60.7856 40.2484C58.7661 47.4874 54.0002 53.652 47.503 57.4293L56.3259 31.9552C57.9621 27.8485 58.5076 24.5439 58.5076 21.6243C58.5076 20.5656 58.4434 19.571 58.3151 18.6727Z"
        fill="#F8F24B"
      />
    </svg>
  );
  const webflowCard = (
    <svg
      viewBox="0 0 77 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[var(--77px)] w-[var(--77px)]"
    >
      <path
        d="M77 0.486206L52.4306 48.515H29.353L39.6357 28.6105H39.1737C30.6909 39.6215 18.034 46.8723 0 48.515V28.8864C0 28.8864 11.5372 28.203 18.3196 21.0741H0V0.486206H20.5879V17.4198L21.0499 17.4166L29.4621 0.486206H45.0354V17.3107H45.4974L54.224 0.486206H77Z"
        fill="#F8F24B"
      />
    </svg>
  );

  const data = [
    {
      title: "Custom",
      image: customCard,
    },
    {
      title: "Shopify",
      image: shopifyCard,
    },
    {
      title: "WordPress",
      image: wordpressCard,
    },
    {
      title: "Webflow",
      image: webflowCard,
    },
  ];

  return (
    <NextPrevNav
      backLink="/dashboard/services/web-design/domain-selection"
      nextLink="/dashboard/services/web-design/brand-selection"
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
