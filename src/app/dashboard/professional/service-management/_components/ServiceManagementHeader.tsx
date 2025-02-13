"use client"
import { Button } from '@/components/ui/button';
import { FileUp, Plus, X } from 'lucide-react';
import React, { useState } from 'react';
import { BulkUploadDialog } from './bulk-upload-dialog';
import { AddServiceForm } from './add-service-form';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServiceManagementHeader = () => {
    const [open, setOpen] = useState(false);
    const [isOenService, setIsOpenService] = useState(false);

    return (
        <div className=' pt-[32px] md:pt-[40px] pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[8px] md:gap-[16px] lg:gap-[24px]'>
                <div>
                    <h4 className='text-xl md:text-2xl font-semibold text-[#1F2937] leading-[29px] md:leading-[34px]'>Manage Your Services</h4>
                    <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[20px] md:leading-[23px] pt-[4px]'>Easily add, manage, and optimize your services for greater visibility</p>
                </div>
                <div className='w-full md:w-auto flex items-center justify-between md:gap-[16px]'>
                    <Button onClick={() => setOpen(!open)} variant='outline' size="lg" className='flex items-center gap-[8px] text-xs sm:text-sm md:text-base font-medium text-[#6B7280] leading-[16px] md:leading-[19px] py-[14px] px-[12px] md:px-[15px] lg:px-[18px] rounded-[10px]'><FileUp className='w-[14px] h-[16px] text-[#6B7280]' /> Upload Bulk Services</Button>
                    <Button onClick={() => setIsOpenService(!isOenService)} size="lg" className='flex items-center gap-[4px] md:gap-[6px] lg:gap-[8px] text-xs sm:text-sm md:text-base font-medium text-white leading-[16px] md:leading-[19px] py-[14px] px-[12px] md:px-[16px] lg:px-[20px] rounded-[10px] bg-[#1D3557]'><Plus className='w-[20px] h-[20px] text-white' />Add Service</Button>
                </div>
            </div>

            {/* Bulk modal  */}
            {
                open && (
                    <div >
                        <BulkUploadDialog open={open} onClose={() => setOpen(false)} />
                    </div>

                )
            }

            {/* add new service modal  */}
            {
                isOenService && (
                    <section
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
                    >

                        {/* Modal content */}
                        <div className="relative z-10 ">
                            <div className="flex items-center justify-between px-[32px] py-[30px] bg-white shadow-lg rounded-t-lg">
                                <h4 className="text-xl font-medium text-[#1F2937] leading-[24px]">Add A New Service</h4>
                                <X className="cursor-pointer" onClick={() => setIsOpenService(false)} />
                            </div>
                            <ScrollArea className='w-[327px] md:w-[500px] lg:w-[769px] h-[700px] rounded-b-[16px]'>
                                <AddServiceForm  />
                            </ScrollArea>

                        </div>
                    </section>
                )
            }
        </div>
    );
};

export default ServiceManagementHeader;