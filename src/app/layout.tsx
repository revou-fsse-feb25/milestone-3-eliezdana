import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"; // We will create this component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RevoShop",
  description: "Your one-stop shop for everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}