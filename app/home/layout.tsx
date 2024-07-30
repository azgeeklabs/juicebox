"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// import NavBar from "../_components/NavBar/NavBar";
// import Footer from "../_components/footer/Footer";

const NavBar = dynamic(() => import('../_components/NavBar/NavBar'), { ssr: false, loading: () => <p>Loading...</p> });
const Footer = dynamic(() => import('../_components/footer/Footer'), { ssr: false, loading: () => <p>Loading...</p> });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-[--sy-100px]">
        <Suspense fallback={<p>Loading...</p>}>
          <NavBar />
        </Suspense>
        {children}
        <Suspense fallback={<p>Loading...</p>}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
