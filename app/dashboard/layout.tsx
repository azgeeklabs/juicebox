"use client"
import { useDispatch } from "react-redux";
import MainWrapper from "../_components/layout/MainWrapper";
import ProtectedRoute from "../_components/ProtectedRoute";
import { usePathname, useRouter } from "next/navigation";
import { addFile } from "../reducers/serviceSlice";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const dispatch = useDispatch();
const router = useRouter();
const pathname = usePathname();
const loadFileFromLocalStorage = () => {
  const fileData = typeof window !== "undefined" && localStorage.getItem('uploadedFile');
  if (fileData) {
    const { name, type, size, base64 } = JSON.parse(fileData);

    // Convert Base64 back to a File object (this isn't exact but provides structure)
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type });
    const file = new File([blob], name, { type });
    dispatch(addFile(file));
    console.log(file);
    return file;
  }

  return null;
};
console.log(pathname);


useEffect(() => {
  console.log("Route changed, reloading file from localStorage");
  loadFileFromLocalStorage();
}, [pathname]);


  return (
    <ProtectedRoute>
      <MainWrapper>{children}</MainWrapper>
    </ProtectedRoute>
  );
}
