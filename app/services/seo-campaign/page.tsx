import classNames from "classnames";
import styles from "./seo-campaign.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import Image from "next/image";

function page() {
  return (
    <NextPrevNav nextLink="/services/seo-campaign/advertising-details">
      <div className="flex flex-col gap-16 justify-center items-center h-full">
        <div
          className={classNames(
            "flex flex-col items-center gap-4 text-center",
            styles.container
          )}
        >
          <h2 className="text-3xl font-bold">
            What is the product you are trying to rank?
          </h2>
          <p className="text-lg w-[60%]">
            Please select the option that best describes your project type. This
            helps us understand the specific requirements for your project.
          </p>
        </div>
        <div className={classNames("flex gap-20", styles.cards)}>
          <div className={classNames("flex flex-col gap-2", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                                src="/assets/seo-campaign-product.gif"
                alt="/assets/seo-campaign-product.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                                src="/assets/seo-campaign-product.svg"
                alt="/assets/seo-campaign-product.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Product</div>
            <input
              type="radio"
              name="type"
              value="game"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div className={classNames("flex flex-col gap-2", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                                src="/assets/seo-campaign-service.gif"
                alt="/assets/seo-campaign-service.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                                src="/assets/seo-campaign-service.svg"
                alt="/assets/seo-campaign-service.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Service</div>
            <input
              type="radio"
              name="type"
              value="app"
              className="absolute opacity-0 inset-0 cursor-pointer"
            />
          </div>
          <div className={classNames("flex flex-col gap-2", styles.card)}>
            <div className="flex items-center justify-center relative">
              <img
                                src="/assets/seo-campaign-content.gif"
                alt="/assets/seo-campaign-content.gif"
                className={classNames(styles.gifImg, "w-full")}
              />
              <img
                                src="/assets/seo-campaign-content.svg"
                alt="/assets/seo-campaign-content.svg"
                className={classNames(styles.svgImg)}
              />
            </div>
            <div>Content</div>
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
