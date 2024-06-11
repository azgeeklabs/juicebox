"use client";
import Link from "next/link";

// Define the props for the NextPrevNav component
interface nextPrevNavProps {
  backLink?: string; // The link for the "Back" button
  nextLink?: string; // The link for the "Next" button
  backText?: string; // The text to display on the "Back" button
  nextText?: string; // The text to display on the "Next" button
  backOnClick?: () => void; // The callback function for the "Back" button click event
  nextOnClick?: () => void; // The callback function for the "Next" button click event
  children: React.ReactNode; // The content to be rendered inside the component
}

/**
 * Renders a navigation component with previous and next links/buttons.
 *
 * @param {nextPrevNavProps} props - The component props.
 * @param {string} props.backLink - The link for the "Back" button.
 * @param {string} props.nextLink - The link for the "Next" button.
 * @param {string} props.backText - The text to display on the "Back" button.
 * @param {string} props.nextText - The text to display on the "Next" button.
 * @param {Function} props.backOnClick - The callback function for the "Back" button click event.
 * @param {Function} props.nextOnClick - The callback function for the "Next" button click event.
 * @param {ReactNode} props.children - The content to be rendered inside the component.
 * @returns {JSX.Element} The rendered NextPrevNav component.
 */
function NextPrevNav({
  backLink,
  nextLink,
  backText,
  nextText,
  backOnClick,
  nextOnClick,
  children,
}: nextPrevNavProps) {
  return (
    <>
      {/* Render the content */}
      <div className="flex justify-center items-center grow">{children}</div>
      <div className="w-[100%] pt-2">
        {/* Render the "Back" button if backLink or backOnClick is provided */}
        {(backLink || backOnClick) && (
          <Link
            href={backLink || ""}
            className=" bg-[#484848] px-[2vw] py-[0.5vw] font-semibold rounded-[var(--41px)] cursor-pointer float-start"
            onClick={() => backOnClick && backOnClick()}
          >
            {/* Default text for the "Back" button */}
            {backText || "Back"}
          </Link>
        )}
        {/* Render the "Next" button if nextLink or nextOnClick is provided */}
        {(nextLink || nextOnClick) && (
          <Link
            href={nextLink || ""}
            className="bg-[var(--highlight-yellow)] px-[2vw] py-[0.5vw] font-semibold rounded-[var(--41px)] text-[var(--primary-black)] cursor-pointer float-end"
            onClick={nextOnClick}
          >
            {/* Default text for the "Next" button */}
            {nextText || "Next"}
          </Link>
        )}
      </div>
    </>
  );
}

export default NextPrevNav;
