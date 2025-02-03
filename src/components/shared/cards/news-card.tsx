import { UpdatesAndNewsType } from '@/data/update-news-data';
import Image from 'next/image';
import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowUpRight, Heart, MessageCircle } from 'lucide-react';


const NewsCart = ({ img, title, description, reaction, comment }: UpdatesAndNewsType) => {
    return (
        <div >
            <Card>
                <CardHeader className='p-[24px]'>
                    <Image src={img} alt={title} width={552} height={185} className='w-full'/>
                </CardHeader>
                <CardContent>
                    <CardTitle className='text-lg font-normal leading-[27px] text-[#1D3557]'>{title}</CardTitle>
                    <CardDescription className='text-base font-normal leading-[24px] text-[#374151] pt-[8px] pb-[12px]'>{description}</CardDescription>
                </CardContent>
                <CardFooter className='flex justify-between items-center'>
                    <div className='flex items-center gap-[16px]'>
                        <span className='flex items-center gap-[4px] text-base font-normal leading-[19px] text-[#4B5563]'><Heart className='w-[16px] h-[16px] text-[#4B5563]' /> {reaction}</span>
                        <span className='flex items-center gap-[4px] text-base font-normal leading-[19px] text-[#4B5563]'> <MessageCircle className='w-[16px] h-[16px] text-[#4B5563]' />{comment}</span>
                    </div>
                    <div>
                        <span className='flex items-center gap-[4px] text-lg font-medium leading-[21px] text-[#1D3557]'>Read More <ArrowUpRight className='w-[24px] h-[24px] text-[#1D3557]' /></span>
                    </div>
                </CardFooter>
            </Card>

        </div>
    );
};

export default NewsCart;