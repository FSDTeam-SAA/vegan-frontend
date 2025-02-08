
import { Button } from '@/components/ui/button';
import { EllipsisVertical } from 'lucide-react';
import React from 'react';


const ReferralTracking = () => {
    return (
        <div className='px-[40px] pt-[56px]'>
            <div className='bg-[#F8F5F2] rounded-[16px] p-[40px]'>
                <h4 className='text-xl font-medium text-[#1F2937] leading-[24px] pb-[40px]'>Referral Tracking</h4>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] pb-[56px]'>
                    <div className='md:col-span-1 border border-[#E8DFD6] rounded-[10px] py-4 pl-4 pr-[6px]'>
                        <p className='flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]'>Total Referrals <EllipsisVertical className='w-[24px] h-[24px]' /></p>
                        <p className='text-3xl font-medium leading-[36px] text-[#1F2937] pt-[16px]'>68</p>
                    </div>
                    <div className='md:col-span-1 border border-[#E8DFD6] rounded-[10px] py-4 pl-4 pr-[6px]'>
                        <p className='flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]'>Amount Deducted For Charity <EllipsisVertical className='w-[24px] h-[24px]' /></p>
                        <p className='text-3xl font-medium leading-[36px] text-[#1F2937] pt-[16px]'>$100.00</p>
                    </div>
                    <div className='md:col-span-1 border border-[#E8DFD6] rounded-[10px] py-4 pl-4 pr-[6px]'>
                        <p className='flex items-center justify-between text-sm font-normal leading-[16px] text-[#6B7280]'>Commission Paid <EllipsisVertical className='w-[24px] h-[24px]' /></p>
                        <p className='text-3xl font-medium leading-[36px] text-[#1F2937] pt-[16px]'>$524.00</p>
                    </div>
                </div>
                <div>
                    <h6 className='text-lg font-semibold text-[#1F2937] leading-[21px]'>Refer People To Vegan Collective</h6>
                    <p className='text-base font-normal text-[#4B5563] leading-[19px] pt-[8px]'>Click this button to invite people and earn more rewards</p>
                    <div className='pt-[32px]'>
                        <Button size="xl" className='text-base font-semibold leading-[19px] text-white py-[14px] px-[16px]'>Share QR Code</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralTracking;
