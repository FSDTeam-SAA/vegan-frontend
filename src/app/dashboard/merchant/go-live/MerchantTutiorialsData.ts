export interface MerchantTutiorialsData {
  id: number;
  img: string;
  name: string;
  status: string;
}

export const MerchantTutiorialsData: MerchantTutiorialsData[] = [
  {
    id: 1,
    img: "/assets/img/video-tutorial.png",
    name: "Getting Started With Your Store",
    status: "Basic",
  },
  {
    id: 2,
    img: "/assets/img/video-tutorial.png",
    name: "Processing Orders",
    status: "Profile",
  },
  {
    id: 3,
    img: "/assets/img/video-tutorial.png",
    name: "Managing Sales",
    status: "Payments",
  },
  {
    id: 4,
    img: "/assets/img/video-tutorial.png",
    name: "Setting Up Shipping",
    status: "Services",
  },
];
