import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Google Login",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="w-screen h-screen">{children}</body>
    </html>
  );
}
