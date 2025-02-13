import React from 'react';
import PaymentHeader from './_components/PaymentHeader';
import RevenueOverview from './_components/RevenueOverview';
import ProfitSharing from './_components/ProfitSharing';
import PaymentMethod from './_components/PaymentMethod';

const Page = () => {
    return (
        <div className='px-6 md:px-8 lg:px-10 pt-[32px] md:pt-[40px] pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <PaymentHeader/>
            <ProfitSharing/>
            <PaymentMethod/>
            <RevenueOverview/>
        </div>
    );
};

export default Page;