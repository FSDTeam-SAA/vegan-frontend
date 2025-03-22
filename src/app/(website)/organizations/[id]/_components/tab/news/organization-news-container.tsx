import NewsCart from "@/components/shared/cards/news-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { NewsApiResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";

interface Props {
  organizationID: string;
}

const OrganizationNewsContainer = ({ organizationID }: Props) => {
  const { data, isLoading, isError, error } = useQuery<NewsApiResponse>({
    queryKey: ["news", organizationID],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/organizationUpdateAndNews/${organizationID}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-1 gap-[32px] pb-[50px] md:grid-cols-2 md:pb-[87px] lg:grid-cols-3">
        <SkeletonWrapper isLoading>
          <NewsCart />
        </SkeletonWrapper>
        <SkeletonWrapper isLoading>
          <NewsCart />
        </SkeletonWrapper>
        <SkeletonWrapper isLoading>
          <NewsCart />
        </SkeletonWrapper>
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Failed to load news"} />
    );
  } else if (data && data.data.length === 0) {
    content = (
      <EmptyContainer message="No news articles have been published yet. Check back later!" />
    );
  } else if (data && data.data.length > 0) {
    content = (
      <section>
        <div className="grid grid-cols-1 gap-[32px] pb-[50px] md:grid-cols-2 md:pb-[87px] lg:grid-cols-3">
          {data.data.map((item) => (
            <NewsCart key={item._id} data={item} />
          ))}
        </div>
      </section>
    );
  }
  return content;
};

export default OrganizationNewsContainer;
