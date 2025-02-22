"use client";
import EmptyContainer from "@/components/shared/sections/empty-container";
import ErrorContainer from "@/components/shared/sections/error-container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { Switch } from "@/components/ui/switch";
import {
  ProfessionalService,
  ProfessionalServiceResponse,
} from "@/types/professional";
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { PencilLine, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  id: string;
}

export default function Service({ id }: Props) {
  const { data, isLoading, isError, error } =
    useQuery<ProfessionalServiceResponse>({
      queryKey: ["professional-services"],
      queryFn: () =>
        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/allservices/${id}`,
        ).then((res) => res.json()),
    });

  let content;

  if (isLoading || data?.success) {
    if (data?.services.length === 0) {
      content = (
        <EmptyContainer message={data.messasge || "No Services found"} />
      );
    } else if (data?.services && data.services.length > 0) {
      content = (
        <SkeletonWrapper isLoading={isLoading}>
          <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
            <div className="space-y-5">
              {data?.services &&
                data.services.map((item: ProfessionalService) => (
                  <ServiceCard key={item._id} data={item} id={item._id} />
                ))}
            </div>
          </div>
        </SkeletonWrapper>
      );
    }
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message || "Something went wrong"} />
    );
  }

  return content;
}

interface Props {
  data?: ProfessionalService;
  id: string;
}

const ServiceCard = ({ data }: Props) => {
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [checked, setChecked] = useState(data?.visibility || false);
  return (
    <Card className="mb-[51px] bg-[#F9FAFB]">
      <Accordion
        type="multiple"
        value={openAccordions}
        onValueChange={(values) => setOpenAccordions(values)}
      >
        <AccordionItem value={"a"}>
          <div className="flex w-full justify-between rounded-t-[12px] bg-white p-6">
            <div className="w-full">
              <div className="flex items-center space-x-2">
                <Switch
                  id={`vegan-visibility-${data?._id}`}
                  checked={checked}
                  onCheckedChange={setChecked}
                />
                <Label
                  className="text-sm font-medium leading-[20px] text-[#1F2937]"
                  htmlFor={`vegan-visibility-`}
                >
                  Visibility{" "}
                  <span className="font-normal">
                    (Service is {checked ? "visible" : "hidden"})
                  </span>
                </Label>
              </div>
              <div>
                <CardTitle className="py-4 text-lg font-medium leading-[26px] text-[#1F2937]">
                  {data?.serviceName}
                </CardTitle>
                <CardDescription className="text-base font-normal leading-[23px] text-[#1F2937]">
                  {data?.serviceDescription}
                </CardDescription>
              </div>
            </div>
            <AccordionTrigger></AccordionTrigger>
          </div>

          <AnimatePresence initial={false}>
            {openAccordions.includes("a") && (
              <AccordionContent forceMount>
                <motion.div
                  key={`content-a`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <CardContent>
                    <h5 className="pb-[8px] pt-[24px] text-lg font-medium leading-[26px] text-[#1F2937]">
                      SEO Details
                    </h5>
                    <div className="space-y-4">
                      <div className="space-y-4 bg-white p-4">
                        <div>
                          <h4 className="text-lg font-medium leading-[26px] text-[#1F2937]">
                            Meta Description
                          </h4>
                          <p className="pt-[8px] text-base font-medium leading-[24px] text-[#6B7280]">
                            {data?.metaDescription}
                          </p>
                        </div>
                        <div>
                          <h4 className="pb-[12px] text-lg font-medium leading-[26px] text-[#1F2937]">
                            Keywords
                          </h4>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {data?.keyWords.map((keyword, index) => (
                              <Badge
                                key={index}
                                className="rounded-[10px] px-2 text-[12px] font-normal leading-[26px] text-[#1F2937]"
                                variant="secondary"
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="border-none pb-[16px] text-lg font-medium leading-[26px] text-[#1F2937]">
                          Media
                        </h3>
                        <div className="flex flex-col items-center gap-4 md:flex-row">
                          {data?.serviceImage && (
                            <Image
                              src={data?.serviceImage || "/placeholder.svg"}
                              alt="Vegan market logo"
                              width={180}
                              height={180}
                              className="h-[120px] w-full rounded-[12px] md:h-[180px] md:w-[180px]"
                            />
                          )}

                          {data?.serviceVideo && (
                            <video
                              controls
                              width="320"
                              height="180"
                              className="aspect-video rounded-[12px]"
                            >
                              <source
                                src={data?.serviceVideo}
                                type="video/mp4"
                              />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionItem>
      </Accordion>

      <CardContent>
        <div className="mt-4 flex justify-end">
          <Button
            className="text-base font-normal leading-[23px] text-[#1F2937]"
            variant="ghost"
            size="sm"
          >
            <PencilLine />
            Edit Service
          </Button>
        </div>
      </CardContent>

      {/* Edit Service Modal */}
      {false && (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
          <div className="relative z-10">
            <div className="flex items-center justify-between rounded-t-lg bg-white px-[32px] py-[30px] shadow-lg">
              <h4 className="text-xl font-medium leading-[24px] text-[#1F2937]">
                Edit Service Details
              </h4>
              <X className="cursor-pointer" />
            </div>
            <ScrollArea className="h-[700px] w-[327px] rounded-b-[16px] md:w-[500px] lg:w-[769px]">
              {/* <AddServiceForm onOpenChange={setIsOpenService} /> */}
            </ScrollArea>
          </div>
        </section>
      )}
    </Card>
  );
};
