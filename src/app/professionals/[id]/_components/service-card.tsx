import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  type: "One-Time Payment" | "Subscription";
}

export function ServiceCard({
  title,
  description,
  price,
  image,
  type,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          className="h-48 w-full object-cover"
          width={200}
          height={200}
        />
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <span className="text-sm text-muted-foreground">{type}</span>
        </div>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <p className="text-lg font-bold">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">
          {type === "Subscription" ? "Subscribe For Service" : "Book Service"}
        </Button>
      </CardFooter>
    </Card>
  );
}
