"use client";

import type React from "react";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Edit2, Trash2 } from "lucide-react";

interface PaymentMethod {
  id: string;
  type: string;
  last4: string;
  expiry: string;
}

export function PaymentMethods() {
  const [methods, setMethods] = useState<PaymentMethod[]>([
    { id: "1", type: "PayPal", last4: "4242", expiry: "12/25" },
    { id: "2", type: "PayPal", last4: "4242", expiry: "12/25" },
  ]);

  const [isAddingMethod, setIsAddingMethod] = useState(false);

  const handleDelete = (id: string) => {
    setMethods(methods.filter((method) => method.id !== id));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // Add new payment method logic here
    setIsAddingMethod(false);
  };

  return (
    <Card className="bg-white">
      <CardContent className="space-y-4 p-6">
        {methods.map((method) => (
          <div
            key={method.id}
            className="flex items-center justify-between border-b py-4 first:pt-0 last:border-0 last:pb-0"
          >
            <div className="flex items-center space-x-4">
              <CreditCard className="h-6 w-6" />
              <div>
                <p className="font-medium">{method.type}</p>
                <p className="text-sm text-muted-foreground">
                  Master **** {method.last4} - Expires {method.expiry}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Edit2 className="h-4 w-4" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDelete(method.id)}
                className="text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </div>
        ))}

        <Dialog open={isAddingMethod} onOpenChange={setIsAddingMethod}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Add A Method
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Payment Method</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Add Payment Method
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
