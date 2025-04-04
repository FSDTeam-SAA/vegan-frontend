import { auth } from "@/auth";
import AppProvider from "@/provider/AppProvider";
import NProgress from "@/provider/NProgress";
import "@smastrom/react-rating/style.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter, Lexend_Deca } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "VEGAN COLLECTIVE",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    // <ClerkProvider>
    <SessionProvider session={session}>
      <AppProvider>
        <html lang="en" className="scrollbar-thin">
          <body className={`bg-[#E8DFD6] ${inter.className} antialiased`}>
            {children}
            <NProgress />
            <Toaster />
          </body>
        </html>
      </AppProvider>
    </SessionProvider>
    // </ClerkProvider>
  );
}
