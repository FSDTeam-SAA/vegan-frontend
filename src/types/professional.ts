import { MetaPagination } from "@/types/index";

export type HighlightedStatement = {
  title: string;
  description: string;
  _id: string;
};

export type ProfessionalInfoResponse = {
  success: boolean;
  message: string;
  data: {
    _id: string;
    userId: string;
    profilePhoto: string;
    fullName: string;
    designation: string;
    businessName: string;
    address: string;
    about: string;
    highlightedStatement: {
      title: string;
      description: string;
      _id: string;
    }[];
    experience: string[];
    certifications: string[];
    websiteURL: string;
    isVerified: "pending" | "verified" | "rejected"; // Assuming possible values
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
};

export type ProfessionalProfile = {
  _id: string;
  userID?: string;
  userId?: string;
  fullName: string;
  designation: string;
  businessName: string;
  address: string;
  about: string;
  highlightedStatement: HighlightedStatement[];
  experience: string[];
  certifications: string[];
  governmentIssuedID: string;
  photoWithID: string;
  professionalCertification: string;
  profilePhoto: string;
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

export type ProfessionalServiceResponse = {
  success: boolean;
  messasge: string;
  data: ProfessionalService[];
};

export interface SupportTicket {
  _id: string;
  professionalID: string;
  ticketSlug: string;
  subject: string;
  message: string;
  status: "resolved" | "pending" | "in progress";
  createdAt: string; // or Date
  updatedAt: string; // or Date
  __v: number;
}

export interface SupportTicketResponse {
  success: boolean;
  message: string;
  tickets: SupportTicket[];
}

// faqs
export type FAQ = {
  _id: string;
  userID: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type FAQResponse = {
  success: boolean;
  message: string;
  data: FAQ[];
};

type User = {
  _id: string;
  role: string;
  fullName: string;
  email: string;
  password: string;
  accountType: string | null;
  verifyEmail: boolean;
  paymentAdded: boolean;
  isgratings: boolean;
  isVerified: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
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
  timeSlots: string[];
  date: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type ServiceBooking = {
  _id: string;
  userID: User;
  customerId: string;
  paymentMethodId: string;
  sellerID: string;
  sellerType: string;
  sellerStripeAccountId: string;
  amount: number;
  professionalServicesId: ProfessionalService;
  serviceBookingTime: string;
  productId: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  status: string;
};

export type ServiceBookingResponse = {
  success: boolean;
  data: ServiceBooking[];
  message?: string;
  pagination: {
    page: number;
    totalPages: number;
    totalResults: number;
  };
};
