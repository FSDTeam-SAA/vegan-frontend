import MerchantCTA from "@/app/merchants/_components/cta/merchant_cta";
import ProductCard from "@/components/shared/cards/product-card";
import MerchantProductFilter from "./merchant-product-filter";

const MerchantProducts = () => {
  return (
    <div>
      <MerchantProductFilter />

      <div className="mt-[81px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <ProductCard key={n} />
        ))}
      </div>

      <div>
        <MerchantCTA />
      </div>
    </div>
  );
};

export default MerchantProducts;
