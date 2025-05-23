"use client";
import Image from "next/image";

const PaymentMethod = () => {
  return (
    <div className="py-[56px]">
      <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
        <div className="flex flex-col items-start justify-start gap-[24px] md:flex-row md:items-center md:justify-between">
          <h5 className="text-lg font-medium leading-[21px] text-[#1F2937] md:text-xl md:leading-[24px]">
            Account Management
          </h5>
        </div>
        {/* second part  */}
        <div className="pt-[40px]">
          {/* <div className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-[16px]">
            <div className="flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]">
              <Image src="/assets/wise.png" alt="icon" width={26} height={18} />
              <div>
                <p className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
                  Wise
                </p>
                <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:text-base md:leading-[19px]">
                  Not Connected
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-base font-medium leading-[19px] text-[#1D3557]">
                Connect
              </h5>
            </div>
          </div> */}
          {/* <div className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-[16px]">
            <div className="flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]">
              <Image src="/assets/wise.png" alt="icon" width={26} height={18} />
              <div>
                <p className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
                  PayPal
                </p>
                <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:text-base md:leading-[19px]">
                  Not Connected
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-base font-medium leading-[19px] text-[#1D3557]">
                Connect
              </h5>
            </div>
          </div> */}
          <div className="mb-[24px] flex items-center justify-between rounded-[10px] bg-white p-[16px]">
            <div className="flex items-center gap-[8px] md:gap-[13px] lg:gap-[18px]">
              <Image src="/assets/wise.png" alt="icon" width={26} height={18} />
              <div>
                <p className="text-base font-medium leading-[19px] text-[#1F2937] md:text-lg md:leading-[21px]">
                  Stripe
                </p>
                <p className="pt-[8px] text-sm font-normal leading-[16px] text-[#4B5563] md:text-base md:leading-[19px]">
                  Connected
                </p>
              </div>
            </div>
            <div>
              <h5 className="text-base font-medium leading-[19px] text-[#EF4444]">
                Remove
              </h5>
            </div>
          </div>
          {/* <div className='flex items-center justify-between bg-white rounded-[10px] p-[16px]'>
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
                    </div> */}
        </div>

        {/* modal part  */}
      </div>
    </div>
  );
};

export default PaymentMethod;

// {isOpen && (
//   <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
//     {/* Modal content */}
//     <div className="relative z-10">
//       <AddBankMethodForm setIsOpen={setIsOpen} />
//     </div>
//   </section>
// )}
