<<<<<<< HEAD
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/landing");
  });

  return <></>;
}
=======
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  });

  return <></>;
}
>>>>>>> f23a8759899442e41c924e4b585444bbf872a8d9
