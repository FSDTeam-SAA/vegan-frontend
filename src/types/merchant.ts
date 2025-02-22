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
