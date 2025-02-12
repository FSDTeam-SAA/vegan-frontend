"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronUp, PencilLine } from "lucide-react"
import Image from "next/image"

export default function Service() {
    const [veganClassVisible, setVeganClassVisible] = useState(true)
    const [mealPlanningVisible, setMealPlanningVisible] = useState(true)

    return (
        <div className="p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium md:font-bold mb-6">Your Services</h1>

            <Card className="bg-[#F9FAFB]">
                <CardHeader className="bg-white p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center space-x-2">
                                <Switch id="vegan-visibility" checked={veganClassVisible} onCheckedChange={setVeganClassVisible} />
                                <Label className="text-sm font-medium leading-[20px] text-[#1F2937]" htmlFor="vegan-visibility">Visibility <span className="font-normal">(Service is visible)</span></Label>
                            </div>
                            <CardTitle className="text-lg font-medium leading-[26px] text-[#1F2937] py-4">Vegan Cooking Class</CardTitle>
                            <CardDescription className="text-base font-normal text-[#1F2937] leading-[23px]">Learn to cook delicious plant-based meals with professional guidance.</CardDescription>
                        </div>

                        <div>
                            <ChevronUp className="cursor-pointer"/>
                        </div>
                    </div>


                </CardHeader>

                <CardContent className="">
                    <Accordion type="single" collapsible defaultValue="details">
                        <AccordionItem value="details">
                            <h4 className="text-lg font-medium leading-[26px] text-[#1F2937] pt-6 pb-2">SEO Details</h4>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div>
                                        <div className="space-y-4 bg-white p-4">
                                            <div>
                                                <h4 className="text-lg font-medium text-[#1F2937] leading-[26px]">Meta Description</h4>
                                                <p className="text-base font-medium text-[#6B7280] leading-[24px] pt-[8px]">
                                                    I specialize in vegan nutrition coaching and meal planning. This includes personalized diet
                                                    plans, cooking tutorials, and ongoing support for your plant-based journey.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-medium text-[#1F2937] leading-[26px] pb-[12px]">Keywords</h4>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    <Badge className="text-lg font-normal text-[#1F2937] leading-[26px] p-2 rounded-[10px]" variant="secondary">vegan cooking</Badge>
                                                    <Badge className="text-lg font-normal text-[#1F2937] leading-[26px] p-2 rounded-[10px]" variant="secondary">plant-based meals</Badge>
                                                    <Badge className="text-lg font-normal text-[#1F2937] leading-[26px] p-2 rounded-[10px]" variant="secondary">healthy cooking</Badge>
                                                    <Badge className="text-lg font-normal text-[#1F2937] leading-[26px] p-2 rounded-[10px]" variant="secondary">vegan cooking</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-[#1F2937] leading-[26px] pb-[16px] border-none">Media</h3>
                                        <div className="flex flex-col md:flex-row items-center gap-4">
                                            <Image
                                                src="/assets/service-management.png"
                                                alt="Vegan market logo"
                                                width={180}
                                                height={180}
                                                className="w-full md:w-[180px] h-[120px] md:h-[180px] rounded-[12px]"
                                            />
                                            <Image
                                                src="/assets/service-management.png"
                                                alt="Vegan market logo"
                                                width={180}
                                                height={180}
                                                className="w-full md:w-[180px] h-[120px] md:h-[180px] rounded-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex justify-end mt-4">
                        <Button className="text-base font-normal text-[#1F2937] leading-[23px]" variant="ghost" size="sm">
                            <PencilLine />
                            Edit Service
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="mt-[51px] bg-transparent border-none shadow-none">
                <CardHeader className="bg-white p-6 ">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="flex items-center space-x-2">
                                <Switch id="vegan-visibility" checked={mealPlanningVisible} onCheckedChange={setMealPlanningVisible} />
                                <Label className="text-sm font-medium leading-[20px] text-[#1F2937]" htmlFor="vegan-visibility">Visibility <span className="font-normal">(Service is visible)</span></Label>
                            </div>
                            <CardTitle className="text-lg font-medium leading-[26px] text-[#1F2937] py-4">Meal Planning Consultation</CardTitle>
                            <CardDescription className="text-base font-normal text-[#1F2937] leading-[23px]">Personalized meal planning services for individuals and families.</CardDescription>
                        </div>

                        <div>
                            <ChevronUp className="cursor-pointer"/>
                        </div>
                    </div>


                </CardHeader>
                <CardContent>
                    <div className="flex justify-end mt-4">
                        <Button className="text-base font-normal text-[#1F2937] leading-[23px]" variant="ghost" size="sm">
                            <PencilLine />
                            Edit Service
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


