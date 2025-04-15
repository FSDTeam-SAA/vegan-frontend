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
  meetingLink: string;
  meetingId: string;
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
  _id: string; // MongoDB ObjectId as a string
  ticketSlug: string;
  name: string;
  emailAddress: string;
  subject: string;
  message: string;
  status: "pending" | "open" | "closed" | "resolved"; // Adjust as needed
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number; // Version key used by Mongoose
}

export interface OrganizationTicketResponse {
  success: boolean;
  message: string;
  data: OrganizationTicket[];
}

export type OrganizationProfile = {
  _id: string;
  userID: string;
  organizationName: string;
  profilePhoto: string;
  address: string;
  missionStatement: string;
  about: string;
  shortDescriptionOfOrganization: string;
  experience: string[]; // List of experiences
  certifications: string[]; // List of certifications
  websiteURL: string;
  isVerified: "pending" | "approved" | "rejected"; // Assuming possible statuses
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  __v: number;
  governmentIssuedID: string;
  photoWithID: string;
  professionalCertification: string;
  totalEvents: number;
  country: string;
  state: string;
  city: string;
};

export type OrganizationProfileResponse = {
  success: boolean;
  message: string;
  data: OrganizationProfile[];
  pagination: MetaPagination;
};

export type SingleOrganizationProfileResponse = {
  success: boolean;
  message: string;
  data: OrganizationProfile;
};

export type Review = {
  userID: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type ReviewsResponse = {
  success: boolean;
  message?: string;
  reviews: Review[];
  pagination: MetaPagination;
};

export type News = {
  _id: string;
  organizationID: string;
  title: string;
  image: string;
  shortDescription: string;
  statement: string;
  comments: string[];
  likedBy: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type NewsApiResponse = {
  success: boolean;
  message: string;
  data: News[];
};

export type CommentResponse = {
  success: boolean;
  message: string;
  data: Comment[];
};

export type Comment = {
  _id: string;
  updateAndNewsID: string;
  userID: {
    _id: string;
    fullName: string;
  };
  comment: string;
  likedBy: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type OrganizationLiveStream = {
  _id: string; // MongoDB ObjectId, represented as a string
  organizationID: string; // Organization ID, also represented as a string
  eventTitle: string; // Title of the event
  description: string; // Description of the event
  date: string; // Date in ISO format (YYYY-MM-DD)
  time: string; // Time in HH:mm format
  eventType: string; // Type of event (e.g., "paid event")
  price: number; // Price of the event (numeric value)
  createdAt: string; // Timestamp in ISO format
  updatedAt: string; // Timestamp in ISO format
  __v: number; // Version key, typically used by Mongoose
};

export type OrganizationLiveStreamRes = {
  success: boolean;
  message: string;
  data: OrganizationLiveStream[];
};
