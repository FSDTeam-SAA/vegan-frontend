"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addProduct, type Product } from "./actions";
import Image from "next/image";

type AddProductDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProductAdded: (product: Product) => void;
};

export function AddProductDialog({
  open,
  onOpenChange,
  onProductAdded,
}: AddProductDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    metaDescription: "",
    price: "",
    stock: "",
    category: "",
    tags: "",
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });
    if (image) {
      data.append("image", image);
    }
    try {
      const result = await addProduct(data);
      if (result.success && result.product) {
        onProductAdded(result.product);
        onOpenChange(false);
        resetForm();
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      description: "",
      metaDescription: "",
      price: "",
      stock: "",
      category: "",
      tags: "",
    });
    setImage(null);
    setPreviewUrl(null);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreviewUrl(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please select an image file.");
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Add New Product
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new product to your inventory.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              Product Name
              <span className="float-right text-sm text-gray-500">
                {formData.name.length}/100
              </span>
            </Label>
            <Input
              id="name"
              placeholder="E.g Organic Protein Powder"
              maxLength={100}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description
              <span className="float-right text-sm text-gray-500">
                {formData.description.length}/300
              </span>
            </Label>
            <Textarea
              id="description"
              placeholder="Describe your the product in detail"
              maxLength={300}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="metaDescription">
              Meta Description
              <span className="float-right text-sm text-gray-500">
                {formData.metaDescription.length}/100
              </span>
            </Label>
            <Input
              id="metaDescription"
              placeholder="Write a brief and engaging description that appears in your search results"
              maxLength={100}
              value={formData.metaDescription}
              onChange={(e) =>
                setFormData({ ...formData, metaDescription: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Stock Quantity</Label>
              <Input
                id="stock"
                type="number"
                min="0"
                placeholder="0"
                value={formData.stock}
                onChange={(e) =>
                  setFormData({ ...formData, stock: e.target.value })
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, category: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="supplements">Supplements</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="beverages">Beverages</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                placeholder="Add tag"
                value={formData.tags}
                onChange={(e) =>
                  setFormData({ ...formData, tags: e.target.value })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Add Product Image</Label>
            <div className="rounded-lg border-2 border-dashed p-4 text-center">
              {previewUrl ? (
                <Image
                  src={previewUrl || "/placeholder.svg"}
                  alt="Product Preview"
                  className="mx-auto mb-4 max-h-48 rounded-lg object-contain"
                  width={200}
                  height={200}
                />
              ) : (
                <div className="flex h-48 items-center justify-center text-gray-500">
                  No image selected
                </div>
              )}
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              <Label htmlFor="image" className="cursor-pointer">
                <Button variant="outline" type="button">
                  {image ? "Change Image" : "Choose Image"}
                </Button>
              </Label>
              {image && (
                <p className="mt-2 text-sm text-gray-500">
                  Selected: {image.name}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Add Product</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
