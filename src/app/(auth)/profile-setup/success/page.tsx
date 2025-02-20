import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center rounded-[16px] border-[1px] border-[#F4F0EB] bg-white px-[16px] py-[32px] md:w-[554px] md:px-[40px]">
      <Info className="h-[64px] w-[64px] text-[#FDE047] lg:h-[80px] lg:w-[80px]" />
      <h1 className="mt-[16px] text-[20px] font-medium leading-[24px] text-[#1F2937]">
        Verification in Progress
      </h1>

      <p className="mt-[16px] text-[16px] font-normal leading-[28px] text-[#1F2937]">
        Thank you for registering with Vegan Collective! Our team will review
        your documents and profile to ensure alignment with our values. You will
        receive a notification once your account is verified and active
      </p>
      <Button className="mt-[40px] h-[48px] w-full" asChild>
        <Link href={`/onboarding`} className="w-full">
          Return to Log in
        </Link>
      </Button>
    </div>
  );
};

export default Page;
