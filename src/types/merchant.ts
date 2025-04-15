import { MetaPagination } from "@/types/index";

export interface MerchantProduct {
  _id: string;
  merchantID: string;
  productName: string;
  description: string;
  metaDescription: string;
  price: number;
  stockQuantity: number;
  category: "food" | "wearable" | "medicine" | "accessories";
  tags: string[]; // Assuming the tags are stored as an array of strings
  productImage: string;
  visibility: boolean;
  stockStatus: "in stock" | "out of stock" | "low stock";
  createdAt: string; // or Date if you plan to convert it to a Date object
  updatedAt: string; // or Date if you plan to convert it to a Date object
  __v: number;
}

export interface MerchantProductResponse {
  success: boolean;
  message: string;
  data: MerchantProduct[];
  pagination: MetaPagination;
}

export interface MerchantEvent {
  _id: string; // MongoDB ObjectID is typically represented as a string in TypeScript
  merchantID: string; // MongoDB ObjectID for the merchant
  description: string; // Description of the event
  date: string; // Date in YYYY-MM-DD format
  time: string; // Time in HH:mm format
  eventType: string; // Type of the event (e.g., "free event")
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  __v: number; // Version key for Mongoose
  eventTitle: string;
  price?: string;
  userID?: string;
  meetingLink: string;
  meetingId: string;
}

export interface MerchantEventResponse {
  success: boolean;
  message: string;
  events: MerchantEvent[];
}

export type BusinessHour = {
  Day: string;
  Time: string;
  _id: string;
};

export type HighlightedStatement = {
  title: string;
  description: string;
  _id: string;
};

export type MerchantProfile = {
  _id: string;
  userID: string;
  profilePhoto: string;
  fullName: string;
  businessName: string;
  address: string;
  about: string;
  shortDescriptionOfStore: string;
  businessHours: BusinessHour[];
  highlightedStatement: HighlightedStatement[];
  websiteURL: string;
  isVerified: "pending" | "verified" | "rejected"; // Assuming possible statuses
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
  __v: number;
  governmentIssuedID: string;
  photoWithID: string;
  professionalCertification: string;
  country: string;
  state: string;
  city: string;
};

export type MerchantProfileResponse = {
  success: boolean;
  message: string;
  data: MerchantProfile[];
  pagination: MetaPagination;
};

export type SingleMerchantProfileResponse = {
  success: boolean;
  message: string;
  data: MerchantProfile;
  totalRating: number;
  totalReviews: number;
};
