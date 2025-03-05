export type Refer = {
  slug: string;
  creator: string;
  participants: string[]; // Assuming participants is an array of objects or any other type
  paid: number;
  remain: number;
  _id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

export type ReferResponse = {
  success: boolean;
  message: string;
  data: Refer;
};
