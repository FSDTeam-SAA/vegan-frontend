import React from 'react';
import ReferralTracking from './_components/ReferralTracking';
import LeaderBoard from './_components/LeaderBoard';
import TotalEarnings from './_components/TotalEarnings';

const Page = () => {
  return (
    <div>
      <TotalEarnings/>
      <ReferralTracking/>
      <LeaderBoard/>
    </div>
  );
};

export default Page;
