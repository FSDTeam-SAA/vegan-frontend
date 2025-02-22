import { MetaPagination } from "@/types/index";

export interface MerchantProduct {
  _id: string;
  merchantID: string;
  productName: string;
  description: string;
  metaDescription: string;
  price: number;
  stockQuantity: number;
  category: string;
  tags: string[]; // Assuming the tags are stored as an array of strings
  productImage: string;
  visibility: boolean;
  stockStatus: string;
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
}

export interface MerchantEventResponse {
  success: boolean;
  message: string;
  events: MerchantEvent[];
}
