import React from 'react';
import RevenueOverviewContainer from './RevenueOverviewContainer';
import SearchHeader from './SearchBar';

const RevenueOverview = () => {
    return (
        <div>
            <h5 className='text-xl font-medium text-[#1F2937] leading-[24px]'>Revenue Overview</h5>
            <SearchHeader/>
            <RevenueOverviewContainer/>
        </div>
    );
};

export default RevenueOverview;