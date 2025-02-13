export interface VolunteerEvent {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;

  month: number;
  eventType: string;
  hosted: string;
  status: "upcoming" | "completed";
}

export interface EventsData {
  upcoming: VolunteerEvent[];
  completed: VolunteerEvent[];
}

export const eventsData: EventsData = {
  upcoming: [
    {
      id: "1",
      title: "Vegan Cooking Class",
      description:
        "Learn to cook delicious plant-based meals with professional guidance.",
      price: 49.0,
      duration: "10:00am - 11:00am",

      eventType: "Paid",
      hosted: " Johnson",
      month: 1,

      status: "upcoming",
    },
    {
      id: "2",
      title: "Vegan Cooking Class",
      description:
        "Learn to cook delicious plant-based meals with professional guidance.",
      price: 0,
      duration: "10:00am - 11:00am",

      eventType: "Free",
      hosted: " Johnson",
      month: 1,
      status: "upcoming",
    },
  ],
  completed: [
    {
      id: "3",
      title: "Vegan Cooking Class",
      description:
        "Learn to cook delicious plant-based meals with professional guidance.",
      price: 43,
      duration: "10:00am - 11:00am",

      eventType: "Free",
      hosted: " Johnson",
      month: 1,
      status: "completed",
    },
    {
      id: "4",
      title: "Vegan Cooking Class",
      description:
        "Learn to cook delicious plant-based meals with professional guidance.",
      price: 0,
      duration: "10:00am - 11:00am",

      eventType: "Paid",
      hosted: " Johnson",
      month: 1,
      status: "completed",
    },
  ],
};
