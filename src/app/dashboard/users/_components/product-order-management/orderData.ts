export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  orderNo: string;
  vendorName: string;
  items: OrderItem[];
  orderDate: string;
  totalAmount: number;
  shippingStatus: "delivered" | "shipped" | "pending";
}

export const orders: Order[] = [
  {
    id: "1",
    orderNo: "ORD-001",
    vendorName: "Green Earth Market",
    items: [
      { id: "1", name: "Organic Apples", quantity: 5, price: 30.0 },
      { id: "2", name: "Fresh Vegetables", quantity: 3, price: 120.0 },
    ],
    orderDate: "2025-01-06",
    totalAmount: 150.0,
    shippingStatus: "delivered",
  },
  {
    id: "2",
    orderNo: "ORD-002",
    vendorName: "Vegan Delights",
    items: [
      { id: "3", name: "Plant-based Meat", quantity: 2, price: 100.0 },
      { id: "4", name: "Vegan Cheese", quantity: 4, price: 100.0 },
    ],
    orderDate: "2025-01-06",
    totalAmount: 200.0,
    shippingStatus: "shipped",
  },
  {
    id: "3",
    orderNo: "ORD-003",
    vendorName: "Organic Foods Co.",
    items: [
      { id: "5", name: "Organic Bananas", quantity: 6, price: 45.0 },
      { id: "6", name: "Gluten-Free Bread", quantity: 2, price: 50.0 },
    ],
    orderDate: "2025-01-07",
    totalAmount: 95.0,
    shippingStatus: "pending",
  },
  {
    id: "4",
    orderNo: "ORD-004",
    vendorName: "Healthy Harvest",
    items: [
      { id: "7", name: "Quinoa", quantity: 3, price: 75.0 },
      { id: "8", name: "Almond Milk", quantity: 2, price: 60.0 },
    ],
    orderDate: "2025-01-08",
    totalAmount: 135.0,
    shippingStatus: "delivered",
  },
  {
    id: "5",
    orderNo: "ORD-005",
    vendorName: "Farm Fresh",
    items: [
      { id: "9", name: "Free-Range Eggs", quantity: 12, price: 90.0 },
      { id: "10", name: "Grass-Fed Butter", quantity: 2, price: 80.0 },
    ],
    orderDate: "2025-01-09",
    totalAmount: 170.0,
    shippingStatus: "shipped",
  },
  {
    id: "6",
    orderNo: "ORD-006",
    vendorName: "Nature's Best",
    items: [
      { id: "11", name: "Blueberries", quantity: 2, price: 50.0 },
      { id: "12", name: "Chia Seeds", quantity: 1, price: 30.0 },
    ],
    orderDate: "2025-01-10",
    totalAmount: 80.0,
    shippingStatus: "pending",
  },
  {
    id: "7",
    orderNo: "ORD-006",
    vendorName: "Nature's Best",
    items: [
      { id: "11", name: "Blueberries", quantity: 2, price: 50.0 },
      { id: "12", name: "Chia Seeds", quantity: 1, price: 30.0 },
    ],
    orderDate: "2025-01-10",
    totalAmount: 80.0,
    shippingStatus: "pending",
  },
];
