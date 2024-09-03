import MainWrapper from "../_components/layout/MainWrapper";
import ProtectedRoute from "../_components/ProtectedRoute";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedRoute>
      <MainWrapper>{children}</MainWrapper>
    </ProtectedRoute>
  );
}
