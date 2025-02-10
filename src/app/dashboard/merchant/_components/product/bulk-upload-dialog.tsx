"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { bulkUpload } from "./actions";
import type { Product } from "./actions";

export function BulkUploadDialog({
  open,
  onOpenChange,
  onProductsUploaded,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onProductsUploaded: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === "text/csv") {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === "text/csv") {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target?.result as string;
      const lines = text.split("\n");
      const headers = lines[0].split(",");
      const products: Partial<Product>[] = lines.slice(1).map((line) => {
        const values = line.split(",");
        const product: Partial<Product> = {};
        headers.forEach((header, index) => {
          const key = header.trim() as keyof Product;
          (product[key] as string | undefined) = values[index]?.trim();
        });
        return product;
      });

      const result = await bulkUpload(products);
      if (result.success) {
        onProductsUploaded();
        onOpenChange(false);
        setFile(null);
      }
    };
    reader.readAsText(file);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Bulk Upload Products
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 p-0"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        <div
          className="rounded-lg border-2 border-dashed p-12 text-center"
          onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
            e.preventDefault()
          }
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="file"
            className="hidden"
            id="csv-upload"
            onChange={handleFileSelect}
          />
          <div className="mb-4">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="text-sm text-gray-500">
              Drag and drop your CSV file here or
            </p>
            <label
              htmlFor="csv-upload"
              className="cursor-pointer text-sm text-primary hover:underline"
            >
              Click to choose file
            </label>
          </div>
          {file && (
            <p className="text-sm text-gray-500">Selected file: {file.name}</p>
          )}
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpload} disabled={!file}>
            Bulk Upload
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
