import { Button } from '@/components/ui/button';
import { CloudDownload, Download, EllipsisVertical } from 'lucide-react';
import React from 'react';

const ProfitSharing = () => {
    return (
        <div>
            <div className='p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]'>
                <div className='flex items-center justify-between'>
                    <h5 className='text-xl font-medium text-[#1F2937] leading-[24px]'>Profit Sharing</h5>
                    <div className='hidden md:block'>
                        <div className='flex items-center gap-[24px]'>
                            <Button className='text-base font-medium text-[#6B7280] leading-[19px]' size="xl" variant="outline"><CloudDownload className='w-[20px] h-[20px] text-[#6B7280]' /> Export Invoice</Button>
                            <Button className='text-base font-medium text-white leading-[19px]' size="xl"><Download className='w-[20px] h-[20px] text-white' /> Download Tax Summary</Button>
                        </div>
                    </div>

                </div>

                {/* second part  */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] pt-[56px]'>
                    <div className='md:col-span-1 border border-[#E8DFD6] rounded-[10px] py-4 pl-4 pr-[6px]'>
                        <p className='flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]'>Total Earnings <EllipsisVertical className='w-[24px] h-[24px]' /></p>
                        <p className='text-2xl md:text-3xl font-medium leading-[29px] md:leading-[36px] text-[#1F2937] pt-[16px]'>$5,240.00</p>
                    </div>
                    <div className='md:col-span-1 border border-[#E8DFD6] rounded-[10px] py-4 pl-4 pr-[6px]'>
                        <p className='flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]'>Your Share  <EllipsisVertical className='w-[24px] h-[24px]' /></p>
                        <div className='flex items-center justify-between pt-[16px]'>
                            <p className='text-2xl md:text-3xl font-medium leading-[29px] md:leading-[36px] text-[#1F2937]'>$4,716.00</p>
                            <button className='py-[6px] px-[4px] rounded-[6px] bg-white text-[13px] font-medium leading-[15px] text-[#6B7280]'>90%</button>
                        </div>

                    </div>
                    <div className='md:col-span-1 border border-[#E8DFD6] rounded-[10px] py-4 pl-4 pr-[6px]'>
                        <p className='flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]'>Platform Fee  <EllipsisVertical className='w-[24px] h-[24px]' /></p>
                        <div className='flex items-center justify-between pt-[16px]'>
                            <p className='text-2xl md:text-3xl font-medium leading-[29px] md:leading-[36px] text-[#1F2937]'>$524.00</p>
                            <button className='py-[6px] px-[4px] rounded-[6px] bg-white text-[13px] font-medium leading-[15px] text-[#6B7280]'>0%</button>
                        </div>
                    </div>
                </div>

                {/* small device  */}
                <div className='block md:hidden pt-[32px]'>
                <Button className='w-full text-base font-medium text-white leading-[19px] mb-[24px]' size="xl"><Download className='w-[20px] h-[20px] text-white' /> Download Tax Summary</Button>
                    <Button className='w-full text-base font-medium text-[#6B7280] leading-[19px]' size="xl" variant="outline"><CloudDownload className='w-[20px] h-[20px] text-[#6B7280]' /> Export Invoice</Button>
                    
                </div>
            </div>
        </div>
    );
};

export default ProfitSharing;