import { MetaPagination } from "@/types/index";

export type HighlightedStatement = {
  title: string;
  description: string;
  _id: string;
};

export type ProfessionalProfile = {
  _id: string;
  userID: string;
  fullName: string;
  designation: string;
  businessName: string;
  address: string;
  about: string;
  highlightedStatement: HighlightedStatement[];
  experience: string[];
  certifications: string[];
  websiteURL: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProfessionalProfileResponse = {
  success: boolean;
  message: string;
  data: ProfessionalProfile[];
  pagination: MetaPagination;
};

export type ProfessionalService = {
  _id: string;
  userID: string;
  serviceName: string;
  metaDescription: string;
  serviceDescription: string;
  keyWords: string[];
  paymentType: string;
  price: number;
  serviceImage: string;
  serviceVideo: string;
  sessionType: string;
  isLiveStream: boolean;
  visibility: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ProfessionalServiceResponse = {
  success: boolean;
  messasge?: string;
  services: ProfessionalService[];
};
