export interface OrganizationEvent {
  _id: string; // MongoDB ObjectID is typically represented as a string in TypeScript
  organizationID: string; // MongoDB ObjectID for the merchant
  description: string; // Description of the event
  date: string; // Date in YYYY-MM-DD format
  time: string; // Time in HH:mm format
  eventType: string; // Type of the event (e.g., "free event")
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  __v: number; // Version key for Mongoose
  eventTitle: string;
  price?: string;
}

export interface OrganizationEventResponse {
  success: boolean;
  message: string;
  data: OrganizationEvent[];
}
