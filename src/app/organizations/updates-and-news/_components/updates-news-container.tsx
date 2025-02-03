import React from 'react';
import NewsCart from '@/components/shared/cards/news-card';
import { UpdateAndNewsData } from '@/data/update-news-data';

const UpdatesNewsContainer = () => {
    return (
        <div className='container pt-[56px] pb-[61px]'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[32px]'>
                {
                    UpdateAndNewsData?.map((data) =>{
                        return <NewsCart key={data?.id} id={data.id} img={data.img} title={data.title} description={data.description} reaction={data.reaction} comment={data.comment} >

                        </NewsCart>
                    })
                }
            </div>
        </div>
    );
};

export default UpdatesNewsContainer;