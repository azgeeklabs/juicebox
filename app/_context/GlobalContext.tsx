"use client";
import { createContext, useState } from "react";

const initialContextState = {
  open: false,
  setOpen: (open: boolean) => {},
  step: 1,
  setStep: (step: number) => {},
  isCheckout: false,
  setIsCheckout: (isCheckout: boolean) => {},
};

// 1- create context, export it
export const globalContext = createContext(initialContextState);

// 2- provide context, export it
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // SideNav state
  const [open, setOpen] = useState<boolean>(false);

  // StepProgress state
  const [step, setStep] = useState<number>(0);

  const [isCheckout, setIsCheckout] = useState<boolean>(false)

  // Create a context value object
  const contextValue = {
    open,
    setOpen,
    step,
    setStep,
    isCheckout,
    setIsCheckout,
  };

  return (
    // to provide what i created
    <globalContext.Provider value={contextValue}>
      {children}
    </globalContext.Provider>
  );
}
