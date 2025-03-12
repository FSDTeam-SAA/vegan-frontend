"use client"
import React, { useState } from 'react';
import UpcomingBooking from './UpcomingBooking';
import AllBookedService from './AllBookedService';
import VeganTabs, { VeganTab } from '@/components/ui/Vegan-Tab';

const tabs = [
    {
        id : "upcoming-bookings",
        label : "Upcoming Bookings"
    },
    {
        id : "all-booked-services",
        label : "All Booked Services"
    }
] as VeganTab[];

const BooklingManagementcontainerTab = () => {
    const [activeTab, setActiveTab] = useState("upcoming-bookings");

    
    return (
        <div className='pt-[56px]'>
            <VeganTabs 
             tabs={tabs}
             defaultActiveTab={activeTab}
             onTabChange={(tab)=> setActiveTab(tab)}
            />
            <div>
                {activeTab === "upcoming-bookings" && <UpcomingBooking/>}
                {activeTab === "all-booked-services" && <AllBookedService/>}
            </div>
        </div>
    );
};

export default BooklingManagementcontainerTab;