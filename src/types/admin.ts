import { MetaPagination } from "./organization";

export type VendorSingleProfile = {
  profilePhoto?: string; // Optional to accommodate different formats
  businessName?: string;
  organizationName?: string;
  experience?: string[];
  certifications?: string[];
  address?: string;
  about?: string;
  submittedDocuments: {
    governmentIssuedID?: string;
    professionalCertification?: string;
  };
  contactInfo: {
    email?: string;
    phoneNumber?: string;
  };
};

export type VendorSingleProfileResponse = {
  success: boolean;
  message: string;
  data: VendorSingleProfile;
};
export type VendorProfile = {
  _id: string;
  userID: string; // Keeping it as "userID" to match the data structure
  businessName?: string; // Optional for organizations
  organizationName?: string; // Optional for businesses
  address: string;
  isVerified: "pending" | "approved" | "declined";
  createdAt: string;
  governmentIssuedID: string;
  photoWithID: string;
  professionalCertification: string;
  email: string;
  role: "professional" | "merchant" | "organization" | "admin";
};

export type VendorProfileResponse = {
  success: boolean;
  message: string;
  data: VendorProfile[];
  meta: MetaPagination;
};
