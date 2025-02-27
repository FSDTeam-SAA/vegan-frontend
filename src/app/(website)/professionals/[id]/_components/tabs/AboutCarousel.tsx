import ErrorContainer from "@/components/shared/sections/error-container";
import { Card, CardContent } from "@/components/ui/card";
import { SingleMerchantProfileResponse } from "@/types/merchant";
import { useQuery } from "@tanstack/react-query";

interface Props {
  merchatId: string;
}

export function AboutCarousel({ merchatId }: Props) {
  const { isLoading, data, isError, error } =
    useQuery<SingleMerchantProfileResponse>({
      queryKey: ["single-merchant-profile", merchatId],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchant/${merchatId}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data?.data) {
    content = (
      <div className="rounded-[8px] bg-white">
        <Card className="border-none shadow-none">
          <CardContent className="p-6">
            <div className="">
              <h2 className="mb-6 font-lexend text-lg leading-[18px] text-[#1D3557] md:text-xl md:font-medium md:leading-[25px]">
                {data?.data?.highlightedStatement[0].title}
              </h2>
              {/* <h3 className="mb-2 font-inter text-lg font-medium text-[#374151] md:text-xl md:leading-[30px]">
                
              </h3> */}
              <p className="font-inter text-[16px] italic leading-[30px] text-[#374151] md:text-lg">
                {data?.data.highlightedStatement[0].description}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* <div className="mt-2 flex items-center gap-4 pb-6 pl-6">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="rounded-full p-2 pl-0 transition-colors hover:bg-gray-100"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 rounded-full bg-[#1D3557] transition-all duration-300",
                    current === index ? "w-8" : "h-2 w-2 opacity-50",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="rounded-full p-2 transition-colors hover:bg-gray-100"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div> */}
      </div>
    );
  } else if (isError) {
    content = (
      <div>
        <ErrorContainer message={error?.message ?? "Something went wrong"} />
      </div>
    );
  }
  return content;
}
