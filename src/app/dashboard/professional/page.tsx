import React from 'react';
import ReferralTracking from './_components/ReferralTracking';
import LeaderBoard from './_components/LeaderBoard';
import TotalEarnings from './_components/TotalEarnings';

const Page = () => {
  return (
    <div className='pt-[32px] '>
      <div className='pl-[0px] md:pl-[31px] lg:pl-[38px] pb-[40px] md:pb-[48px] lg:pb-[56px] pt-[40px]'>
        <h4 className='text-xl md:text-2xl font-semibold text-[#1F2937] leading-[29px] md:leading-[34px]'>Dashboard</h4>
        <p className='text-base font-normal text-[#4B5563] leading-[23px] pt-[4px]'>Get an overview of your performance, earnings, and progress</p>
      </div>



      <TotalEarnings />
      <ReferralTracking />
      <LeaderBoard />
    </div>
  );
};

export default Page;
