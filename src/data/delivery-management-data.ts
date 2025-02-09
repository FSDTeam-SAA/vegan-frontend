// 
export interface DemoTableItemsType {
  image: string;
  id: number;
  name: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
  quantity: number;
  verification: string;
  variantPrice: number;
  userName?: string;
  userStatus?: string;
  totalBox?: number;
  remainingBox?: number;
  grossSales?: number;
  adminFees?: number;
  paidFees?: number;
  totalFees: number;
}

export const StoreListData: DemoTableItemsType[] = [
  {
    image: "/assets/img/image839.png",
    id: 1,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/tic.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
  {
    image: "/assets/img/image839.png",
    id: 2,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/cross.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
  {
    image: "/assets/img/image839.png",
    id: 3,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/tic.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
  {
    image: "/assets/img/image839.png",
    id: 4,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/tic.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
  {
    image: "/assets/img/image839.png",
    id: 5,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/tic.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
  {
    image: "/assets/img/image839.png",
    id: 6,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/tic.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
  {
    image: "/assets/img/image839.png",
    id: 7,
    name: "Purple Bong 50k",
    stock: 55,
    adminFees: 500.0,
    paidFees: 500.0,
    totalFees: 700.0,
    totalBox: 5,
    remainingBox: 1,
    quantity: 7,
    verification: "/assets/svg/tic.png",
    variantPrice: 700.0,
    userName: "johndoe@gmail.com",
    userStatus: "Shaken Not Stirred - Adrian Jordan (#127 - 007Euro)",
    grossSales: 0.25,
  },
];



// export interface Order {
  //   id: string;
  //   orderNo: string;
  //   customerName: string;
  //   customerEmail: string;
  //   orderDate: string;
  //   amount: number;
  //   trackingNumber: string | null;
  //   status: "Delivered" | "Shipped";
  // }
  
  // export const initialOrders: Order[] = [
  //   {
  //     id: "1",
  //     orderNo: "ORD-001",
  //     customerName: "Sarah James",
  //     customerEmail: "Sarah@gmail.com",
  //     orderDate: "Jan 6, 2025",
  //     amount: 150.0,
  //     trackingNumber: "TRK123456789",
  //     status: "Delivered",
  //   },
  //   {
  //     id: "2",
  //     orderNo: "ORD-002",
  //     customerName: "Sarah James",
  //     customerEmail: "Sarah@gmail.com",
  //     orderDate: "Jan 6, 2025",
  //     amount: 200.0,
  //     trackingNumber: null,
  //     status: "Shipped",
  //   },
  //   // Add more orders with unique IDs...
  // ];