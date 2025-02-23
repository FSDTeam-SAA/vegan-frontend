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
