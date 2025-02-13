import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StatCardProps {
  title: string;
  value: number;
  onMenuClick?: () => void;
}

export function StatCard({ title, value, onMenuClick }: StatCardProps) {
  return (
    <Card className="h-[101px] min-w-[290px] bg-[#F8F5F2] shadow-none">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 pb-2 pt-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Button variant="ghost" size="icon" onClick={onMenuClick}>
          <MoreVertical className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </CardHeader>
      <CardContent className="px-4 pb-4">
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
