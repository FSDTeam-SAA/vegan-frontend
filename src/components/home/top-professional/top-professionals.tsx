import TopProfessionaCard from "@/components/shared/cards/top-professional-card";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const TopProfessionals = () => {
  return (
    <div className="container py-[48px] md:py-[80px]">
      <div className="flex w-full items-center justify-between">
        <h1 className="font-lexend text-[24px] font-medium leading-[30px] text-[#1D3557] md:text-[32px] md:leading-[40px]">
          Some Of Our Top Professionals
        </h1>
        <Link
          href="/professionals"
          className="group flex h-[30px] w-[150px] gap-[2px] border-b-[2px] border-[#1D3557] py-[4px] text-[14px] text-[#1D3557] transition-all duration-300 md:h-auto md:w-fit md:text-[16px]"
        >
          Browse all
          <MoveRight className="relative transform transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>

      <div className="mt-[54px] grid grid-cols-1 gap-[24px] md:mt-[80px] md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <TopProfessionaCard key={n} />
        ))}
      </div>
    </div>
  );
};

export default TopProfessionals;
