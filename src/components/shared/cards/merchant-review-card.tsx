import { Rating, Star } from "@smastrom/react-rating";
const MerchantReviewCard = () => {
  return (
    <div className="max-w-[882px] space-y-[20px] rounded-[10px] border-[1px] border-[#F3F4F6] bg-white p-[24px]">
      <div className="flex w-full flex-col items-start justify-between space-y-[12px] md:flex-row md:items-center">
        <div className="flex items-center gap-x-[8px]">
          <h3 className="text-[18px] font-semibold leading-[24px] tracking-[3%] text-[#1F2937]">
            Jane Smith
          </h3>
          <div className="h-[4px] w-[4px] rounded-full bg-[#9CA3AF]" />
          <span className="font-inter text-[16px] font-medium leading-[19.36px] text-[#9CA3AF]">
            2 days ago
          </span>
        </div>
        <div>
          <Rating
            style={{ maxWidth: 78 }}
            value={5}
            itemStyles={{
              activeFillColor: "#FDE047",
              inactiveFillColor: "#fbf1a9",
              itemShapes: Star,
            }}
          />
        </div>
      </div>

      <p className="text-[18px] font-normal leading-[30px] text-[#374151]">
        Great products and excellent service! Will definitely buy again.
      </p>
      <p className="text-[18px] font-medium leading-[24px] tracking-[3%] text-[#374151]">
        Verified purchase
      </p>
    </div>
  );
};

export default MerchantReviewCard;
