import NewsCart from "@/components/shared/cards/news-card";

const OrganizationNewsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-[32px] pb-[50px] md:grid-cols-2 md:pb-[87px] lg:grid-cols-3">
      <NewsCart />
      <NewsCart />
      <NewsCart />
      <NewsCart />
      <NewsCart />
      <NewsCart />
    </div>
  );
};

export default OrganizationNewsContainer;
