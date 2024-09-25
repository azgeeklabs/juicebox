"use client";

import { createContext, useState, useEffect } from "react";

// 1- Create context, export it
export const accountRecoveryContext = createContext<{
  isSexual: boolean;
  setIsSexual: (value: boolean) => void;
}>({
  isSexual: false,
  setIsSexual: () => {},
});

// 2- Provide context, export it
export default function AccountRecoveryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSexual, setIsSexual] = useState<boolean>(false);

  // Use useEffect to handle localStorage read/write
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem("isSexual");
      if (storedValue) {
        setIsSexual(storedValue === "true"); // Convert string to boolean
      }
    }
  }, []); // Only run this effect once when the component mounts

  // Update localStorage when isSexual changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isSexual", isSexual.toString());
    }
  }, [isSexual]);

  // Create a context value object
  const contextValue = {
    isSexual,
    setIsSexual,
  };

  return (
    // Provide context value
    <accountRecoveryContext.Provider value={contextValue}>
      {children}
    </accountRecoveryContext.Provider>
  );
}
