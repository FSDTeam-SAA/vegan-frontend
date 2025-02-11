export const EventsData = [
  {
    id: "upcoming-events",
    label: "Upcoming Events",
    items: [
      {
        type: "Paid",
        title: "Vegan Cooking Class",
        description:
          "Learn to cook delicious plant-based meals with professional guidance.",
        date: "20th January, 2025",
        timeRange: "10:00am - 11:00am",
        price: 49.99,
        metrics: {
          registeredParticipants: 32,
          totalAmountPaid: 1249.75,
        },
      },
      {
        type: "Free",
        title: "Meal Planning Consultation",
        description:
          "Personalized meal planning services for individuals and families.",
        date: "20th January, 2025",
        timeRange: "10:00am - 11:00am",
        price: 0,
      },
    ],
  },
  {
    id: "past-events",
    label: "Past Events",
    items: [
      {
        type: "Free",
        title: "Vegan Cooking Class",
        description:
          "Learn to cook delicious plant-based meals with professional guidance.",
        date: "20th January, 2025",
        timeRange: "10:00am - 11:00am",
        price: 0,
        metrics: {
          registeredParticipants: 32,
          totalAmountPaid: 0,
        },
        defaultExpanded: true,
      },
      {
        type: "Paid",
        title: "Meal Planning Consultation",
        description:
          "Personalized meal planning services for individuals and families.",
        date: "20th January, 2025",
        timeRange: "10:00am - 11:00am",
        price: 49.99,
        defaultExpanded: false,
      },
    ],
  },
] as const;
