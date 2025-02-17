"use client"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { PencilLine, X } from "lucide-react"
import Image from "next/image"
import { AddServiceForm } from "./add-service-form"
import { ScrollArea } from "@/components/ui/scroll-area"
import { veganCookingData, type veganCookingDataType } from "./VeganCookingData"
import { AnimatePresence, motion } from "framer-motion"

export default function Service() {
  const [veganClassVisible, setVeganClassVisible] = useState(true)
  const [isOpenService, setIsOpenService] = useState(false)
  const [selectedService, setSelectedService] = useState<veganCookingDataType | null>(null)
  const [mounted, setMounted] = useState(false)
  const [openAccordions, setOpenAccordions] = useState<string[]>([])

  console.log(selectedService)

  useEffect(() => {
    setMounted(true)
    // Set all accordions to be open by default
    setOpenAccordions(veganCookingData.map((data) => data.id.toString()))
  }, [])

  if (!mounted) return null

  const toggleAccordion = (accordionId: string) => {
    setOpenAccordions((prev) =>
      prev.includes(accordionId) ? prev.filter((id) => id !== accordionId) : [...prev, accordionId],
    )
  }

  return (
    <div className="rounded-[16px] bg-[#F8F5F2] p-[24px] md:p-[32px] lg:p-[40px]">
      <div>
        {veganCookingData?.map((data: veganCookingDataType) => (
          <Card key={data?.id} className="mb-[51px] bg-[#F9FAFB]">
            <Accordion type="multiple" value={openAccordions} onValueChange={setOpenAccordions}>
              <AccordionItem value={data.id.toString()}>
                <div className="flex w-full justify-between rounded-t-[12px] bg-white p-6">
                  <div className="w-full">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id={`vegan-visibility-${data.id}`}
                        checked={veganClassVisible}
                        onCheckedChange={setVeganClassVisible}
                      />
                      <Label
                        className="text-sm font-medium leading-[20px] text-[#1F2937]"
                        htmlFor={`vegan-visibility-${data.id}`}
                      >
                        Visibility <span className="font-normal">(Service is visible)</span>
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
                  <AccordionTrigger onClick={() => toggleAccordion(data.id.toString())}></AccordionTrigger>
                </div>

                <AnimatePresence initial={false}>
                  {openAccordions.includes(data.id.toString()) && (
                    <AccordionContent forceMount>
                      <motion.div
                        key={`content-${data.id}`}
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
                                <h4 className="text-lg font-medium leading-[26px] text-[#1F2937]">Meta Description</h4>
                                <p className="pt-[8px] text-base font-medium leading-[24px] text-[#6B7280]">
                                  {data?.metaDescription}
                                </p>
                              </div>
                              <div>
                                <h4 className="pb-[12px] text-lg font-medium leading-[26px] text-[#1F2937]">
                                  Keywords
                                </h4>
                                <div className="mt-1 flex flex-wrap gap-2">
                                  {data?.keywords?.map((keyword, index) => (
                                    <Badge
                                      key={index}
                                      className="rounded-[10px] p-2 text-lg font-normal leading-[26px] text-[#1F2937]"
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
                                {data?.media?.map((mediaUrl, index) => (
                                  <Image
                                    key={index}
                                    src={mediaUrl || "/placeholder.svg"}
                                    alt="Vegan market logo"
                                    width={180}
                                    height={180}
                                    className="h-[120px] w-full rounded-[12px] md:h-[180px] md:w-[180px]"
                                  />
                                ))}
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
                  onClick={() => {
                    setSelectedService(data)
                    setIsOpenService(true)
                  }}
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
            {isOpenService && (
              <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
                <div className="relative z-10">
                  <div className="flex items-center justify-between rounded-t-lg bg-white px-[32px] py-[30px] shadow-lg">
                    <h4 className="text-xl font-medium leading-[24px] text-[#1F2937]">Edit Service Details</h4>
                    <X className="cursor-pointer" onClick={() => setIsOpenService(false)} />
                  </div>
                  <ScrollArea className="h-[700px] w-[327px] rounded-b-[16px] md:w-[500px] lg:w-[769px]">
                    <AddServiceForm data={data} />
                  </ScrollArea>
                </div>
              </section>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}

