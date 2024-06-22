import classNames from "classnames";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <header
      className={classNames(
        "overflow-hidden flex flex-col items-center gap-[--252px] pt-[25vh] md:pt-[20vh] lg:pt-[--50px]",
        styles.hero
      )}
    >
      <div
        className={classNames(
          "flex flex-col font-extrabold text-[--highlight-yellow] text-[--111px] justify-center items-center",
          styles.hero__title
        )}
      >
        <h1>IF WE DONT PROVIDE IT</h1>
        <h1 className="text-[--252px]">IT DOESN'T</h1>
      </div>
      <div className="relative">
        <h1 className=" text-[--primary-black] py-[--50px] leading-[--252px]">
          EXIST
        </h1>
        <div
          className={classNames(
            "absolute text-[--252px] px-[--252px] bottom-0 rotate-12 font-bold w-[110vw] z-10 left-1/2 -translate-x-1/2 bg-[--highlight-yellow]",
            styles.hero__starp
          )}
        >
          <h1 className="text-[--primary-black] leading-[--252px]">EXIST</h1>
        </div>
      </div>
    </header>
  );
};

export default Hero;
