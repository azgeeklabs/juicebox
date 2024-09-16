"use client"
import "./globals.css";
import type { Metadata } from "next";
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

// export const metadata: Metadata = {
//   title: "Creative Juicebox",
//   description: "Creative Juicebox Website",
// };
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Provider store={store}>

      <GlobalContextProvider>
        <AuthProvider>
          <body>{children}</body>
        </AuthProvider>
      </GlobalContextProvider>
    </Provider>

    </html>
  );
}
