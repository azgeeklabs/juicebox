import classNames from "classnames";
import styles from "./website-technology.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";

function page() {
  return (
    <NextPrevNav
      backLink="/services/web-design/domain-selection"
      nextLink="/services/web-design/brand-selection"
    >
      <div className="flex flex-col gap-16 justify-center items-center h-full">
        <div
          className={classNames(
            "flex flex-col items-center gap-4 text-center",
            styles.container
          )}
        >
          <h2 className="text-3xl font-bold">
            How would you like to build your website?
          </h2>
          <p className="text-lg w-[60%]">
            Choose the technology you want your website to be build with
          </p>
        </div>
        <div className={classNames("flex ", styles.cards)}>
          <div className={classNames("flex flex-col gap-[var(--sy-8px)]", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                                src="/assets/website-technology-custom.gif"
                alt="/assets/website-technology-custom.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                                src="/assets/website-technology-custom.svg"
                alt="/assets/website-technology-custom.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Custom</div>
            <input
              type="radio"
              name="type"
              value="game"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div className={classNames("flex flex-col gap-[var(--sy-8px)]", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                src="/assets/website-technology-shopify.gif"
                alt="/assets/website-technology-shopify.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                src="/assets/website-technology-shopify.svg"
                alt="/assets/website-technology-shopify.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Shopify</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div className={classNames("flex flex-col gap-[var(--sy-8px)]", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                                src="/assets/website-technology-wordpress.gif"
                alt="/assets/website-technology-wordpress.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                                src="/assets/website-technology-wordpress.svg"
                alt="/assets/website-technology-wordpress.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>WordPress</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div className={classNames("flex flex-col gap-[var(--sy-8px)]", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                                src="/assets/website-technology-webflow.gif"
                alt="/assets/website-technology-webflow.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                                src="/assets/website-technology-webflow.svg"
                alt="/assets/website-technology-webflow.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Webflow</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </NextPrevNav>
  );
}

export default page;
