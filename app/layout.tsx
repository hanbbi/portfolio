import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";  // ← 추가

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "유한비 | 웹 개발자 포트폴리오",
  description: "3년차 웹 개발자 유한비의 포트폴리오입니다. Java Spring, React, Next.js 기반의 풀스택 개발 경험을 소개합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />  {/* ← 추가 */}
        {children}
      </body>
    </html>
  );
}