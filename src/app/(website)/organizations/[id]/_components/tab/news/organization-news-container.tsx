import NewsCart from "@/components/shared/cards/news-card";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { News, NewsApiResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import NewsDetails from "./newsDetails";

interface Props {
  organizationID: string;
  loggedInUserId: string;
}

const OrganizationNewsContainer = ({
  organizationID,
  loggedInUserId,
}: Props) => {
  const [newsDetails, setNewsDetails] = useState<News | null>(null);
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
          <NewsCart
            setNewsDetails={setNewsDetails}
            loggedinUserId={loggedInUserId}
          />
        </SkeletonWrapper>
        <SkeletonWrapper isLoading>
          <NewsCart
            setNewsDetails={setNewsDetails}
            loggedinUserId={loggedInUserId}
          />
        </SkeletonWrapper>
        <SkeletonWrapper isLoading>
          <NewsCart
            setNewsDetails={setNewsDetails}
            loggedinUserId={loggedInUserId}
          />
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
            <NewsCart
              key={item._id}
              data={item}
              setNewsDetails={setNewsDetails}
              loggedinUserId={loggedInUserId}
            />
          ))}
        </div>
      </section>
    );
  }

  if (newsDetails) {
    return (
      <div>
        <NewsDetails
          data={newsDetails}
          onClose={() => setNewsDetails(null)}
          loggedinUserId={loggedInUserId}
        />
      </div>
    );
  }
  return content;
};

export default OrganizationNewsContainer;
