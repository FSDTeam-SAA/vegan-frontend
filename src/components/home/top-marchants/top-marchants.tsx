import TopMarchantCard from "@/components/shared/cards/top-marchant-card";
import { MoveRight } from "lucide-react";

const TopMarchants = () => {
  return (
    <div className="py-[48px] md:py-[80px] container ">
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-[#1D3557] text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] font-medium font-lexend">
          Some Of Our Top Professionals
        </h1>
        <button className="text-[#1D3557] w-[150px] md:w-fit border-b-[2px] text-[14px] md:text-[16px] h-[30px] md:h-auto  border-[#1D3557] py-[4px] flex gap-[2px] group transition-all duration-300 ">
          Browse all
          <MoveRight className="relative transition-transform duration-300 transform group-hover:translate-x-2" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[54px] md:mt-[80px]">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <TopMarchantCard key={n} />
        ))}
      </div>
    </div>
  );
};

export default TopMarchants;
