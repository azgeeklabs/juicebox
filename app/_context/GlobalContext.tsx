import { createContext, useState } from "react";

// 1- create context, export it
export const globalContext = createContext({
  test: false,
  setTest: (test: boolean) => {},
});

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