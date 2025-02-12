const StatsCard = () => {
  return (
    <div className="flex items-start justify-between rounded-[10px] border-[1px] border-[#E8DFD6] p-[16px]">
      <div className="space-y-[16px]">
        <h4 className="font-inter text-[14px] leading-[16.94px] text-[#6B7280]">
          Total Earnings
        </h4>
        <h1 className="font-inter text-[30px] font-medium leading-[36.31px] text-[#1F2937]">
          $5800
        </h1>
      </div>
      {/* <Button
        size="icon"
        variant="outline"
        className="border-0 bg-transparent shadow-none hover:bg-white"
      >
        <EllipsisVertical />
      </Button> */}
    </div>
  );
};

export default StatsCard;
