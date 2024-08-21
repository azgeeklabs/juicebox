"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/profile");
  }, []);

  return (
    // <div>Settings - Coming Soon</div>
    <></>
  );
};

export default Page;
