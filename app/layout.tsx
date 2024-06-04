import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./_components/SideNav/SideNav";
import CircularProgressBar from "./_components/progressBar/CircularProgressBar";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="flex gap-4">
        <SideNav />
        {children}
=======
      <body>
        <div className="h-screen w-full flex">
          <SideNav />
          {/*   dynamic width */}
          <div className="m-auto">
            {/* header */}
            {children}
          </div>
        </div>
>>>>>>> 47c25482cd52af4362e9df0fe8b377a604bc8c65
      </body>
    </html>
  );
}
