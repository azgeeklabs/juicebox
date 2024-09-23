"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../_context/AuthContext";
import image from "@/public/assets/bg-1.svg";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures that the component renders only after the client has mounted

    // if (
    //   typeof window !== "undefined" &&
    //   !user.token &&
    //   !typeof window !== "undefined" && localStorage.getItem("token")
    // ) {
    //   router.push("/login");
    // }
  }, [user, router]);

  if (!isClient) {
    // Return a placeholder while waiting for the client-side rendering
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src={image.src}
          className="animate-pulse animat w-[--313px]"
          alt="logo"
        />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
