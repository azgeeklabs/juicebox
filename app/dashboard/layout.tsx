
import MainWrapper from "../_components/layout/MainWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
          <MainWrapper>{children}</MainWrapper>
  );
}
