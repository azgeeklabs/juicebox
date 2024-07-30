"use client";
import dynamic from "next/dynamic";
// import NavBar from "../_components/NavBar/NavBar";
// import Footer from "../_components/footer/Footer";

const NavBar = dynamic(() => import('../_components/NavBar/NavBar'), { ssr: false });
const Footer = dynamic(() => import('../_components/footer/Footer'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-[--sy-100px]">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
