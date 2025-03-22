"use client";

import { Button } from "@/components/ui/button";
import { Comment } from "@/types/organization";
import { Heart } from "lucide-react";
import moment from "moment";

interface CommentCardProps {
  comment: Comment;
  loggedinUserId: string;
}

const SingleCommentCard = ({ comment, loggedinUserId }: CommentCardProps) => {
  const likedBy = comment.likedBy ?? [];

  const isLiked = likedBy.includes(loggedinUserId);

  return (
    <div className="flex gap-3">
      {/* <Avatar className="h-10 w-10">
        <img
          src={"/placeholder.svg"}
          alt={`${comment.userID.fullName}'s avatar`}
          className="h-full w-full object-cover"
        />
      </Avatar> */}
      <div className="flex-1">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="font-medium">{comment.userID.fullName}</h3>
          <span className="text-sm text-muted-foreground">
            • {moment(comment.createdAt).startOf("day").fromNow()}
          </span>
        </div>
        <p className="mb-3 text-gray-700">{comment.comment}</p>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {}}
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-gray-900"
          >
            <Heart
              className={`h-4 w-4 ${isLiked ? "fill-current text-red-500" : ""}`}
            />
            <span>{likedBy.length}</span>
          </button>
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-muted-foreground hover:text-gray-900"
          >
            Reply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleCommentCard;
