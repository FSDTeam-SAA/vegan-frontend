import { TopReffer } from "@/types/refferel";

interface Props {
  data?: TopReffer;
  index?: number;
}
const TopProfessionalLeaderBoardCard = ({ data, index }: Props) => {
  return (
    <div className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-3 md:p-4">
      <div className="flex flex-col items-start gap-[16px] md:flex-row md:items-center">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[60px] border border-[#F4F0EB] bg-white">
          <span className="text-2xl font-medium leading-[29px] text-[#1F2937]">
            #{index! + 1}
          </span>
        </div>
        <div>
          <h5 className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
            {data?.fullName}
          </h5>
          <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:pt-[10px] md:text-base md:leading-[19px] lg:pt-[12px]">
            {data?.designation}
          </p>
        </div>
      </div>
      <div>
        <h5 className="text-right text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[26px] lg:text-[22px]">
          ${data?.amount}
        </h5>
        <p className="pt-[8px] text-right text-sm font-normal leading-[16px] text-[#4B5563] md:pt-[10px] md:text-base md:leading-[19px] lg:pt-[12px]">
          {data?.totalReferrals} Referrals
        </p>
      </div>
    </div>
  );
};

export default TopProfessionalLeaderBoardCard;
