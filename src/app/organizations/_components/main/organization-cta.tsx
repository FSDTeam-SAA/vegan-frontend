import { ArrowUpRight } from "lucide-react";

const OrganizationCTA = () => {
  return (
    <div className="bg-cta_gradient container my-[57px] rounded-[20px] border-[1.2px] border-[#E7EBEE] px-[24px] py-[55px] lg:py-[85px]">
      <div className="mx-auto max-w-[827px]">
        <h1 className="text-center font-lexend text-[28px] font-normal leading-[60px] tracking-[-4%] text-[#1D3557] lg:text-[48px]">
          Ready to amplify your impact? Join our platform as an organization
          today
        </h1>
        <button className="mx-auto mt-[48px] flex h-[48px] w-fit items-center justify-center rounded-[8px] border-[2px] border-[#839DD1] bg-[#1D3557] px-[16px] text-[16px] font-medium leading-[19.36px] text-white transition-colors duration-300 hover:bg-[#1D3557]/90">
          Join Us Now <ArrowUpRight />
        </button>
      </div>
    </div>
  );
};

export default OrganizationCTA;
