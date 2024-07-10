"use client";
import { createContext, useState } from "react";

const initialContextState = {
  isSexual: false,
  setIsSexual: (open: boolean) => {},
};

// 1- create context, export it
export const accountRecoveryContext = createContext(initialContextState);

// 2- provide context, export it
export default function AccountRecoveryContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSexual, setIsSexual] = useState<boolean>(false);

  // Create a context value object
  const contextValue = {
    isSexual,
    setIsSexual,
  };

  return (
    // to provide what i created
    <accountRecoveryContext.Provider value={contextValue}>
      {children}
    </accountRecoveryContext.Provider>
  );
}
