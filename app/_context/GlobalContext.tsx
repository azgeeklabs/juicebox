import { createContext, useState } from "react";

const initialContextState = {
  test: false,
  setTest: (test: boolean) => {},
}

// 1- create context, export it
export const globalContext = createContext(initialContextState);

// 2- provide context, export it
export default function GlobalContextProvider({ children }: { children: React.ReactNode }) {
  
// To-Do: create a state
const [test, setTest] = useState(false);

  return (
    // to provide what i created
    <globalContext.Provider value={{ test, setTest }}>
      {children}
    </globalContext.Provider>
  );
}