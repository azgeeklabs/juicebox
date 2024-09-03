"use client";
import React from "react";
// import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  //   const { user } = useAuth();
  const { user } = { user: false };
  const router = useRouter();
  if (!user) {
    router.push("/login");
    return null;
  }

  return children;
};

export default ProtectedRoute;
