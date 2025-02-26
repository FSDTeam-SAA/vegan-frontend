export interface OrganizationEvent {
  _id: string;
  organizationID: string;
  eventTitle: string;
  description: string;
  date: string; // ISO date format (e.g., "YYYY-MM-DD")
  time: string; // Time in 12-hour format with AM/PM (e.g., "10:00 AM")
  paymentType: string;
  price: string; // Represented as a string to handle decimal values
  eventType: string; // e.g., "volunteer event"
  eventCategory: string; // e.g., "live"
  capacity: number;
  Attendees: number;
  createdAt: string; // ISO date-time format (e.g., "YYYY-MM-DDTHH:mm:ss.SSSZ")
  updatedAt: string; // ISO date-time format (e.g., "YYYY-MM-DDTHH:mm:ss.SSSZ")
  __v: number; // Version key, commonly used in MongoDB
}

export type MetaPagination = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};
export interface OrganizationEventResponse {
  success: boolean;
  message: string;
  data: OrganizationEvent[];
  pagination: MetaPagination;
}

export interface Attendee {
  fullName: string;
  email: string;
  phoneNumber: string;
  specialRequirement?: string; // Optional field
  _id: string;
  createdAt: Date;
}

export interface AttendeeResponse {
  success: boolean;
  message: string;
  data: Attendee[];
  pagination: MetaPagination;
}

export interface OrganizationTicket {
  ticketSlug: string;
  name: string;
  emailAddress: string;
  subject: string;
  message: string;
  status: "pending" | "open" | "closed" | "resolved"; // Adjust as needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface OrganizationTicketResponse {
  success: boolean;
  message: string;
  data: OrganizationTicket[];
}
