import { auth } from "@/auth";
import Footer from "@/components/home/footer/footer";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
const Navbar = dynamic(() => import("@/components/navbar/navbar"), {
  ssr: false,
});

const WebsiteLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  let accounRole;

  if (session?.user?.role === "user") {
    accounRole = "user";
  } else if (session?.user?.role === "vendor") {
    accounRole = session.user.accountType!;
  }

  return (
    <div className="">
      <Navbar
        loggedin={!!session}
        role={
          accounRole as "professional" | "merchant" | "organization" | "user"
        }
      />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
