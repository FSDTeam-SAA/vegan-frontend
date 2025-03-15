import { ReviewCard } from "../review-card";

interface Props {
  userId: string;
  loggedinUserId: string;
}

export default async function ReviewsTab({ userId, loggedinUserId }: Props) {
  return (
    <>
      <ReviewCard userId={userId} loggedinUserId={loggedinUserId} />
    </>
  );
}
