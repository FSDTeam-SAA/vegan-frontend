export type WishlistItem = {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  isFavorited: boolean;
};

export type TabData = {
  id: "professionals" | "merchants" | "organizations";
  label: string;
  count: number;
  items: WishlistItem[];
};

export const wishlistData: TabData[] = [
  // professionals
  {
    id: "professionals",
    label: "Professionals",
    count: 2,
    items: [
      {
        id: "1",
        name: "Dr Sarah Nelson",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20143227-vP51NSvqRTMzHrglvpBdA3CWDVvndp.png",
        category: "Nutritionist",
        description:
          "Specializing in plant-based nutrition and wellness coaching.",
        isFavorited: true,
      },
      {
        id: "2",
        name: "Dr Sarah Nelson",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20143227-vP51NSvqRTMzHrglvpBdA3CWDVvndp.png",
        category: "Nutritionist",
        description:
          "Specializing in plant-based nutrition and wellness coaching.",
        isFavorited: false,
      },
    ],
  },

  // merchants
  {
    id: "merchants",
    label: "Merchants",
    count: 2,
    items: [
      {
        id: "3",
        name: "Green Earth Market",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20143247-mWG3XNlornBb0NkXFLFtqNN478qoSC.png",
        category: "Grocery Store",
        description: "Organic and locally sourced vegan products.",
        isFavorited: true,
      },
      {
        id: "4",
        name: "Vegan Delight",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20143247-mWG3XNlornBb0NkXFLFtqNN478qoSC.png",
        category: "Restaurant",
        description: "Gourmet plant-based dining experience.",
        isFavorited: false,
      },
    ],
  },

  // organizations
  {
    id: "organizations",
    label: "Organizations",
    count: 3,
    items: [
      {
        id: "5",
        name: "Plant Based Society",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20143438-hFVimkgdSGdS7JfFuGKfRnHkwkZPnP.png",
        category: "Non-Profit",
        description: "Building a community of plant-based enthusiasts.",
        isFavorited: true,
      },
      {
        id: "6",
        name: "Vegan Outreach",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-09%20143438-hFVimkgdSGdS7JfFuGKfRnHkwkZPnP.png",
        category: "Charity",
        description:
          "Promoting plant-based living through education and events.",
        isFavorited: false,
      },
    ],
  },
];
