import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import styles from "./reject-recovery.module.css";
const RejectRecovery = () => {
  return (
    <NextPrevNav
      backLink="/services/orm-account-recovery/suspension-approvel"
      nextLink="/services"
      nextText="All done"
    >
      <div className={`${styles.addLinkEdit} flex justify-center  w-full`}>
        <h2 className="text-center w-full">
          We are sorry, but we are unable to assist you with accounts banned for
          this reason
        </h2>
      </div>
    </NextPrevNav>
  );
};

export default RejectRecovery;
