import { Mail } from "lucide-react";
import { Suspense } from "react";
import RedirectButton from "./_components/RedirectButton";

const Page = () => {
  return (
    <div className="container flex h-[500px] w-full flex-col items-center justify-center rounded-[12px] border-[1px] border-[#F4F0EB] bg-white text-[#FFFFFF] md:w-[554px]">
      <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] border-[1px] text-[#F3F4F6]">
        <Mail className="text-[28px] text-[#1D3557]" />
      </div>
      <div className="mt-[16px] text-center">
        <h5 className="font-inter text-[24px] font-medium leading-[24px] text-[#1F2937]">
          Check Your Email
        </h5>
        <p className="mt-[8px] font-inter text-[16px] font-normal leading-[30px] text-[#1F2937]">
          Please verify your email address to activate your account and start
          exploring
        </p>
      </div>
      <Suspense>
        <RedirectButton />
      </Suspense>
    </div>
  );
};

export default Page;
