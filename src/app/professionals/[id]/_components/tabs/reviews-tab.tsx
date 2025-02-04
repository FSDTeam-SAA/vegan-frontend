import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ReviewCard } from "../review-card";

const reviews = [
  {
    name: "Emily Johnson",
    rating: 5,
    review:
      "Dr. Green was incredibly helpful in helping me transition to a vegan diet. Her knowledge and support made the process much easier than I expected. I've seen significant improvements in my energy levels and overall health.",
  },
  {
    name: "Michael Chen",
    rating: 5,
    review:
      "I was skeptical about plant-based diets, but Dr. Green's evidence-based approach and personalized meal plans convinced me to give it a try. Three months in, and I've never felt better. My cholesterol levels have improved, and I've lost weight without feeling deprived.",
  },
  {
    name: "Sophia Rodriguez",
    rating: 4,
    review:
      "Dr. Green's expertise in plant-based nutrition has been invaluable in managing my autoimmune condition. Her guidance has helped me reduce inflammation and improve my symptoms. The meal plans are delicious and easy to follow.",
  },
  {
    name: "David Thompson",
    rating: 5,
    review:
      "As an athlete, I was concerned about meeting my nutritional needs on a vegan diet. Dr. Green created a plan that not only met my protein requirements but also improved my recovery time. Her knowledge of sports nutrition is impressive.",
  },
];

export function ReviewsTab() {
  return (
    <>
      <div className="mb-4 flex gap-4">
        <Select defaultValue="recent">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="rating">Highest Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </>
  );
}
