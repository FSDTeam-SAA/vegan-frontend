"use client"
import { useState, useEffect } from "react"; // Add useEffect for client-side rendering
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PencilLine, X } from "lucide-react";
import Image from "next/image";
import { AddServiceForm } from "./add-service-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { veganCookingData, veganCookingDataType } from "./VeganCookingData";
import { AnimatePresence, motion } from "framer-motion";

export default function Service() {
  const [veganClassVisible, setVeganClassVisible] = useState(true);
  const [isOpenService, setIsOpenService] = useState(false);
  const [selectedService, setSelectedService] = useState<veganCookingDataType | null>(null);
  const [mounted, setMounted] = useState(false);

  console.log(selectedService)

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <div className="p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]">
      <div>
        {veganCookingData?.map((data: veganCookingDataType) => (
          <Card key={data?.id} className="bg-[#F9FAFB] mb-[51px]">
            {/* Accordion for SEO Details */}
            <Accordion type="single" collapsible >
              <AccordionItem value="details">
                <AccordionTrigger className="bg-white p-6 flex justify-between w-full">
                  <div className="w-full">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="vegan-visibility"
                        checked={veganClassVisible}
                        onCheckedChange={setVeganClassVisible}
                      />
                      <Label className="text-sm font-medium leading-[20px] text-[#1F2937]" htmlFor="vegan-visibility">
                        Visibility <span className="font-normal">(Service is visible)</span>
                      </Label>
                    </div>
                    <div>
                      <CardTitle className="text-lg font-medium leading-[26px] text-[#1F2937] py-4">{data?.serviceName}</CardTitle>
                      <CardDescription className="text-base font-normal text-[#1F2937] leading-[23px]">
                        {data?.serviceDescription}
                      </CardDescription>
                    </div>
                  </div>
                </AccordionTrigger>

                {/* SEO Details Content */}
                <AnimatePresence>
                  <AccordionContent asChild>
                    <motion.div
                      key="seo-content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CardContent>
                        <h5 className="text-lg font-medium text-[#1F2937] leading-[26px] pt-[24px] pb-[8px]">SEO Details</h5>
                        <div className="space-y-4">
                          <div className="space-y-4 bg-white p-4">
                            <div>
                              <h4 className="text-lg font-medium text-[#1F2937] leading-[26px]">Meta Description</h4>
                              <p className="text-base font-medium text-[#6B7280] leading-[24px] pt-[8px]">
                                {data?.metaDescription}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-[#1F2937] leading-[26px] pb-[12px]">Keywords</h4>
                              <div className="flex flex-wrap gap-2 mt-1">
                                {data?.keywords?.map((keyword, index) => (
                                  <Badge
                                    key={index}
                                    className="text-lg font-normal text-[#1F2937] leading-[26px] p-2 rounded-[10px]"
                                    variant="secondary"
                                  >
                                    {keyword}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-[#1F2937] leading-[26px] pb-[16px] border-none">Media</h3>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                              {data?.media?.map((mediaUrl, index) => (
                                <Image
                                  key={index}
                                  src={mediaUrl}
                                  alt="Vegan market logo"
                                  width={180}
                                  height={180}
                                  className="w-full md:w-[180px] h-[120px] md:h-[180px] rounded-[12px]"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </motion.div>
                  </AccordionContent>
                </AnimatePresence>
              </AccordionItem>
            </Accordion>

            <CardContent>
              <div className="flex justify-end mt-4">
                <Button
                  onClick={() => {
                    setSelectedService(data);
                    setIsOpenService(true);
                  }}
                  className="text-base font-normal text-[#1F2937] leading-[23px]"
                  variant="ghost"
                  size="sm"
                >
                  <PencilLine />
                  Edit Service
                </Button>
              </div>
            </CardContent>

            {/* Edit Service Modal */}
            {isOpenService && (
              <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50">
                <div className="relative z-10">
                  <div className="flex items-center justify-between px-[32px] py-[30px] bg-white shadow-lg rounded-t-lg">
                    <h4 className="text-xl font-medium text-[#1F2937] leading-[24px]">Edit Service Details</h4>
                    <X className="cursor-pointer" onClick={() => setIsOpenService(false)} />
                  </div>
                  <ScrollArea className="w-[327px] md:w-[500px] lg:w-[769px] h-[700px] rounded-b-[16px]">
                    <AddServiceForm data={data} />
                  </ScrollArea>
                </div>
              </section>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
