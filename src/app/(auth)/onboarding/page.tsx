import OnBoardingForm from "./_components/onboarding-form";

const Page = () => {
  return (
    <div className="h-auto w-[567px] rounded-[16px] bg-white px-[40px] py-[32px] md:h-[484px]">
      <h1 className="text-center font-inter text-[24px] font-semibold leading-[29.05px] text-[#1D3557]">
        Welcome to Vegan Collective
      </h1>
      <OnBoardingForm />
    </div>
  );
};

export default Page;
