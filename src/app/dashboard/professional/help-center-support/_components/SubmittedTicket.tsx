"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { SubmittedTicketData } from './SubmittedTicketData';
import ContactSupportForm from './ContactSupportForm';

const SubmittedTicket = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleContactSupport = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='pb-[56px]'>
            <div className='p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]'>
                <h4 className='text-lg md:text-xl font-medium leading-[21px] md:leading-[24px] text-[#1F2937] pb-[40px] md:pb-[48px] lg:pb-[56px]'>Support</h4>

                <h6 className='text-base md:text-lg font-medium leading-[19px] md:leading-[21px] text-[#4B5563]'>Need Help?</h6>
                <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[24px] pt-[8px] pb-[32px] md:pb-[40px]'>Our professional support team is here to assist you with any issues you may have.</p>
                <Button onClick={handleContactSupport} size="xl" className='text-base font-medium leading-[19px] text-white'>Contact Support</Button>
                <div className='border-b border-[#E8DFD6] pt-[40px] md:pt-[48px] lg:pt-[56px]' />

                {/* cart part  */}
                <div>
                    <h4 className='text-lg md:text-xl font-medium leading-[21px] md:leading-[24px] text-[#1F2937] pt-[56px] pb-[24px]'>Submitted Ticket</h4>
                    <div>
                        {
                            SubmittedTicketData?.map((data) => {
                                return <div key={data?.id} className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-[16px] p-[16px] rounded-[10px] bg-white mb-[27px]'>
                                    <div>
                                        <p>
                                            <span className='text-base md:text-lg font-medium text-[#1F2937] leading-[23px] md:leading-[26px]'>{data?.name}</span>
                                            <span className='text-sm md:text-base fotn-medium text-[#6B7280] leading-[16px] md:leading-[19px]'>{data?.date}</span>
                                        </p>
                                        <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[20px] md:leading-[23px] pt-[8px]'>{data?.message}</p>


                                    </div>
                                    <div>
                                        <button
                                            className={`text-sm font-medium leading-[16px] py-[12px] px-[20px] rounded-[20px] ${data?.status === "Resolved"
                                                ? "text-[#16A34A] bg-[#F0FDF4]"
                                                : data?.status === "In Progress"
                                                    ? "text-[#EAB308] bg-[#FEFCE8]"
                                                    : "text-[#1F2937] bg-[#F9FAFB]"
                                                }`}
                                        >
                                            {data?.status}
                                        </button>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>

                {/* modal part  */}
                {isOpen && (

                    <section
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
                        onClick={() => setIsOpen(false)} // Close modal when clicking outside
                    >
                        
                        {/* Modal content */}
                        <div className="relative z-10 ">
                            <ContactSupportForm setIsOpen={setIsOpen} />
                        </div>
                    </section>

                )
                }
            </div>
        </div>
    );
};

export default SubmittedTicket;