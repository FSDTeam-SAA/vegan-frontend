import { z } from "zod";

// Base schema for common fields
const baseSchema = {
  address: z.string().min(1, "Address is required"),
  website_url: z.string().optional(),
};

// Define the type enum
// const profileTypeEnum = z.enum(["merchant", "organization", "professional"]);

// Create the conditional schema
export const profileSchema = z.discriminatedUnion("type", [
  // Merchant Schema
  z.object({
    type: z.literal("merchant"),
    businessName: z.string().min(1, "Business name is required"),
    about_us: z.string().min(10, "About us must be at least 10 characters"),
    ...baseSchema,
  }),

  // Organization Schema
  z.object({
    type: z.literal("organization"),
    organization_name: z.string().min(1, "Organization name is required"),
    mission: z
      .string()
      .min(10, "Mission statement must be at least 10 characters"),
    about_us: z.string().min(10, "About us must be at least 10 characters"),
    experience: z.string().min(10, "Experience must be at least 10 characters"),
    ...baseSchema,
  }),

  // Professional Schema
  z.object({
    type: z.literal("professional"),
    fullName: z.string().min(1, "Full name is required"),
    businessName: z.string().optional(),
    about: z.string().min(10, "About must be at least 10 characters"),
    experience: z.string().min(10, "Experience must be at least 10 characters"),
    ...baseSchema,
  }),
]);

// Export type
export type ProfileFormData = z.infer<typeof profileSchema>;
