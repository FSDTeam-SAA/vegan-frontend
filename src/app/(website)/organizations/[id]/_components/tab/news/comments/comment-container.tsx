"use client";

import CommentForm from "./comment-form";
import CommentsList from "./comment-list";

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}

interface Props {
  loggedinUserId: string;
  newsId: string;
}

export default function CommentContainer({ loggedinUserId, newsId }: Props) {
  return (
    <div className="mx-auto rounded-lg bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-medium">Comment</h2>
      <CommentForm loggedinUserId={loggedinUserId} newsId={newsId} />
      <div className="mt-8">
        <CommentsList newsId={newsId} loggedinuserId={loggedinUserId} />
      </div>
    </div>
  );
}
