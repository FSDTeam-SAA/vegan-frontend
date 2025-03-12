export const VendorManagementData: VendorManagementDataType[] = [
  {
    id : 1,
    businessName: "Vegans Delight",
    businessType : "Merchant",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Approved",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 2,
    businessName: "Dr Sarah Johnson",
    businessType : "Merchant",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Pending",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 3,
    businessName: "Green Earth Initiative",
    businessType : "Organization",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Declined",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 4,
    businessName: "Green Earth Organics",
    businessType : "Merchant",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Approved",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 5,
    businessName: "Vegans Delight",
    businessType : "Merchant",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Pending",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 6,
    businessName: "Green Valley Farms",
    businessType : "Professional",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Declined",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 7,
    businessName: "Green Valley Farms",
    businessType : "Organization",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Approved",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 8,
    businessName: "Green Valley Farms",
    businessType : "Merchant",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Pending",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 9,
    businessName: "Green Valley Farms",
    businessType : "Organization",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Declined",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
  {
    id : 10,
    businessName: "Green Valley Farms",
    businessType : "Merchant",
    description : "Sweet treats, plant-based magic",
    onBoardingDate: "Jan 6, 2025",
    status: "Approved",
    about: "Artisanal vegan bakery specializing in custom cakes",
    experiences: ["5 years in vegan baking"],
    certificates: ["Food Safety Certified"],
    email: "hello@vegandelights.com",
    phone: "+1 (555) 987-6543",
    photo:
      "/assets/img/veganDelights.png",
  },
];

export type VendorManagementDataType = {
  id : number;
  businessName: string;
  businessType: string;
  description : string;
  onBoardingDate: string; // ISO date format
  status: "Approved" | "Pending" | "Declined";
  about: string;
  experiences: string[];
  certificates: string[];
  email: string;
  phone: string;
  photo: string; // URL from Pexels
};
