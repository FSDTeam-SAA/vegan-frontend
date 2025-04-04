// Define types for API response
export interface OrderItem {
  _id: string;
  productName: string;
  stockQuantity: number;
  price: number;
  category: string;
}

export interface Order {
  _id: string;
  orderNumber: string;
  sellerID: {
    businessName: string;
    _id: string;
  };
  productId: OrderItem[];
  items: OrderItem[];
  createdAt: string;
  amount: number;
  shippingStatus: "delivered" | "shipped" | "pending";
}

export interface Apiresponse {
  success: boolean;
  data: Order[];
  message: string;
}
