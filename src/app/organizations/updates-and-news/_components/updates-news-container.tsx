import NewsCart from "@/components/shared/cards/news-card";
import { UpdateAndNewsData } from "@/data/update-news-data";

const UpdatesNewsContainer = () => {
  return (
    <div className="container pb-[61px] pt-[56px]">
      <div className="grid grid-cols-1 gap-[32px] md:grid-cols-2">
        {UpdateAndNewsData?.map((data) => {
          return (
            <NewsCart
              key={data?.id}
              id={data.id}
              img={data.img}
              title={data.title}
              description={data.description}
              reaction={data.reaction}
              comment={data.comment}
            ></NewsCart>
          );
        })}
      </div>
    </div>
  );
};

export default UpdatesNewsContainer;
