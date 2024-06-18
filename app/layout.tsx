import "./globals.css";
import type { Metadata } from "next";
// import { Barlow } from "next/font/google";
import MainWrapper from "./_components/layout/MainWrapper";
// const barlow = Barlow({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "500", "600", "800", "900"],
// });
// Import Context (provider only)
import GlobalContextProvider from "./_context/GlobalContext";

export const metadata: Metadata = {
  title: "Creative Juicebox",
  description: "Creative Juicebox",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <GlobalContextProvider>
        <body>
        <MainWrapper>{children}</MainWrapper>
        </body>
      </GlobalContextProvider>
    </html>
  );
}