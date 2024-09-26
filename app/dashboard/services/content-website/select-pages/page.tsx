"use client"
import classNames from "classnames";
import styles from "./content-website.module.css";
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOption } from "@/app/reducers/serviceSlice";

function ContentWebsite() {
  const dispatch = useDispatch();
  const route = useRouter();
  const nextFunc = () => {
    const storedItems = typeof window !== "undefined" && localStorage.getItem("selectedOption");
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    const checkedValues = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map((e)=>(e as HTMLInputElement).value)
    if (checkedValues.length > 0) {
      itemsArray.push({
        name: "select the screens you wish to update.",
        choice: checkedValues.join(","),
      });
      localStorage.setItem("selectedOption", JSON.stringify(itemsArray));
        dispatch(addOption({
          name: "select the screens you wish to update.",
          choice: checkedValues.join(","),
        }))
      route.push("/dashboard/services/content-website/content-style");
    }
  };
  return (
    <>
      <NextPrevNav nextLink="/dashboard/services/content-website/content-style" nextFunc={nextFunc} backLink="/dashboard/services/content-website/live-website">
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
                      value={`Home Page${i}`}
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
