export interface veganCookingDataType {
    id: number,
    serviceName: string
    serviceDescription: string
    metaDescription: string
    keywords: string[]
    media: string[]
}

export const veganCookingData: veganCookingDataType[] = [
    {
        id: 1,
        serviceName: "Vegan Cooking Class",
        serviceDescription: "Learn to cook delicious plant-based meals with professional guidance.",
        metaDescription: "I specialize in vegan nutrition coaching and meal planning. This includes personalized diet plans, cooking tutorials, and ongoing support for your plant-based journey.",
        keywords: ["vegan cooking", "plant-based meals", "healthy cooking", "vegan cooking"],
        media: ["/assets/service-management.png", "/assets/service-management.png"]
    },
]