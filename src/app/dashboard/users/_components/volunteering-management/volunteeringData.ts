export interface VolunteerEvent {
  id: string;
  title: string;
  description: string;
  hoursPerWeek: number;
  duration: string;
  location: string;
  month: number;
  spotsAvailable: number;
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
      title: "Community Garden Helper",
      description: "Help maintain our community garden and educate visitors.",
      hoursPerWeek: 4,
      duration: "1 Month",
      location: "Sunshine Beach",
      spotsAvailable: 1,
      month: 1,
      status: "upcoming",
    },
    {
      id: "2",
      title: "Community Garden Helper",
      description: "Help maintain our community garden and educate visitors.",
      hoursPerWeek: 4,
      duration: "1 Month",
      location: "Sunshine Beach",
      spotsAvailable: 1,
      month: 1,
      status: "upcoming",
    },
  ],
  completed: [
    {
      id: "3",
      title: "Community Garden Helper",
      description: "Help maintain our community garden and educate visitors.",
      hoursPerWeek: 4,
      duration: "1 Month",
      location: "Sunshine Beach",
      spotsAvailable: 0,
      month: 1,
      status: "completed",
    },
    {
      id: "4",
      title: "Community Garden Helper",
      description: "Help maintain our community garden and educate visitors.",
      hoursPerWeek: 4,
      duration: "1 Month",
      location: "Sunshine Beach",
      spotsAvailable: 0,
      month: 1,
      status: "completed",
    },
  ],
};
