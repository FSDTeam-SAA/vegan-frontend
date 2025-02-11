import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import React from 'react';

const ClientManagementHeader = () => {
    return (
        <div className=' pt-[32px] md:pt-[40px] pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px]'>
                <div>
                    <h4 className='text-xl md:text-2xl font-semibold text-[#1F2937] leading-[29px] md:leading-[34px]'>Manage Client Interactions</h4>
                    <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[20px] md:leading-[23px] pt-[4px]'>Streamline appointments, policies, and FAQS to improve client experiences</p>
                </div>
                <div>
                    <Button size="xl" className='flex items-center gap-[8px] text-base font-semibold text-white leading-[19px] py-[15px] px-[12px] bg-[#1D3557]'><Plus className='w-[24px] h-[24px] text-white' /> Integrate Calendar</Button>
                </div>
            </div>
        </div>
    );
};

export default ClientManagementHeader;