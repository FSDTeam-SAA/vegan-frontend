import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar } from "./_components/sidebar";
import "./globals.css";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vegan Collective Dashboard",
  description: "Dashboard for Vegan Collective",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-[#F5F1ED]">{children}</main>
        </div>
      </body>
    </html>
  );
}
