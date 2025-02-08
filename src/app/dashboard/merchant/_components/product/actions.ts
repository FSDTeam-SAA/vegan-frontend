"use server";

import { revalidatePath } from "next/cache";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs/promises";

export type Product = {
  id: string;
  name: string;
  description: string;
  metaDescription: string;
  price: number;
  stock: number;
  image: string;
  category: string;
  tags: string[];
  visibility: boolean;
};

// Simulated database
let products: Product[] = [
  {
    id: "1",
    name: "Organic Protein Powder",
    description: "Plant-based protein powder with natural ingredients.",
    metaDescription: "Organic vegan protein powder for healthy lifestyle",
    price: 29.99,
    stock: 100,
    image:
      "https://res.cloudinary.com/dw5wizivl/image/upload/v1739021727/io9vmenoy2wv8qidcebv.png",
    category: "Supplements",
    tags: ["protein", "organic", "vegan"],
    visibility: true,
  },
];

export async function addProduct(
  formData: FormData,
): Promise<{ success: boolean; product?: Product }> {
  const imageFile = formData.get("image") as File;
  let imageUrl = "";

  if (imageFile && imageFile.size > 0) {
    try {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Ensure the 'public/uploads' directory exists
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      await fs.mkdir(uploadDir, { recursive: true });

      // Generate a unique filename
      const uniqueFilename = `${Date.now()}-${imageFile.name}`;
      const filePath = path.join(uploadDir, uniqueFilename);

      // Write the file
      await writeFile(filePath, buffer);

      // Set the imageUrl to the public path
      imageUrl = `/uploads/${uniqueFilename}`;
    } catch (error) {
      console.error("Error saving image:", error);
      return { success: false };
    }
  }

  const newProduct: Product = {
    id: Math.random().toString(36).substr(2, 9),
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    metaDescription: formData.get("metaDescription") as string,
    price: Number.parseFloat(formData.get("price") as string),
    stock: Number.parseInt(formData.get("stock") as string),
    image:
      imageUrl ||
      "https://res.cloudinary.com/dw5wizivl/image/upload/v1739021728/ntituy6vx1fnqu4kgb8e.png",
    category: formData.get("category") as string,
    tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
    visibility: true,
  };

  products.push(newProduct);
  revalidatePath("/products-management");
  return { success: true, product: newProduct };
}

export async function editProduct(
  id: string,
  formData: FormData,
): Promise<{ success: boolean; product?: Product }> {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return { success: false };

  const imageFile = formData.get("image") as File;
  let imageUrl = products[index].image;

  if (imageFile && imageFile.size > 0) {
    // In a real app, you would upload the file to a storage service
    // For this example, we'll create a fake URL
    imageUrl = URL.createObjectURL(imageFile);
  }

  const updatedProduct: Product = {
    ...products[index],
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    metaDescription: formData.get("metaDescription") as string,
    price: Number.parseFloat(formData.get("price") as string),
    stock: Number.parseInt(formData.get("stock") as string),
    image: imageUrl,
    category: formData.get("category") as string,
    tags: (formData.get("tags") as string).split(",").map((tag) => tag.trim()),
  };

  products[index] = updatedProduct;
  revalidatePath("/products-management");
  return { success: true, product: updatedProduct };
}

export async function toggleVisibility(
  id: string,
): Promise<{ success: boolean; product?: Product }> {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return { success: false };

  products[index].visibility = !products[index].visibility;
  revalidatePath("/products-management");
  return { success: true, product: products[index] };
}

export async function deleteProduct(id: string): Promise<{ success: boolean }> {
  const initialLength = products.length;
  products = products.filter((product) => product.id !== id);
  revalidatePath("/products-management");
  return { success: products.length < initialLength };
}

export async function getProducts(): Promise<Product[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100));
  return products;
}

export async function bulkUpload(
  uploadedProducts: Partial<Product>[],
): Promise<{ success: boolean; count: number }> {
  const newProducts = uploadedProducts.map((product) => ({
    id: Math.random().toString(36).substr(2, 9),
    name: product.name || "",
    description: product.description || "",
    metaDescription: product.metaDescription || "",
    price: product.price || 0,
    stock: product.stock || 0,
    image:
      product.image ||
      "https://res.cloudinary.com/dw5wizivl/image/upload/v1739021728/ntituy6vx1fnqu4kgb8e.png",
    category: product.category || "",
    tags: product.tags || [],
    visibility: true,
  }));

  products = [...products, ...newProducts];
  revalidatePath("/products-management");
  return { success: true, count: newProducts.length };
}
