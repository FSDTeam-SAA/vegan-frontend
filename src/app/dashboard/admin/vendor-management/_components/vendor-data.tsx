export const businesses: Business[] = [
  {
    businessName: "Green Valley Farms",
    onBoardingDate: "2023-01-15",
    status: "Approved",
    about: "A sustainable farm specializing in organic produce.",
    experiences: ["Organic farming", "Farm-to-table supply chain"],
    certificates: ["USDA Organic", "Fair Trade Certified"],
    email: "info@greenvalleyfarms.com",
    phone: "+1-555-123-4567",
    photo:
      "https://images.pexels.com/photos/207247/pexels-photo-207247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    businessName: "Tech Innovators Inc.",
    onBoardingDate: "2023-03-22",
    status: "Pending",
    about: "A tech startup focused on AI-driven solutions for businesses.",
    experiences: ["AI development", "Cloud computing"],
    certificates: ["ISO 9001", "Microsoft Gold Partner"],
    email: "contact@techinnovators.com",
    phone: "+1-555-987-6543",
    photo:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    businessName: "Blue Ocean Travels",
    onBoardingDate: "2022-11-10",
    status: "Declined",
    about: "A travel agency offering exotic destinations and luxury packages.",
    experiences: ["Tour planning", "Customer experience management"],
    certificates: ["IATA Accredited", "Travel Excellence Award 2022"],
    email: "bookings@blueoceantravels.com",
    phone: "+1-555-456-7890",
    photo:
      "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    businessName: "Golden Touch Jewelry",
    onBoardingDate: "2023-05-05",
    status: "Approved",
    about: "Handcrafted jewelry with a focus on elegance and uniqueness.",
    experiences: ["Jewelry design", "Custom orders"],
    certificates: ["Gemological Institute Certified", "Artisan Crafted"],
    email: "sales@goldentouchjewelry.com",
    phone: "+1-555-321-6547",
    photo:
      "https://images.pexels.com/photos/3266700/pexels-photo-3266700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    businessName: "Urban Fitness Hub",
    onBoardingDate: "2023-02-18",
    status: "Pending",
    about: "A modern fitness center offering personalized training programs.",
    experiences: ["Personal training", "Group fitness classes"],
    certificates: ["NASM Certified", "ACE Accredited"],
    email: "info@urbanfitnesshub.com",
    phone: "+1-555-789-1234",
    photo:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export type Business = {
  businessName: string;
  onBoardingDate: string; // ISO date format
  status: "Approved" | "Pending" | "Declined";
  about: string;
  experiences: string[];
  certificates: string[];
  email: string;
  phone: string;
  photo: string; // URL from Pexels
};
