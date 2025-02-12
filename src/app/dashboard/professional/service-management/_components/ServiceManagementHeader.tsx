"use client"
import { Button } from '@/components/ui/button';
import { FileUp, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { BulkUploadDialog } from './bulk-upload-dialog';
import { AddServiceForm } from './add-service-form';
import { ScrollArea } from '@/components/ui/scroll-area';

const ServiceManagementHeader = () => {
    const [open, setOpen] = useState(false);
    const [isOenService, setIsOpenService] = useState(false);

    return (
        <div className=' pt-[32px] md:pt-[40px] pb-[24px] md:pb-[40px] lg:pb-[56px]'>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px]'>
                <div>
                    <h4 className='text-xl md:text-2xl font-semibold text-[#1F2937] leading-[29px] md:leading-[34px]'>Manage Your Services</h4>
                    <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[20px] md:leading-[23px] pt-[4px]'>Easily add, manage, and optimize your services for greater visibility</p>
                </div>
                <div className='flex items-center gap-[16px]'>
                    <Button onClick={() => setOpen(!open)} variant='outline' size="xl" className='flex items-center gap-[8px] text-base font-medium text-[#6B7280] leading-[19px] py-[14px] px-[18px] rounded-[10px]'><FileUp className='w-[14px] h-[16px] text-[#6B7280]' /> Upload Bulk Services</Button>
                    <Button onClick={() => setIsOpenService(!isOenService)} size="xl" className='flex items-center gap-[8px] text-base font-medium text-white leading-[19px] py-[14px] px-[20px] rounded-[10px] bg-[#1D3557]'><Plus className='w-[20px] h-[20px] text-white' />Add New Service</Button>
                </div>
            </div>

            {/* Bulk modal  */}
            {
                open && (
                    <BulkUploadDialog open={open} onClose={() => setOpen(false)} />
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
                            <ScrollArea className='w-[769px] h-[700px] rounded-[16px]'>
                                <AddServiceForm setIsOpenService={setIsOpenService} />
                            </ScrollArea>

                        </div>
                    </section>
                )
            }
        </div>
    );
};

export default ServiceManagementHeader;