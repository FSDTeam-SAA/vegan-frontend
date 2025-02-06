import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Setup Profile
export function getProfileType(searchParams: { type?: string }) {
  const type = searchParams.type;
  if (
    type === "merchant" ||
    type === "organization" ||
    type === "professional"
  ) {
    return type;
  }
  return null;
}
