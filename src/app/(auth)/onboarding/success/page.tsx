import Image from "next/image";
import { Suspense } from "react";
import SuccessMessage from "./_components/success-message";
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
      <SuccessMessage />
      <Suspense>
        <SuccessRedirectButton />
      </Suspense>
    </div>
  );
};

export default Page;
