import { Suspense } from "react";
import OnBoardingForm from "./_components/onboarding-form";

const Page = () => {
  return (
    <div className="h-auto w-full rounded-[16px] bg-white px-[40px] py-[32px] md:h-[484px] md:w-[567px]">
      <h1 className="text-center font-inter text-[24px] font-semibold leading-[29.05px] text-[#1D3557]">
        Welcome to Vegan Collective
      </h1>
      <Suspense>
        <OnBoardingForm />
      </Suspense>
    </div>
  );
};

export default Page;
