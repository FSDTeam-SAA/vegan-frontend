import React from 'react';
import { VideoTutorialsData } from './VideoTutorialsData';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const VideoTutorials = () => {
    return (
        <div className='pb-[23px] md:pb-[50px] lg:pb-[76px]'>
            <div className='p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]'>
                <h4 className='text-xl font-medium leading-[24px] text-[#1F2937] pb-[40px] pt-[0px] md:pt-[8px] lg:pt-[16px]'>Video Tutorials</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px]'>
                    {
                        VideoTutorialsData?.map((data) => {
                            return <div key={data?.id} className='border border-[#E8DFD6] px-[16px] pt-[16px] pb-[18px] rounded-[18px]'>
                                <Image src={data?.img} alt={data?.name} width={486} height={220} className='w-full h-[220px] md:h-auto' />
                                <p className='text-base md:text-lg font-medium leading-[19px] md:leading-[21px] text-[#1F2937] py-[16px]'>{data?.name}</p>
                                <div className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-[16px]'>
                                    <button className='py-[6px] px-[12px] bg-white rounded-[20px] text-sm leading-[16px] text-[#4B5563] font-normal'>{data?.status}</button>
                                    <Button size="xl" className='text-base font-medium leading-[19px] text-white'>Watch Video</Button>
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default VideoTutorials;