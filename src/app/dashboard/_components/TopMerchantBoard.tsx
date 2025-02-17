import { MerchantLeaderBoardDataType } from "@/data/top-merchant";

const TopMerchantBoard = ({
  LeaderBoardData,
}: {
  LeaderBoardData: MerchantLeaderBoardDataType[];
}) => {
  return (
    <div className="pb-[98px] md:pb-[105px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <h4 className="pb-[32px] text-lg font-medium leading-[24px] text-[#1F2937] md:pb-[40px] md:text-xl">
          Leader Board Of Top Merchant
        </h4>
        <div>
          {LeaderBoardData?.map((data: MerchantLeaderBoardDataType) => {
            return (
              <div
                key={data?.id}
                className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-3 md:p-4"
              >
                <div className="flex flex-col items-start gap-[16px] md:flex-row md:items-center">
                  <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[60px] border border-[#F4F0EB] bg-white">
                    <span className="text-2xl font-medium leading-[29px] text-[#1F2937]">
                      {data?.id}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
                      {data?.name}
                    </h5>
                    <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:pt-[10px] md:text-base md:leading-[19px] lg:pt-[12px]">
                      {data?.profession}
                    </p>
                  </div>
                </div>
                <div>
                  <h5 className="text-right text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[26px] lg:text-[22px]">
                    {data?.amount}
                  </h5>
                  <p className="pt-[8px] text-right text-sm font-normal leading-[16px] text-[#4B5563] md:pt-[10px] md:text-base md:leading-[19px] lg:pt-[12px]">
                    {data?.review}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopMerchantBoard;
