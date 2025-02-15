"use client"
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import AddBankMethodForm from './AddBankMethodForm';

const PaymentMethod = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handlePaymentMethodForm = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className='py-[56px]'>
            <div className='p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]'>
                <div className='flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-[24px]'>
                    <h5 className='text-lg md:text-xl font-medium text-[#1F2937] leading-[21px] md:leading-[24px]'>Payment Methods</h5>
                    <Button onClick={handlePaymentMethodForm} className='text-base font-medium text-[#1F2937] leading-[19px]' size="xl" variant="outline">Add A Method</Button>

                </div>
                {/* second part  */}
                <div className='pt-[40px]'>
                    <div className='flex items-center justify-between bg-white rounded-[10px] p-[16px] mb-[24px]'>
                        <div className='flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]'>
                            <Image src="/assets/wise.png" alt='icon' width={26} height={18} />
                            <div>
                                <p className='text-base md:text-lg font-medium text-[#1F2937] leading-[19px] md:leading-[21px]'>Wise</p>
                                <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[16px] md:leading-[19px] pt-[8px]'>Not Connected</p>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-base font-medium text-[#1D3557] leading-[19px]'>Connect</h5>
                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-[10px] p-[16px] mb-[24px]'>
                        <div className='flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]'>
                            <Image src="/assets/wise.png" alt='icon' width={26} height={18} />
                            <div>
                                <p className='text-base md:text-lg font-medium text-[#1F2937] leading-[19px] md:leading-[21px]'>PayPal</p>
                                <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[16px] md:leading-[19px] pt-[8px]'>Not Connected</p>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-base font-medium text-[#1D3557] leading-[19px]'>Connect</h5>
                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-[10px] p-[16px] mb-[24px]'>
                        <div className='flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]'>
                            <Image src="/assets/wise.png" alt='icon' width={26} height={18} />
                            <div>
                                <p className='text-base md:text-lg font-medium text-[#1F2937] leading-[19px] md:leading-[21px]'>Stripe</p>
                                <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[16px] md:leading-[19px] pt-[8px]'>Connected</p>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-base font-medium text-[#EF4444] leading-[19px]'>Remove</h5>
                        </div>
                    </div>
                    <div className='flex items-center justify-between bg-white rounded-[10px] p-[16px]'>
                        <div className='flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]'>
                            <Image src="/assets/wise.png" alt='icon' width={26} height={18} />
                            <div>
                                <p className='text-base md:text-lg font-medium text-[#1F2937] leading-[19px] md:leading-[21px]'>Bank Account</p>
                                <p className='text-sm md:text-base font-normal text-[#4B5563] leading-[16px] md:leading-[19px] pt-[8px]'>Add your bank details</p>
                            </div>
                        </div>
                        <div>
                            <h5 className='text-base font-medium text-[#1D3557] leading-[19px]'><ArrowRight /></h5>
                        </div>
                    </div>
                </div>

                {/* modal part  */}
                {isOpen && (

                    <section
                        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
                    >

                        {/* Modal content */}
                        <div className="relative z-10 ">
                            <AddBankMethodForm setIsOpen={setIsOpen} />
                        </div>
                    </section>

                )
                }

            </div>
        </div>
    );
};

export default PaymentMethod;