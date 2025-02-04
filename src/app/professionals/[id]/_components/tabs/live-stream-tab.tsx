import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function LiveStreamTab() {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="mb-4 text-xl font-semibold">Upcoming Live Streams</h3>
        <p className="text-muted-foreground">
          Join Dr. Sarah Green for live Q&A sessions, cooking demonstrations,
          and informative talks on various nutrition topics. Stay tuned for our
          upcoming schedule!
        </p>
        <Button className="mt-4">Notify Me of Upcoming Streams</Button>
      </CardContent>
    </Card>
  );
}
