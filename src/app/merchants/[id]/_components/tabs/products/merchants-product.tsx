import ProductCard from "@/components/shared/cards/product-card";
import MerchantProductFilter, {
  MerchantProductFilterMobile,
} from "./merchant-product-filter";

const MerchantProducts = () => {
  return (
    <div>
      <div className="hidden md:block">
        <MerchantProductFilter />
      </div>
      <div className="md:hidden">
        <MerchantProductFilterMobile />
      </div>

      <div className="mt-[81px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <ProductCard key={n} />
        ))}
      </div>
    </div>
  );
};

export default MerchantProducts;
