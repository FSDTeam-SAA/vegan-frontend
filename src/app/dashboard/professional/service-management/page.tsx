import React from 'react';
import ServiceManagementHeader from './_components/ServiceManagementHeader';
import Service from './_components/Service';

const Page = () => {
    return (
        <div className='px-10 pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <ServiceManagementHeader/>
            <Service/>
        </div>
    );
};

export default Page;