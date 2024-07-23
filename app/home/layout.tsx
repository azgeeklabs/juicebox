import Footer from "../_components/footer/Footer";
import NavBar from "../_components/NavBar/NavBar";

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
