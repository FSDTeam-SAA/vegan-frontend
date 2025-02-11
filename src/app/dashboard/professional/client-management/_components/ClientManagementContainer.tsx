import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingsContainer from './BookingsContainer';
import Policies from './Policies';
import Faqs from './Faqs';


const ClientManagementContainer = () => {
    return (
        <div>
            <Tabs defaultValue="bookings" className="w-full">
                <TabsList>
                    <TabsTrigger value="bookings">Bookings</TabsTrigger>
                    <TabsTrigger value="policies">Policies</TabsTrigger>
                    <TabsTrigger value="faqs">FAQS</TabsTrigger>
                </TabsList>
                <TabsContent value="bookings">
                    <BookingsContainer />
                </TabsContent>
                <TabsContent value="policies">
                    <div className='px-[40px] pt-[40px] pb-[136px]'>
                        <Policies />
                    </div>

                </TabsContent>
                <TabsContent value="faqs">
                    <div className='px-[40px]'>
                        <Faqs/>
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    );
};

export default ClientManagementContainer;