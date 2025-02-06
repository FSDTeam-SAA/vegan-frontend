import StoreProductCard from "@/components/shared/cards/store-product-card";
import { products } from "@/data/StoreProducts";

const StoreProducts = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <StoreProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default StoreProducts;
