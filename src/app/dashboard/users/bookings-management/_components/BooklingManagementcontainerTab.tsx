"use client"
import React, { useState } from 'react';
import UpcomingBooking from './UpcomingBooking';
import AllBookedService from './AllBookedService';

const taps = [
    {
        id : "upcoming-bookings",
        label : "Upcoming Bookings"
    },
    {
        id : "all-booked-services",
        label : "All Booked Services"
    }
]

const BooklingManagementcontainerTab = () => {
    const [activeTab, setActiveTab] = useState(taps[0].id );

    
    return (
        <div className='pt-[56px]'>
            <div className='border-b-[2px] border-[#F8F5F2] flex items-center gap-10'>
                {
                    taps?.map((tab)=>(
                        <button className={`p-2 ${activeTab == tab.id ? "text-base md:text-lg font-medium leading-[21px] text-[#1F2937] border-b-[2px] border-[#1F2937]" : "text-lg font-normal text-[#717680] leading-[21px]"}`} onClick={()=>setActiveTab(tab.id)}
                         key={tab?.id}
                         >{tab.label}</button>
                    ))
                }
            </div>
            <div>
                {activeTab === "upcoming-bookings" && <UpcomingBooking/>}
                {activeTab === "all-booked-services" && <AllBookedService/>}
            </div>
        </div>
    );
};

export default BooklingManagementcontainerTab;