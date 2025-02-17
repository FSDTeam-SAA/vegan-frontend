import { auth } from "@/auth";
import Footer from "@/components/home/footer/footer";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
const Navbar = dynamic(() => import("@/components/navbar/navbar"), {
  ssr: false,
});

const WebsiteLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <div className="">
      <Navbar loggedin={!!session} />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
