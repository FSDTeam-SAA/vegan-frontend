import React from 'react';
import ClientManagementHeader from './_components/ClientManagementHeader';
import ClientManagementContainer from './_components/ClientManagementContainer';

const Page = () => {
    return (
        <div className=' pt-[32px] md:pt-[40px] pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <ClientManagementHeader/>
            <ClientManagementContainer/>
        </div>
    );
};

export default Page;