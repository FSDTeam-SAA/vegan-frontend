import { auth } from "@/auth";
import Footer from "@/components/home/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";

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

// test commit
