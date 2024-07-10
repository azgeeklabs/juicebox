import classNames from "classnames";
import styles from "./content-website.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";

function ContentWebsite() {
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/content-website/rewrite-website">
        <div className="flex flex-col gap-[var(--sy-40px)] justify-center items-center h-full">
          <div
            className={classNames(
              "flex flex-col items-center text-center",
              styles.container
            )}
          >
            <h2 className="text-[--30px] font-bold w-full md:w-[90%] lg:w-[80%] xl:w-[70%]">
              Please review your website pages and select the screens you wish
              to update.
            </h2>
          </div>
          <div
            className={classNames(
              "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[--16px] bg-[#353535] p-[--40px] rounded-[--10px]",
              styles.cards
            )}
          >
            {Array(10)
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
                        src="/assets/website-page.png"
                        alt=""
                        className="w-full"
                      />
                    </div>
                    <div>Home Page</div>
                    <input
                      type="checkbox"
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
