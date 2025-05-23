import { auth } from "@/auth";
import Footer from "@/components/home/footer/footer";
import { CrispProvider } from "@/components/shared/features/crisp/crisp-provider";
import ProfessionalGreetings from "@/components/ui/professional-greetings";
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
  } else if (session?.user?.role === "verifier") {
    accounRole = "verifier";
  }

  return (
    <div className="">
      <Navbar
        loggedin={!!session}
        role={
          accounRole as
            | "professional"
            | "merchant"
            | "organization"
            | "user"
            | "verifier"
        }
      />
      {children}

      <Footer />

      <CrispProvider />

      {session?.user && (
        <ProfessionalGreetings
          isGreetings={!!session.user.isgratings}
          userId={session.user.userId!}
          isVerified={session.user.isVerified}
          role={accounRole as "user" | "vendor"}
        />
      )}
    </div>
  );
};

export default WebsiteLayout;
