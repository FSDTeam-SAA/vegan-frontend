import {
  ProfessionalLeaderBoardData,
  ProfessionalLeaderBoardDataType,
} from "@/data/professional-leader-board-data";

const LeaderBoard = () => {
  return (
    <div className="px-[40px] pb-[105px] pt-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[40px]">
        <h4 className="pb-[40px] text-xl font-medium leading-[24px] text-[#1F2937]">
          Leader Board Of Top Professionals
        </h4>
        <div>
          {ProfessionalLeaderBoardData?.map(
            (data: ProfessionalLeaderBoardDataType) => {
              return (
                <div
                  key={data?.id}
                  className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-4"
                >
                  <div className="flex items-center gap-[16px]">
                    <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[60px] border border-[#F4F0EB] bg-white">
                      <span className="text-2xl font-medium leading-[29px] text-[#1F2937]">
                        {data?.id}
                      </span>
                    </div>
                    <div>
                      <h5 className="text-lg font-medium leading-[21px] text-[#1F2937]">
                        {data?.name}
                      </h5>
                      <p className="pt-[12px] text-base font-normal leading-[19px] text-[#4B5563]">
                        {data?.profession}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-[22px] font-medium leading-[26px] text-[#1F2937]">
                      {data?.amount}
                    </h5>
                    <p className="pt-[12px] text-base font-normal leading-[19px] text-[#4B5563]">
                      {data?.review}
                    </p>
                  </div>
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
