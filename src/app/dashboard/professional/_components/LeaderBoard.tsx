import {
    ProfessionalLeaderBoardData,
    ProfessionalLeaderBoardDataType,
} from "@/data/professional-leader-board-data";

const LeaderBoard = () => {
    return (
        <div className='pb-[98px] md:pb-[105px] pt-[40px] md:pt-[48px] lg:pt-[56px]'>
            <div className='bg-[#F8F5F2] rounded-[16px] p-[24px] md:p-[32px] lg:p-[40px]'>
                <h4 className='text-lg md:text-xl font-medium text-[#1F2937] leading-[24px] pb-[32px] md:pb-[40px]'>Leader Board Of Top Professionals</h4>
                <div>
                    {
                        ProfessionalLeaderBoardData?.map((data: ProfessionalLeaderBoardDataType) => {
                            return <div key={data?.id} className='flex items-center justify-between bg-white p-3 md:p-4 rounded-[10px] mb-[24px]'>
                                <div className='flex flex-col md:flex-row items-start md:items-center gap-[16px]'>
                                    <div className='w-[48px] h-[48px] rounded-[60px] bg-white border border-[#F4F0EB] flex items-center justify-center'>
                                        <span className='text-2xl font-medium text-[#1F2937] leading-[29px]'>
                                            {data?.id}
                                        </span>

                                    </div>
                                    <div>
                                        <h5 className='text-base md:text-lg font-medium text-[#1F2937] leading-[19px] md:leading-[21px]'>{data?.name}</h5>
                                        <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[16px] md:leading-[19px] pt-[8px] md:pt-[10px] lg:pt-[12px]'>{data?.profession}</p>
                                    </div>

                                </div>
                                <div>
                                    <h5 className='text-lg md:text-xl lg:text-[22px] font-medium text-[#1F2937] leading-[21px] md:leading-[26px] text-right'>{data?.amount}</h5>
                                    <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[16px] md:leading-[19px] pt-[8px] md:pt-[10px] lg:pt-[12px] text-right' >{data?.review}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default LeaderBoard;
