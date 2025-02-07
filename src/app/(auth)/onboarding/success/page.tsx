import Image from "next/image";
import { Suspense } from "react";
import SuccessRedirectButton from "./_components/success-redirect-button";

const Page = () => {
  return (
    <div className="container flex h-auto w-full flex-col items-center justify-center rounded-[12px] border-[1px] border-[#F4F0EB] bg-white p-[16px] text-[#FFFFFF] md:w-[854px] md:p-[28px] lg:h-[500px]">
      <div className="relative flex h-[136px] w-[136px] items-center justify-center rounded-[8px]">
        <Image
          src="https://res.cloudinary.com/dgnustmny/image/upload/v1738925272/Rectangle_yzijtk.png"
          fill
          alt="Vegan Collective Logo"
        />
      </div>
      <div className="mt-[16px] max-w-[678px] text-center">
        <h5 className="font-inter text-[24px] font-medium leading-[29.05px] text-[#1D3557] lg:text-[48px] lg:leading-[58.09px]">
          Welcome to Vegan Collective
        </h5>
        <p className="mt-[8px] font-inter text-[16px] font-normal text-[#374151] lg:text-[20px]">
          Congratulations! You are now part of Vegan Collective, the world’s
          trusted all-vegan platform. We’re excited to support your mission.”
        </p>
      </div>
      <Suspense>
        <SuccessRedirectButton />
      </Suspense>
    </div>
  );
};

export default Page;
