import React from 'react';
import ReferralTracking from './_components/ReferralTracking';
import LeaderBoard from './_components/LeaderBoard';
import TotalEarnings from './_components/TotalEarnings';

const Page = () => {
  return (
    <div>
      <div className='pl-[38px] pb-[56px] pt-[40px]'>
        <h4 className='text-2x font-semibold text-[#1F2937] leading-[34px]'>Dashboard</h4>
        <p className='text-base font-normal text-[#4B5563] leading-[23px] pt-[4px]'>Get an overview of your performance, earnings, and progress</p>
      </div>



      <TotalEarnings />
      <ReferralTracking />
      <LeaderBoard />
    </div>
  );
};

export default Page;
