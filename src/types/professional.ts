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
