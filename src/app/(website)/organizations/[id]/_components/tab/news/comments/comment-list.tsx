import ErrorContainer from "@/components/shared/sections/error-container";
import { CommentResponse } from "@/types/organization";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import SingleCommentCard from "./single-comment-card";

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

interface CommentsListProps {
  newsId: string;
  loggedinuserId: string;
}

export default function CommentsList({
  newsId,
  loggedinuserId,
}: CommentsListProps) {
  const { data, isLoading, isError, error } = useQuery<CommentResponse>({
    queryKey: ["comments", newsId],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/commentManipulation/update/${newsId}`,
      ).then((res) => res.json()),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="flex h-[30px] w-full flex-col items-center justify-center">
        <Loader2 className="animate-spin" />
        Please wait..
      </div>
    );
  } else if (isError) {
    content = (
      <ErrorContainer message={error?.message ?? "Something went wrong"} />
    );
  } else if (data) {
    content = (
      <div className="space-y-6">
        {data.data.map((comment) => (
          <SingleCommentCard
            comment={comment}
            key={comment._id}
            loggedinUserId={loggedinuserId}
          />
        ))}
      </div>
    );
  }

  return content;
}
