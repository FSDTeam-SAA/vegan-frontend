"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ChevronUp, Pencil } from "lucide-react"
import Image from "next/image"

export default function Service() {
    const [veganClassVisible, setVeganClassVisible] = useState(true)
    const [mealPlanningVisible, setMealPlanningVisible] = useState(true)

    return (
        <div className="p-[24px] md:p-[32px] lg:p-[40px] bg-[#F8F5F2] rounded-[16px]">
            <h1 className="text-2xl font-bold mb-6">Your Services</h1>

            <Card>
                <CardHeader className=" space-y-0 pb-2">
                    <div className="flex items-center justify-between bg-white mb-10">
                        <div>
                            <div className="flex items-center space-x-2">
                                <Switch id="vegan-visibility" checked={veganClassVisible} onCheckedChange={setVeganClassVisible} />
                                {/* <Label htmlFor="vegan-visibility">{veganClassVisible ? "Service is visible" : "Service is hidden"}</Label> */}
                                <Label className="text-sm font-medium leading-[20px] text-[#1F2937]" htmlFor="vegan-visibility">Visibility <span className="font-normal">(Service is visible)</span></Label>
                            </div>
                            <CardTitle className="text-lg font-medium leading-[26px] text-[#1F2937] py-4">Vegan Cooking Class</CardTitle>
                            <CardDescription className="text-base font-normal text-[#1F2937] leading-[23px]">Learn to cook delicious plant-based meals with professional guidance.</CardDescription>
                        </div>

                        <div>
                            <ChevronUp />
                        </div>
                    </div>


                </CardHeader>

                <CardContent>
                    <Accordion type="single" collapsible defaultValue="details">
                        <AccordionItem value="details">
                            <AccordionTrigger>Service Details</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium mb-2">Description</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Learn to cook delicious plant-based meals with professional guidance.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="font-medium mb-2">SEO Details</h3>
                                        <div className="space-y-2">
                                            <div>
                                                <h4 className="text-sm font-medium">Meta Description</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    I specialize in vegan nutrition coaching and meal planning. This includes personalized diet
                                                    plans, cooking tutorials, and ongoing support for your plant-based journey.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-medium">Keywords</h4>
                                                <div className="flex flex-wrap gap-2 mt-1">
                                                    <Badge variant="secondary">vegan cooking</Badge>
                                                    <Badge variant="secondary">plant-based meals</Badge>
                                                    <Badge variant="secondary">healthy cooking</Badge>
                                                    <Badge variant="secondary">vegan cooking</Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-medium mb-2">Media</h3>
                                        <div className="flex items-center gap-4">
                                            <Image
                                                src="/assets/service-management.png"
                                                alt="Vegan market logo"
                                                width={180}
                                                height={180}
                                                className="w-[180px] h-[180px] rounded-[12px]"
                                            />
                                            <Image
                                                src="/assets/service-management.png"
                                                alt="Vegan market logo"
                                                width={180}
                                                height={180}
                                                className="w-[180px] h-[180px] rounded-[12px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm">
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Service
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="mt-[51px]">
                <CardHeader className="space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="meal-planning-visibility"
                            checked={mealPlanningVisible}
                            onCheckedChange={setMealPlanningVisible}
                        />
                        <Label htmlFor="meal-planning-visibility">
                            {mealPlanningVisible ? "Service is visible" : "Service is hidden"}
                        </Label>
                    </div>
                    <CardTitle className="text-lg font-medium">Meal Planning Consultation</CardTitle>

                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Personalized meal planning services for individuals and families.
                    </p>
                    <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm">
                            <Pencil className="h-4 w-4 mr-2" />
                            Edit Service
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}


