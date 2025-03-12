import React from 'react';
import ClientManagementHeader from './_components/ClientManagementHeader';
import ClientManagementContainer from './_components/ClientManagementContainer';
import { auth } from '@/auth';

const Page = async () => {
    const currentUser = await auth();
    if(!currentUser?.user.userId) return null;
    return (
        <div className='px-10 pt-[32px] md:pt-[40px] pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <ClientManagementHeader/>
            <ClientManagementContainer userId={currentUser.user.userId} />
        </div>
    );
};

export default Page;