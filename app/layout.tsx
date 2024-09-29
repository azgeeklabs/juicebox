"use client";
import "./globals.css";

// import { Barlow } from "next/font/google";

// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "500", "600", "800", "900"],
// });
// Import Context (provider only)
import GlobalContextProvider from "./_context/GlobalContext";
import { AuthProvider } from "./_context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./Store/store";
// import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
const Toaster = dynamic(
  () => import("react-hot-toast").then((mod) => mod.Toaster),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <GlobalContextProvider>
            <AuthProvider>
              {children}
              <Toaster
                position="top-center"
                containerStyle={{
                  zIndex: 50001,
                }}
              />
            </AuthProvider>
          </GlobalContextProvider>
        </Provider>
      </body>
    </html>
  );
}
