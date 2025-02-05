import MerchantReviewCard from "@/components/shared/cards/merchant-review-card";

const Merchantreviews = () => {
  return (
    <div className="space-y-[16px] pb-[90px]">
      {[1, 2, 3, 4].map((n) => (
        <MerchantReviewCard key={n} />
      ))}
    </div>
  );
};

export default Merchantreviews;
