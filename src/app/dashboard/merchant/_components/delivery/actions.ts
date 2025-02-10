"use server";

import { revalidatePath } from "next/cache";

type OrderStatus = "Shipped" | "Delivered";

export async function updateTrackingNumber(
  orderId: number,
  trackingNumber: string,
) {
  // In a real app, this would update a database
  console.log(
    `Updating tracking number for order ${orderId} to ${trackingNumber}`,
  );

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/delivery-management");
  return { success: true };
}

export async function updateOrderStatus(orderId: number, status: OrderStatus) {
  // In a real app, this would update a database
  console.log(`Updating status for order ${orderId} to ${status}`);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath("/delivery-management");
  return { success: true };
}
