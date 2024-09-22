"use client"
import NextPrevNav from "@/app/_components/NextPrevNav/NextPrevNav";
import styles from "./reject-recovery.module.css";
import next from "next";
import { useRouter } from "next/navigation";
const RejectRecovery = () => {
  const route = useRouter()
  function nextFunc(){
    route.push("/dashboard/services")
  }
  return (
    <NextPrevNav
      backLink="/dashboard/services/orm-account-recovery/suspension-approvel" nextFunc={nextFunc}
      nextLink="/dashboard/services"
      nextText="All done"
    >
      <div
        className={`${styles.addLinkEdit} flex justify-center h-[40%]  w-full`}
      >
        <h2 className="text-center w-full">
          We are sorry, but we are unable to assist you with accounts banned for
          this reason
        </h2>
      </div>
    </NextPrevNav>
  );
};

export default RejectRecovery;
