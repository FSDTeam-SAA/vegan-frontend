"use client";

import { useState, useEffect } from "react";
import { Download, Edit, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { AddProductDialog } from "./add-product-dialog";
import { BulkUploadDialog } from "./bulk-upload-dialog";
import {
  getProducts,
  toggleVisibility,
  deleteProduct,
  type Product,
} from "./actions";
import Image from "next/image";

export default function ProductsManagement() {
  const [searchQuery, setSearchQuery] = useState("");
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [bulkUploadOpen, setBulkUploadOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const fetchedProducts = await getProducts();
    setProducts(fetchedProducts);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []); //This is the line that needed to be updated.  The empty array [] was causing the issue.  It should have included the products state.

  const handleProductAdded = () => {
    fetchProducts();
  };

  const handleProductsUploaded = () => {
    fetchProducts();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleToggleVisibility = async (id: string) => {
    const result = await toggleVisibility(id);
    if (result.success) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === id ? { ...p, visibility: !p.visibility } : p,
        ),
      );
    }
  };

  const handleDeleteProduct = async (id: string) => {
    const result = await deleteProduct(id);
    if (result.success) {
      setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-2xl font-semibold">Product Management</h1>
        <p className="text-gray-600">
          Manage your product listings efficiently, from adding new products to
          tracking stock status
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500" />
          <Input
            placeholder="Search by product"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2"
            onClick={() => setBulkUploadOpen(true)}
          >
            <Download className="h-4 w-4" />
            Bulk Upload
          </Button>
          <Button
            className="flex items-center gap-2"
            onClick={() => setAddDialogOpen(true)}
          >
            Add Product
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-white">
        {loading ? (
          <div className="flex h-32 items-center justify-center">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            No products found
          </div>
        ) : (
          <>
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] border-b px-6 py-3">
              <div>Product</div>
              <div>Price</div>
              <div>Stock</div>
              <div>Visibility</div>
              <div>Actions</div>
            </div>

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr] items-center border-b px-6 py-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div>${product.price.toFixed(2)}</div>
                <div>
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs ${
                      product.stock > 50
                        ? "bg-green-100 text-green-800"
                        : product.stock > 0
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product.stock > 50
                      ? "In stock"
                      : product.stock > 0
                        ? "Low stock"
                        : "Out of Stock"}
                  </span>
                </div>
                <div>
                  <Switch
                    checked={product.visibility}
                    onCheckedChange={() => handleToggleVisibility(product.id)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <AddProductDialog
        open={addDialogOpen}
        onOpenChange={setAddDialogOpen}
        onProductAdded={handleProductAdded}
      />
      <BulkUploadDialog
        open={bulkUploadOpen}
        onOpenChange={setBulkUploadOpen}
        onProductsUploaded={handleProductsUploaded}
      />
    </div>
  );
}
