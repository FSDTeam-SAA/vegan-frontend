const ClientManagementHeader = () => {
  return (
    <div className="pb-[24px] pt-[32px] md:pb-[40px] md:pt-[40px] lg:pb-[56px]">
      <div className="flex flex-col items-start justify-between gap-[24px] md:flex-row md:items-center">
        <div>
          <h4 className="text-xl font-semibold leading-[29px] text-[#1F2937] md:text-2xl md:leading-[34px]">
            Manage Client Interactions
          </h4>
          <p className="pt-[4px] text-sm font-normal leading-[20px] text-[#4B5563] md:text-base md:leading-[23px]">
            Streamline appointments, policies, and FAQS to improve client
            experiences
          </p>
        </div>
        <div>
          {/* <Button size="xl" className='flex items-center gap-[8px] text-base font-semibold text-white leading-[19px] py-[15px] px-[12px] bg-[#1D3557]'><Plus className='w-[24px] h-[24px] text-white' /> Integrate Calendar</Button> */}
        </div>
      </div>
    </div>
  );
};

export default ClientManagementHeader;
