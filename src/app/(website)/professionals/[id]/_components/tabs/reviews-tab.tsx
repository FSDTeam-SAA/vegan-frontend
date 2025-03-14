import { ReviewCard } from "../review-card";

interface Props {
  userId: string;
}

export default async function ReviewsTab({ userId }: Props) {
  return (
    <>
      <ReviewCard userId={userId} />
    </>
  );
}
