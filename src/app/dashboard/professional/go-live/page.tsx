import React from 'react';
import GoLive from './_components/go-live';
import VideoTutorials from '../help-center-support/_components/VideoTutorials';

const Page = () => {
    return (
        <div className='px-[24px] md:px-[32px] lg:px-[40px]'>
            <div className='mt-[48px]'>
                <GoLive />
            </div>

            <div className='mt-[56px]'>
                <VideoTutorials />
            </div>

        </div>
    );
};

export default Page;