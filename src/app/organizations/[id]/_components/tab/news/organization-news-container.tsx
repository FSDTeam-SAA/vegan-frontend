import NewsCart from "@/components/shared/cards/news-card";

const OrganizationNewsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2 lg:grid-cols-3">
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
