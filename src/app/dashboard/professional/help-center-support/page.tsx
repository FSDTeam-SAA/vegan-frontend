import React from 'react';
import HelpCenterSupportHeader from './_components/HelpCenterSupportHeader';
import VideoTutorials from './_components/VideoTutorials';
import SubmittedTicket from './_components/SubmittedTicket';

const Page = () => {
    return ( 
        <div className='px-[24px] md:px-[32px] lg:px-[40px]'>
            <HelpCenterSupportHeader/>
            <SubmittedTicket/>
            <VideoTutorials/>
        </div>
    );
};

export default Page;