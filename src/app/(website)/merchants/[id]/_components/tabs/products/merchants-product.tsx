import ProductCard from "@/components/shared/cards/product-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import VeganPagination from "@/components/ui/vegan-pagination";
import { useDebounce } from "@/hooks/useDebounce";
import { MerchantProductResponse } from "@/types/merchant";
import { useMerchantProductFilter } from "@/zustand/merchant/merchant-product-filter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import MerchantProductFilter, {
  MerchantProductFilterMobile,
} from "./merchant-product-filter";

interface Props {
  merchantId: string;
}

const MerchantProducts = ({ merchantId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { value, category } = useMerchantProductFilter();
  const debounceValue = useDebounce(value);

  const { isLoading, isRefetching, isError, data, error } =
    useQuery<MerchantProductResponse>({
      queryKey: [
        "merchantsProduct",
        currentPage,
        merchantId,
        debounceValue,
        category,
      ],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct?merchantID=${merchantId}&page=${currentPage}&limit=6&search=${debounceValue}&category=${category}&visibility=true`,
        ).then((res) => res.json()),
    });
  const pagination = data?.pagination;

  console.log(data);

  let content;

  if (isLoading || isRefetching) {
    content = (
      <div className="mt-[81px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <SkeletonWrapper isLoading key={n}>
            <ProductCard />
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = (
      <div className="mt-[81px]">
        <ErrorContainer message={error?.message ?? "Something went wrong"} />
      </div>
    );
  } else if (data && data?.data.length === 0) {
    content = (
      <div className="mt-[81px]">
        <EmptyContainer message="Sorry, no products were found for this merchant." />
      </div>
    );
  } else if (data && data.data?.length > 0) {
    content = (
      <div className="mt-[81px] grid grid-cols-1 gap-x-[24px] gap-y-[40px] md:grid-cols-2 lg:grid-cols-3">
        {data?.data?.map((item) => <ProductCard key={item?._id} data={item} />)}
      </div>
    );
  }

  return (
    <div>
      <div className="hidden md:block">
        <MerchantProductFilter />
      </div>
      <div className="md:hidden">
        <MerchantProductFilterMobile />
      </div>

      {content}

      {pagination && pagination.totalPages > 1 && (
        <div className="my-[40px] flex justify-end">
          <VeganPagination
            totalPages={pagination?.totalPages || 1}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      )}
    </div>
  );
};

export default MerchantProducts;
