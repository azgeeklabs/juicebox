"use client";
import classNames from "classnames";
import styles from "./custom-ecommerce.module.css";
import CustomCheckBoxText from "@/app/_components/customCheckBox/CustomCheckBoxText";

const defaultPages = [
  "Sign Up",
  "Log in",
  "Check Out",
  "Product Details",
  "Home Page",
  "Cart",
  "Check Out",
  "Payment Details",
  "Address Details",
  "Contact Us",
  "About Us",
  "Privacy & Security",
  "Terms and Conditions",
  "FAQ",
  "Order Confirmation",
];
const additionalPages = [
  "Wishlist",
  "User Profile",
  "Blog",
  "Returns and Exchanges",
  "Store Locator",
  "Reviews and Testimonials",
  "Community",
  "Careers",
];

function page() {
  return (
    <div className="flex flex-col h-full">
      <div className={classNames("flex flex-col gap-4", styles.container)}>
        <h1 className="text-3xl font-bold">
          Customize Your E-commerce App Pages
        </h1>
        <p className="text-lg w-[50%] text-[#B1B1B1]">
          Below is a list of typical pages in an e-commerce app. You can add or
          remove pages by clicking on them. If you need additional features, you
          can type them in the box provided.
        </p>
      </div>
      <div className="flex grow">
        <div className="flex gap-4 w-1/2">
          <div className="flex flex-col justify-evenly">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-medium">Default Pages</h2>
                <span className="relative">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="cursor-pointer peer group"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.16797 13.167H9.83464V8.16699H8.16797V13.167ZM9.0013 6.50033C9.23741 6.50033 9.43547 6.42033 9.59547 6.26033C9.75547 6.10033 9.83519 5.90255 9.83464 5.66699C9.83408 5.43144 9.75408 5.23366 9.59464 5.07366C9.43519 4.91366 9.23741 4.83366 9.0013 4.83366C8.76519 4.83366 8.56741 4.91366 8.40797 5.07366C8.24853 5.23366 8.16852 5.43144 8.16797 5.66699C8.16741 5.90255 8.24741 6.1006 8.40797 6.26116C8.56852 6.42171 8.7663 6.50144 9.0013 6.50033ZM9.0013 17.3337C7.84853 17.3337 6.76519 17.1148 5.7513 16.677C4.73741 16.2392 3.85547 15.6456 3.10547 14.8962C2.35547 14.1467 1.76186 13.2648 1.32464 12.2503C0.887414 11.2359 0.668525 10.1525 0.66797 9.00033C0.667414 7.8481 0.886303 6.76477 1.32464 5.75033C1.76297 4.73588 2.35658 3.85394 3.10547 3.10449C3.85436 2.35505 4.7363 1.76144 5.7513 1.32366C6.7663 0.885881 7.84964 0.666992 9.0013 0.666992C10.153 0.666992 11.2363 0.885881 12.2513 1.32366C13.2663 1.76144 14.1482 2.35505 14.8971 3.10449C15.646 3.85394 16.2399 4.73588 16.6788 5.75033C17.1177 6.76477 17.3363 7.8481 17.3346 9.00033C17.333 10.1525 17.1141 11.2359 16.678 12.2503C16.2419 13.2648 15.6482 14.1467 14.8971 14.8962C14.146 15.6456 13.2641 16.2395 12.2513 16.6778C11.2385 17.1162 10.1552 17.3348 9.0013 17.3337Z"
                      fill="#484848"
                      className="group-hover:fill-white transition-colors duration-200"
                    />
                  </svg>
                  <span className="bg-[#373737] py-[10px] pl-5 pr-[11px] rounded-[7px] opacity-0 text-[#E4E4E4] absolute top-1/2 left-full transform translate-x-4 -translate-y-1/2 max-w-[30vw] border-l-[3px] border-[var(--highlight-yellow)] peer-hover:opacity-100 peer-hover:visible transition-all duration-200">
                    <p className="w-max max-w-full">
                      These pages are part of the default configuration and
                      cannot be removed from the application.
                    </p>
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap text-sm gap-2">
                {defaultPages.map((page) => (
                  <CustomCheckBoxText
                    btnSize="sm"
                    inputType="checkbox"
                    disabled
                  >
                    {page}
                  </CustomCheckBoxText>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-medium">Additional Pages</h2>
                <span className="relative">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="cursor-pointer peer group"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.16797 13.167H9.83464V8.16699H8.16797V13.167ZM9.0013 6.50033C9.23741 6.50033 9.43547 6.42033 9.59547 6.26033C9.75547 6.10033 9.83519 5.90255 9.83464 5.66699C9.83408 5.43144 9.75408 5.23366 9.59464 5.07366C9.43519 4.91366 9.23741 4.83366 9.0013 4.83366C8.76519 4.83366 8.56741 4.91366 8.40797 5.07366C8.24853 5.23366 8.16852 5.43144 8.16797 5.66699C8.16741 5.90255 8.24741 6.1006 8.40797 6.26116C8.56852 6.42171 8.7663 6.50144 9.0013 6.50033ZM9.0013 17.3337C7.84853 17.3337 6.76519 17.1148 5.7513 16.677C4.73741 16.2392 3.85547 15.6456 3.10547 14.8962C2.35547 14.1467 1.76186 13.2648 1.32464 12.2503C0.887414 11.2359 0.668525 10.1525 0.66797 9.00033C0.667414 7.8481 0.886303 6.76477 1.32464 5.75033C1.76297 4.73588 2.35658 3.85394 3.10547 3.10449C3.85436 2.35505 4.7363 1.76144 5.7513 1.32366C6.7663 0.885881 7.84964 0.666992 9.0013 0.666992C10.153 0.666992 11.2363 0.885881 12.2513 1.32366C13.2663 1.76144 14.1482 2.35505 14.8971 3.10449C15.646 3.85394 16.2399 4.73588 16.6788 5.75033C17.1177 6.76477 17.3363 7.8481 17.3346 9.00033C17.333 10.1525 17.1141 11.2359 16.678 12.2503C16.2419 13.2648 15.6482 14.1467 14.8971 14.8962C14.146 15.6456 13.2641 16.2395 12.2513 16.6778C11.2385 17.1162 10.1552 17.3348 9.0013 17.3337Z"
                      fill="#484848"
                      className="group-hover:fill-white transition-colors duration-200"
                    />
                  </svg>
                  <span className="bg-[#373737] py-[10px] pl-5 pr-[11px] rounded-[7px] opacity-0 text-[#E4E4E4] absolute top-1/2 left-full transform translate-x-4 -translate-y-1/2 max-w-[30vw] border-l-[3px] border-[var(--highlight-yellow)] peer-hover:opacity-100 peer-hover:visible transition-all duration-200">
                    <p className="w-max max-w-full">
                      Additional pages that you could add to your application.
                    </p>
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap text-sm gap-2">
                {additionalPages.map((page, i) => (
                  <CustomCheckBoxText
                    btnSize="sm"
                    inputType="checkbox"
                    onMouseMove={() => {
                      document.querySelectorAll(".item").forEach((e) => {
                        e.classList.remove("active");
                      });
                      document
                        .querySelector(`.item${i}`)
                        ?.classList.add("active");
                    }}
                    onClick={(e) => {
                      document.querySelectorAll(".item").forEach((ele) => {
                        ele.classList.remove("active");
                      });
                      if (!(e.target as HTMLInputElement).checked) {
                        document
                          .querySelector(`.item${i}`)
                          ?.classList.remove("selected");
                      } else {
                        document
                          .querySelector(`.item${i}`)
                          ?.classList.add("selected");
                      }
                      document
                        .querySelector(`.item${i}`)
                        ?.classList.add("active");
                    }}
                  >
                    {page}
                  </CustomCheckBoxText>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <div>
            <div className={`${styles.slider} slider`}>
              {additionalPages.map((e, i) => (
                <div
                  key={i}
                  className={`item${i} ${styles.item} item ${
                    i == additionalPages.length / 2 - 1 ||
                    i == additionalPages.length / 2 + 0.5 - 1
                      ? `active ${styles.right}`
                      : i > (additionalPages.length - 1) / 2
                      ? styles.right
                      : styles.left
                  }`}
                >
                  <h1>{e}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
