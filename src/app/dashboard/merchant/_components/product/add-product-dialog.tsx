"use client";

import FileUploader from "@/components/shared/Uploader/FileUploader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import OpacityLoader from "@/components/ui/opacity-loader";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TagsInput } from "@/components/ui/tags-input";
import { Textarea } from "@/components/ui/textarea";
import { MerchantProduct } from "@/types/merchant";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const productSchema = z.object({
  productName: z.string().min(1, "Product name is required").max(100),
  description: z.string().min(1, "Description is required").max(300),
  metaDescription: z.string().min(1, "Meta description is required").max(100),
  price: z.coerce.number().min(0, "Price must be a positive number"),
  stockQuantity: z.coerce
    .number()
    .min(0, "Stock quantity must be a positive number"),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()),
  productImage: z.instanceof(File).optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

type AddProductDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialData?: MerchantProduct;
  merchantID: string;
};

export default function AddProductDialog({
  open,
  onOpenChange,
  initialData,
  merchantID,
}: AddProductDialogProps) {
  const queryClient = useQueryClient();

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productName: initialData?.productName || "",
      description: initialData?.description ?? "",
      metaDescription: initialData?.metaDescription ?? "",
      price: initialData?.price ?? 0,
      stockQuantity: initialData?.stockQuantity ?? 0,
      category: initialData?.category || "",
      tags: initialData?.tags || ["food"], // Ensure tags is always an array
    },
  });

  // Use useEffect to update form when initialData changes
  useEffect(() => {
    if (initialData) {
      form.reset({
        productName: initialData.productName || "",
        description: initialData.description || "",
        metaDescription: initialData.metaDescription || "",
        price: initialData.price || 0,
        stockQuantity: initialData.stockQuantity || 0,
        category: initialData.category || "",
        tags: initialData.tags || ["food"],
      });
    }
  }, [initialData, form]);

  const { mutate, isPending } = useMutation<any, unknown, FormData>({
    mutationKey: ["merchantProductAdd"],
    mutationFn: (formData) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct`, {
        method: "POST",
        body: formData,
      }).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      form.reset({
        productName: "",
        description: "",
        metaDescription: "",
        price: 0,
        stockQuantity: 0,
        category: "",
        tags: ["food"], // Reset tags to default value
        productImage: undefined,
      });
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["merchantsProduct"] });
    },
    onError: () => {
      toast.error("Failed to add product. Please try again later", {
        position: "top-right",
        richColors: true,
      });
    },
  });

  const { mutate: editMutate, isPending: editPending } = useMutation({
    mutationKey: ["edit merchant product"],
    mutationFn: (data: FormData) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/merchantproduct/${initialData?._id}`,
        {
          method: "PUT",
          body: data,
        },
      ).then((res) => res.json()),
    onSuccess: (data) => {
      if (!data.success) {
        toast.error(data.message, {
          position: "top-right",
          richColors: true,
        });
        return;
      }

      // handle success
      form.reset({
        productName: "",
        description: "",
        metaDescription: "",
        price: 0,
        stockQuantity: 0,
        category: "",
        tags: ["food"], // Reset tags to default value
        productImage: undefined,
      });
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["merchantsProduct"] });
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    formData.append("merchantID", merchantID!);
    formData.append("productName", data.productName);
    formData.append("description", data.description);
    formData.append("metaDescription", data.metaDescription);
    formData.append("price", JSON.stringify(data.price));
    formData.append("stockQuantity", JSON.stringify(data.stockQuantity));
    formData.append("category", data.category);
    formData.append("tags", JSON.stringify(data.tags)); // Ensure tags is properly stringified
    if (data.productImage) {
      formData.append("productImage", data.productImage);
    }

    // api call
    if (!merchantID) {
      toast.warning("Your merchantID missing! Please login again.", {
        position: "top-right",
        richColors: true,
      });
      return;
    }

    if (initialData) {
      editMutate(formData);
      return;
    }
    // add new product
    mutate(formData);
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="h-[700px] w-[800px] border-0 p-0">
          <OpacityLoader
            messsage={
              isPending
                ? "Publishing a new Product..."
                : editPending
                  ? "Editing your product..."
                  : "Checking your access..."
            }
            open={isPending}
          />
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="flex items-center justify-between">
              {initialData ? "Edit Product" : "Add New Product"}
              <Button
                variant="ghost"
                size="icon"
                className="h-6 w-6 p-0"
                onClick={() => onOpenChange(false)}
              ></Button>
            </DialogTitle>
            <DialogDescription>
              Fill in the details below to add a new product to your inventory.
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-full w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 p-6"
              >
                <FormField
                  control={form.control}
                  name="productName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Product Name
                        <span className="float-right text-sm text-gray-500">
                          {field?.value?.length}/100
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="E.g Organic Protein Powder"
                          maxLength={100}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Description
                        <span className="float-right text-sm text-gray-500">
                          {field?.value?.length}/300
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your the product in detail"
                          maxLength={300}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="metaDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Meta Description
                        <span className="float-right text-sm text-gray-500">
                          {field?.value?.length}/100
                        </span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Write a brief and engaging description that appears in your search results"
                          maxLength={100}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="stockQuantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock Quantity</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            placeholder="0"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="medicine">Medicine</SelectItem>
                            <SelectItem value="food">Food</SelectItem>
                            <SelectItem value="wearable">Wearable</SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                          <TagsInput
                            value={field.value}
                            onValueChange={field.onChange}
                            placeholder="Enter your tags"
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Add Product Image</Label>
                  <FileUploader
                    className="h-[150px]"
                    onFileSelect={(file) =>
                      form.setValue("productImage", file!)
                    }
                    imageUrl={initialData?.productImage}
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <Button
                    variant="outline"
                    type="button"
                    onClick={() => onOpenChange(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isPending}>
                    {initialData ? "Edit" : "Add"} Product
                  </Button>
                </div>
              </form>
            </Form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
}
