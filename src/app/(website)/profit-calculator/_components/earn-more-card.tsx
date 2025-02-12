const EarnMoreCard = () => {
  return (
    <div className="container mx-auto mb-[57px] w-[90%] rounded-[20px] border-[1.2px] border-[#E7EBEE] bg-cta_gradient px-[24px] py-[55px] md:w-full lg:py-[85px]">
      <div className="mx-auto max-w-[827px]">
        <h1 className="text-center font-lexend text-[28px] font-normal leading-[60px] tracking-[-4%] text-[#1D3557] lg:text-[48px]">
          Ready to Earn More?
        </h1>
        <p className="text-center text-[16px] leading-[30px] text-[#1D3557] lg:text-[18px]">
          Each referral could bring you closer to your goals.
          <br />
          Share your link and start earning today!
        </p>
        <button className="mx-auto mt-[48px] flex h-[48px] w-fit items-center justify-center rounded-[8px] border-[2px] border-[#839DD1] bg-[#1D3557] px-[16px] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90">
          Share Link Now
        </button>
      </div>
    </div>
  );
};

export default EarnMoreCard;
