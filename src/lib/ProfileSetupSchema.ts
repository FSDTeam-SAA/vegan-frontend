import { z } from "zod";

const certificationSchema = z.object({
  name: z.string().optional(),
});

// Experience and certification schemas
const experienceSchema = z.object({
  title: z.string().optional(),
});

const businessHoursSchema = z.object({
  Day: z.string(),
  Time: z.string(),
});

// Base schema for common fields
const baseSchema = {
  address: z.string().min(1, "Address is required"),
  websiteURL: z.string().optional(),
};

// Define the type enum
// const profileTypeEnum = z.enum(["merchant", "organization", "professional"]);

// Create the conditional schema
export const profileSchema = z.discriminatedUnion("type", [
  // Merchant Schema
  z.object({
    type: z.literal("merchant"),
    businessName: z.string().min(1, "Business name is required"),
    fullName: z.string().min(1, "Full name is required"),
    highlightedTitle: z.string().optional(),
    highlightedDescription: z.string().optional(),
    businessHours: z.array(businessHoursSchema),
    shortDescriptionOfStore: z.string(),
    profilePhoto: z.instanceof(File).optional(),
    about: z.string().min(10, "About us must be at least 10 characters"),
    ...baseSchema,
  }),

  // Organization Schema
  z.object({
    type: z.literal("organization"),
    organizationName: z.string().optional(),
    businessName: z.string().optional(),
    shortDescriptionOfOrganization: z.string(),
    profilePhoto: z.instanceof(File).optional(),
    experiences: z.array(experienceSchema).optional(),
    certifications: z.array(certificationSchema).optional(),
    missionStatement: z
      .string()
      .min(10, "Mission statement must be at least 10 characters"),
    about: z.string().min(10, "About us must be at least 10 characters"),
    ...baseSchema,
  }),

  // Professional Schema
  z.object({
    type: z.literal("professional").optional(),
    fullName: z.string().min(1, "Full name is required"),
    businessName: z.string().optional(),
    about: z.string().optional(),
    designation: z.string({ message: "Designation is required" }),
    experiences: z.array(experienceSchema).optional(),
    certifications: z.array(certificationSchema).optional(),
    highlightedTitle: z.string().optional(),
    highlightedDescription: z.string().optional(),
    profilePhoto: z.instanceof(File).optional(),
    ...baseSchema,
  }),
]);

// Export type
export type ProfileFormData = z.infer<typeof profileSchema>;
